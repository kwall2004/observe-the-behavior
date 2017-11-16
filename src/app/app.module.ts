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
import { ContactComponent } from './contact/contact.component';
import { AvailabilityComponent } from './availability/availability.component';
import { JourneysWithFaresPipe } from './journeys-with-fares.pipe';

const routes: Routes = [
  {
    path: 'availability',
    component: AvailabilityComponent
  },
  {
    path: 'contact',
    component: ContactComponent
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
    ContactComponent,
    AvailabilityComponent,
    JourneysWithFaresPipe
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
