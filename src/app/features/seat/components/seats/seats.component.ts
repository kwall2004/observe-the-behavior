import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-seats',
	templateUrl: './seats.component.html',
	styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() {
	}

	onSave() {
		this.router.navigateByUrl('/book/payment');
	}

}
