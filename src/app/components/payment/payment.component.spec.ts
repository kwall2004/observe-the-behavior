import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component, Directive, Input } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';

import { PaymentComponent } from './payment.component';

@Component({
  /* tslint:disable-next-line */
  selector: 'mat-error',
  template: ''
})
class MockErrorComponent {
}

@Component({
  /* tslint:disable-next-line */
  selector: 'mat-form-field',
  template: ''
})
class MockFormFieldComponent {
}

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockErrorComponent,
        MockFormFieldComponent,
        PaymentComponent
      ],
      imports: [
        FormsModule,
        StoreModule.forRoot(fromRoot.reducers)
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
