import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform, Component, Directive, Input } from '@angular/core';

import { StoreModule, Store } from '@ngrx/store';

import {CoreState, reducers} from '@app/core';
import * as BookingActions from '@app/core/store/actions/booking.action';

import { PassengerComponent } from './passenger.component';

@Pipe({ name: 'values' })
class MockValuesPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
  }
}

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

@Directive({
  /* tslint:disable-next-line */
  selector: '[textMask]'
})
class MaskedInputDirective {
  @Input() textMask: any;
}

describe('PassengerComponent', () => {
  let component: PassengerComponent;
  let fixture: ComponentFixture<PassengerComponent>;
  let store: Store<CoreState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockValuesPipe,
        MockErrorComponent,
        MockFormFieldComponent,
        MaskedInputDirective,
        PassengerComponent
      ],
      imports: [
        FormsModule,
        StoreModule.forRoot(reducers)
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(PassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dispatches save actions', () => {
    const passenger = {
      name: {
        first: 'test',
        last: 'test'
      }
    };
    const contact = {
      name: {
        first: 'test',
        last: 'test'
      },
      phoneNumbers: [
        {
          number: 'test'
        }
      ]
    };
    const action1 = new BookingActions.SavePassenger(passenger);
    const action2 = new BookingActions.SavePrimaryContact(contact);
    const form = {
      value: {
        firstName: passenger.name.first,
        lastName: passenger.name.last,
        contactFirstName: contact.name.first,
        contactLastName: contact.name.last,
        contactPhoneNumber: contact.phoneNumbers[0].number
      }
    };
    component.onSaveClick(form);
    expect(store.dispatch).toHaveBeenCalledWith(action1);
    expect(store.dispatch).toHaveBeenCalledWith(action2);
  });
});
