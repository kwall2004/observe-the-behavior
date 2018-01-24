import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';

import { BookingHomeComponent } from './booking-home.component';

@Component({
  selector: 'app-availability-search',
  template: ''
})
class MockAvailabilitySearchComponent {
  @Input() stations$: any;
  @Input() origin$: any;
  @Input() destination$: any;
  @Input() beginDate$: any;
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
        StoreModule.forRoot(fromRoot.reducers)
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
