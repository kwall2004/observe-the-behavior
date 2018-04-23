import { FareSelectionModel } from './fare-selection.model';

export interface TripSelectionModel {
	fareSelections: { [key: string]: FareSelectionModel };
	adultCount: number;
	childCount: number;
}
