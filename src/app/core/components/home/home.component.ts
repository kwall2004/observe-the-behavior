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
				path: '/home/book'
			},
			{
				label: 'My Trips',
				path: '/home/my-trips'
			},
			{
				label: 'Check In',
				path: '/home/check-in'
			},
			{
				label: 'Flight Status',
				path: '/home/flight-status'
			}
		];
	}
}
