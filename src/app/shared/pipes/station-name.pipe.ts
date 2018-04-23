import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { CoreState } from '../../core/store/reducers';
import { resourceStationsState } from '../../core/store/selectors';
import { StationModel } from '../../core/models';



@Pipe({ name: 'stationName$' })
export class StationNamePipe implements PipeTransform {
	stationList: Observable<StationModel[]>;

	constructor(private store: Store<CoreState>) {
		this.stationList = this.store.select(resourceStationsState);
	}

	transform(stationCode: string): Observable<string> {
		return this.stationList.pipe(
			map((stationList) => stationList.find(s => s.stationCode === stationCode).shortName.split(',')[0])
		);
	}
}
