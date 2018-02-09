import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'app-bags',
	templateUrl: './bags.component.html',
	styleUrls: ['./bags.component.scss']
})
export class BagsComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() {
	}

	onSave() {
		this.router.navigateByUrl('/book/seat');
	}

}
