import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-bag-descriptions',
	templateUrl: './bag-descriptions.component.html',
	styleUrls: ['./bag-descriptions.component.scss']
})
export class BagDescriptionsComponent implements OnInit {
	@Input() carryOnSsr: any;
	@Input() checkedSsr: any;

	constructor() { }

	ngOnInit() { }

}
