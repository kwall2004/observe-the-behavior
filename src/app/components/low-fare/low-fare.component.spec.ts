import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs/Subject';

import { LowFareComponent } from './low-fare.component';

describe('LowFareComponent', () => {
  let component: LowFareComponent;
  let fixture: ComponentFixture<LowFareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LowFareComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowFareComponent);
    component = fixture.componentInstance;
    const beginDate = new Subject<Date>();
    const data = new Subject<object>();
    component.beginDate$ = beginDate.asObservable();
    component.data$ = data.asObservable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
