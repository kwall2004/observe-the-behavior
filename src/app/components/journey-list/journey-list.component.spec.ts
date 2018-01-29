import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyListComponent } from './journey-list.component';

describe('JourneyListComponent', () => {
  let component: JourneyListComponent;
  let fixture: ComponentFixture<JourneyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JourneyListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyListComponent);
    component = fixture.componentInstance;
    component.trip = {
      journeysAvailable: [
        {
          journeyKey: '',
          designator: {
            arrival: '',
            departure: ''
          },
          fares: {}
        }
      ]
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emits sell click event', () => {
    spyOn(component.sellTripClick, 'emit');
    const journeyKey = 'test';
    const fareKey = 'test';
    component.onSellClick(journeyKey, fareKey);
    expect(component.sellTripClick.emit).toHaveBeenCalledWith({
      journeyKey: journeyKey,
      fareKey: fareKey
    });
  });
});
