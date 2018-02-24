import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';

import * as fromComponents from './components';

@NgModule({
	imports: [
		SharedModule,
		ForgotPasswordRoutingModule
	],
	declarations: [...fromComponents.components]
})
export class ForgotPasswordModule { }
