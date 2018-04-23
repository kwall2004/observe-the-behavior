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
					'P': {
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
		case BookingActionTypes.RESET_SUCCESS:
			return {
				...state,
				data: null
			};
		case BookingActionTypes.SET_CONTACT_FROM_LOGIN:
			const { ...person } = action.payload;
			const updated = {
				'P': {
					'contactTypeCode': 'P',
					'name': {
						'first': person.name.first,
						'middle': person.name.middle,
						'last': person.name.last,
						'title': person.name.title,
						'suffix': person.name.suffix
					},
					'phoneNumbers': [
						{
							'type': person.phoneNumbers[0].type,
							'number': person.phoneNumbers[0].number,
						}
					],
					'address': {
						'lineOne': person.addresses[0].lineOne,
						'countryCode': person.addresses[0].countryCode,
						'provinceState': person.addresses[0].provinceState,
						'city': person.addresses[0].city,
						'postalCode': person.addresses[0].postalCode
					},
					'emailAddress': person.emailAddresses[0].email,
					'customerNumber': person.customerNumber
				}
			};
			return {
				...state,
				data: {
					...state.data,
					contacts: updated
				}
			};
		case BookingActionTypes.SET_PASSENGER_FROM_LOGIN:
			const primaryPassengerKey = Object.keys(state.data.passengers)[0];
			const { ...loggedInPerson } = action.payload;
			const primaryPassenger = {
				...state.data.passengers,
				[primaryPassengerKey]: {
					...state.data.passengers[primaryPassengerKey],
					'passengerKey': primaryPassengerKey,
					'customerNumber': null,
					'name': {
						'first': loggedInPerson.name.first,
						'middle': loggedInPerson.name.middle,
						'last': loggedInPerson.name.last,
						'title': loggedInPerson.name.title,
						'suffix': loggedInPerson.name.suffix,
					},
					'info': {
						'dateOfBirth': loggedInPerson.details.dateOfBirth,
					},
					'travelDocuments': loggedInPerson.travelDocuments,
				}
			};
			return {
				...state,
				data: {
					...state.data,
					passengers: primaryPassenger
				}
			};
	}
	return state;
}
