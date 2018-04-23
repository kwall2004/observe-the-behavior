import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState } from '../store/reducers/index';
import { TranslateService } from '@ngx-translate/core';
import { currentCultureState } from '../store/selectors/culture.selector';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class TranslateSync implements OnDestroy {
	sub: Subscription;
	constructor(private store: Store<CoreState>, private translate: TranslateService) { }

	sync() {
		this.sub = this.store.select(currentCultureState).subscribe(culture => this.translate.use(culture));
	}

	ngOnDestroy(): void {
		if (this.sub) {
			this.sub.unsubscribe();
		}
	}
}
