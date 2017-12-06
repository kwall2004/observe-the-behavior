import * as BookingActions from './actions';

export interface State {
  data: object;
  passengers: object[];
}

const initialState: State = {
  data: null,
  passengers: []
}

export function reducer(state = initialState, action: BookingActions.All): State {
  switch (action.type) {
    case BookingActions.SET_DATA:
      let passengers = [];

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

    default:
      return state;
  }
}
