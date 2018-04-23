import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { NgProgress } from 'ngx-progressbar';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { StoreModule, Store } from '@ngrx/store';

import { CoreState, reducers, ResourceGetStations, appLoadingState, LocalStorageService } from './core';
import { AppComponent } from './app.component';
import { MockLocalStorageService } from './testing';


const translations: any = { 'TEST': 'This is a test' };
class FakeLoader implements TranslateLoader {
	getTranslation(): Observable<any> {
		return of(translations);
	}
}

@Component({
	selector: 'app-footer',
	template: ''
})
class MockFooterComponent { }

@Component({
	selector: 'app-header',
	template: ''
})
class MockHeaderComponent { }

@Component({
	/* tslint:disable-next-line */
	selector: 'ng-progress',
	template: ''
})
class MockProgressBarComponent {
	@Input() color: any;
}

class MockProgressBar {
	done() { }
}

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MockFooterComponent,
				MockHeaderComponent,
				MockProgressBarComponent,
				AppComponent
			],
			imports: [
				RouterTestingModule,
				StoreModule.forRoot(reducers),
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader,
						useClass: FakeLoader
					}
				})
			],
			providers: [
				{
					provide: NgProgress,
					useClass: MockProgressBar
				},
				{
					provide: LocalStorageService,
					useClass: MockLocalStorageService
				}
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();
		spyOn(store, 'select').and.callThrough();

		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('is created', () => {
		expect(component).toBeTruthy();
	});

	it('selects state', () => {
		expect(store.select).toHaveBeenCalledWith(appLoadingState);
	});

	it('dispatches actions', () => {
		expect(store.dispatch).toHaveBeenCalledWith(new ResourceGetStations());
	});
});
