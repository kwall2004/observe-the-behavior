import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CredentialsModel } from '../../../../core/models';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
	@Output() close = new EventEmitter<void>();
	@Output() loginClick = new EventEmitter<CredentialsModel>();
	@Input() errors: any[];

	constructor() { }

	ngOnInit() { }

	onLoginClick(form: NgForm) {
		if (form.valid) {
			this.loginClick.emit({
				...form.value,
				domain: 'WWW'
			});
		}
	}
}
