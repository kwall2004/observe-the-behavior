import {
  Component,
  OnInit,
  ComponentFactory,
  ComponentFactoryResolver
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/primeng';

import * as fromRoot from '../../store/reducers';
import * as DynamicContentActions from '../../store/dynamic-content/actions';

import { DynamicContentPageOneComponent } from './page-one/dynamic-content-page-one.component';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: [ './dynamic-content.component.scss' ]
})
export class DynamicContentComponent implements OnInit {
  data$: Observable<object>;
  menuItems: MenuItem[];

  constructor(
    private store: Store<fromRoot.State>,
    private activatedRoute: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.data$ = this.store.select(state => state.dynamicContent.data);
    this.data$.subscribe(data => {
      activatedRoute.routeConfig.children = [
        {
          path: 'one',
          component: DynamicContentPageOneComponent
        }
      ];

      this.menuItems = [
        {
          label: 'One',
          routerLink: [ 'one' ]
        }
      ];
    });

    this.store.dispatch(new DynamicContentActions.GetContent());
  }

  ngOnInit() {
    const componentFactory: ComponentFactory<any> = this.componentFactoryResolver
      .resolveComponentFactory(DynamicContentPageOneComponent);
  }
}
