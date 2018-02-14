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
	MatTabsModule,
	MatDialogModule
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
		MatTabsModule,
		MatDialogModule
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
		MatTabsModule,
		MatDialogModule
	]
})
export class MaterialModule { }
