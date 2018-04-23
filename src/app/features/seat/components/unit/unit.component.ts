import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ExitSeatModalComponent } from '../exit-seat-modal/exit-seat-modal.component';
import { isAssigned, isUnavailable } from '../../../../shared';

@Component({
	selector: 'app-unit',
	templateUrl: './unit.component.html',
	styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit, OnDestroy {
	exitSeatSubscription: Subscription;
	@Input() unit: any;
	@Input() fees: any;
	@Input() bigFrontSeat: boolean;
	@Output() seatSelected = new EventEmitter<any>();
	price: any;
	assigned: boolean;
	unavailable: boolean;
	unitNgClass: any;

	constructor(public modalService: BsModalService) { }

	ngOnInit() {
		if (this.unit) {
			this.assigned = isAssigned(this.unit);
			this.unavailable = isUnavailable(this.unit);
			this.unitNgClass = {
				'standard2': this.unit.group === 3 || this.unit.group === 4 || this.unit.group === 5,
				'premium2': this.unit.group === 2,
				'big-front2': this.unit.group === 1,
				'unavailable2': this.unavailable,
				'assigned': this.assigned
			};
			if (this.unit.group) {
				this.price = this.fees.groups[this.unit.group].fees[0].serviceCharges[0].amount;
			}
		}
	}

	onUnitClick(unit) {
		if (unit.group === 2) {
			const modalRef: BsModalRef = this.modalService.show(ExitSeatModalComponent);
			this.exitSeatSubscription = modalRef.content.confirmed.subscribe(acceptedExitSeat => {
				acceptedExitSeat ? this.emitSeatSelection(unit) : this.exitSeatSubscription.unsubscribe();
			});
		} else {
			this.emitSeatSelection(unit);
		}
	}

	emitSeatSelection(unit) {
		const event = { unit, price: this.price };
		this.seatSelected.emit(event);
	}

	ngOnDestroy() {
		if (this.exitSeatSubscription) {
			this.exitSeatSubscription.unsubscribe();
		}
	}
}
