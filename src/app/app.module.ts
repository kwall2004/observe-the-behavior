import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  DropdownModule,
  CalendarModule,
  MenubarModule,
  TieredMenuModule,
  ToolbarModule,
  DataListModule,
  InputTextModule,
  ProgressBarModule,
  InputMaskModule
} from 'primeng/primeng';

import { environment } from '../environments/environment';

import { ApiService } from './services/api.service';
import { ApiInterceptorService } from './services/api.interceptor.service';

import { AppComponent } from './app.component';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { JourneyListComponent } from './components/journey-list/journey-list.component';
import { AvailabilityComponent } from './components/availability/availability.component';
import { AvailabilitySearchComponent } from './components/availability-search/availability-search.component';
import { PassengerComponent } from './components/passenger/passenger.component';
import { BookingComponent } from './components/booking/booking.component';

import { JourneysWithFaresPipe } from './pipes/journeys-with-fares.pipe';
import { KeysPipe } from './pipes/keys.pipe';

import { reducers, CustomRouterStateSerializer } from './store/reducers';
import { AppEffects } from './store/app/effects';
import { AvailabilityEffects } from './store/availability/effects';
import { BookingEffects } from './store/booking/effects';

const routes: Routes = [
  {
    path: 'availability',
    component: AvailabilityComponent
  },
  {
    path: 'passenger',
    component: PassengerComponent
  },
  {
    path: 'booking',
    component: BookingComponent
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
    AvailabilityComponent,
    AvailabilitySearchComponent,
    PassengerComponent,
    BookingComponent,
    JourneysWithFaresPipe,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      AppEffects,
      AvailabilityEffects,
      BookingEffects
    ]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    DropdownModule,
    CalendarModule,
    MenubarModule,
    TieredMenuModule,
    ToolbarModule,
    DataListModule,
    InputTextModule,
    ProgressBarModule,
    InputMaskModule
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomRouterStateSerializer
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptorService,
      multi: true
    },
    DatePipe,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
