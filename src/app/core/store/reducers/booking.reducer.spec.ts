import { reducer } from './booking.reducer';
import { BookingSetData, BookingGetData, BookingUpdatePrimaryContact, BookingAddPayment, BookingCommit } from '../actions';

describe('booking reducer', () => {
	it('returns updated state on BookingSetData with contacts', () => {
		expect(reducer(undefined, new BookingSetData({ contacts: 'test' }))).toEqual({
			data: { contacts: 'test' }
		});
	});

	it('returns updated state on BookingSetData with no contacts', () => {
		expect(reducer(undefined, new BookingSetData({ contacts: '' }))).toEqual({
			data: {
				contacts: {
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
				}
			}
		});
	});

	it('does nothing on BookingGetData', () => {
		expect(reducer(undefined, new BookingGetData())).toEqual({
			data: null
		});
	});

	it('does nothing on BookingSavePrimaryContact', () => {
		expect(reducer(undefined, new BookingUpdatePrimaryContact(
			{
				name: {
					first: 'test',
					last: 'test'
				},
				phoneNumbers: [
					{
						number: 'test'
					}
				]
			}
		))).toEqual({
			data: null
		});
	});

	it('does nothing on BookingAddPayment', () => {
		expect(reducer(undefined, new BookingAddPayment(
			{
				accountNumber: 'test',
				accountHolderName: 'test',
				amount: 0,
				currencyCode: 'USD',
				expiryDate: '01/01/2020',
				verificationCode: 'test',
				saveCard: false,
				address: 'test address'
			}
		))).toEqual({
			data: null
		});
	});

	it('does nothing on BookingCommit', () => {
		expect(reducer(undefined, new BookingCommit())).toEqual({
			data: null
		});
	});
});
