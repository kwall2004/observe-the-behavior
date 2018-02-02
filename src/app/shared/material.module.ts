import { NgModule } from '@angular/core';

import {
	MatButtonModule,
	MatInputModule,
	MatFormFieldModule,
	MatSelectModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatProgressBarModule,
	MatToolbarModule,
	MatMenuModule,
	MatTabsModule
} from '@angular/material';

@NgModule({
	imports: [
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		MatSelectModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatProgressBarModule,
		MatToolbarModule,
		MatMenuModule,
		MatTabsModule
	],
	exports: [
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		MatSelectModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatProgressBarModule,
		MatToolbarModule,
		MatMenuModule,
		MatTabsModule
	]
})
export class MaterialModule { }
