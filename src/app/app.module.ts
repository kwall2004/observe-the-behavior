import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CalendarModule, MenubarModule, TieredMenuModule, ToolbarModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { JourneyListComponent } from './components/journey-list/journey-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { AvailabilityComponent } from './components/availability/availability.component';
import { JourneysWithFaresPipe } from './pipes/journeys-with-fares.pipe';
import { reducers } from './store/reducer';
import { AvailabilityEffects } from './store/availability/effect';

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
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      AvailabilityEffects
    ]),
    CalendarModule,
    MenubarModule,
    TieredMenuModule,
    ToolbarModule
  ],
  providers: [
    DatePipe,
    ApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
