import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CalendarModule, MenubarModule, TieredMenuModule, ToolbarModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { ApiService } from './api.service';
import { TripListComponent } from './trip-list/trip-list.component';
import { JourneyListComponent } from './journey-list/journey-list.component';
import { Test1Component } from './test1/test1.component';
import { AvailabilityComponent } from './availability/availability.component';

const routes: Routes = [
  {
    path: 'availability',
    component: AvailabilityComponent
  },
  {
    path: 'test1',
    component: Test1Component
  },
  {
    path: '',
    redirectTo: '/availability',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TripListComponent,
    JourneyListComponent,
    Test1Component,
    AvailabilityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    CalendarModule,
    MenubarModule,
    TieredMenuModule,
    ToolbarModule
  ],
  providers: [
    DataService,
    ApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
