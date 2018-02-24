import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-car-availability-search',
	templateUrl: './car-availability-search.component.html',
	styleUrls: ['./car-availability-search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarAvailabilitySearchComponent implements OnInit {
	constructor(private router: Router) { }

	ngOnInit() { }

	onSearchClick(form) {
		this.router.navigateByUrl('/book/car');
	}
}
