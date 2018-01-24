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
});
