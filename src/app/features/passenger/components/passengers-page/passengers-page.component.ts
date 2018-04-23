import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { combineLatest, skipWhile, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import {
	CoreState,
	BookingSetContactFromLogin, BookingSetPassengerFromLogin, BookingSavePassengerContact, BookingUpdatePrimaryContact,
	bookingState, userState, authLoggedInState, currentFlowState, resourceFeatureState, ResourceGetRegionalLists,
	resourceTitleState, resourceSuffixState, passengerSsrSelection, PassengerLoadSsrs
} from '../../../../core/store';
import { phoneMask } from '../../../../shared';

@Component({
	selector: 'app-passengers-page-information',
	templateUrl: './passengers-page.component.html',
	styleUrls: ['./passengers-page.component.scss'],
})

export class PassengersPageComponent implements OnInit, OnDestroy {
	subs: Subscription[] = [];
	booking$: Observable<any>;
	loggedIn$: Observable<any>;
	geographicDropdowns$: Observable<any>;
	currentFlow$: Observable<any>;
	resourceForForms$: Observable<any>;
	resourceTitles$: Observable<any>;
	resourceSuffixes$: Observable<any>;
	passengerSsrSelections$: Observable<any>;
	mask = phoneMask;
	passengerIsContactPerson = true;
	collapseSpecialServices = [];
	collapseRedressNumber = [];
	collapsevoluntaryProvision = [];
	flow: string;

	constructor(private store: Store<CoreState>) { }

	// todo turn this into a pipe
	objectKeys(o) {
		return Object.keys(o);
	}

	ngOnInit() {
		this.store.dispatch(new ResourceGetRegionalLists());
		this.store.dispatch(new PassengerLoadSsrs());

		this.booking$ = this.store.select(bookingState);
		this.loggedIn$ = this.store.select(authLoggedInState);
		this.currentFlow$ = this.store.select(currentFlowState);
		this.resourceForForms$ = this.store.select(resourceFeatureState);
		this.resourceTitles$ = this.store.select(resourceTitleState);
		this.resourceSuffixes$ = this.store.select(resourceSuffixState);
		this.passengerSsrSelections$ = this.store.select(passengerSsrSelection);
		this.subs.push(this.currentFlow$.subscribe((data) => this.flow = data));
		this.subs.push(this.store.select(userState).pipe(
			combineLatest(this.store.select(bookingState)),
			skipWhile(([userPerson, booking]) => !booking || !userPerson),
			take(1))
			.subscribe(([userPerson, booking]) => {
				if (userPerson && booking) {
					this.store.dispatch(new BookingSetPassengerFromLogin(userPerson));
					this.store.dispatch(new BookingSetContactFromLogin(userPerson));
				}
			}));
	}

	onSaveClick(form: NgForm) {
		if (this.flow === 'book') {
			if (this.passengerIsContactPerson) {

				/* Assign primary passenger name to contact if checkbox selected to do so */
				for (const key in (form.value.passengers)) {
					form.value.primaryContact.title = form.value.passengers[key].title;
					form.value.primaryContact.firstName = form.value.passengers[key].firstName;
					form.value.primaryContact.middleName = form.value.passengers[key].middleName;
					form.value.primaryContact.lastName = form.value.passengers[key].lastName;
					form.value.primaryContact.suffix = form.value.passengers[key].suffix;
					form.value.primaryContact.dateOfBirth = form.value.passengers[key].dateOfBirth;
					break; // kill after one iteration - Only grab first Passenger
				}
			}
			this.store.dispatch(new BookingSavePassengerContact(form.value));
		} else if (this.flow === 'my-trips') {
			this.store.dispatch(new BookingUpdatePrimaryContact(form.value.primaryContact));
		}
	}

	ngOnDestroy() {
		this.subs.forEach(sub => sub.unsubscribe());
	}
}
