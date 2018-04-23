import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/observable/concat';

import {
	AppClearErrors, AppAddError,
	ResourceActionTypes, ResourceSetStations, ResourceGetProvinceStateList, ResourceGetCountryList
} from '../../store/actions';


import { ResourceService } from '../../services/dot-rez/resource.service';

@Injectable()
export class ResourceEffects {
	constructor(
		private resourceService: ResourceService,
		private actions: Actions,
	) { }

	@Effect()
	getStations$: Observable<Action> = this.actions
		.pipe(
			ofType(ResourceActionTypes.GET_STATIONS),
			mergeMap(() => concat(
				of(new AppClearErrors()),
				this.resourceService.getStations()
					.pipe(
						map(payload => new ResourceSetStations(payload && payload.data)),
						catchError(error => of(new AppAddError(error)))
					)
			))
		);

	@Effect()
	getRegionalLists$: Observable<Action> = this.actions
		.pipe(
			ofType(ResourceActionTypes.GET_REGIONAL_LISTS),
			mergeMap(() => concat(
				of(new AppClearErrors()),
				this.resourceService.getProvinceStates()
					.pipe(
						map(provinceState => provinceState.data.filter(provinceStateItem => provinceStateItem.countryCode === 'US')),
						map(payload => new ResourceGetProvinceStateList(payload)),
						catchError(error => of(new AppAddError(error)))
					),
				this.resourceService.getCountries()
					.pipe(
						map(payload => new ResourceGetCountryList(payload && payload.data)),
						catchError(error => of(new AppAddError(error)))
					)
			))
		);
}
