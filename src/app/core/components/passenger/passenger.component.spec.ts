import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from '../../../material-testing';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';

import { CoreState, reducers, BookingSavePassenger, BookingSavePrimaryContact } from '../../../core';

import { PassengerComponent } from './passenger.component';

@Pipe({ name: 'values' })
class MockValuesPipe implements PipeTransform {
	transform(value: any, args: any[] = null): any {
	}
}

describe('PassengerComponent', () => {
	let component: PassengerComponent;
	let fixture: ComponentFixture<PassengerComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MockValuesPipe,
				PassengerComponent
			],
			imports: [
				TestingModule,
				FormsModule,
				StoreModule.forRoot(reducers)
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();

		fixture = TestBed.createComponent(PassengerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('dispatches save actions', () => {
		const passenger = {
			name: {
				first: 'test',
				last: 'test'
			}
		};
		const contact = {
			name: {
				first: 'test',
				last: 'test'
			},
			phoneNumbers: [
				{
					number: 'test'
				}
			]
		};
		const form = {
			value: {
				firstName: passenger.name.first,
				lastName: passenger.name.last,
				contactFirstName: contact.name.first,
				contactLastName: contact.name.last,
				contactPrimaryPhone: contact.phoneNumbers[0].number
			}
		};
		component.onSaveClick(form);
		expect(store.dispatch).toHaveBeenCalledWith(new BookingSavePassenger(passenger));
		expect(store.dispatch).toHaveBeenCalledWith(new BookingSavePrimaryContact(contact));
	});
});
