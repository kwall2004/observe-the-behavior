import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journey-list',
  templateUrl: './journey-list.component.html',
  styleUrls: ['./journey-list.component.scss']
})
export class JourneyListComponent implements OnInit {
  @Input()
  trip: object;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  sell(journey: object) {
  }
}
