import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Spirit101Component } from './spirit-101.component';

describe('Spirit101Component', () => {
  let component: Spirit101Component;
  let fixture: ComponentFixture<Spirit101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Spirit101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Spirit101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
