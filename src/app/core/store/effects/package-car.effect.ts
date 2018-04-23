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
	PackageCarActionTypes, PackageCarSearch, PackageCarAddSearchResult, PackageCarClearSearchResults
} from '../actions';

import { getArray } from '../../../shared/utilities';

@Injectable()
export class PackageCarEffects {
	constructor(
		private actions: Actions,
		private packageService: PackageService
	) { }

	@Effect()
	searchCars$: Observable<Action> = this.actions
		.pipe(
			ofType<PackageCarSearch>(PackageCarActionTypes.SEARCH),
			mergeMap(action => concat(
				of(new PackageCarClearSearchResults()),
				this.packageService.searchCars(action.payload)
					.pipe(
						map(payload => {
							if (!payload) {
								return new PackageCarAddSearchResult(null);
							}

							const response = payload.VAXXML.Response;
							const results = response.Availability.Results;

							return new PackageCarAddSearchResult({
								Vehicles: getArray(results, 'VehAvailRateRS', 'Vehicle').map(vehicle => ({
									...vehicle,
									MediaKey: getArray(vehicle, 'MediaKey')
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
