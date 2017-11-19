export interface AvailabilityState {
    startDate: Date;
    loading: boolean;
}

export const initializeAvailabilityState = function () {
    return {
        startDate: new Date(),
        loading: false
    }
}