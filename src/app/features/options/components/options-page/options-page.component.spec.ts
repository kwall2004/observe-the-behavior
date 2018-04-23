import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';

import { CoreState, reducers } from '../../../../core';

import { OptionsPageComponent } from './options-page.component';

import * as fromExtras from '../extras';
import { SharedModule } from '../../../../shared';
import { BsModalService } from 'ngx-bootstrap';
import { SharedTestingModule } from '../../../../testing';

@Component({
	selector: 'app-hotel',
	template: ''
})
class MockHotelComponent { }

@Component({
	selector: 'app-car',
	template: ''
})

class MockCarComponent { }

class MockModal { }

describe('OptionsPageComponent', () => {
	let component: OptionsPageComponent;
	let fixture: ComponentFixture<OptionsPageComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			providers: [
				{
					provide: BsModalService,
					useClass: MockModal
				}
			],
			declarations: [
				OptionsPageComponent,
				MockCarComponent,
				MockHotelComponent,
				...fromExtras.extrasComponents
			],
			imports: [
				RouterTestingModule,
				StoreModule.forRoot(reducers),
				SharedModule,
				SharedTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();
		spyOn(store, 'select').and.callThrough();

		fixture = TestBed.createComponent(OptionsPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});


