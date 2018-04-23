import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import {
	CoreState,
	packageCarSearchResultsState
} from '../../../../core';

@Component({
	selector: 'app-flights-cars-page',
	templateUrl: './flights-cars-page.component.html',
	styleUrls: ['./flights-cars-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightsCarsPageComponent implements OnInit {
	searchResults$: Observable<any[]>;

	constructor(private store: Store<CoreState>) { }

	ngOnInit() {
		this.searchResults$ = this.store.pipe(select(packageCarSearchResultsState));
	}

	findMedia(media: any[], key: string) {
		return media.find(m => m.MediaKey === key);
	}

	findDescription(descriptions: any[], key: string) {
		return descriptions.find(d => d.Key === key);
	}
}
