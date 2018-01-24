import * as AvailabilityActions from './actions';
import * as moment from 'moment';

import { Station } from '../../models/station';

export interface State {
  cities: object;
  stations: [Station];
  origin: Station;
  destination: Station;
  lowFareDate: Date;
  beginDate: Date;
  lowFareData: object;
  data: object;
}

const beginDateString: string = localStorage.getItem('beginDate');
const beginDate: Date = beginDateString ? new Date(beginDateString) : new Date();

const initialState: State = {
  cities: null,
  stations: null,
  origin: null,
  destination: null,
  lowFareDate: beginDate,
  beginDate: beginDate,
  lowFareData: null,
  data: null
};

export function reducer(state = initialState, action: AvailabilityActions.All): State {
  switch (action.type) {
    case AvailabilityActions.SET_CITIES:
      return {
        ...state,
        cities: action.payload
      };

    case AvailabilityActions.SET_STATIONS:
      return {
        ...state,
        stations: action.payload,
        origin: JSON.parse(localStorage.getItem('origin')),
        destination: JSON.parse(localStorage.getItem('destination'))
      };

    case AvailabilityActions.SET_ORIGIN:
      localStorage.setItem('origin', JSON.stringify(action.payload));
      return {
        ...state,
        origin: action.payload
      };

    case AvailabilityActions.SET_DESTINATION:
      localStorage.setItem('destination', JSON.stringify(action.payload));
      return {
        ...state,
        destination: action.payload
      };

    case AvailabilityActions.RESET_LOW_FARE_DATE:
      return {
        ...state,
        lowFareDate: state.beginDate
      };

    case AvailabilityActions.ADD_WEEK_TO_LOW_FARE_DATE:
      return {
        ...state,
        lowFareDate: moment(state.lowFareDate).add(7, 'days').toDate()
      };

    case AvailabilityActions.SUBTRACT_WEEK_FROM_LOW_FARE_DATE:
      return {
        ...state,
        lowFareDate: moment(state.lowFareDate).subtract(7, 'days').toDate()
      };

    case AvailabilityActions.SET_BEGIN_DATE:
      localStorage.setItem('beginDate', action.payload.toString());
      return {
        ...state,
        beginDate: action.payload
      };

    case AvailabilityActions.SET_LOW_FARE_DATA:
      return {
        ...state,
        lowFareData: action.payload
      };

    case AvailabilityActions.SET_DATA:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
}
