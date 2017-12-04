import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerSaveComponent } from './passenger-save.component';

describe('PassengerSaveComponent', () => {
  let component: PassengerSaveComponent;
  let fixture: ComponentFixture<PassengerSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
