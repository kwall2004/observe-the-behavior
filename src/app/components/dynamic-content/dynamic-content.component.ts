import {
  Component,
  OnInit,
  ComponentFactory,
  ComponentFactoryResolver
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/primeng';

import { DynamicContentPageOneComponent } from './page-one/dynamic-content-page-one.component';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: [ './dynamic-content.component.scss' ]
})
export class DynamicContentComponent implements OnInit {
  menuItems: MenuItem[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    activatedRoute.routeConfig.children = [
      {
        path: 'one',
        component: DynamicContentPageOneComponent
      }
    ]
  }

  ngOnInit() {
    this.menuItems = [
      {
        label: 'One',
        routerLink: [ 'one' ]
      }
    ];

    const componentFactory: ComponentFactory<any> = this.componentFactoryResolver
      .resolveComponentFactory(DynamicContentPageOneComponent);
  }
}
