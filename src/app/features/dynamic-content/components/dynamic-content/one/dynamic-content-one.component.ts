import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	templateUrl: './dynamic-content-one.component.html',
	styleUrls: ['./dynamic-content-one.component.scss']
})
export class DynamicContentOneComponent implements OnInit {
	text: string;
	src: string;

	constructor(
		private activatedRoute: ActivatedRoute
	) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.text = data.text;
			this.src = data.imageSrc;
		});
	}
}
