import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cars',
	templateUrl: './cars.component.html',
	styleUrls: ['./cars.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarsComponent implements OnInit {
	constructor(private router: Router) { }

	ngOnInit() { }

	onSaveClick() {
		this.router.navigateByUrl('/book/passenger');
	}
}
