import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import * as fromComponents from './components';

@NgModule({
	imports: [SharedModule, AuthModule],
	declarations: [...fromComponents.components],
	exports: [...fromComponents.components]
})

export class LayoutModule { }
