import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';

import { ManageTravelRoutingModule } from './manage-travel-routing.module';
import * as fromComponents from './components';

@NgModule({
	imports: [
		SharedModule,
		ManageTravelRoutingModule
	],
	declarations: [...fromComponents.components]
})
export class ManageTravelModule { }
