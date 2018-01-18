import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Routes, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import {
  BreadcrumbModule,
  ToolbarModule,
  TieredMenuModule
} from 'primeng/primeng';

import { BookingPathComponent } from './booking-path.component';

@Component({
  template: ''
})
class MockComponent {
}

const routes: Routes = [
  {
    path: 'trip-list',
    component: MockComponent
  },
  {
    path: 'passenger',
    component: MockComponent
  },
  {
    path: 'payment',
    component: MockComponent
  },
  {
    path: 'confirmation',
    component: MockComponent
  },
  {
    path: '',
    redirectTo: 'trip-list',
    pathMatch: 'full'
  }
];

describe('BookingPathComponent', () => {
  let location: Location;
  let router: Router;
  let component: BookingPathComponent;
  let fixture: ComponentFixture<BookingPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockComponent,
        BookingPathComponent
      ],
      imports: [
        BreadcrumbModule,
        ToolbarModule,
        TieredMenuModule,
        RouterTestingModule.withRoutes(routes)
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(BookingPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to trip-list', async(() => {
    router.navigate(['trip-list'])
      .then(() => {
        expect(location.path()).toBe('/trip-list');
      });
  }));

  it('should navigate to passenger', async(() => {
    router.navigate(['passenger'])
      .then(() => {
        expect(location.path()).toBe('/passenger');
      });
  }));

  it('should navigate to payment', async(() => {
    router.navigate(['payment'])
      .then(() => {
        expect(location.path()).toBe('/payment');
      });
  }));

  it('should navigate to confirmation', async(() => {
    router.navigate(['confirmation'])
      .then(() => {
        expect(location.path()).toBe('/confirmation');
      });
  }));

  it('should redirect to trip-list', async(() => {
    router.navigate([''])
      .then(() => {
        expect(location.path()).toBe('/trip-list');
      });
  }));
});
