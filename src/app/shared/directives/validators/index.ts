import { ConfirmMatchDirective } from './confirm-match/confirm-match.directive';
import { UserExistsDirective } from './user-exists/user-exists.directive';
import { EmailValidatorDirective } from './email/email-validator.directive';
import { PasswordValidatorDirective } from './password/password-validator.directive';
import { ZipcodePlusFourValidatorDirective } from './zipcodeplusfour/zipcodeplusfour-validator.directive';
import { PassportValidatorDirective } from './passport/passport-validator.directive';
import { PassportExpirationValidatorDirective } from './passport-expiration/passport-expiration-validator.directive';
import { CityStationDirective } from './city-station/city-station.directive';

export const validators = [
	ConfirmMatchDirective,
	UserExistsDirective,
	EmailValidatorDirective,
	PasswordValidatorDirective,
	ZipcodePlusFourValidatorDirective,
	PassportValidatorDirective,
	PassportExpirationValidatorDirective,
	CityStationDirective
];

export * from './confirm-match/confirm-match.directive';
export * from './user-exists/user-exists.directive';
export * from './email/email-validator.directive';
export * from './password/password-validator.directive';
export * from './zipcodeplusfour/zipcodeplusfour-validator.directive';
export * from './passport/passport-validator.directive';
export * from './passport-expiration/passport-expiration-validator.directive';
export * from './city-station/city-station.directive';
