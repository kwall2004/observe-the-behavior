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
      return {
        ...state,
        stations: action.payload,
        origin: action.payload ? action.payload[0] : null,
        destination: action.payload ? action.payload[0] : null
      };

    case AvailabilityActions.SET_ORIGIN:
      return {
        ...state,
        origin: action.payload
      };

    case AvailabilityActions.SET_DESTINATION:
      return {
        ...state,
        destination: action.payload
      };

    case AvailabilityActions.SET_BEGIN_DATE:
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
