import { TestBed, async } from '@angular/core/testing';
import { TestingModule } from './material-testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './core';

import { AppComponent } from './app.component';

const translations: any = { 'TEST': 'This is a test' };
class FakeLoader implements TranslateLoader {
	getTranslation(lang: string): Observable<any> {
		return of(translations);
	}
}

@Component({
	selector: 'app-footer',
	template: ''
})
class MockFooterComponent {
}

@Component({
	selector: 'app-header',
	template: ''
})
class MockHeaderComponent {
}

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MockFooterComponent,
				MockHeaderComponent,
				AppComponent
			],
			imports: [
				TestingModule,
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
