import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component, Directive, Input } from '@angular/core';

import { StoreModule, Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';
import * as BookingActions from '../../store/booking/actions';

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
  let store: Store<fromRoot.State>;

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
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch save action', () => {
    const payment = {
      accountNumber: 'test',
      name: 'test'
    };
    const action = new BookingActions.SavePayment({
      accountNumber: payment.accountNumber,
      accountHolderName: payment.name
    });
    const form = {
      value: {
        accountNumber: payment.accountNumber,
        name: payment.name
      }
    };
    component.onSaveClick(form);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
