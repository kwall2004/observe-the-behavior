import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StoreModule } from '@ngrx/store';

import { reducers } from './store/reducers';

import {
  MenubarModule,
  TieredMenuModule,
  ToolbarModule,
  ProgressBarModule
} from 'primeng/primeng';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(reducers),
        MenubarModule,
        TieredMenuModule,
        ToolbarModule,
        ProgressBarModule
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
