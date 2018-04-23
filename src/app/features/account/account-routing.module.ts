import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromComponents from './components';

const routes: Routes = [

	{
		path: '',
		component: fromComponents.AccountPageComponent,
		children:
			[
				{
					path: 'profile-edit',
					component: fromComponents.AccountProfileEditComponent
				},
				{
					path: 'dedicated-partner',
					component: fromComponents.AccountDedicatedPartnerComponent
				},
				{
					path: 'get-miles',
					component: fromComponents.AccountGetMilesComponent
				},
				{
					path: 'use-miles',
					component: fromComponents.AccountUseMilesComponent
				},
				{
					path: 'redemption-request',
					component: fromComponents.AccountRedemptionRequestComponent
				},
				{
					path: 'redemption-no-miles',
					component: fromComponents.AccountRedemptionMilesComponent
				},
				{
					path: 'statement',
					component: fromComponents.AccountStatementComponent
				},
				{
					path: 'profile',
					component: fromComponents.AccountProfileComponent
				},
				{
					path: 'email-notify-sign-in',
					component: fromComponents.AccountEmailNotifySignInComponent
				},
				{
					path: 'retro-credit-request',
					component: fromComponents.AccountRetroCreditRequestComponent
				}
			]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class AccountRoutingModule { }
