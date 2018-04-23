import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { CoreState, bookingState, bagsSelectedState } from '../../../../core';

@Component({
	selector: 'app-confirmation-page',
	templateUrl: './confirmation-page.component.html',
	styleUrls: ['./confirmation-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationPageComponent implements OnInit {
	booking$: Observable<any>;
	bagSelection$: Observable<any>;

	constructor(private store: Store<CoreState>) { }

	ngOnInit() {
		this.booking$ = this.store.select(bookingState);
		this.bagSelection$ = this.store.select(bagsSelectedState);
	}
	onPrintClick() {
		let printContents, printPopUpWin: any;
		printContents = document.getElementById('print-section').innerHTML;
		printPopUpWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
		printPopUpWin.document.open();
		printPopUpWin.document.write(`
		  <html>
			<head>
			  <title>Purchase Confirmation | Spirit Airlines</title>
			  <style>
			  //........Todo : customize the print by applying custom styles here .......
			  </style>
			</head>
			<body onload="window.print();window.close()">${printContents}</body>
		  </html>`
		);
		printPopUpWin.document.close();
	}
}
