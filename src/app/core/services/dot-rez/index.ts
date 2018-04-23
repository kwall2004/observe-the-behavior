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
import { BagotronService } from './bagotron.service';
import { BagService } from './bag.service';
import { SeatService } from './seat.service';

export const services: any[] = [
	AvailabilityService,
	BagService,
	BagotronService,
	PackageService,
	BookingService,
	ContactService,
	FlightInfoService,
	PassengerService,
	PaymentService,
	ResourceService,
	SsrService,
	TokenService,
	TripService,
	UserService,
	SeatService
];

export * from './availability.service';
export * from './bagotron.service';
export * from './bag.service';
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
export * from './seat.service';
