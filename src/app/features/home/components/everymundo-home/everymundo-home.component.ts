import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-everymundo-home',
	templateUrl: './everymundo-home.component.html',
	styleUrls: ['./everymundo-home.component.scss']
})
export class EverymundoHomeComponent implements OnInit {
	displayEverymundoPanel = false;

	constructor() { }

	ngOnInit() { }
}
