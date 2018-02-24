import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Store } from '@ngrx/store';
import { HomeState, getActiveTab } from '../../store';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	private activeTab$: Observable<number>;
	constructor(private store: Store<HomeState>) { }

	ngOnInit() {
		this.activeTab$ = this.store.select(getActiveTab);
	}
}
