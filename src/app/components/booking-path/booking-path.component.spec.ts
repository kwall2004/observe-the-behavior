import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import {
  BreadcrumbModule,
  ToolbarModule,
  TieredMenuModule
} from 'primeng/primeng';

import { BookingPathComponent } from './booking-path.component';

describe('BookingPathComponent', () => {
  let component: BookingPathComponent;
  let fixture: ComponentFixture<BookingPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookingPathComponent
      ],
      imports: [
        BreadcrumbModule,
        ToolbarModule,
        TieredMenuModule,
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
