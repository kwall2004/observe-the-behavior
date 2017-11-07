import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private api: ApiService) { }

  token() {
    return this.api.token();
  }

  availibilitySearchSimple() {
    return this.api.availabilitySearchSimple();
  }
}
