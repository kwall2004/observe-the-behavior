import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform } from '@angular/core';

import { StoreModule, Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';
import * as BookingActions from '../../store/booking/actions';

import { ConfirmationComponent } from './confirmation.component';

@Pipe({name: 'values'})
class MockValuesPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value)
      .map(key => value[key]);
  }
}

describe('ConfirmationComponent', () => {
  let component: ConfirmationComponent;
  let fixture: ComponentFixture<ConfirmationComponent>;
  let store: Store<fromRoot.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockValuesPipe,
        ConfirmationComponent
      ],
      imports: [
        StoreModule.forRoot(fromRoot.reducers)
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(ConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch commit action', () => {
    const action = new BookingActions.Commit();
    component.onCommitClick();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
