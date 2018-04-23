import { createSelector } from '@ngrx/store';
import { resourceFeatureState } from '../reducers';
import { currentCultureState } from '../../store/selectors/culture.selector';

export const resourceStationsState = createSelector(
	resourceFeatureState,
	(state) => state.stations
);

export const resourceWorldRegionsState = createSelector(
	resourceFeatureState,
	() => ({
		'Caribbean': [
			'AUA',
			'BQN',
			'KIN',
			'MBJ',
			'PAP',
			'PUJ',
			'SAP',
			'SDQ',
			'SJO',
			'SJU',
			'STI',
			'STT',
			'SXM',
			'CAP'
		],
		'Central America': [
			'CUN',
			'GUA',
			'MGA',
			'PTY',
			'SAL',
			'SJD',
			'GYE'
		],
		'North America': [
			'ACY',
			'ATL',
			'AXM',
			'BDL',
			'BOS',
			'BWI',
			'CAK',
			'CLE',
			'CMH',
			'CRW',
			'DEN',
			'DFW',
			'DTW',
			'EWR',
			'FLL',
			'IAG',
			'IAH',
			'LAS',
			'LAX',
			'LBE',
			'LGA',
			'MCI',
			'MCO',
			'MSP',
			'MSY',
			'MYR',
			'OAK',
			'ORD',
			'PBG',
			'PBI',
			'PDX',
			'PHL',
			'PHX',
			'PIT',
			'RIC',
			'RSW',
			'SAN',
			'SEA',
			'TPA',
			'MIA',
			'YUL',
			'YYZ',
			'YVR'
		],
		'South America': [
			'BOG',
			'CTG',
			'LIM',
			'MDE'
		]
	})
);

export const resourceTitleState = createSelector(
	currentCultureState,
	(culture) => {
		if (culture === 'en-US') {
			return [
				{ id: 'Mr', name: 'Mr.' },
				{ id: 'Mrs', name: 'Mrs.' },
				{ id: 'Ms', name: 'Ms.' },
			];
		}
		if (culture === 'es-PR') {
			return [
				{ id: 'Mr', name: 'Sr.' },
				{ id: 'Mrs', name: 'Sra.' },
				{ id: 'Ms', name: 'Srta.' },
			];
		}
	}
);

export const resourceSuffixState = createSelector(
	currentCultureState,
	(culture) => {
		if (culture === 'en-US') {
			return [
				{ id: 'Jr', name: 'Jr.' },
				{ id: 'Sr', name: 'Sr.' },
				{ id: '', name: 'None' },
			];
		}
		if (culture === 'es-PR') {
			return [
				{ id: 'Jr', name: 'Junior.' },
				{ id: 'Sr', name: 'Senior.' },
				{ id: '', name: 'Ninguna' },
			];
		}
	}
);

export const resourceDateMonthState = createSelector(
	currentCultureState,
	(culture) => {
		if (culture === 'en-US') {
			return [
				{ id: 1, jsVal: 0, longName: 'January', shortName: 'Jan' },
				{ id: 2, jsVal: 1, longName: 'February', shortName: 'Feb' },
				{ id: 3, jsVal: 2, longName: 'March', shortName: 'Mar' },
				{ id: 4, jsVal: 3, longName: 'April', shortName: 'Apr' },
				{ id: 5, jsVal: 4, longName: 'May', shortName: 'May' },
				{ id: 6, jsVal: 5, longName: 'June', shortName: 'June' },
				{ id: 7, jsVal: 6, longName: 'July', shortName: 'July' },
				{ id: 8, jsVal: 7, longName: 'August', shortName: 'Aug' },
				{ id: 9, jsVal: 8, longName: 'September', shortName: 'Sept' },
				{ id: 10, jsVal: 9, longName: 'October', shortName: 'Oct' },
				{ id: 11, jsVal: 10, longName: 'November', shortName: 'Nov' },
				{ id: 12, jsVal: 11, longName: 'December', shortName: 'Dec' }
			];
		}
		if (culture === 'es-PR') {
			return [
				{ id: 1, jsVal: 0, longName: 'enero', shortName: 'enero' },
				{ id: 2, jsVal: 1, longName: 'febrero', shortName: 'feb' },
				{ id: 3, jsVal: 2, longName: 'marzo', shortName: 'marzo' },
				{ id: 4, jsVal: 3, longName: 'abril', shortName: 'abr' },
				{ id: 5, jsVal: 4, longName: 'mayo', shortName: 'mayo' },
				{ id: 6, jsVal: 5, longName: 'junio', shortName: 'jun' },
				{ id: 7, jsVal: 6, longName: 'julio', shortName: 'jul' },
				{ id: 8, jsVal: 7, longName: 'agosto', shortName: 'agosto' },
				{ id: 9, jsVal: 8, longName: 'septiembre', shortName: 'sept' },
				{ id: 10, jsVal: 9, longName: 'octubre', shortName: 'oct' },
				{ id: 11, jsVal: 10, longName: 'noviembre', shortName: 'nov' },
				{ id: 12, jsVal: 11, longName: 'diciembre', shortName: 'dic' }
			];
		}
	}
);
