import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from '../../../../material-testing';
import { Component, Directive, Input } from '@angular/core';

import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../../../core';

import { HeaderComponent } from './header.component';

const translations: any = { 'TEST': 'This is a test' };
class FakeLoader implements TranslateLoader {
	getTranslation(lang: string): Observable<any> {
		return of(translations);
	}
}

@Component({
	selector: 'app-culture-change',
	template: ''
})
class MockCultureChangeComponent {
}

@Component({
	selector: 'app-sign-in',
	template: ''
})
class MockSignInComponent {
}

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				HeaderComponent,
				MockCultureChangeComponent,
				MockSignInComponent
			],
			imports: [
				TestingModule,
				StoreModule.forRoot(reducers),
				TranslateModule.forRoot({
					loader: { provide: TranslateLoader, useClass: FakeLoader }
				})
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
