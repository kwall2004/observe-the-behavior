import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPathComponent } from './booking-path.component';

describe('BookingPathComponent', () => {
  let component: BookingPathComponent;
  let fixture: ComponentFixture<BookingPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookingPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
