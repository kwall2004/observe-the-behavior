import { BookingActionTypes, BookingAction } from '../actions/booking.action';

export interface State {
	data: any;
}

const initialState: State = {
	data: null
};

export function reducer(state = initialState, action: BookingAction): State {
	switch (action.type) {
		case BookingActionTypes.SET_DATA:
			const data: any = action.payload ? Object.assign({}, action.payload) : null;

			if (data && Object.keys(data.contacts).length === 0) {
				data.contacts = {
					'': {
						'contactTypeCode': 'P',
						'phoneNumbers': [
							{
								'type': 0,
								'number': ''
							}
						],
						'name': {
							'first': '',
							'last': ''
						}
					}
				};
			}

			return {
				...state,
				data: data
			};
	}
	return state;
}
