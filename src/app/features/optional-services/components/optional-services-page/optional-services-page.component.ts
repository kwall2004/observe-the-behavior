import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { OptionalServicesState } from '../../store/reducers';
import { OptionalServicesRetrieveExistingBagotronPricing } from '../../store/actions';
import { ApoRetrieveBookingRequest } from '../../models/apo-retrieve-booking.model';
import { Observable } from 'rxjs/Observable';
import { bagotronDataState } from '../../store/selectors';
import { EventEmitter } from 'events';
import { Subscription } from 'rxjs/Subscription';
import { OptionalServicesRetrieveNewBagotronPricing, BagotronSetData } from '../../store';
import { ApoAvailabilityRequest } from '../../models';
import { StationModel, resourceStationsState } from '../../../../core';
import { BsDatepickerConfig, BsModalService } from 'ngx-bootstrap';
import { ConfirmationCodeModalComponent } from '../../../../shared/components';

export class DropdownValue {
	key: string;
	value: string;
	constructor(key: string, value: string) {
		this.key = key;
		this.value = value;
	}
}

@Component({
	selector: 'app-optional-services-page',
	templateUrl: './optional-services-page.component.html',
	styleUrls: ['./optional-services-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class OptionalServicesPageComponent implements OnInit, OnDestroy {
	subscription: Subscription;
	stations$: Observable<StationModel[]>;
	originStations: StationModel[];
	destinationStations: StationModel[];
	selectedOriginStation: StationModel;
	selectedDestinationStation: StationModel;
	journeyKey: string;
	selectedAdultCount: DropdownValue;
	selectedChildCount: DropdownValue;
	selectedJourneyFrom: DropdownValue;
	selectedJourneyTo: DropdownValue;
	journeyFromLowestFareKey: string;
	journeyToLowestFareKey: string;
	journeyFromLowestFare: number;
	journeyToLowestFare: number;
	departureTime: string;
	journeyOrigin: string;
	@Input() searchInput: ApoRetrieveBookingRequest;
	@Input() requestExisting: ApoRetrieveBookingRequest;
	@Input() adultCountValues: DropdownValue[];
	@Input() childCountValues: DropdownValue[];
	@Input() childCount: DropdownValue[];
	@Input() journeysFrom: DropdownValue[];
	@Input() journeysTo: DropdownValue[];
	@Output() select: EventEmitter;
	requestNew: ApoAvailabilityRequest;
	tab: number;
	isNewTripSearch: boolean;
	isExistingTripSearch: boolean;
	bagotronData$: Observable<any>;
	bsConfig: Partial<BsDatepickerConfig>;

	constructor(private store: Store<OptionalServicesState>, private confirmationCodeModal: BsModalService) {
		this.select = new EventEmitter();
	}

	ngOnInit() {
		this.tab = 1;
		this.isNewTripSearch = false;
		this.isExistingTripSearch = false;
		this.bsConfig = { containerClass: 'theme-blue' };
		this.adultCountValues = [
			{ 'key': '1', 'value': '1 adult' },
			{ 'key': '2', 'value': '2 adults' },
			{ 'key': '3', 'value': '3 adults' },
			{ 'key': '4', 'value': '4 adults' },
			{ 'key': '5', 'value': '5 adults' },
			{ 'key': '6', 'value': '6 adults' },
			{ 'key': '7', 'value': '7 adults' },
			{ 'key': '8', 'value': '8 adults' },
			{ 'key': '9', 'value': '9 adults' }
		];
		this.selectedAdultCount = this.adultCountValues[0];

		this.childCountValues = [
			{ 'key': '0', 'value': '0 children' },
			{ 'key': '1', 'value': '1 child' },
			{ 'key': '2', 'value': '2 children' },
			{ 'key': '3', 'value': '3 children' },
			{ 'key': '4', 'value': '4 children' },
			{ 'key': '5', 'value': '5 children' },
			{ 'key': '6', 'value': '6 children' },
			{ 'key': '7', 'value': '7 children' },
			{ 'key': '8', 'value': '8 children' }
		];
		this.selectedChildCount = this.childCountValues[0];

		this.stations$ = this.store.pipe(select(resourceStationsState));

		this.bagotronData$ = this.store.select(bagotronDataState);
		this.subscription = this.bagotronData$.subscribe(data => {
			if (data != null) {
				this.journeysFrom = [];
				this.journeysTo = [];
				this.journeyOrigin = data[0].origin;
				this.journeyFromLowestFare = null;
				this.journeyToLowestFare = null;

				data.forEach(journey => {
					this.journeyKey = journey.journeyKey;
					this.departureTime = journey.journeyDate.toString();

					if (this.journeyOrigin === journey.origin) {
						this.journeysFrom.push(new DropdownValue(this.journeyKey, (this.departureTime + ' Departure (Flight price from $' + journey.journeyLowestFare + ')')));
						if (this.journeyFromLowestFare === null || (journey.journeyLowestFare < this.journeyFromLowestFare)) {
							this.journeyFromLowestFare = journey.journeyLowestFare;
							this.journeyFromLowestFareKey = journey.journeyKey;
						}
					} else {
						this.journeysTo.push(new DropdownValue(this.journeyKey, (this.departureTime + ' Departure (Flight price from $' + journey.journeyLowestFare + ')')));
						if (this.journeyToLowestFare === null || (journey.journeyLowestFare < this.journeyToLowestFare)) {
							this.journeyToLowestFare = journey.journeyLowestFare;
							this.journeyToLowestFareKey = journey.journeyKey;
						}
					}
				});

				this.selectedJourneyFrom = this.journeysFrom.find(j => j.key === this.journeyFromLowestFareKey);
				this.selectedJourneyTo = this.journeysTo.find(j => j.key === this.journeyToLowestFareKey);
			}
		});
	}

	onChangeOriginStation(stationSelected) {
		this.selectedOriginStation = stationSelected;
	}

	onChangeDestinationStation(stationSelected) {
		this.selectedDestinationStation = stationSelected;
	}

	onChangeAdultCount(adultCountSelected) {
		this.selectedAdultCount = this.adultCountValues[Number(adultCountSelected.key) - 1];
	}

	onChangeChildCount(childCountSelected) {
		this.selectedChildCount = this.childCountValues[Number(childCountSelected.key)];
	}

	onChangeJourneysFrom(journeySelected) {
		this.journeyFromLowestFareKey = journeySelected.key;
	}

	onChangeJourneysTo(journeySelected) {
		this.journeyToLowestFareKey = journeySelected.key;
	}

	onRetrieveBagotronPrices(form: NgForm) {
		if (form.valid) {
			if (form.value.PNR !== undefined && form.value.PNR !== '') {
				this.requestExisting = { lastName: form.value.LastName, confirmationCode: form.value.PNR, apoToken: '' };
				this.store.dispatch(new OptionalServicesRetrieveExistingBagotronPricing(this.requestExisting));
			} else {
				this.requestNew = {
					originStationCode: this.selectedOriginStation.stationCode,
					destinationStationCode: this.selectedDestinationStation.stationCode,
					departureDate: form.value.departureDate,
					returnDate: form.value.returnDate,
					adultCount: Number(this.selectedAdultCount.key),
					childCount: Number(this.selectedChildCount.key),
					promoCode: form.value.promoCode,
					apoToken: ''
				};
				this.store.dispatch(new OptionalServicesRetrieveNewBagotronPricing(this.requestNew));
			}
		}
	}

	ngOnDestroy() {
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
	}

	toggleFormState(value: string) {
		if (value === 'newTrip') {
			this.isNewTripSearch = true;
		} else if (value === 'existingTrip') {
			this.isExistingTripSearch = true;
		} else {
			this.isNewTripSearch = this.isExistingTripSearch = false;
			this.store.dispatch(new BagotronSetData(null));
		}
	}

	openConfimationCodeModal() {
		this.confirmationCodeModal.show(ConfirmationCodeModalComponent);
	}

	bookNow() {
		// Do something to pass data to flight page.
	}

}
