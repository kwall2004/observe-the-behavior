import { Directive, Input } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { UserService } from '../../../../core/services';



@Directive({
	selector: '[appUserExists]',
	providers: [
		{
			provide: NG_ASYNC_VALIDATORS,
			useExisting: UserExistsDirective,
			multi: true
		}
	]
})
export class UserExistsDirective implements AsyncValidator {
	@Input() userExistsOverride: boolean;
	constructor(private userService: UserService) { }

	validate(control: AbstractControl): Observable<ValidationErrors> {
		if (this.userExistsOverride) {
			return of(null);
		}

		return this.userService.validateExistingUser(control.value).pipe(
			map((response: any) => {
				if (response.data.exists) {
					return { 'userExists': true };
				}
				return null;
			})
		);
	}
}
