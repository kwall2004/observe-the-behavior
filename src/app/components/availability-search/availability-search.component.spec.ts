import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { StoreModule, Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';
import * as AvailabilityActions from '../../store/availability/actions';

import { AvailabilitySearchComponent } from './availability-search.component';

@Component({
  /* tslint:disable-next-line */
  selector: 'p-dropdown',
  template: ''
})
class MockDropdownComponent {
  @Input() ngModel: any;
  @Input() options: any;
}

@Component({
  /* tslint:disable-next-line */
  selector: 'p-calendar',
  template: ''
})
class MockCalendarComponent {
  @Input() ngModel: any;
}

describe('AvailabilitySearchComponent', () => {
  let component: AvailabilitySearchComponent;
  let fixture: ComponentFixture<AvailabilitySearchComponent>;
  let store: Store<fromRoot.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockDropdownComponent,
        MockCalendarComponent,
        AvailabilitySearchComponent
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

    fixture = TestBed.createComponent(AvailabilitySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch actions to search', () => {
    const action1 = new AvailabilityActions.Search();
    const action2 = new AvailabilityActions.SearchLowFare();

    component.search();

    expect(store.dispatch).toHaveBeenCalledWith(action1);
    expect(store.dispatch).toHaveBeenCalledWith(action2);
  });
});
