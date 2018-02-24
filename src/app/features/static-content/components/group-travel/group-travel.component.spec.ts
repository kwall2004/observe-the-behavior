import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTravelComponent } from './group-travel.component';

describe('GroupTravelComponent', () => {
	let component: GroupTravelComponent;
	let fixture: ComponentFixture<GroupTravelComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [GroupTravelComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(GroupTravelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
