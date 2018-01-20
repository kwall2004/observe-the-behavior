import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { BookingHomeComponent } from './booking-home.component';

@Component({
  selector: 'app-availability-search',
  template: ''
})
class MockAvailabilitySearchComponent {
}

describe('BookingHomeComponent', () => {
  let component: BookingHomeComponent;
  let fixture: ComponentFixture<BookingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockAvailabilitySearchComponent,
        BookingHomeComponent
      ],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
