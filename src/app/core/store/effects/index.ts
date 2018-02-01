import { AppEffects } from './app.effect';
import { BookingEffects } from './booking.effect';
import { AvailabilityEffects } from './availability.effect';

export const effects: any[] = [AppEffects, BookingEffects, AvailabilityEffects];

export * from './app.effect';
export * from './booking.effect';
export * from './availability.effect';

