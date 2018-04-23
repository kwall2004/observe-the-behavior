import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, withLatestFrom, switchMap, catchError, map, concat, mergeMap } from 'rxjs/operators';

import {
	SeatActionTypes, SeatSetSeatMaps, SeatLoadSeatMaps, SeatSetSelection, SeatMoveSegment,
	AppAddError, AppClearErrors, BookingSetData, BookingActionTypes, SeatMovePassenger, SeatSetActivePassenger, SeatSetActiveSegment, SeatNavigate, SeatSaveSeats,
} from '../actions';
import { CoreState } from '../reducers';
import { currentFlowState, bookingPassengersState, seatsActivePassengerKeyState, bookingSegmentsState, seatsActiveSegmentKeyState, seatsSelectionState } from '../selectors';
import { SeatService } from '../../services/dot-rez/seat.service';
import { of } from 'rxjs/observable/of';


@Injectable()
export class SeatEffects {
	constructor(
		private actions$: Actions,
		private store: Store<CoreState>,
		private router: Router,
		private seatService: SeatService
	) { }

	@Effect()
	bookingSet$: Observable<any> = this.actions$.pipe(
		ofType<BookingSetData>(BookingActionTypes.SET_DATA),
		map((action) => {
			return new SeatSetSelection(action.payload);
		})
	);

	@Effect()
	movePassenger$: Observable<any> = this.actions$.pipe(
		ofType<SeatMovePassenger>(SeatActionTypes.MOVE_PASSENGER),
		withLatestFrom(this.store.select(bookingPassengersState), this.store.select(seatsActivePassengerKeyState)),
		map(([, passengers, activePassengerKey]) => {
			const index = passengers.findIndex(pax => pax.passengerKey === activePassengerKey);
			const nextPassenger = passengers[index + 1];
			if (nextPassenger) {
				return new SeatSetActivePassenger(nextPassenger.passengerKey);
			}
			return new SeatMoveSegment(1);
		})
	);

	@Effect()
	moveSegment$: Observable<any> = this.actions$.pipe(
		ofType<SeatMoveSegment>(SeatActionTypes.MOVE_SEGMENT),
		withLatestFrom(this.store.select(bookingSegmentsState),
			this.store.select(bookingPassengersState),
			this.store.select(seatsActiveSegmentKeyState)),
		mergeMap(([action, segments, passengers, activeSegmentKey]) => {
			const index = segments.findIndex(segment => segment.segmentKey === activeSegmentKey);
			if (action.payload > 0) {
				const nextSegment = segments[index + 1];
				if (nextSegment) {
					return [new SeatSetActiveSegment(nextSegment.segmentKey), new SeatSetActivePassenger(passengers[0].passengerKey)];
				}
				return [{ 'type': 'NOOP' }];
			} else {
				const previousSegment = segments[index - 1];
				if (previousSegment) {
					return [new SeatSetActiveSegment(previousSegment.segmentKey), new SeatSetActivePassenger(passengers[0].passengerKey)];
				}
				return [{ 'type': 'NOOP' }];
			}
		})
	);

	@Effect()
	seatSave$: Observable<any> = this.actions$.pipe(
		ofType<SeatSaveSeats>(SeatActionTypes.SAVE_SEATS),
		withLatestFrom(
			this.store.select(seatsSelectionState)
		),
		switchMap(([, selection]) => {
			const unitKeysToSell = [];
			for (const segmentKey in selection) {
				const segment = selection[segmentKey];
				for (const passengerKey in segment) {
					unitKeysToSell.push({
						unitKey: selection[segmentKey][passengerKey].unitKey,
						passengerKey
					});
				}
			}
			return this.seatService.updateSeats(unitKeysToSell).pipe(
				// todo new BookingGetData()??,
				map(() => new SeatNavigate()),
				catchError(error => of(new AppAddError(error)))
			);
		})
	);

	@Effect()
	loadSeatMaps$: Observable<any> = this.actions$.pipe(
		ofType<SeatLoadSeatMaps>(SeatActionTypes.LOAD_SEATMAPS),
		concat(() => of(new AppClearErrors())),
		switchMap(() => this.seatService.getSeatMaps().pipe(
			map((response) => new SeatSetSeatMaps(response.data)),
			catchError((error) => of(new AppAddError(error)))
		))
	);

	@Effect({ dispatch: false })
	seatNavigate$: Observable<any> = this.actions$
		.ofType<SeatNavigate>(SeatActionTypes.NAVIGATE)
		.pipe(
			withLatestFrom(this.store.pipe(select(currentFlowState))),
			tap(([, flow]) => {
				if (flow === 'book') {
					this.router.navigate([flow, 'options']);
				} else {
					this.router.navigate([flow, 'reservation-summary']);
				}
			})
		);
}
