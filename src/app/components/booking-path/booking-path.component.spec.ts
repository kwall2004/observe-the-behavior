import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { BookingPathComponent } from './booking-path.component';

@Component({
  /* tslint:disable-next-line */
  selector: 'p-toolbar',
  template: ''
})
class MockToolbarComponent {
}

@Component({
  /* tslint:disable-next-line */
  selector: 'p-menubar',
  template: ''
})
class MockMenubarComponent {
  @Input() model: any;
}

@Component({
  /* tslint:disable-next-line */
  selector: 'p-tieredMenu',
  template: ''
})
class MockTieredMenuComponent {
  @Input() model: any;
  @Input() popup: any;
}

describe('BookingPathComponent', () => {
  let component: BookingPathComponent;
  let fixture: ComponentFixture<BookingPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockToolbarComponent,
        MockMenubarComponent,
        MockTieredMenuComponent,
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
