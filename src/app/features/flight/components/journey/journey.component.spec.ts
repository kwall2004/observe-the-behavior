import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { NgxBootstrapTestingModule, SharedTestingModule } from '../../../../testing';
import { JourneyComponent } from './journey.component';

describe('JourneyComponent', () => {
	let component: JourneyComponent;
	let fixture: ComponentFixture<JourneyComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				JourneyComponent
			],
			imports: [
				NgxBootstrapTestingModule,
				FormsModule,
				SharedTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(JourneyComponent);
		component = fixture.componentInstance;
		component.journey = {
			journeyKey: 'test',
			designator: {
				arrival: '2018-01-01',
				departure: '2018-01-01'
			},
			fares: {},
			stops: 0,
			clubFare: null,
			standardFare: null,
			lowestFare: null
		};
		fixture.detectChanges();
	});

	it('is created', () => {
		expect(component).toBeTruthy();
	});
});
