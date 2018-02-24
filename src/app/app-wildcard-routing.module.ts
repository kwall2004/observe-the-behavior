import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		// todo implement not found or always redirect to '' ?
		path: '**',
		redirectTo: '',
		// component: NotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AppWildcardRoutingModule { }
