import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../store/reducers';
import * as AppActions from '../../../store/app/actions';

@Component({
  templateUrl: './dynamic-content-page-one.component.html',
  styleUrls: [ './dynamic-content-page-one.component.scss' ]
})
export class DynamicContentPageOneComponent implements OnInit {
  data$: Observable<object>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.data$ = this.store.select(state => state.app.content);

    this.store.dispatch(new AppActions.GetContent());
  }

  set imageSource(source: string) {
    this.
  }
}
