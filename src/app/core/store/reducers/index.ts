import { ActionReducerMap, MetaReducer, createFeatureSelector } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../../environments/environment';
import * as fromRouterStore from '@ngrx/router-store';

import * as fromApp from './app.reducer';
import * as fromAuth from './auth.reducer';
import * as fromHome from './home.reducer';
import * as fromAvailability from './availability.reducer';
import * as fromFlight from './flight.reducer';
import * as fromPackageCar from './package-car.reducer';
import * as fromPackageHotel from './package-hotel.reducer';
import * as fromCulture from './culture.reducer';
import * as fromRouter from './router.reducer';
import * as fromBooking from './booking.reducer';
import * as fromSsr from './ssr.reducer';
import * as fromBags from './bag.reducer';
import * as fromUser from './user.reducer';
import * as fromShoppingCart from './shopping-cart.reducer';
import * as fromSeats from './seat.reducer';
import * as fromOptions from './option.reducer';
import * as fromResource from './resource.reducer';
import * as fromPassenger from './passenger.reducer';

export interface CoreState {
	app: fromApp.State;
	auth: fromAuth.State;
	home: fromHome.State;
	availability: fromAvailability.State;
	flight: fromFlight.State;
	packageCar: fromPackageCar.State;
	packageHotel: fromPackageHotel.State;
	culture: fromCulture.State;
	router: fromRouterStore.RouterReducerState<fromRouter.RouterStateUrl>;
	booking: fromBooking.State;
	ssr: fromSsr.State;
	bags: fromBags.State;
	user: fromUser.State;
	shoppingCart: fromShoppingCart.State;
	seats: fromSeats.State;
	options: fromOptions.State;
	resource: fromResource.State;
	passenger: fromPassenger.State;
}

export const reducers: ActionReducerMap<CoreState> = {
	app: fromApp.reducer,
	auth: fromAuth.reducer,
	home: fromHome.reducer,
	availability: fromAvailability.reducer,
	flight: fromFlight.reducer,
	packageCar: fromPackageCar.reducer,
	packageHotel: fromPackageHotel.reducer,
	culture: fromCulture.reducer,
	router: fromRouterStore.routerReducer,
	booking: fromBooking.reducer,
	ssr: fromSsr.reducer,
	bags: fromBags.reducer,
	user: fromUser.reducer,
	shoppingCart: fromShoppingCart.reducer,
	seats: fromSeats.reducer,
	options: fromOptions.reducer,
	resource: fromResource.reducer,
	passenger: fromPassenger.reducer
};

export const metaReducers: MetaReducer<CoreState>[] = !environment.production ? [storeFreeze] : [];

export const coreFeatureState = createFeatureSelector<CoreState>('core');
export const appFeatureState = createFeatureSelector<fromApp.State>('app');
export const homeFeatureState = createFeatureSelector<fromHome.State>('home');
export const availabilityFeatureState = createFeatureSelector<fromAvailability.State>('availability');
export const flightFeatureState = createFeatureSelector<fromFlight.State>('flight');
export const packageCarFeatureState = createFeatureSelector<fromPackageCar.State>('packageCar');
export const packageHotelFeatureState = createFeatureSelector<fromPackageHotel.State>('packageHotel');
export const authFeatureState = createFeatureSelector<fromAuth.State>('auth');
export const cultureFeatureState = createFeatureSelector<fromCulture.State>('culture');
export const bookingFeatureState = createFeatureSelector<fromBooking.State>('booking');
export const ssrFeatureState = createFeatureSelector<fromSsr.State>('ssr');
export const bagsFeatureState = createFeatureSelector<fromBags.State>('bags');
export const userFeatureState = createFeatureSelector<fromUser.State>('user');
export const shoppingCartFeatureState = createFeatureSelector<fromShoppingCart.State>('shoppingCart');
export const seatsFeatureState = createFeatureSelector<fromSeats.State>('seats');
export const optionsFeatureState = createFeatureSelector<fromOptions.State>('options');
export const resourceFeatureState = createFeatureSelector<fromResource.State>('resource');
export const passengerFeatureState = createFeatureSelector<fromPassenger.State>('passenger');
