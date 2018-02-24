import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

	constructor(public dialog: MatDialog) { }

	ngOnInit() {
	}

	signIn() {
		const dialogRef = this.dialog.open(AuthDialogComponent, {
			// width: '250px',
			// data: { name: this.name, animal: this.animal }
		});
	}

}
