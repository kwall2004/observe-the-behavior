import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit {
  
  menuItems: MenuItem[];
  
  constructor() { }

  public ngOnInit() {
    this.menuItems = [
      {
        label: 'Availability',
        icon: 'fa fa-fw fa-plane',
        routerLink: ['/availability']
      },
      {
        label: 'Test',
        icon: 'fa fa-fw fa-sun-o',
        routerLink: ['/test1']
      }
    ]
  }

}
