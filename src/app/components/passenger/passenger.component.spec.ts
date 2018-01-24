import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Component, Directive, Input } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';

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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockValuesPipe,
        MockInputTextDirective,
        MockInputMaskComponent,
        PassengerComponent
      ],
      imports: [
        StoreModule.forRoot(fromRoot.reducers)
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
