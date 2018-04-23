import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-car-search',
	templateUrl: './car-search.component.html',
	styleUrls: ['./car-search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarSearchComponent implements OnInit {
	constructor(private router: Router) { }

	ngOnInit() { }

	onSearchClick() {
		this.router.navigateByUrl('/book/cars');
	}
}
