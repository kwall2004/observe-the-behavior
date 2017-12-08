import * as BookingActions from './actions';

export interface State {
  data: object;
}

const initialState: State = {
  data: null
};

export function reducer(state = initialState, action: BookingActions.All): State {
  const passengerKey = state.data ? Object.keys(state.data['passengers'])[0] : null;

  switch (action.type) {
    case BookingActions.SET_DATA:
      return {
        ...state,
        data: action.payload
      };

    case BookingActions.SET_PASSENGER_FIRST_NAME:
      return {
        ...state,
        data: {
          ...state.data,
          passengers: {
            ...state.data['passengers'],
            [passengerKey]: {
              ...state.data['passengers'][passengerKey],
              name: {
                ...state.data['passengers'][passengerKey]['name'],
                first: action.payload
              }
            }
          }
        }
      };

    case BookingActions.SET_PASSENGER_LAST_NAME:
      return {
        ...state,
        data: {
          ...state.data,
          passengers: {
            ...state.data['passengers'],
            [passengerKey]: {
              ...state.data['passengers'][passengerKey],
              name: {
                ...state.data['passengers'][passengerKey]['name'],
                last: action.payload
              }
            }
          }
        }
      };

    default:
      return state;
  }
}
