import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';

import * as fromComponents from './components';

@NgModule({
	imports: [
		SharedModule,
		AccountRoutingModule,
	],
	declarations: [...fromComponents.components]
})
export class AccountModule {

}


