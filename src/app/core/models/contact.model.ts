export interface ContactModel {
	name: {
		first: string;
		last: string;
	};
	phoneNumbers: {
		number: string;
	}[];
}
