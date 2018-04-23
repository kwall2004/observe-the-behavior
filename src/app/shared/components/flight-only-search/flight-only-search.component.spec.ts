import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SharedTestingModule } from '../../../testing';

import { FlightOnlySearchComponent } from './flight-only-search.component';


describe('FlightOnlySearchComponent', () => {
	let component: FlightOnlySearchComponent;
	let fixture: ComponentFixture<FlightOnlySearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				FlightOnlySearchComponent
			],
			imports: [
				FormsModule,
				SharedTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FlightOnlySearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
