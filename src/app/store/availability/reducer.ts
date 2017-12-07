import * as AvailabilityActions from './actions';

export interface State {
  cities: object;
  origin: string;
  destination: string;
  beginDate: Date;
  data: object;
}

const initialState: State = {
  cities: null,
  origin: null,
  destination: null,
  beginDate: null,
  data: null
};

export function reducer(state = initialState, action: AvailabilityActions.All): State {
  switch (action.type) {
    case AvailabilityActions.SET_CITIES:
      return {
        ...state,
        cities: action.payload,
        origin: action.payload ? action.payload[0]['cityCode'] : null,
        destination: action.payload ? action.payload[0]['cityCode'] : null
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

    case AvailabilityActions.SET_DATA:
      return {
        ...state,
        data: action.payload
      };

    case AvailabilityActions.CLEAR_DATA:
      return {
        ...state,
        data: null
      };

    default:
      return state;
  }
}
