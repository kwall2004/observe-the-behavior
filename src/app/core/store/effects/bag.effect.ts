import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { map, switchMap, withLatestFrom, tap, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { currentFlowState, bagsSelectedState, bookingState, ssrAvailabilityState, bagsActiveBagSsrsState, bagsAllowedBagCountState } from '../selectors';
import { CoreState } from '../reducers';
import { BagService } from '../../services';
import {
	AppAddError, BagsActionTypes, BagsSaveBags, BagSetSelection, BagAdd,
	BookingSetData, BookingActionTypes, BagNavigate, BagAddAllJourneys, BagSubtractAllJourneys, BagSubtract, BagSyncJourneys
} from '../actions';

@Injectable()
export class BagEffects {
	constructor(
		private actions$: Actions,
		private store: Store<CoreState>,
		private router: Router,
		private bagService: BagService
	) { }

	@Effect()
	saveBags$: Observable<any> = this.actions$
		.ofType<BagsSaveBags>(BagsActionTypes.SAVE_BAGS)
		.pipe(
			withLatestFrom(
				this.store.select(bagsSelectedState)
			),
			switchMap(([, selection]) => {
				const bagSsrCodesToSell = {};
				for (const journey in selection) {
					const j = selection[journey];
					bagSsrCodesToSell[journey] = {};
					for (const passenger in j) {
						bagSsrCodesToSell[journey][passenger] = j[passenger].ssrCodes.reduce((result, ssrCode) => {
							const index = result.findIndex(s => s.ssrCode === ssrCode);
							if (index >= 0) {
								result[index].count++;
							} else {
								result.push({ ssrCode, count: 1 });
							}
							return result;
						}, []);
					}
				}
				return this.bagService.updateBags(bagSsrCodesToSell).pipe(
					// todo new BookingGetData()??,
					map(() => new BagNavigate()),
					catchError(error => of(new AppAddError(error)))
				);
			})
		);


	@Effect()
	bookingSet$: Observable<any> = this.actions$
		.ofType<BookingSetData>(BookingActionTypes.SET_DATA).pipe(
			map((action) => {
				return new BagSetSelection(action.payload);
			})
		);

	@Effect({ dispatch: false })
	navigate$: Observable<any> = this.actions$
		.ofType<BagNavigate>(BagsActionTypes.NAVIGATE).pipe(
			withLatestFrom(this.store.select(currentFlowState)),
			tap(([, flow]) => {
				if (flow === 'book') {
					this.router.navigate([flow, 'seats']);
				} else {
					this.router.navigate([flow, 'reservation-summary']);
				}
			})
		);

	@Effect()
	bagAddAllJourney$: Observable<any> = this.actions$
		.ofType<BagAddAllJourneys>(BagsActionTypes.ADD_BAG_ALL_JOURNEYS).pipe(
			withLatestFrom(this.store.select(bookingState), this.store.select(bagsAllowedBagCountState), this.store.select(bagsSelectedState)),
			mergeMap(([action, booking, allowedBagCounts, bagSelection]) => booking.journeys.reduce((result, journey) => {
				// only add bag if it won't put you over the max allowed. (only happens with already paid for bags in journeys 2-4)
				if (bagSelection[journey.journeyKey][action.payload.p].unpaid[action.payload.bagType] + bagSelection[journey.journeyKey][action.payload.p].paid[action.payload.bagType] < allowedBagCounts[journey.journeyKey][action.payload.bagType]) {
					result.push(new BagAdd({ ...action.payload, j: journey.journeyKey }));
				}
				return result;
			}, [])
			));

	@Effect()
	bagSubtractAllJourney$: Observable<any> = this.actions$
		.ofType<BagSubtractAllJourneys>(BagsActionTypes.SUBTRACT_BAG_ALL_JOURNEYS).pipe(
			withLatestFrom(this.store.select(bookingState), this.store.select(bagsSelectedState)),
			mergeMap(([action, booking, bagSelection]) => booking.journeys.reduce((result, journey) => {
				// only subtract what isn't already paid for (only happens with already paid for bags in journeys 2-4)
				const totalBagType = bagSelection[journey.journeyKey][action.payload.p].paid[action.payload.bagType] + bagSelection[journey.journeyKey][action.payload.p].unpaid[action.payload.bagType];
				if (totalBagType > (bagSelection[journey.journeyKey][action.payload.p].paid[action.payload.bagType])) {
					result.push(new BagSubtract({ ...action.payload, j: journey.journeyKey }));
				}
				return result;
			}, [])
			));

	@Effect()
	bagSyncJourneys$: Observable<any> = this.actions$
		.ofType<BagSyncJourneys>(BagsActionTypes.SYNC_JOURNEYS).pipe(
			withLatestFrom(
				this.store.select(bagsSelectedState),
				this.store.select(ssrAvailabilityState),
				this.store.select(bagsActiveBagSsrsState)),
			mergeMap(([, bagSelection, ssrs, activeBagSsrs]) => {
				let firstJourney;
				const actionDiff = [];
				Object.keys(bagSelection).forEach((journey, i) => {
					if (i === 0) {
						firstJourney = { ...bagSelection[journey] };
					}
					if (i !== 0) {
						Object.keys(bagSelection[journey]).forEach(passenger => {
							const passengerSelection = bagSelection[journey][passenger];
							for (const bagType in firstJourney[passenger].unpaid) {
								if (firstJourney[passenger].unpaid.hasOwnProperty(bagType)) {
									// check if they are not already the same
									if (!(firstJourney[passenger].unpaid[bagType] + firstJourney[passenger].paid[bagType] === passengerSelection.unpaid[bagType] + passengerSelection.paid[bagType])) {
										// figure out if it's higher or lower
										if (firstJourney[passenger].unpaid[bagType] + firstJourney[passenger].paid[bagType] > passengerSelection.unpaid[bagType] + passengerSelection.paid[bagType]) {
											const totalToAdd = (firstJourney[passenger].unpaid[bagType] + firstJourney[passenger].paid[bagType]) - (passengerSelection.unpaid[bagType] + passengerSelection.paid[bagType]);
											for (let addCount = 0; addCount < totalToAdd; addCount++) {
												let ssr;
												if (bagType === 'checked') {
													ssr = ssrs[journey][activeBagSsrs['checked' + (passengerSelection.paid.checked + (addCount + 1))]];
												} else {
													ssr = ssrs[journey][activeBagSsrs[bagType]];
												}
												actionDiff.push(new BagAdd({ j: journey, p: passenger, bagType, ssr }));
											}
										} else {
											// only subtract if we aren't taking away paid
											if ((firstJourney[passenger].unpaid[bagType] + firstJourney[passenger].paid[bagType]) - passengerSelection.paid[bagType] > 0) {
												const totalToSubtract = (passengerSelection.paid[bagType] + passengerSelection.unpaid[bagType]) - (firstJourney[passenger].unpaid[bagType] + firstJourney[passenger].paid[bagType]);
												for (let addCount = 0; addCount < totalToSubtract; addCount++) {
													let ssr;
													if (bagType === 'checked') {
														ssr = ssrs[journey][activeBagSsrs['checked' + ((firstJourney[passenger].unpaid[bagType] + firstJourney[passenger].paid[bagType]) + (addCount + 1))]];
													} else {
														ssr = ssrs[journey][activeBagSsrs[bagType]];
													}
													actionDiff.push(new BagSubtract({ j: journey, p: passenger, bagType, ssr }));
												}
											}
										}
									}
								}
							}
						});
					}
				});
				if (!actionDiff.length) {
					return [];
				}
				return actionDiff;
			})
		);
}
