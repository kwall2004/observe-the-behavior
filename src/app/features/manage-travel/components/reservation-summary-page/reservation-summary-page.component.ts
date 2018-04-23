import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { Store } from '@ngrx/store';
import { CoreState, bookingState, currentFlowState, bagsSelectedState } from '../../../../core';
import { Observable } from 'rxjs/Observable';
import { HazmatAcceptanceModalComponent } from '../hazmat-acceptance-modal/hazmat-acceptance-modal.component';

@Component({
	selector: 'app-reservation-summary-page',
	templateUrl: './reservation-summary-page.component.html',
	styleUrls: ['./reservation-summary-page.component.scss']
})
export class ReservationSummaryPageComponent implements OnInit {
	booking$: Observable<any>;
	flow$: Observable<any>;
	bagSelection$: Observable<any>;

	constructor(private store: Store<CoreState>,
		private modal: BsModalService) { }

	ngOnInit() {
		this.booking$ = this.store.select(bookingState);
		this.flow$ = this.store.select(currentFlowState);
		this.bagSelection$ = this.store.select(bagsSelectedState);
	}

	openHazmatModal() {
		this.modal.show(HazmatAcceptanceModalComponent);
	}
}
