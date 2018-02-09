import { AppEffects } from './app.effect';
import { BookingEffects } from './booking.effect';
import { CultureEffects } from './culture.effect';
import { AvailabilityEffects } from './availability.effect';

export const effects: any[] = [AppEffects, BookingEffects, CultureEffects, AvailabilityEffects];

export * from './app.effect';
export * from './booking.effect';
export * from './culture.effect';
export * from './availability.effect';

