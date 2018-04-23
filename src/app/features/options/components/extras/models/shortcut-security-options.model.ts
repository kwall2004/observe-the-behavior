import { ShortcutSecurityOptionModel } from './shortcut-security-option.model';

export class ShortcutSecurityOptionsModel {

	constructor(public readonly options: ShortcutSecurityOptionModel[]) { }

	total(selections: boolean[]): number {
		if (!this.options) {
			throw Error('An attempt was made to sum a list of prices which does not exist.');
		}

		let total = 0;
		this.options.forEach((e, i) => {
			total += selections[i] ? Number(e.price) : 0;
		});
		return total;
	}

}
