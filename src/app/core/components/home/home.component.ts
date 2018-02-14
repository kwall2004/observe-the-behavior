import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	links: {
		label: string;
		path: string;
	}[];

	constructor() { }

	ngOnInit() {
		this.links = [
			{
				label: 'Book',
				path: ''
			},
			{
				label: 'My Trips',
				path: '/my-trips'
			},
			{
				label: 'Check In',
				path: '/check-in'
			},
			{
				label: 'Flight Status',
				path: '/flight-status'
			}
		];
	}
}
