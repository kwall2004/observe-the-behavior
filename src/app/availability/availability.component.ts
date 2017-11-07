import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {
  token: string = null;
  data: object = null;
  errorStatus: string;
  errorStatusText: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
  }

  onGetNewTokenClick(e) {
    this.dataService
      .token()
      .subscribe((json) => {
        this.token = json.data.token;
        localStorage.setItem('token', this.token);
        this.errorStatus = '';
        this.errorStatusText = '';
      });
  }

  onGetAvailability(e) {
    this.dataService
      .availibilitySearchSimple()
      .subscribe((json) => {
        this.data = json.data;
        this.errorStatus = '';
        this.errorStatusText = '';
      }, (error) => {
        this.data = null;
        this.errorStatus = error.status;
        this.errorStatusText = error.statusText;
      });
  }

}
