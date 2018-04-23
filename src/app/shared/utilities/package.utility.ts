export function getArray(value: any, key1: string, key2?: string): any[] {
	if (value[key1]) {
		if (key2) {
			if (!(value[key1][key2] instanceof Array)) {
				return [value[key1][key2]];
			} else {
				return value[key1][key2];
			}
		} else {
			if (!(value[key1] instanceof Array)) {
				return [value[key1]];
			} else {
				return value[key1];
			}
		}
	} else {
		return [];
	}
}
