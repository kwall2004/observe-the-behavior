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

  it('should emit event', () => {
    spyOn(component.searchClick, 'emit');
    component.onSearchClick();
    expect(component.searchClick.emit).toHaveBeenCalled();
  });
});
