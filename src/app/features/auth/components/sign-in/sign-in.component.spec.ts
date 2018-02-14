import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs/observable/of';
import { MatDialog } from '@angular/material';
import { SignInComponent } from './sign-in.component';

class MatDialogMock {
	open() {
		return {
			afterClosed: () => of(null)
		};
	}
}

describe('SignInComponent', () => {
	let component: SignInComponent;
	let fixture: ComponentFixture<SignInComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SignInComponent],
			providers: [{
				provide: MatDialog, useClass: MatDialogMock,
			}
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SignInComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
