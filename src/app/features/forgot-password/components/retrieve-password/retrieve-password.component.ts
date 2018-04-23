import { Component, OnInit, OnDestroy } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { NgForm } from '@angular/forms';

import { RetrievePasswordInstructionComponent } from '../../../../shared/components';
import { ResetPasswordService } from '../../services/reset-password.service';
import { emailRegex } from '../../../../shared/utilities/regex';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-retrieve',
	templateUrl: './retrieve-password.component.html',
	styleUrls: ['./retrieve-password.component.scss']
})
export class RetrievePasswordComponent implements OnInit, OnDestroy {
	resetPassword$: Subscription;
	successResult: any = null;
	failureresult: any = null;

	constructor(
		private resetPasswordService: ResetPasswordService,
		private modal: BsModalService
	) { }

	ngOnInit() { }

	openInstructionModal() {
		this.modal.show(RetrievePasswordInstructionComponent);
	}

	onRetrievePassword(form: NgForm) {
		const isValidEmail = emailRegex.test(form.value.emailOrNumberText);

		this.resetPassword$ = this.resetPasswordService.resetPassword(
			{
				username: isValidEmail ? form.value.emailOrNumberText.toString() : '',
				domainCode: 'WWW',
				alternateIdentifier: isValidEmail ? '' : form.value.emailOrNumberText.toString()
			}
		).subscribe(
			(resp) => this.successResult = resp,
			(err) => this.failureresult = err
		);
	}

	ngOnDestroy() {
		if (this.resetPassword$) {
			this.resetPassword$.unsubscribe();
		}
	}
}
