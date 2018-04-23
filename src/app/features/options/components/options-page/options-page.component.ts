import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { combineLatest } from 'rxjs/observable/combineLatest';

import {
	CoreState, ShoppingCartSetVisitedPage, OptionSaveOptions,
	extrasInputState, OptionSetFlex, OptionSetShortCutSecurity, OptionSetShortCutBoarding, OptionSetCheckIn
} from '../../../../core';

import { ExtrasDataModel, ShortcutSecurityOptionsModel, ExtraInputModel, ExtraType } from '../extras/models';

@Component({
	selector: 'app-options-page',
	templateUrl: './options-page.component.html',
	styleUrls: ['./options-page.component.scss']
})
export class OptionsPageComponent implements OnInit {

	extrasData$: Observable<ExtrasDataModel>;

	constructor(
		private store: Store<CoreState>
	) { }

	ngOnInit() {
		this.store.dispatch(new ShoppingCartSetVisitedPage({ pageKey: 'options' }));

		// temporary mock observable
		const shortcutSecurityAvailability$ = of(
			[
				{ price: 1.00, description: 'option 1' },
				{ price: 2.00, description: 'option 2' }
			]
		);

		// temporary mock observable
		const extrasAvailability$ = of(
			{
				flex: {
					fee: 45.00
				},
				shortcutSecurity: {
					// assuming this extra gets its availability data a different way
				},
				shortcutBoarding: {
					fee: 5.99
				},
				checkIn: {
					fee: 10.00
				}
			}
		);

		// get the current input state for the extras component
		const selection$ = this.store.select(extrasInputState);

		// map data from input state and availability to shortcut security options model
		const shortcutSecurityOptions$ = combineLatest(selection$, shortcutSecurityAvailability$,
			(sel, item) => {

				let selection = [];

				if (sel.shortcutSecuritySelection === null) {
					selection = item.map(() => false);
				} else {
					selection = sel.shortcutSecuritySelection;
				}

				const result = item.map((e, i) => ({
					...e,
					selected: selection[i]
				}));

				return new ShortcutSecurityOptionsModel(result);
			}
		);

		// map previous observables to an ExtrasDataModel observable

		this.extrasData$ = combineLatest(extrasAvailability$, shortcutSecurityOptions$, selection$,
			(extrasAvailability, shortcutSecurityOptions, selection) => {
				return {
					componentData: {
						flex: {
							displayPrice: extrasAvailability.flex.fee
						},
						shortcutSecurity: {
							displayPrice: Math.min(...shortcutSecurityOptions.options.map(opt => opt.price))
						},
						shortcutBoarding: {
							displayPrice: extrasAvailability.shortcutBoarding.fee
						},
						checkIn: {
							displayPrice: extrasAvailability.checkIn.fee
						}
					},
					shortcutSecurityOptions: shortcutSecurityOptions,
					userSelection: selection
				} as ExtrasDataModel;
			}
		);
	}

	onExtraInput(value: ExtraInputModel) {
		switch (value.type) {
			case ExtraType.flex:
				this.store.dispatch(new OptionSetFlex(value.payload));
				break;
			case ExtraType.shortcutSecurity:
				this.store.dispatch(new OptionSetShortCutSecurity(value.payload));
				break;
			case ExtraType.shortcutBoarding:
				this.store.dispatch(new OptionSetShortCutBoarding(value.payload));
				break;
			case ExtraType.checkIn:
				this.store.dispatch(new OptionSetCheckIn(value.payload));
				break;
		}
	}

	onSave() {
		this.store.dispatch(new OptionSaveOptions());
	}

}
