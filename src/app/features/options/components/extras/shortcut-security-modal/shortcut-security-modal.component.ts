import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';
import { ShortcutSecurityOptionsModel } from '../models';

@Component({
	templateUrl: './shortcut-security-modal.component.html',
	styleUrls: ['./shortcut-security-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShortcutSecurityModalComponent implements OnInit, AfterViewInit {

	callback: (form: NgForm) => void;

	options: ShortcutSecurityOptionsModel;

	constructor(public modalRef: BsModalRef, private changeDetectorRef: ChangeDetectorRef) { }

	ngOnInit() {

	}

	ngAfterViewInit() {
		this.changeDetectorRef.markForCheck();
	}

	onSubmit(form: NgForm) {
		this.modalRef.hide();
		this.callback(form);
	}
}
