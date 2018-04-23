import { Component, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { TabsetComponent, TabDirective, BsModalService } from 'ngx-bootstrap';

import { CoreState, HomeSetTab, homeActiveTabIndexState } from '../../../../core';
import { ConfirmationCodeModalComponent } from '../../../../shared/components';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements AfterViewInit, OnDestroy {
	activeTabSubscription: Subscription;
	selectingTab = false;

	@ViewChild('tabset') tabset: TabsetComponent;

	constructor(private store: Store<CoreState>, private confirmationCodeModal: BsModalService) { }

	ngAfterViewInit() {
		this.activeTabSubscription = this.store.select(homeActiveTabIndexState).subscribe(tab => {
			if (!this.tabset.tabs[tab].active) {
				this.selectingTab = true;
				this.tabset.tabs[tab].active = true;
			}
		});
	}

	ngOnDestroy() {
		if (this.activeTabSubscription) {
			this.activeTabSubscription.unsubscribe();
		}
	}

	onTabSelect(event: TabDirective) {
		if (!(event instanceof TabDirective)) {
			return;
		}

		if (!this.selectingTab) {
			this.store.dispatch(new HomeSetTab(this.tabset.tabs.findIndex(tab => tab === event)));
		} else {
			this.selectingTab = false;
		}
	}

	openConfimationCodeModal() {
		this.confirmationCodeModal.show(ConfirmationCodeModalComponent);
	}
}
