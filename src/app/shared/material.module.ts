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
	MatDialogModule,
	MatRadioModule,
	MatCheckboxModule
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
		MatDialogModule,
		MatRadioModule,
		MatCheckboxModule
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
		MatDialogModule,
		MatRadioModule,
		MatCheckboxModule
	]
})
export class MaterialModule { }
