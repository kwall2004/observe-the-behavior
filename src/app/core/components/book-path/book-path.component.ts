import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import { CoreState, currentUrlState, bookingState, shoppingCartVisitedPagesState } from '../../store';

@Component({
	selector: 'app-book-path',
	templateUrl: './book-path.component.html',
	styleUrls: ['./book-path.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookPathComponent implements OnInit {
	links = [{
		routerLink: 'flights',
		text: 'Flight'
	},
	{
		routerLink: 'passenger',
		text: 'Passenger'
	},
	{
		routerLink: 'bags',
		text: 'Bag'
	},
	{
		routerLink: 'seats',
		text: 'Seat'
	},
	{
		routerLink: 'options',
		text: 'Options'
	},
	{
		routerLink: 'payment',
		text: 'Payment'
	},
	{
		routerLink: 'confirmation',
		text: 'Confirmation'
	}];

	currentUrl$: Observable<any>;
	booking$: Observable<any>;
	visitedPages$: Observable<any>;

	constructor(private store: Store<CoreState>) { }

	ngOnInit() {
		this.currentUrl$ = this.store.pipe(select(currentUrlState));
		this.booking$ = this.store.pipe(select(bookingState));
		this.visitedPages$ = this.store.pipe(select(shoppingCartVisitedPagesState));
	}
}
