import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { StoreModule, Store } from '@ngrx/store';

import { Station, DayClick, SellTripClick } from '@app/core';

import {CoreState, reducers} from '@app/core';
import * as AvailabilityActions from '@app/core/store/actions/availability.action';

import { TripListComponent } from './trip-list.component';
// import { SellTrip } from '../../store/availability/actions';

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
  let store: Store<CoreState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockAvailabilitySearchComponent,
        MockLowFareComponent,
        MockJourneyListComponent,
        TripListComponent
      ],
      imports: [
        StoreModule.forRoot(reducers)
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

  it('dispatches set origin action', () => {
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

  it('dispatches set destination action', () => {
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

  it('dispatches set begin date action', () => {
    const date = new Date();
    const action = new AvailabilityActions.SetBeginDate(date);
    component.onBeginDateChange(date);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('dispatches search actions', () => {
    const action1 = new AvailabilityActions.ResetLowFareDate();
    const action2 = new AvailabilityActions.Search();
    component.onSearchClick();
    expect(store.dispatch).toHaveBeenCalledWith(action1);
    expect(store.dispatch).toHaveBeenCalledWith(action2);
  });

  it('dispatches previous week action', () => {
    const action = new AvailabilityActions.SubtractWeekFromLowFareDate();
    component.onPreviousWeekClick();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('dispatches next week action', () => {
    const action = new AvailabilityActions.AddWeekToLowFareDate();
    component.onNextWeekClick();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('dispatches day change actions', () => {
    const dayClick: DayClick = {
      date: new Date()
    };
    const action1 = new AvailabilityActions.SetBeginDate(dayClick.date);
    const action2 = new AvailabilityActions.Search();
    component.onDayClick(dayClick);
    expect(store.dispatch).toHaveBeenCalledWith(action1);
    expect(store.dispatch).toHaveBeenCalledWith(action2);
  });

  it('dispatches sell trip action', () => {
    const sellTripClick: SellTripClick = {
      journeyKey: 'test',
      fareKey: 'test'
    };
    const action = new AvailabilityActions.SellTrip(sellTripClick);
    component.onSellTripClick(sellTripClick);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
