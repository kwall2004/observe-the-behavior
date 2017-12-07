import * as BookingActions from './actions';

export interface State {
  data: object;
  passengers: object[];
}

const initialState: State = {
  data: null,
  passengers: []
};

export function reducer(state = initialState, action: BookingActions.All): State {
  switch (action.type) {
    case BookingActions.SET_DATA:
      const passengers = [];

      if (action.payload) {
        Object.keys(action.payload['passengers']).forEach(key => {
          passengers.push(action.payload['passengers'][key]);
        });
      }

      return {
        ...state,
        data: action.payload,
        passengers: passengers
      };

    case BookingActions.SET_PASSENGER_FIRST_NAME:
      return {
        ...state,
        passengers: state.passengers.map((passenger, index) => {
          if (index === 0) {
            if (!passenger['name']) {
              passenger['name'] = {};
            }
            passenger['name']['first'] = action.payload;
          }
          return passenger;
        })
      };

    case BookingActions.SET_PASSENGER_LAST_NAME:
      return {
        ...state,
        passengers: state.passengers.map((passenger, index) => {
          if (index === 0) {
            if (!passenger['name']) {
              passenger['name'] = {};
            }
            passenger['name']['last'] = action.payload;
          }
          return passenger;
        })
      };

    default:
      return state;
  }
}
