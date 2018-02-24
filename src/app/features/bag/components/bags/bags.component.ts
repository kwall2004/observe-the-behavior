import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { BagState, BagsSaveBags } from '../../store';
import { currentFlow } from '../../../../core';

@Component({
	selector: 'app-bags',
	templateUrl: './bags.component.html',
	styleUrls: ['./bags.component.scss']
})
export class BagsComponent implements OnInit {
	constructor(private router: Router, private store: Store<BagState>) { }

	flow$: Observable<string>;
	ngOnInit() {
		this.flow$ = this.store.select(currentFlow);
	}

	onSave() {
		this.store.dispatch(new BagsSaveBags());
	}

}
