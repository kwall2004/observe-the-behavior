import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MenubarModule,
  TieredMenuModule,
  ToolbarModule,
  InputTextModule,
  InputMaskModule
} from 'primeng/primeng';

import { JourneysWithFaresPipe } from '../../pipes/journeys-with-fares.pipe';
import { KeysPipe } from '../../pipes/keys.pipe';

import { BookingPathComponent } from '../../components/booking-path/booking-path.component';
import { TripListComponent } from '../../components/trip-list/trip-list.component';
import { JourneyListComponent } from '../../components/journey-list/journey-list.component';
import { PassengerComponent } from '../../components/passenger/passenger.component';
import { ConfirmationComponent } from '../../components/confirmation/confirmation.component';

@NgModule({
  declarations: [
    JourneysWithFaresPipe,
    KeysPipe,
    BookingPathComponent,
    TripListComponent,
    JourneyListComponent,
    PassengerComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'booking-path',
        component: BookingPathComponent
      }
    ]),
    MenubarModule,
    TieredMenuModule,
    ToolbarModule,
    InputTextModule,
    InputMaskModule
  ],
  entryComponents: [
    TripListComponent,
    PassengerComponent,
    ConfirmationComponent
  ]
})
export class BookingPathModule { }
