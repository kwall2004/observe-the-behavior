import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap';

import { ShortcutSecurityModalComponent } from '../shortcut-security-modal/shortcut-security-modal.component';
import { ExtraType, ExtraInputModel, ExtrasDataModel, CheckInOption } from '../models';

@Component({
	selector: 'app-extras-simple',
	templateUrl: './extras-simple.component.html',
	styleUrls: ['./extras-simple.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtrasSimpleComponent implements OnInit {

	@Input()
	extrasData: ExtrasDataModel;

	@Output()
	userInput: EventEmitter<ExtraInputModel> = new EventEmitter();

	extraType = ExtraType;
	checkInOption = CheckInOption;

	constructor(private modalService: BsModalService) { }

	ngOnInit() { }

	onExtraAction(type: string, value?: any) {

		if (type === ExtraType.shortcutSecurity) {

			const initialState = {
				options: this.extrasData.shortcutSecurityOptions,
				callback: this.onShortcutSecuritySelected.bind(this)
			};

			this.modalService.show(ShortcutSecurityModalComponent, { initialState });

		} else {

			this.userInput.emit({ type: type, payload: value } as ExtraInputModel);

		}

	}

	onShortcutSecuritySelected(form: NgForm) {

		this.userInput.emit({ type: ExtraType.shortcutSecurity, payload: Object.values(form.value) } as ExtraInputModel);

	}

}
