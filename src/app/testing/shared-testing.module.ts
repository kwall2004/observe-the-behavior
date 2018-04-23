import { NgModule, Input, Pipe, PipeTransform } from '@angular/core';
import { Component, Directive } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';


@Pipe({ name: 'values' })
class MockValuesPipe implements PipeTransform {
	transform() { }
}

@Pipe({ name: 'keys' })
class MockKeysPipe implements PipeTransform {
	transform() { }
}

@Pipe({ name: 'ssrPrice' })
class MockSsrPricePipe implements PipeTransform {
	transform() { }
}
@Pipe({ name: 'segment' })
class MockSegmentPipe implements PipeTransform {
	transform() { }
}
@Pipe({ name: 'stationName$' })
class MockStationNamePipe implements PipeTransform {
	transform() { }
}

@Component({
	selector: 'app-input',
	template: ''
})
class MockInputComponent {
	@Input() labelText;
	@Input() autoLabel;
}

@Component({
	selector: 'app-count-picker',
	template: ''
})
class MockCountPickerComponent {
	@Input() max;
	@Input() min;
	@Input() count;
	@Input() disabled;
	@Input() maxDisabled;
}

@Component({
	selector: 'app-booking-info-summary',
	template: ''
})
class MockBookingInfoSummaryComponent {
	@Input() booking;
}

@Component({
	selector: 'app-contact-info-summary',
	template: ''
})
class MockContactInfoSummaryComponent {
	@Input() contacts;
	@Input() edit;
}

@Component({
	selector: 'app-flight-info-summary',
	template: ''
})
class MockFlightInfoSummaryComponent {
	@Input() booking;
}

@Component({
	selector: 'app-passenger-info-summary',
	template: ''
})
class MockPassengerInfoSummaryComponent {
	@Input() booking;
	@Input() edit;
	@Input() bagSelection;
}

@Component({
	selector: 'app-flight-search',
	template: ''
})
class MockFlightSearchComponent {
	@Input() stations: any;
	@Input() worldRegions: any;
	@Input() criteria: any;
	@Input() multipleDates: boolean;
}

@Component({
	selector: 'app-flight-only-search',
	template: ''
})
class MockFlightOnlySearchComponent {
	@Input() stations: any;
	@Input() worldRegions: any;
	@Input() searchInput: any;
}

@Component({
	selector: 'app-package-search',
	template: ''
})
class MockPackageSearchComponent {
	@Input() stations: any;
	@Input() worldRegions: any;
	@Input() searchInput: any;
}

@Directive({
	selector: '[appDropdown]',
	exportAs: 'app-dropdown'
})
class MockDropdownDirective {
}

@Component({
	selector: 'app-station-picker',
	template: ''
})
class MockStationPickerComponent {
	@Input() stations: any;
	@Input() worldRegions: any;
}

@Component({
	selector: 'app-home-links',
	template: ''
})
class MockHomeLinksComponent {
}

@Component({
	selector: 'app-branded-modal',
	template: ''
})
class MockBrandedModalComponent {
	@Input() headerText;
	@Input() modalRef;
}

@Directive({
	/* tslint:disable-next-line */
	selector: 'input[nkInput], textarea[nkInput]',
})
class MockNkInputDirective {
}

@Directive({
	selector: '[appUserExists][ngModel]',
})
class MockUserExistsDirective {
	@Input('userExistsOverride') userExistsOverride;
}

const translations: any = { 'TEST': 'This is a test' };
export class FakeLoader implements TranslateLoader {
	getTranslation(): Observable<any> {
		return of(translations);
	}
}

export function ensureObjectIsMockable<T extends Object, K extends keyof T>(target: T, property: K) {
	Object.defineProperty(target, property, { writable: true, value: target[property] });
}

@NgModule({
	imports: [TranslateModule.forRoot({
		loader: { provide: TranslateLoader, useClass: FakeLoader }
	})],
	declarations: [
		MockInputComponent,
		MockCountPickerComponent,
		MockNkInputDirective,
		MockUserExistsDirective,
		MockBookingInfoSummaryComponent,
		MockContactInfoSummaryComponent,
		MockFlightInfoSummaryComponent,
		MockPassengerInfoSummaryComponent,
		MockValuesPipe,
		MockKeysPipe,
		MockSsrPricePipe,
		MockSegmentPipe,
		MockStationNamePipe,
		MockFlightSearchComponent,
		MockFlightOnlySearchComponent,
		MockDropdownDirective,
		MockStationPickerComponent,
		MockPackageSearchComponent,
		MockHomeLinksComponent,
		MockBrandedModalComponent
	],
	exports: [
		TranslateModule,
		MockInputComponent,
		MockCountPickerComponent,
		MockNkInputDirective,
		MockUserExistsDirective,
		MockBookingInfoSummaryComponent,
		MockContactInfoSummaryComponent,
		MockFlightInfoSummaryComponent,
		MockPassengerInfoSummaryComponent,
		MockValuesPipe,
		MockKeysPipe,
		MockSsrPricePipe,
		MockSegmentPipe,
		MockStationNamePipe,
		MockFlightSearchComponent,
		MockFlightOnlySearchComponent,
		MockPackageSearchComponent,
		MockDropdownDirective,
		MockStationPickerComponent,
		MockHomeLinksComponent,
		MockBrandedModalComponent
	]
})
export class SharedTestingModule { }
