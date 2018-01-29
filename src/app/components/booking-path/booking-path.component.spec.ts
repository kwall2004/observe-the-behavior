import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, Directive } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { BookingPathComponent } from './booking-path.component';

@Directive({
  /* tslint:disable-next-line */
  selector: 'button[mat-button]'
})
class MockButtonDirective {
  @Input() matMenuTriggerFor: any;
}

@Component({
  /* tslint:disable-next-line */
  selector: 'mat-menu',
  template: ''
})
class MockMenuComponent {
}

@Component({
  /* tslint:disable-next-line */
  selector: 'mat-toolbar',
  template: ''
})
class MockToolbarComponent {
}

describe('BookingPathComponent', () => {
  let component: BookingPathComponent;
  let fixture: ComponentFixture<BookingPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockButtonDirective,
        MockMenuComponent,
        MockToolbarComponent,
        BookingPathComponent
      ],
      imports: [
        RouterTestingModule
      ]
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
