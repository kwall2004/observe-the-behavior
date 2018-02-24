import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-book-path',
	templateUrl: './book-path.component.html',
	styleUrls: ['./book-path.component.scss']
})
export class BookPathComponent implements OnInit {
	links: {
		routerLink: string;
		text: string;
	}[];

	constructor() {
		this.links = [{
			routerLink: 'availability',
			text: 'Flight'
		},
		{
			routerLink: 'hotel',
			text: 'Hotel'
		},
		{
			routerLink: 'car',
			text: 'Car'
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
	}

	ngOnInit() { }
}
