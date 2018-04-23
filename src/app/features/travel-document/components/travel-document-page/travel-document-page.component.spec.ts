import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { Pipe, PipeTransform } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';

import { BsModalService } from 'ngx-bootstrap';

import {
	CoreState, reducers, bookingState, resourceFeatureState, resourceTitleState, resourceSuffixState, resourceDateMonthState
} from '../../../../core/store';

import { SharedTestingModule } from '../../../../testing';

import { TravelDocumentPageComponent } from './travel-document-page.component';

class MockModal { }


@Pipe({ name: 'travelDocument' })
class MockTravelDocumentPipe implements PipeTransform {
	transform(): any { }
}

@Pipe({ name: 'passportInitialEntry' })
class MockPassportInitialEntryPipe implements PipeTransform {
	transform(): any { }
}

@Pipe({ name: 'utcDate' })
class UtcDatePipe implements PipeTransform {
	transform(): any { }
}


describe('TravelDocumentPageComponent', () => {
	let component: TravelDocumentPageComponent;
	let fixture: ComponentFixture<TravelDocumentPageComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MockTravelDocumentPipe,
				TravelDocumentPageComponent,
				MockPassportInitialEntryPipe,
				UtcDatePipe
				// MockPassportValidationDirective
			],
			imports: [
				FormsModule,
				SharedTestingModule,
				StoreModule.forRoot(reducers)
			],
			providers: [
				{
					provide: BsModalService,
					useClass: MockModal
				},
			]

		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();
		spyOn(store, 'select').and.callThrough();

		fixture = TestBed.createComponent(TravelDocumentPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('selects multiple states', () => {
		expect(store.select).toHaveBeenCalledWith(bookingState);
		expect(store.select).toHaveBeenCalledWith(resourceFeatureState);
		expect(store.select).toHaveBeenCalledWith(resourceTitleState);
		expect(store.select).toHaveBeenCalledWith(resourceSuffixState);
		expect(store.select).toHaveBeenCalledWith(resourceDateMonthState);

	});

	/*const form = {
		passengers: {
			'MCFBRFQ-': {
				nationality: 'US',
				passportIssuingCountry: 'US',
				passportNumber: '123456789',
				passengerExpirationdate: '12/12/17',
				title: 'Mr',
				firstName: 'Testfirstname',
				middleName: 'Testmiddlename',
				lastName: 'Testlastname',
				suffix: 'Jr',
			},
		}
	};*/

	// component.dispatchToStore(form);
	/*it('dispatches actions to Save', () => {
		expect(store.dispatch).toHaveBeenCalledWith(new BookingUpdatePassengerPassportng(form));
	});*/

});
