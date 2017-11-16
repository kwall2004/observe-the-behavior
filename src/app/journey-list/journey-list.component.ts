import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-journey-list',
  templateUrl: './journey-list.component.html',
  styleUrls: ['./journey-list.component.scss']
})
export class JourneyListComponent implements OnInit {

  @Input()
  trip: object;

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  sell(journey: object) {
    this.dataService
      .sellTrip(journey)
      .subscribe((json) => {
        console.log(json);
        this.router.navigateByUrl('/contact');
      }, (error) => {
        console.error(error);
        this.router.navigateByUrl('/contact');
      });
  }

}
