import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { skipWhile, take, } from 'rxjs/operators';
import {
	CoreState,
	SeatSaveSeats, SeatAssignSeat, ShoppingCartSetVisitedPage, SeatLoadSeatMaps, SeatMovePassenger, SeatSetActiveSegment, SeatNavigate, SeatClearSelection,
	bookingSegmentsState, bookingState, seatsSeatMapsState, seatsSelectionState, seatsTotalState, seatsSegmentTotalsState, seatsActivePassengerKeyState, seatsActiveSegmentKeyState, SeatSetActivePassenger, SeatMoveSegment, // bookingPassengersState
} from '../../../../core';

@Component({
	selector: 'app-seats-page',
	templateUrl: './seats-page.component.html',
	styleUrls: ['./seats-page.component.scss']
})
export class SeatsPageComponent implements OnInit, OnDestroy {
	booking$: Observable<any>;
	seatSelection$: Observable<any>;
	segmentTotals$: Observable<any>;
	activeSegmentKey: string;
	activePassengerKey: string;
	segments: any;
	seatMaps: any;
	seatTotal: number;
	segmentTotals: any;
	totalCollapsed = true;
	subscriptions: Subscription[] = [];

	constructor(private store: Store<CoreState>) {
		combineLatest(this.store.select(bookingState), this.store.select(bookingSegmentsState)).pipe(
			skipWhile(([booking, segments]) => !booking || !segments),
			take(1)
		).subscribe(([booking, segments]) => {
			this.store.dispatch(new SeatSetActivePassenger(booking.passengers[Object.keys(booking.passengers)[0]].passengerKey));
			this.store.dispatch(new SeatSetActiveSegment(segments[0].segmentKey));
		});
	}

	ngOnInit() {
		this.store.dispatch(new ShoppingCartSetVisitedPage({ pageKey: 'seats' }));
		this.store.dispatch(new SeatLoadSeatMaps());
		this.booking$ = this.store.select(bookingState);
		this.seatSelection$ = this.store.select(seatsSelectionState);
		this.segmentTotals$ = this.store.select(seatsSegmentTotalsState);
		this.subscriptions.push(this.store.select(bookingSegmentsState).subscribe(segments => this.segments = segments));
		this.subscriptions.push(this.store.select(seatsActivePassengerKeyState).subscribe(passengerKey => this.activePassengerKey = passengerKey));
		this.subscriptions.push(this.store.select(seatsActiveSegmentKeyState).subscribe(segmentKey => this.activeSegmentKey = segmentKey));
		this.subscriptions.push(this.store.select(seatsTotalState).subscribe(seatTotal => this.seatTotal = seatTotal));
		this.subscriptions.push(this.store.select(seatsSegmentTotalsState).subscribe(segmentTotals => this.segmentTotals = segmentTotals));
		this.subscriptions.push(this.store.pipe(select(seatsSeatMapsState), skipWhile((seatMaps) => !seatMaps)).subscribe((seatMaps) => this.seatMaps = seatMaps));
	}

	onSegmentClick(segmentKey) {
		this.store.dispatch(new SeatSetActiveSegment(segmentKey));
	}
	onPassengerChange(passengerKey) {
		this.store.dispatch(new SeatSetActivePassenger(passengerKey));
	}
	onNextFlight() {
		this.store.dispatch(new SeatMoveSegment(1));
	}
	onPreviousFlight() {
		this.store.dispatch(new SeatMoveSegment(-1));
	}
	onSeatSelected($event) {
		this.store.dispatch(new SeatAssignSeat({ unit: $event.unit, price: $event.price, segmentKey: this.activeSegmentKey, passengerKey: this.activePassengerKey }));
		this.store.dispatch(new SeatMovePassenger());
	}
	onContinue() {
		this.store.dispatch(new SeatSaveSeats());
	}
	onContinueWithout() {
		this.store.dispatch(new SeatNavigate());
		this.store.dispatch(new SeatClearSelection());
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach((s) => s.unsubscribe());
	}
}
