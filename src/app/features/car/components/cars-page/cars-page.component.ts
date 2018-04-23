import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cars-page',
	templateUrl: './cars-page.component.html',
	styleUrls: ['./cars-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarsPageComponent implements OnInit {
	constructor(private router: Router) { }

	ngOnInit() { }

	onSaveClick() {
		this.router.navigateByUrl('/book/passenger');
	}
}
