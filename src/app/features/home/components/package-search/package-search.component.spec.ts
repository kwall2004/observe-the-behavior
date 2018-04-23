import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SharedTestingModule } from '../../../../testing';

import { PackageSearchComponent } from './package-search.component';


describe('PackageSearchComponent', () => {
	let component: PackageSearchComponent;
	let fixture: ComponentFixture<PackageSearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				PackageSearchComponent
			],
			imports: [
				FormsModule,
				SharedTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PackageSearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
