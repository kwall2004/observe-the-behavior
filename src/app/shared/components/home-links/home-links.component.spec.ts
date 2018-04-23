import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLinksComponent } from './home-links.component';
import { SharedTestingModule } from '../../../testing';

describe('HomeLinksComponent', () => {
	let component: HomeLinksComponent;
	let fixture: ComponentFixture<HomeLinksComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HomeLinksComponent],
			imports: [SharedTestingModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeLinksComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
