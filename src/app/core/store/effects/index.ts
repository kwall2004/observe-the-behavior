import { AppEffects } from './app.effect';
import { AuthEffects } from './auth.effect';
import { HomeEffects } from './home.effect';
import { BookingEffects } from './booking.effect';
import { CultureEffects } from './culture.effect';
import { AvailabilityEffects } from './availability.effect';
import { FlightEffects } from './flight.effect';
import { PackageCarEffects } from './package-car.effect';
import { PackageHotelEffects } from './package-hotel.effect';
import { SsrEffects } from './ssr.effect';
import { BagEffects } from './bag.effect';
import { UserEffects } from './user.effect';
import { SeatEffects } from './seat.effect';
import { OptionEffects } from './option.effect';
import { ResourceEffects } from './resource.effect';
import { PassengerEffects } from './passenger.effect';

export const effects: any[] = [
	AppEffects,
	AuthEffects,
	HomeEffects,
	BookingEffects,
	CultureEffects,
	AvailabilityEffects,
	FlightEffects,
	PackageCarEffects,
	PackageHotelEffects,
	SsrEffects,
	BagEffects,
	UserEffects,
	SeatEffects,
	OptionEffects,
	ResourceEffects,
	PassengerEffects
];

export * from './app.effect';
export * from './auth.effect';
export * from './home.effect';
export * from './booking.effect';
export * from './culture.effect';
export * from './availability.effect';
export * from './flight.effect';
export * from './package-car.effect';
export * from './package-hotel.effect';
export * from './ssr.effect';
export * from './bag.effect';
export * from './user.effect';
export * from './seat.effect';
export * from './option.effect';
export * from './resource.effect';
export * from './passenger.effect';
