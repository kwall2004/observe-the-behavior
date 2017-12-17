import {
  Component,
  OnInit,
  ComponentFactory,
  ComponentFactoryResolver
} from '@angular/core';

import { DynamicContentPageOneComponent } from './page-one/dynamic-content-page-one.component';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: [ './dynamic-content.component.scss' ]
})
export class DynamicContentComponent implements OnInit {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    const componentFactory: ComponentFactory<any> = this.componentFactoryResolver
      .resolveComponentFactory(DynamicContentPageOneComponent);
  }
}
