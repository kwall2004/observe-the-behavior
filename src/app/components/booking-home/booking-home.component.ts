import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-booking-home',
  templateUrl: './booking-home.component.html',
  styleUrls: [ './booking-home.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingHomeComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
