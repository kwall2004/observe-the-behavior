import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseComponent } from './advertise.component';

describe('AdvertiseComponent', () => {
  let component: AdvertiseComponent;
  let fixture: ComponentFixture<AdvertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
