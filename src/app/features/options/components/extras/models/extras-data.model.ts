import { ShortcutSecurityOptionsModel } from './shortcut-security-options.model';
import { ExtrasInputModel } from './extras-input.model';

export interface ExtrasDataModel {

	readonly componentData: {
		flex: { displayPrice: number };
		shortcutSecurity: { displayPrice: number };
		shortcutBoarding: { displayPrice: number };
		checkIn: { displayPrice: number };
	};

	readonly shortcutSecurityOptions: ShortcutSecurityOptionsModel;

	readonly userSelection: ExtrasInputModel;
}
