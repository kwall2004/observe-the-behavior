import { ClassProvider } from '@angular/core';
import * as fromDotRez from '../../../core/services/dot-rez';

import { AvailabilityService } from './availability.service';
import { PackageService } from './package.service';
import { BookingService } from './booking.service';
import { ContactService } from './contact.service';
import { FlightInfoService } from './flight-info.service';
import { PassengerService } from './passenger.service';
import { PaymentService } from './payment.service';
import { ResourceService } from './resource.service';
import { SsrService } from './ssr.service';
import { TokenService } from './token.service';
import { TripService } from './trip.service';
import { UserService } from './user.service';

export const services: ClassProvider[] = [
	{
		provide: fromDotRez.AvailabilityService,
		useClass: AvailabilityService
	},
	{
		provide: fromDotRez.PackageService,
		useClass: PackageService
	},
	{
		provide: fromDotRez.BookingService,
		useClass: BookingService
	},
	{
		provide: fromDotRez.ContactService,
		useClass: ContactService
	},
	{
		provide: fromDotRez.FlightInfoService,
		useClass: FlightInfoService
	},
	{
		provide: fromDotRez.PassengerService,
		useClass: PassengerService
	},
	{
		provide: fromDotRez.PaymentService,
		useClass: PaymentService
	},
	{
		provide: fromDotRez.ResourceService,
		useClass: ResourceService
	},
	{
		provide: fromDotRez.SsrService,
		useClass: SsrService
	},
	{
		provide: fromDotRez.TokenService,
		useClass: TokenService
	},
	{
		provide: fromDotRez.TripService,
		useClass: TripService
	},
	{
		provide: fromDotRez.UserService,
		useClass: UserService
	}
];

export * from './availability.service';
export * from './package.service';
export * from './booking.service';
export * from './contact.service';
export * from './flight-info.service';
export * from './passenger.service';
export * from './payment.service';
export * from './resource.service';
export * from './ssr.service';
export * from './token.service';
export * from './trip.service';
export * from './user.service';
