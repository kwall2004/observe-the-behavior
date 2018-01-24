import * as BookingActions from './actions';

export interface State {
  data: object;
}

const initialState: State = {
  data: null
};

export function reducer(state = initialState, action: BookingActions.All): State {
  switch (action.type) {
    case BookingActions.SET_DATA:
      const data = action.payload ? Object.assign({}, action.payload) : null;

      if (data && Object.keys(data['contacts']).length === 0) {
        data['contacts'] = {
          '': {
            'contactTypeCode': 'P',
            'phoneNumbers': [
              {
                'type': 0,
                'number': ''
              }
            ],
            'name': {
              'first': '',
              'last': ''
            }
          }
        };
      }

      return {
        ...state,
        data: data
      };

    default:
      return state;
  }
}
