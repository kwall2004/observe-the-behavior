import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
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
  ProgressBarModule,
  InputTextModule,
  InputMaskModule
} from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

import { NavitaireApiService } from './services/navitaire-api.service';
import { DynamicContentApiService } from './services/dynamic-content-api.service';
import { ApiInterceptorService } from './services/api-interceptor.service';

import { reducers, CustomRouterStateSerializer } from './store/reducers';
import { AppEffects } from './store/app/effects';
import { AvailabilityEffects } from './store/availability/effects';
import { BookingEffects } from './store/booking/effects';

import { JourneysWithFaresPipe } from './pipes/journeys-with-fares.pipe';
import { KeysPipe } from './pipes/keys.pipe';

import { AppComponent } from './app.component';
import { BookingHomeComponent } from './components/booking-home/booking-home.component';
import { AvailabilitySearchComponent } from './components/availability-search/availability-search.component';
import { BookingPathComponent } from './components/booking-path/booking-path.component';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { JourneyListComponent } from './components/journey-list/journey-list.component';
import { PassengerComponent } from './components/passenger/passenger.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@NgModule({
  declarations: [
    JourneysWithFaresPipe,
    KeysPipe,
    AppComponent,
    BookingHomeComponent,
    AvailabilitySearchComponent,
    BookingPathComponent,
    TripListComponent,
    JourneyListComponent,
    PassengerComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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
    ProgressBarModule,
    InputTextModule,
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
    NavitaireApiService,
    DynamicContentApiService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
