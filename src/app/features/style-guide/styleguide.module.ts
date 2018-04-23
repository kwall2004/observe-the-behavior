import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { StyleGuideComponent } from './style-guide/style-guide.component';


// export const ROUTES: Routes = [
// 	{
// 		path: '',
// 		component: StyleGuideComponent
// 	}
// ];

@NgModule({
	imports: [
		SharedModule,
		// RouterModule.forChild(ROUTES)
	],
	declarations: [StyleGuideComponent]
})
export class StyleGuideModule { }
