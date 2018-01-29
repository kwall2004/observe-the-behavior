import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { StoreModule, Store } from '@ngrx/store';

import { Station } from '../../models/station';
import { DayClick } from '../../models/dayClick';
import { SellTripClick } from '../../models/sellTripClick';

import * as fromRoot from '../../store/reducers';
import * as AvailabilityActions from '../../store/availability/actions';

import { TripListComponent } from './trip-list.component';
import { SellTrip } from '../../store/availability/actions';

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
  let store: Store<fromRoot.State>;

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
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(TripListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch set origin action', () => {
    const station: Station = {
      stationCode: 'test',
      shortName: 'test'
    };
    const action = new AvailabilityActions.SetOrigin({
      stationCode: station.stationCode,
      shortName: station.shortName
    });
    component.onOriginChange(station);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch set destination action', () => {
    const station: Station = {
      stationCode: 'test',
      shortName: 'test'
    };
    const action = new AvailabilityActions.SetDestination({
      stationCode: station.stationCode,
      shortName: station.shortName
    });
    component.onDestinationChange(station);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch set begin date action', () => {
    const date = new Date();
    const action = new AvailabilityActions.SetBeginDate(date);
    component.onBeginDateChange(date);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch search actions', () => {
    const action1 = new AvailabilityActions.ResetLowFareDate();
    const action2 = new AvailabilityActions.Search();
    component.onSearchClick();
    expect(store.dispatch).toHaveBeenCalledWith(action1);
    expect(store.dispatch).toHaveBeenCalledWith(action2);
  });

  it('should dispatch previous week action', () => {
    const action = new AvailabilityActions.SubtractWeekFromLowFareDate();
    component.onPreviousWeekClick();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch next week action', () => {
    const action = new AvailabilityActions.AddWeekToLowFareDate();
    component.onNextWeekClick();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch day change actions', () => {
    const dayClick: DayClick = {
      date: new Date()
    };
    const action1 = new AvailabilityActions.SetBeginDate(dayClick.date);
    const action2 = new AvailabilityActions.Search();
    component.onDayClick(dayClick);
    expect(store.dispatch).toHaveBeenCalledWith(action1);
    expect(store.dispatch).toHaveBeenCalledWith(action2);
  });

  it('should dispatch sell trip action', () => {
    const sellTripClick: SellTripClick = {
      journeyKey: 'test',
      fareKey: 'test'
    };
    const action = new AvailabilityActions.SellTrip(sellTripClick);
    component.onSellTripClick(sellTripClick);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
