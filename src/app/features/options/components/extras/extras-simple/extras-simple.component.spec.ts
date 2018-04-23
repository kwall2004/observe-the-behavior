import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalService } from 'ngx-bootstrap';
import { ExtrasSimpleComponent } from './extras-simple.component';
import { SharedModule } from '../../../../../shared';
import { ExtraSimpleColComponent } from '../extra-simple-col/extra-simple-col.component';
import { ExtraSimpleRowComponent } from '../extra-simple-row/extra-simple-row.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../../../../core';
import { ExtrasDataModel, ShortcutSecurityOptionModel, ExtrasInputModel } from '../models';
import { SharedTestingModule } from '../../../../../testing';

class MockModal { }

describe('ExtrasSimpleComponent', () => {
	let component: ExtrasSimpleComponent;
	let fixture: ComponentFixture<ExtrasSimpleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				ExtrasSimpleComponent,
				ExtraSimpleColComponent,
				ExtraSimpleRowComponent
			],
			imports: [
				StoreModule.forRoot(reducers),
				SharedModule,
				SharedTestingModule
			],
			providers: [
				{
					provide: BsModalService,
					useClass: MockModal
				}
			]
		})
			.compileComponents();
	}));



	beforeEach(() => {
		fixture = TestBed.createComponent(ExtrasSimpleComponent);
		component = fixture.componentInstance;

		component.extrasData = {
			componentData: {
				flex: { displayPrice: 1.00 },
				shortcutSecurity: { displayPrice: 2.00 },
				shortcutBoarding: { displayPrice: 3.00 },
				checkIn: { displayPrice: 4.00 }
			},
			shortcutSecurityOptions: {
				options: [
					{ selected: true, price: 7.77, description: 'bazinga' } as ShortcutSecurityOptionModel
				]
			},
			userSelection: {
				flexSelected: false,
				shortcutSecuritySelection: null,
				shortcutBoardingSelected: false,
				checkInSelection: null
			} as ExtrasInputModel
		} as ExtrasDataModel;

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
