import { Inject } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AuthDialogComponent } from './auth-dialog.component';

describe('AuthDialogComponent', () => {
	let component: AuthDialogComponent;
	let fixture: ComponentFixture<AuthDialogComponent>;
	const mockDialogRef = jasmine.createSpy('mock');

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [MatDialogModule],
			providers: [
				{
					provide: MatDialogRef, useValue: mockDialogRef
				}
			],
			declarations: [AuthDialogComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AuthDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
