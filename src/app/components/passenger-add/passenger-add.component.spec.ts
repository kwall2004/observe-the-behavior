import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerAddComponent } from './passenger-add.component';

describe('PassengerAddComponent', () => {
  let component: PassengerAddComponent;
  let fixture: ComponentFixture<PassengerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
