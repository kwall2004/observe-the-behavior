import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-hotels',
	templateUrl: './hotels.component.html',
	styleUrls: ['./hotels.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelsComponent implements OnInit {
	constructor(private router: Router) { }

	ngOnInit() { }

	onSaveClick() {
		this.router.navigateByUrl('/book/car');
	}
}
