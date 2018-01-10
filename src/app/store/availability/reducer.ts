import * as AvailabilityActions from './actions';

export interface State {
  cities: object;
  stations: object;
  origin: object;
  destination: object;
  beginDate: Date;
  lowFareData: object;
  data: object;
}

const initialState: State = {
  cities: null,
  stations: null,
  origin: null,
  destination: null,
  beginDate: null,
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
      const beginDate = localStorage.getItem('beginDate');
      return {
        ...state,
        stations: action.payload,
        origin: JSON.parse(localStorage.getItem('origin')),
        destination: JSON.parse(localStorage.getItem('destination')),
        beginDate: beginDate ? new Date(beginDate) : new Date()
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
