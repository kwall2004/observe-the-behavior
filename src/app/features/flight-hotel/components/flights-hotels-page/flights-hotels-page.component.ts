import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import {
	CoreState,
	packageHotelSearchResultsState
} from '../../../../core';

@Component({
	selector: 'app-flights-hotels-page',
	templateUrl: './flights-hotels-page.component.html',
	styleUrls: ['./flights-hotels-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightsHotelsPageComponent implements OnInit {
	searchResults$: Observable<any[]>;

	constructor(private store: Store<CoreState>) { }

	ngOnInit() {
		this.searchResults$ = this.store.pipe(select(packageHotelSearchResultsState));
	}

	findMedia(media: any[], key: string) {
		return media.find(m => m.MediaKey === key && m.RefId === 'ItemMedia:MEDIUM');
	}

	findDescription(descriptions: any[], key: string) {
		return descriptions.find(d => d.Key === key);
	}
}
