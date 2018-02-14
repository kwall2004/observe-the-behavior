import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Directive, Input } from '@angular/core';
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { reducers } from '@app/core';

import { AppComponent } from './app.component';

const translations: any = {'TEST': 'This is a test'};
class FakeLoader implements TranslateLoader {
	getTranslation(lang: string): Observable<any> {
		return of(translations);
	}
}

@Directive({
	/* tslint:disable-next-line */
	selector: 'button[mat-button]'
})
class MockButtonDirective {
	@Input() matMenuTriggerFor: any;
}

@Component({
	/* tslint:disable-next-line */
	selector: 'mat-menu',
	template: ''
})
class MockMenuComponent {
}

@Component({
	/* tslint:disable-next-line */
	selector: 'mat-toolbar',
	template: ''
})
class MockToolbarComponent {
}

@Component({
	/* tslint:disable-next-line */
	selector: 'mat-progress-bar',
	template: ''
})
class MockProgressbarComponent {
}
@Component({
	/* tslint:disable-next-line */
	selector: 'app-culture-change',
	template: ''
})
class MockCultureChangeComponent {
}
@Component({
	/* tslint:disable-next-line */
	selector: 'app-sign-in',
	template: ''
})
class MockSignInComponent {
}

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				MockButtonDirective,
				MockMenuComponent,
				MockToolbarComponent,
				MockProgressbarComponent,
				MockCultureChangeComponent,
				MockSignInComponent
			],
			imports: [
				RouterTestingModule,
				StoreModule.forRoot(reducers),
				TranslateModule.forRoot({
					loader: { provide: TranslateLoader, useClass: FakeLoader }
				})
			]
		})
			.compileComponents();
	}));

	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	}));
});
