import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';

import { StaticContentRoutingModule } from './static-content-routing.module';
import * as fromComponents from './components';

@NgModule({
	imports: [
		SharedModule,
		StaticContentRoutingModule
	],
	declarations: [
		...fromComponents.components,
	]
})
export class StaticContentModule { }
