import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { DYNAMIC_CONTENT_MAPPINGS, DynamicContentMappingType } from '../../dynamic-content';

import { DynamicContentState, GetContent } from '../../store';

@Component({
	selector: 'app-dynamic-content',
	templateUrl: './dynamic-content.component.html',
	styleUrls: ['./dynamic-content.component.scss']
})
export class DynamicContentComponent implements OnInit {
	data$: Observable<any>;
	menuItems: any[];

	constructor(
		private store: Store<DynamicContentState>,
		private activatedRoute: ActivatedRoute,
		@Inject(DYNAMIC_CONTENT_MAPPINGS) private dynamicContentMappings: DynamicContentMappingType
	) {
		this.data$ = this.store.select(state => state.dynamicContent.data);
		this.data$.subscribe(data => {
			this.activatedRoute.routeConfig.children = [];
			this.menuItems = [];

			if (data) {
				const content = data.components.find(element => element.type === 'dynamic-content');
				if (content) {
					for (const route of content.routes) {
						this.activatedRoute.routeConfig.children.push({
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

		this.store.dispatch(new GetContent());
	}

	ngOnInit() { }
}
