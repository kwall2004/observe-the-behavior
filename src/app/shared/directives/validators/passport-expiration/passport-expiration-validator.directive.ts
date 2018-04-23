import { Directive, Input, OnDestroy } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import * as moment from 'moment';

@Directive({
	selector: '[appPassportExpiration][ngModel]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: PassportExpirationValidatorDirective,
			multi: true
		}
	]
})
export class PassportExpirationValidatorDirective implements Validator, OnDestroy {
	@Input('appPassportDayControl') appPassportDayControl: string;
	@Input('appPassportYearControl') appPassportYearControl: string;
	controlDay: FormControl;
	controlYear: FormControl;
	subs: Subscription[] = [];
	expirationDate: moment.Moment = null;

	validate(controlMonth: AbstractControl): { [key: string]: any } {

		if (!this.controlDay) {
			if (controlMonth.parent.controls[this.appPassportDayControl] !== undefined) {
				this.controlDay = controlMonth.parent.controls[this.appPassportDayControl];
				this.subs.push(this.controlDay.valueChanges.subscribe(() => {
					controlMonth.updateValueAndValidity();
				}));
			}

		}

		if (!this.controlYear) {
			if (controlMonth.parent.controls[this.appPassportYearControl] !== undefined) {
				this.controlYear = controlMonth.parent.controls[this.appPassportYearControl];
				this.subs.push(this.controlYear.valueChanges.subscribe(() => {
					controlMonth.updateValueAndValidity();
				}));
			}

		}

		if (this.controlYear && this.controlDay) { // Both are set

			const expirationDate = moment({ y: this.controlYear.value, M: controlMonth.value - 1, d: this.controlDay.value }); // Get our combined passport expiration date
			const futureComparitiveDate = moment().add(87, 'days'); // Get our future date (today+87 days) to validate against

			if (expirationDate.isBetween(moment(), futureComparitiveDate)) { // Fails not after 87 days
				return { beforeCriteriaDate: true };
			} else if (expirationDate.isBefore(moment()) || expirationDate.isSame(moment())) { // Is before todays or is today
				return { beforeOrOnTodaysDate: true };
			} else if (expirationDate.isAfter(moment())) { // is after - PASS
				return null;
			}

			return {
				beforeTodaysDate: true,
				beforeCriteriaDate: true,
			};
		}
	}

	ngOnDestroy() {
		this.subs.forEach(sub => sub.unsubscribe());
	}

}
