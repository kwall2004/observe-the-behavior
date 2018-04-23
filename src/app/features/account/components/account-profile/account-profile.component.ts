import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import {
	CoreState,
	userState
} from '../../../../core';


@Component({
	selector: 'app-account-profile',
	templateUrl: './account-profile.component.html',
	styleUrls: ['./account-profile.component.scss']
})
export class AccountProfileComponent implements OnInit {
	user$: Observable<any>;

	constructor(private store: Store<CoreState>) { }

	ngOnInit() {
		this.user$ = this.store.select(userState);
	}

}
