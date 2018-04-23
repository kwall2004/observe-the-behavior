import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/observable/concat';

import { PackageService } from '../../services';

import {
	AppAddError,
	PackageHotelActionTypes, PackageHotelSearch, PackageHotelAddSearchResult, PackageHotelClearSearchResults
} from '../actions';

import { getArray } from '../../../shared/utilities';

@Injectable()
export class PackageHotelEffects {
	constructor(
		private actions: Actions,
		private packageService: PackageService
	) { }

	@Effect()
	searchCars$: Observable<Action> = this.actions
		.pipe(
			ofType<PackageHotelSearch>(PackageHotelActionTypes.SEARCH),
			mergeMap(action => concat(
				of(new PackageHotelClearSearchResults()),
				this.packageService.searchHotels(action.payload)
					.pipe(
						map(payload => {
							if (!payload) {
								return new PackageHotelAddSearchResult(null);
							}

							const response = payload.VAXXML.Response;
							const results = response.Availability.Results;

							return new PackageHotelAddSearchResult({
								Hotels: getArray(results, 'HotelAvailRS', 'Hotel').map(hotel => ({
									...hotel,
									MediaKey: getArray(hotel, 'MediaKey')
								})),
								Descriptions: getArray(response, 'Descriptions', 'Description'),
								Media: getArray(response, 'MediaLinks', 'Media')
							});
						}),
						catchError(error => of(new AppAddError(error)))
					)
			))
		);
}
