import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-hotel-search',
	templateUrl: './hotel-search.component.html',
	styleUrls: ['./hotel-search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelSearchComponent implements OnInit {
	constructor(private router: Router) { }

	ngOnInit() { }

	onSearchClick() {
		this.router.navigateByUrl('/book/hotels');
	}
}
