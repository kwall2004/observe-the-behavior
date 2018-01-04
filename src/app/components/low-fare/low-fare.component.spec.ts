import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowFareComponent } from './low-fare.component';

describe('LowFareComponent', () => {
  let component: LowFareComponent;
  let fixture: ComponentFixture<LowFareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowFareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowFareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
