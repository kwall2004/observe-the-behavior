import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Routes, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { BookingHomeComponent } from './booking-home.component';

@Component({
  selector: 'app-availability-search',
  template: ''
})
class MockAvailabilitySearchComponent {
}

@Component({
  template: ''
})
class MockBookingPathComponent {
}

const routes: Routes = [
  {
    path: 'booking-path',
    component: MockBookingPathComponent
  },
  {
    path: '',
    redirectTo: 'booking-path',
    pathMatch: 'full'
  }
];

describe('BookingHomeComponent', () => {
  let location: Location;
  let router: Router;
  let component: BookingHomeComponent;
  let fixture: ComponentFixture<BookingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockAvailabilitySearchComponent,
        MockBookingPathComponent,
        BookingHomeComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes)
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(BookingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to booking-path', async(() => {
    router.navigate(['booking-path'])
      .then(() => {
        expect(location.path()).toBe('/booking-path');
      });
  }));

  it('should redirect to booking-path', async(() => {
    router.navigate([''])
      .then(() => {
        expect(location.path()).toBe('/booking-path');
      });
  }));
});
