import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-static-qa',
	templateUrl: './static-qa.component.html',
	styleUrls: ['./static-qa.component.scss'],

})
export class StaticQaComponent implements OnInit {
	routingArray: any = [];

	constructor() { }

	ngOnInit() {
		this.routingArray = [
			{
				path: 'about-us',
				name: ' About Us',
			},
			{
				path: 'advertise',
				name: 'Advertise',
			},
			{
				path: 'morego-spirit',
				name: 'More Go',
			},
			{
				path: 'special-events',
				name: 'Special Events',
			},
			{
				path: 'contact-us',
				name: 'Contact us',
			},
			{
				path: 'group-travel',
				name: 'Group Travel',
			},
			{
				path: 'legal',
				name: 'Legal',
			},
			{
				path: 'optional-services',
				name: 'Optional Services',
			},
			{
				path: 'route-maps',
				name: 'Where We Fly',
			},
			{
				path: 'spirit-101',
				name: 'Spirit 101',
			},
			{
				path: 'press-release',
				name: 'Press Release',
			},
			{
				path: 'spirit-specials',
				name: 'Spirit Specials',
			},
			{
				path: 'careers-home',
				name: 'Careers Home',
			},
			{
				path: 'investor-relations (External Link)',
				name: 'ir.spirit.com',
			},
			{
				path: 'customer-support',
				name: 'Customer Support',
			},
			{
				path: 'travel-advisory',
				name: 'Travel Advisory',
			},
			{
				path: 'fare-club-enrollment',
				name: 'Fare Club Enrollment',
			},
			{
				path: 'deals-everymundo',
				name: 'Deals Every Mundo',
			}
		];
	}
}
