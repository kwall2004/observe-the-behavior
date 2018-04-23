import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthModalComponent } from './auth-modal.component';
import { Store, StoreModule } from '@ngrx/store';
import { CoreState, reducers } from '../../../../core';
import { BsModalRef } from 'ngx-bootstrap';
import { SharedTestingModule } from '../../../../testing';


@Component({
	selector: 'app-login-form',
	template: '',

})
class MockAppLoginFormComponent {
	@Input() errors: any;
}

class MockModalRef { }

describe('AuthModalComponent', () => {
	let component: AuthModalComponent;
	let fixture: ComponentFixture<AuthModalComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				StoreModule.forRoot(reducers),
				SharedTestingModule
			],
			declarations: [
				AuthModalComponent,
				MockAppLoginFormComponent
			],
			providers: [
				{
					provide: BsModalRef,
					useClass: MockModalRef
				}
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();

		fixture = TestBed.createComponent(AuthModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
