import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Directive, Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';

import {
	CoreState, reducers, bookingState, authLoggedInState,
	currentFlowState, resourceFeatureState,
} from '../../../../core/store';

import { PassengersPageComponent } from './passengers-page.component';
import { SharedTestingModule } from '../../../../testing';
import { BsDatepickerModule, CollapseModule } from 'ngx-bootstrap/';


@Pipe({ name: 'values' })
class MockValuesPipe implements PipeTransform {
	transform(): any { }
}

@Pipe({ name: 'paxType' })
class MockPaxTypePipe implements PipeTransform {
	transform(): any { }
}

@Pipe({ name: 'toDate' })
class MockToDatePipe implements PipeTransform {
	transform(): any { }
}

@Pipe({ name: 'ssrPassenger' })
class MockToSsrPassengerPipe implements PipeTransform {
	transform(): any { }
}

@Pipe({ name: 'travelDocument' })
class MockToTravelDocuemntPipe implements PipeTransform {
	transform(): any { }
}

@Directive({
	/* tslint:disable-next-line */
	selector: '[textMask]'
})
class MockTextMaskDirective {
	@Input() textMask: any;
}

describe('PassengersPageComponent', () => {
	let component: PassengersPageComponent;
	let fixture: ComponentFixture<PassengersPageComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MockValuesPipe,
				MockToDatePipe,
				MockPaxTypePipe,
				MockTextMaskDirective,
				MockToSsrPassengerPipe,
				MockToTravelDocuemntPipe,
				PassengersPageComponent
			],
			imports: [
				FormsModule,
				SharedTestingModule,
				BsDatepickerModule,
				CollapseModule,
				StoreModule.forRoot(reducers)
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();
		spyOn(store, 'select').and.callThrough();

		fixture = TestBed.createComponent(PassengersPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('is created', () => {
		expect(component).toBeTruthy();
	});

	/*it('dispatches actions for Resources', () => {
		expect(store.dispatch).toHaveBeenCalledWith(new ResourceGetRegionalLists());
	});*/


	it('selects multiple states', () => {
		expect(store.select).toHaveBeenCalledWith(bookingState);
		expect(store.select).toHaveBeenCalledWith(authLoggedInState);
		expect(store.select).toHaveBeenCalledWith(currentFlowState);
		expect(store.select).toHaveBeenCalledWith(resourceFeatureState);
	});

	/*
		it('dispatches actions', () => {

			const userPerson = "";

			expect(store.dispatch).toHaveBeenCalledWith(new BookingSetPassengerFromLogin(userPerson));
			expect(store.dispatch).toHaveBeenCalledWith(new BookingSetContactFromLogin(userPerson));
		});
		*/


	/*
	const form = {
		passengers: {
			'MCFBRFQ-': {
				customerNumber: '',
				knownTravelerNumber: '123456789',
				title: 'Mr',
				firstName: 'Testfirstname',
				middleName: 'Testmiddlename',
				lastName: 'Testlastname',
				suffix: 'Jr',
				dateOfBirth: '07/26/1973',
				accountNumber: '',
			},
		},
		freeSpirit: {
			passwordConfirmed: '*Test123456789',
			fSEnrollCheckbox: true,
		},
		primaryContact: {
			title: 'Mr',
			firstName: 'Testfirstname',
			middleName: 'Testmiddlename',
			lastName: 'Testlastname',
			suffix: 'Jr',
			address: '222 Pine',
			countryCode: 'US',
			provinceState: 'MI',
			city: 'Pineville',
			postalCode: '48334',
			phoneNumber: '222-222-2222',
			contactEmailPrimary: 'testemail@testemail.com',

		}
	};
	*/

	// component.dispatchToStore(form);
	/*it('dispatches actions to Save', () => {
		expect(store.dispatch).toHaveBeenCalledWith(new BookingSavePassengerContact(form));
	});*/
});
