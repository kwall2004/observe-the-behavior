import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { DYNAMIC_CONTENT_MAPPINGS, DynamicContentMappingType } from '../../dynamic-content';

import * as fromDynamicContent from '../../store/reducers';
import * as DynamicContentActions from '../../store/actions/dynamic-content.action';

@Component({
	selector: 'app-dynamic-content',
	templateUrl: './dynamic-content.component.html',
	styleUrls: ['./dynamic-content.component.scss']
})
export class DynamicContentComponent implements OnInit {
	data$: Observable<object>;
	menuItems: any[];

	constructor(
		private store: Store<fromDynamicContent.DynamicContentState>,
		private activatedRoute: ActivatedRoute,
		@Inject(DYNAMIC_CONTENT_MAPPINGS) private dynamicContentMappings: DynamicContentMappingType
	) {
		this.data$ = this.store.select(state => state.dynamicContent.data);
		this.data$.subscribe(data => {
			activatedRoute.routeConfig.children = [];
			this.menuItems = [];

			if (data) {
				const content = data['components'].find(element => element['type'] === 'dynamic-content');
				if (content) {
					for (const route of content.routes) {
						activatedRoute.routeConfig.children.push({
							path: route.path,
							component: this.dynamicContentMappings[route.component],
							data: route.data
						});
						this.menuItems.push({
							label: route.label,
							routerLink: [route.path]
						});
					}
				}
			}
		});

		this.store.dispatch(new DynamicContentActions.GetContent());
	}

	ngOnInit() { }
}