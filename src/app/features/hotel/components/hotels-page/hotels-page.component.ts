import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-hotels-page',
	templateUrl: './hotels-page.component.html',
	styleUrls: ['./hotels-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelsPageComponent implements OnInit {
	constructor(private router: Router) { }

	ngOnInit() { }

	onSaveClick() {
		this.router.navigateByUrl('/book/cars');
	}
}
