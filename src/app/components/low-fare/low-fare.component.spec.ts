import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs/Subject';

import { LowFareComponent } from './low-fare.component';

describe('LowFareComponent', () => {
  let component: LowFareComponent;
  let fixture: ComponentFixture<LowFareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LowFareComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowFareComponent);
    component = fixture.componentInstance;
    const beginDate = new Subject<Date>();
    const data = new Subject<object>();
    component.beginDate$ = beginDate.asObservable();
    component.data$ = data.asObservable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emits previous week click event', () => {
    spyOn(component.previousWeekClick, 'emit');
    component.onPreviousWeekClick();
    expect(component.previousWeekClick.emit).toHaveBeenCalled();
  });

  it('emits next week click event', () => {
    spyOn(component.nextWeekClick, 'emit');
    component.onNextWeekClick();
    expect(component.nextWeekClick.emit).toHaveBeenCalled();
  });

  it('emits day click event', () => {
    spyOn(component.dayClick, 'emit');
    const event = {
      date: new Date()
    };
    component.onDayClick({
      departureDate: event.date
    });
    expect(component.dayClick.emit).toHaveBeenCalledWith(event);
  });
});
