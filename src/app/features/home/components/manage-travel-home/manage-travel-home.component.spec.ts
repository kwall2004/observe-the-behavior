import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { SharedTestingModule } from '../../../../testing';
import { CoreState, reducers } from '../../../../core';
import { ManageTravelHomeComponent } from './manage-travel-home.component';


describe('ManageTravelHomeComponent', () => {
	let component: ManageTravelHomeComponent;
	let fixture: ComponentFixture<ManageTravelHomeComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ManageTravelHomeComponent],
			imports: [StoreModule.forRoot(reducers), FormsModule, SharedTestingModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();

		fixture = TestBed.createComponent(ManageTravelHomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
