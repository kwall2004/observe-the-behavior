import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	// selector: 'app-auth-dialog',
	templateUrl: './auth-dialog.component.html',
	styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit {

	constructor(  public dialogRef: MatDialogRef<AuthDialogComponent>) { }

	ngOnInit() {
	}

}
