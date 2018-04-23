import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import {
	CoreState,
	bookingState, resourceFeatureState, ResourceGetRegionalLists, BookingUpdatePassengerPassport, resourceTitleState, resourceSuffixState, resourceDateMonthState

} from '../../../../core/store'; // currentFlowState
import * as moment from 'moment';

// To add: Modal for middle name
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';

import { TravelDocumentMiddleNameComponent } from '../../../../shared/components/travel-document-middle-name/travel-document-middle-name.component';
// import { filter } from 'rxjs/operators';

@Component({
	selector: 'app-travel-document-page',
	templateUrl: './travel-document-page.component.html',
	styleUrls: ['./travel-document-page.component.scss']
})
export class TravelDocumentPageComponent implements OnInit, OnDestroy {
	router: any;
	subs: Subscription[] = [];
	booking$: Observable<any>;
	currentFlow$: Observable<any>;
	resourceForForms$: Observable<any>;
	resourceTitles$: Observable<any>;
	resourceSuffixes$: Observable<any>;
	resourceMonths$: Observable<any>;
	modalRef: BsModalRef;
	daysArray: any[];
	yearsArray: number[];
	monthsArray: any[];

	constructor(
		private store: Store<CoreState>,
		private modal: BsModalService
	) {
		this.yearsArray = [];
		this.daysArray = [[]];
	}

	ngOnInit() {
		this.store.dispatch(new ResourceGetRegionalLists());
		this.booking$ = this.store.select(bookingState);
		this.resourceForForms$ = this.store.select(resourceFeatureState);
		this.resourceTitles$ = this.store.select(resourceTitleState);
		this.resourceSuffixes$ = this.store.select(resourceSuffixState);
		this.resourceMonths$ = this.store.select(resourceDateMonthState);

		// Get Passenger Count to initialize arrays of days for each passenger
		this.subs.push(this.store.select(bookingState).subscribe((data) => {
			if (data) {
				this.createInitialDaysYears(Object.keys(data.passengers).length);
			}
		}));
	}

	onSaveClick(form: NgForm) {
		if (form.valid) {
			if (this.checkOptionalMiddleName(form)) { // Perform Middle Name Validation - Update PaxPassport Info
				this.store.dispatch(new BookingUpdatePassengerPassport(form.value));
			}
		}
	}

	cancelChanges() {
		this.router.navigateByUrl('/my-trips/reservation-summary');
	}

	// todo turn this into a pipe
	objectKeys(o) {
		return Object.keys(o);
	}

	createInitialDaysYears(paxCount: number) { // Max 9 passengers per acceptance criteria.
		// Years
		const endYear: number = Number(new Date().getFullYear() + 11); // Add 11 years from todays year //2020
		const startYear: number = Number(new Date().getFullYear());
		for (let x = endYear; x > startYear - 1; x--) {
			this.yearsArray.push(x);
		}

		// Days - For now generate 31 days for all days arrays for up to 20 static passengers
		for (let i = 0; i < paxCount; i++) {
			this.generateDays(i, 31);
		}
	}


	generateDaysForMonth(paxIndex, passportMonth, passportYear) {
		this.generateDays(paxIndex, moment({ y: passportYear, M: passportMonth - 1 }).daysInMonth()); // Adjust Month By -One (0-11).
	}


	generateDays(paxIndex: number, daysMax: number) {
		this.daysArray[paxIndex] = [];
		for (let x = 1; x < daysMax + 1; x++) {
			this.daysArray[paxIndex].push(x);
		}
	}



	checkOptionalMiddleName(form) {
		let passengersPassMiddleNameValidation = true; // Middlename validation flag

		for (const key in (form.value)) {
			const passenger = form.value[key];
			if (passenger.middleName === '') {
				passengersPassMiddleNameValidation = false; // Fails Middlename Validation
			}
		}

		// Middle Name Validation Pass - reutnr true to dispatch
		if (passengersPassMiddleNameValidation) {
			return true;
		} else if (!passengersPassMiddleNameValidation) {
			this.openMiddleNameModal(form);
		}
	}

	openMiddleNameModal(form) {
		this.modalRef = this.modal.show(TravelDocumentMiddleNameComponent);
		this.subs.push(this.modalRef.content.proceedWithoutMiddleName.subscribe(result => {
			if (result) {
				this.store.dispatch(new BookingUpdatePassengerPassport(form.value));
			}
		}));
	}

	ngOnDestroy() {
		this.subs.forEach(sub => sub.unsubscribe());
	}

}
