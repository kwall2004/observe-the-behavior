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
  InputMaskModule,
  TabMenuModule
} from 'primeng/primeng';

import { RoutingModule } from './routing.module';
import { MaterialModule } from './material.module';
import { TextMaskModule } from 'angular2-text-mask';
import { DynamicContentModule } from './dynamic-content.module';
import { environment } from '../environments/environment';

import { NavitaireApiService } from './services/navitaire-api.service';
import { DynamicContentApiService } from './services/dynamic-content-api.service';
import { ApiInterceptorService } from './services/api-interceptor.service';

import { reducers, CustomRouterStateSerializer } from './store/reducers';
import { AppEffects } from './store/app/effects';
import { AvailabilityEffects } from './store/availability/effects';
import { BookingEffects } from './store/booking/effects';
import { DynamicContentEffects } from './store/dynamic-content/effects';

import { ValuesPipe } from './pipes/values.pipe';

import { AppComponent } from './app.component';
import { BookingHomeComponent } from './components/booking-home/booking-home.component';
import { AvailabilitySearchComponent } from './components/availability-search/availability-search.component';
import { BookingPathComponent } from './components/booking-path/booking-path.component';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { JourneyListComponent } from './components/journey-list/journey-list.component';
import { PassengerComponent } from './components/passenger/passenger.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { DynamicContentComponent } from './components/dynamic-content/dynamic-content.component';
import { LowFareComponent } from './components/low-fare/low-fare.component';
import { PaymentComponent } from './components/payment/payment.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    ValuesPipe,
    AppComponent,
    BookingHomeComponent,
    AvailabilitySearchComponent,
    BookingPathComponent,
    TripListComponent,
    JourneyListComponent,
    PassengerComponent,
    ConfirmationComponent,
    DynamicContentComponent,
    LowFareComponent,
    PaymentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    TextMaskModule,
    DynamicContentModule.forRoot(),
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      AppEffects,
      AvailabilityEffects,
      BookingEffects,
      DynamicContentEffects
    ]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 5
    }) : [],
    DropdownModule,
    CalendarModule,
    MenubarModule,
    TieredMenuModule,
    ToolbarModule,
    ProgressBarModule,
    InputTextModule,
    InputMaskModule,
    TabMenuModule
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
  bootstrap: [AppComponent]
})
export class AppModule { }
