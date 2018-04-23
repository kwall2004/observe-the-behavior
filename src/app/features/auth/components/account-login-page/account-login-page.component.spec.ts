import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountLoginPageComponent } from './account-login-page.component';
import { SharedTestingModule } from '../../../../testing';


describe('AccountLoginPageComponent', () => {
	let component: AccountLoginPageComponent;
	let fixture: ComponentFixture<AccountLoginPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AccountLoginPageComponent],
			imports: [SharedTestingModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AccountLoginPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
