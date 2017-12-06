import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { 
  StoreRouterConnectingModule, 
  RouterStateSerializer 
} from '@ngrx/router-store';
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
  DialogModule,
  ProgressSpinnerModule
} from 'primeng/primeng';

import { CustomRouterStateSerializer } from './store/utils';
import { AuthInterceptorService } from './services/auth.interceptor.service';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { JourneyListComponent } from './components/journey-list/journey-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { AvailabilityComponent } from './components/availability/availability.component';
import { JourneysWithFaresPipe } from './pipes/journeys-with-fares.pipe';
import { reducers } from './store/reducers';
import { AppEffects } from './store/app/effects';
import { AvailabilityEffects } from './store/availability/effects';
import { BookingEffects } from './store/booking/effects';
import { environment } from '../environments/environment';
import { AvailabilitySearchComponent } from './components/availability-search/availability-search.component';
import { PassengerSaveComponent } from './components/passenger-save/passenger-save.component';
import { BookingComponent } from './components/booking/booking.component';

const routes: Routes = [
  {
    path: 'availability',
    component: AvailabilityComponent
  },
  {
    path: 'passenger-save',
    component: PassengerSaveComponent
  },
  {
    path: 'contact',
    component: ContactComponent
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
    ContactComponent,
    AvailabilityComponent,
    JourneysWithFaresPipe,
    AvailabilitySearchComponent,
    PassengerSaveComponent,
    BookingComponent
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
    ProgressSpinnerModule,
    DialogModule
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomRouterStateSerializer
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    DatePipe,
    ApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
