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
          journeyKey: 'test',
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

  it('should emit event', () => {
    spyOn(component.tripSell, 'emit');
    component.onSellClick('test1', 'test2');
    expect(component.tripSell.emit).toHaveBeenCalledWith({
      journeyKey: 'test1',
      fareKey: 'test2'
    });
  });
});
