import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform, Component, Directive, Input } from '@angular/core';

import { StoreModule, Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';
import * as BookingActions from '../../store/booking/actions';

import { PassengerComponent } from './passenger.component';

@Pipe({ name: 'values' })
class MockValuesPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
  }
}

@Directive({
  /* tslint:disable-next-line */
  selector: '[pInputText]'
})
class MockInputTextDirective {
  @Input() ngModel: any;
}

@Component({
  /* tslint:disable-next-line */
  selector: 'p-inputMask',
  template: ''
})
class MockInputMaskComponent {
  @Input() ngModel: any;
}

describe('PassengerComponent', () => {
  let component: PassengerComponent;
  let fixture: ComponentFixture<PassengerComponent>;
  let store: Store<fromRoot.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockValuesPipe,
        MockInputTextDirective,
        MockInputMaskComponent,
        PassengerComponent
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

    fixture = TestBed.createComponent(PassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch save actions', () => {
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
    fixture.detectChanges();
    const action1 = new BookingActions.SavePassenger(passenger);
    const action2 = new BookingActions.SavePrimaryContact(contact);
    const firstName = {
      value: passenger.name.first
    };
    const lastName = {
      value: passenger.name.last
    };
    const contactFirstName = {
      value: contact.name.first
    };
    const contactLastName = {
      value: contact.name.last
    };
    const contactPhoneNumber = {
      value: contact.phoneNumbers[0].number
    };
    component.onSaveClick(firstName, lastName, contactFirstName, contactLastName, contactPhoneNumber);
    expect(store.dispatch).toHaveBeenCalledWith(action1);
    expect(store.dispatch).toHaveBeenCalledWith(action2);
  });
});
