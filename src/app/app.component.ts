import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit {
  token: string = null;
  data: object = null;
  errorStatus: string;
  errorStatusText: string;

  constructor(private dataService: DataService) { }

  public ngOnInit() {
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
