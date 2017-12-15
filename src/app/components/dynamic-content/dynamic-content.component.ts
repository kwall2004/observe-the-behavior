import {
  Component,
  OnInit,
  ComponentFactory,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { DynamicContentPageOneComponent } from './page-one/dynamic-content-page-one.component';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: [ './dynamic-content.component.scss' ]
})
export class DynamicContentComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef })
  public target: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const componentFactory: ComponentFactory<any> = this.componentFactoryResolver
      .resolveComponentFactory(DynamicContentPageOneComponent);
  }
}
