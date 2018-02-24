import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { SeatState, SeatsAssignSeats } from '../../store';

@Component({
	selector: 'app-seats',
	templateUrl: './seats.component.html',
	styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {
	constructor(private store: Store<SeatState>) { }

	ngOnInit() { }

	onSave() {
		this.store.dispatch(new SeatsAssignSeats());
	}

}
