import { initializeAvailabilityState, AvailabilityState } from './availability.state';
import * as AvailabilityStateActions from './availability.action';

export type Action = AvailabilityStateActions.All;

const defaultState: AvailabilityState = {
    startDate: new Date(),
    loading: false
}

export function AvailabilityReducer(state = defaultState, action: Action) {
    switch (action.type) {

    }
}