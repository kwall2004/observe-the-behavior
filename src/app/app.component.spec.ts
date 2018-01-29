import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Directive, Input } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { reducers } from './store/reducers';

import { AppComponent } from './app.component';

@Directive({
  /* tslint:disable-next-line */
  selector: 'button[mat-button]'
})
class MockButtonDirective {
  @Input() matMenuTriggerFor: any;
}

@Component({
  /* tslint:disable-next-line */
  selector: 'mat-menu',
  template: ''
})
class MockMenuComponent {
}

@Component({
  /* tslint:disable-next-line */
  selector: 'mat-toolbar',
  template: ''
})
class MockToolbarComponent {
}

@Component({
  /* tslint:disable-next-line */
  selector: 'mat-progress-bar',
  template: ''
})
class MockProgressbarComponent {
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockButtonDirective,
        MockMenuComponent,
        MockToolbarComponent,
        MockProgressbarComponent
      ],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(reducers)
      ]
    })
      .compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));
});
