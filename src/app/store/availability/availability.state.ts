export interface AvailabilityState {
    startDate: Date;
    loading: boolean;
    data: object;
}

export const initializeAvailabilityState = function () {
    return {
        startDate: new Date(),
        loading: false
    }
}