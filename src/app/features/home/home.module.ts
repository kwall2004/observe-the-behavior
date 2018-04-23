import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';

import * as fromComponents from './components';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [...fromComponents.components],
	entryComponents: [fromComponents.BookingNotFoundModalComponent]
})
export class HomeModule { }
