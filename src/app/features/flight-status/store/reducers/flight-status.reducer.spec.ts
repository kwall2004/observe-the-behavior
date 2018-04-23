import { reducer, State } from './flight-status.reducer';
import { FlightStatusGetStatusSuccess, FlightStatusGetStatusError } from '../actions';



describe('Flight Status Page Reducer', () => {

	const response = [
		{
			journeyID: 1,
			arrivalCity: 'arrival station',
			arrivalStationCode: 'ZZZ',
			departureCity: 'departure station',
			departureStationCode: 'AAA'
		},
		{
			journeyID: 2,
			arrivalCity: 'arrival station',
			arrivalStationCode: 'ZZZ',
			departureCity: 'departure station',
			departureStationCode: 'AAA'
		},
		{
			journeyID: 2,
			arrivalCity: 'arrival station',
			arrivalStationCode: 'ZZZ',
			departureCity: 'departure station',
			departureStationCode: 'AAA'
		}
	];

	const initialState: State = {
		responseReceived: false,
		responseHasError: false,
		flightStatusResponse: null,
		notificationSubscriptions: {}
	};

	const successState: State = {
		responseReceived: true,
		responseHasError: false,
		flightStatusResponse: [
			[
				{
					journeyID: 1,
					arrivalCity: 'arrival station',
					arrivalStationCode: 'ZZZ',
					departureCity: 'departure station',
					departureStationCode: 'AAA'
				}
			],
			[
				{
					journeyID: 2,
					arrivalCity: 'arrival station',
					arrivalStationCode: 'ZZZ',
					departureCity: 'departure station',
					departureStationCode: 'AAA'
				},
				{
					journeyID: 2,
					arrivalCity: 'arrival station',
					arrivalStationCode: 'ZZZ',
					departureCity: 'departure station',
					departureStationCode: 'AAA'
				}
			]
		],
		notificationSubscriptions: {}
	};

	const failState: State = {
		...initialState,
		responseReceived: true,
		responseHasError: true
	};

	it('updates state on get flight status success', () => {
		expect(
			reducer(initialState, new FlightStatusGetStatusSuccess(response))
		).toEqual(successState);
	});

	it('updates state on get flight status error', () => {
		expect(
			reducer(successState, new FlightStatusGetStatusError())
		).toEqual(failState);
	});

});
