import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, Directive } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AvailabilitySearchComponent } from './availability-search.component';

@Component({
  /* tslint:disable-next-line */
  selector: 'mat-select',
  template: ''
})
class MockSelectComponent {
  @Input() value: any;
}

@Component({
  /* tslint:disable-next-line */
  selector: 'mat-option',
  template: ''
})
class MockOptionComponent {
  @Input() value: any;
}

@Component({
  /* tslint:disable-next-line */
  selector: 'mat-form-field',
  template: ''
})
class MockFormFieldComponent {
}

@Component({
  /* tslint:disable-next-line */
  selector: 'mat-datepicker-toggle',
  template: ''
})
class MockDatepickerToggleComponent {
  @Input() for: any;
}

@Component({
  /* tslint:disable-next-line */
  selector: 'mat-datepicker',
  template: ''
})
class MockDatepickerComponent {
}

@Directive({
  /* tslint:disable-next-line */
  selector: 'input[matInput]'
})
class MockDatepickerDirective {
  @Input() matDatepicker: any;
}

describe('AvailabilitySearchComponent', () => {
  let component: AvailabilitySearchComponent;
  let fixture: ComponentFixture<AvailabilitySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockSelectComponent,
        MockOptionComponent,
        MockFormFieldComponent,
        MockDatepickerToggleComponent,
        MockDatepickerComponent,
        MockDatepickerDirective,
        AvailabilitySearchComponent
      ],
      imports: [
        FormsModule
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

  it('emits origin change event', () => {
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

  it('emits destination change event', () => {
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

  it('emits begin date change event', () => {
    spyOn(component.beginDateChange, 'emit');
    const event = {
      value: new Date
    };
    component.onBeginDateChange(event);
    expect(component.beginDateChange.emit).toHaveBeenCalledWith(event.value);
  });

  it('emits search click event', () => {
    spyOn(component.searchClick, 'emit');
    component.onSearchClick();
    expect(component.searchClick.emit).toHaveBeenCalled();
  });
});
