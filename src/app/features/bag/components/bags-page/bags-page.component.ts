import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import {
	CoreState,
	BagsSaveBags, BagNavigate, BagAdd, BagSubtract, BagAddAllJourneys, BagSubtractAllJourneys, BagSyncJourneys, BagUnSyncJourneys,
	ShoppingCartSetVisitedPage,
	bookingState, ssrAvailabilityState,
	bagsSelectedState, bagsJourneyTotalsState, bagsTotalState, bagsTotalClubState, bagsActiveBagSsrsState, userIsClub
} from '../../../../core';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-bags-page',
	templateUrl: './bags-page.component.html',
	styleUrls: ['./bags-page.component.scss']
})
export class BagsPageComponent implements OnInit, OnDestroy {
	subs: Subscription[] = [];

	booking$: Observable<any>;
	ssrs$: Observable<any>;
	isClub$: Observable<any>;
	ssrs: any;
	bagsSelected$: Observable<any>;
	bagsSelected: any;
	journeyTotals: any;
	bagTotal: any;
	bagTotalClub: any;
	showMore: any = {};
	activeBagSsrs: any;
	smModal: any;
	totalCollapsed = false;
	keepSame = false;

	constructor(private store: Store<CoreState>, private change: ChangeDetectorRef) { }

	ngOnInit() {
		this.store.dispatch(new ShoppingCartSetVisitedPage({ pageKey: 'bags' }));
		this.booking$ = this.store.select(bookingState);
		this.bagsSelected$ = this.store.select(bagsSelectedState);
		this.ssrs$ = this.store.select(ssrAvailabilityState);
		this.isClub$ = this.store.select(userIsClub);
		this.subs.push(this.store.select(ssrAvailabilityState).subscribe((ssrs) => this.ssrs = ssrs));
		this.subs.push(this.store.select(bagsSelectedState).subscribe((bagsSelected) => this.bagsSelected = bagsSelected));
		this.subs.push(this.store.select(bagsJourneyTotalsState).subscribe((journeyTotals) => this.journeyTotals = journeyTotals));
		this.subs.push(this.store.select(bagsTotalState).subscribe((bagTotal) => this.bagTotal = bagTotal));
		this.subs.push(this.store.select(bagsTotalClubState).subscribe((bagTotalClub) => this.bagTotalClub = bagTotalClub));
		this.subs.push(this.store.select(bagsActiveBagSsrsState).subscribe((activeBagSsrs) => this.activeBagSsrs = activeBagSsrs));
	}

	addBag(journeyKey, passengerKey, bagType, ssr) {
		this.store.dispatch(this.keepSame ? new BagAddAllJourneys({ p: passengerKey, bagType, ssr }) : new BagAdd({ j: journeyKey, p: passengerKey, bagType, ssr }));
		this.change.detectChanges();
	}

	subtractBag(journeyKey, passengerKey, bagType, ssr) {
		this.store.dispatch(this.keepSame ? new BagSubtractAllJourneys({ p: passengerKey, bagType, ssr }) : new BagSubtract({ j: journeyKey, p: passengerKey, bagType, ssr }));
		this.change.detectChanges();
	}

	keepJourneysSynced() {
		this.keepSame = !this.keepSame;
		this.store.dispatch(this.keepSame ? new BagSyncJourneys() : new BagUnSyncJourneys());
	}

	onSave() {
		this.store.dispatch(new BagsSaveBags({}));
	}

	onContinue(bsModal) {
		this.bagTotal > 0 ? this.onSave() : bsModal.show();
	}

	onNavigate() {
		this.store.dispatch(new BagNavigate());
	}

	ngOnDestroy() {
		this.subs.forEach((s) => s.unsubscribe());
	}
}
