import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-hotel-availability-search',
	templateUrl: './hotel-availability-search.component.html',
	styleUrls: ['./hotel-availability-search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelAvailabilitySearchComponent implements OnInit {
	constructor(private router: Router) { }

	ngOnInit() { }

	onSearchClick(form) {
		this.router.navigateByUrl('/book/hotel');
	}
}
