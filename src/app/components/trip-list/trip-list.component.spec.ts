import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';

import { TripListComponent } from './trip-list.component';

@Component({
  selector: 'app-availability-search',
  template: ''
})
class MockAvailabilitySearchComponent {
  @Input() stations: any;
  @Input() origin: any;
  @Input() destination: any;
  @Input() beginDate: any;
}

@Component({
  selector: 'app-low-fare',
  template: ''
})
class MockLowFareComponent {
  @Input() beginDate$: any;
  @Input() data$: any;
}

@Component({
  selector: 'app-journey-list',
  template: ''
})
class MockJourneyListComponent {
  @Input() trip: any;
}

describe('TripListComponent', () => {
  let component: TripListComponent;
  let fixture: ComponentFixture<TripListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockAvailabilitySearchComponent,
        MockLowFareComponent,
        MockJourneyListComponent,
        TripListComponent
      ],
      imports: [
        StoreModule.forRoot(fromRoot.reducers)
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
