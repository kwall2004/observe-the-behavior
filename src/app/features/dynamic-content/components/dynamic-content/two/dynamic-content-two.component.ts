import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	templateUrl: './dynamic-content-two.component.html',
	styleUrls: ['./dynamic-content-two.component.scss']
})
export class DynamicContentTwoComponent implements OnInit {
	text1: string;
	text2: string;
	text3: string;

	constructor(
		private activatedRoute: ActivatedRoute
	) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.text1 = data.text1;
			this.text2 = data.text2;
			this.text3 = data.text3;
		});
	}
}
