import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState } from '../../../../core';
import { HomeSetTab } from '../../../home/store/actions/home.action';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	constructor(private store: Store<CoreState>) { }

	ngOnInit() {
	}

	setActiveTab(tabIndex) {
		this.store.dispatch(new HomeSetTab(tabIndex));
	}

}
