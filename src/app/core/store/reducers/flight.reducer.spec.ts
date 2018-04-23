import { INITIAL_STATE, reducer } from './flight.reducer';
import { FlightAddSearchResult, FlightAddLowFareSearchResult } from '../actions';
import { FlightSearchResultModel } from '../../models';

describe('flight reducer', () => {
	it('returns updated state on FlightAddSearchResult', () => {
		const result: FlightSearchResultModel = {
			search: {
				index: 1,
				originStationCode: 'test',
				destinationStationCode: 'test',
				date: new Date(2018, 1, 1),
				adultCount: 1,
				childCount: 1
			},
			data: {
				test: 'test'
			}
		};

		expect(reducer(undefined, new FlightAddSearchResult(result))).toEqual({
			...INITIAL_STATE,
			searchResults: [result]
		});
	});

	it('returns updated state on FlightAddLowFareSearchResult', () => {
		const result = {
			search: {
				index: 1,
				originStationCode: 'test',
				destinationStationCode: 'test',
				date: new Date(2018, 1, 1),
				adultCount: 1,
				childCount: 1
			},
			data: {
				test: 'test'
			}
		};

		expect(reducer(undefined, new FlightAddLowFareSearchResult(result))).toEqual({
			...INITIAL_STATE,
			lowFareSearchResults: [result]
		});
	});
});
