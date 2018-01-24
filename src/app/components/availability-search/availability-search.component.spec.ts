import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockDropdownComponent,
        MockCalendarComponent,
        AvailabilitySearchComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilitySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit origin change event', () => {
    spyOn(component.originChange, 'emit');
    const event = {
      value: {
        stationCode: 'test',
        shortName: 'test'
      }
    };
    component.onOriginChange(event);
    expect(component.originChange.emit).toHaveBeenCalledWith(event.value);
  });

  it('should emit destination change event', () => {
    spyOn(component.destinationChange, 'emit');
    const event = {
      value: {
        stationCode: 'test',
        shortName: 'test'
      }
    };
    component.onDestinationChange(event);
    expect(component.destinationChange.emit).toHaveBeenCalledWith(event.value);
  });

  it('should emit begin date change event', () => {
    spyOn(component.beginDateChange, 'emit');
    const value = new Date;
    component.onBeginDateChange(value);
    expect(component.beginDateChange.emit).toHaveBeenCalledWith(value);
  });

  it('should emit search click event', () => {
    spyOn(component.searchClick, 'emit');
    component.onSearchClick();
    expect(component.searchClick.emit).toHaveBeenCalled();
  });
});
