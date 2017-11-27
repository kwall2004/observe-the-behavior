import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import * as AppActions from '../store/app/actions';

@Injectable()
export class ApiService {
  constructor(
    private http: Http,
    private datePipe: DatePipe
  ) { }

  public token(): Observable<any> {
    let headers = new Headers({
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": "b8ba8ddde55a46fda12ffee38f72a530"
    });
    let options = new RequestOptions({
      headers
    });
    return this.http
      .post('http://proxy.sandbox.navitaire.com/api/nsk/v1/token', { }, options)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  public getCities(): Observable<any> {
    let headers = new Headers({
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": "b8ba8ddde55a46fda12ffee38f72a530",
      "Authorization": "Bearer " + localStorage.getItem('token')
    });
    let options = new RequestOptions({
      headers
    });
    return this.http
      .get('http://proxy.sandbox.navitaire.com/api/nsk/v1/resources/Cities?ActiveOnly=true', options)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  public availabilitySearchSimple(origin: string, destination: string, beginDate: Date): Observable<any> {
    let headers = new Headers({
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": "b8ba8ddde55a46fda12ffee38f72a530",
      "Authorization": "Bearer " + localStorage.getItem('token')
    });
    let options = new RequestOptions({
      headers
    });
    return this.http
      .post('http://proxy.sandbox.navitaire.com/api/nsk/v1/availability/search/simple', {
        "origin": origin,
        "destination": destination,
        "beginDate": this.datePipe.transform(beginDate, 'yyyy-MM-dd'),
        "passengers": [
          {
            "type": "ADT",
            "count": 1
          }
        ],
        "currencyCode": "USD",
        "loyaltyFilter": "MonetaryOnly"
      }, options)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  public sellTrip(journey: object): Observable<any> {
    let headers = new Headers({
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": "b8ba8ddde55a46fda12ffee38f72a530",
      "Authorization": "Bearer " + localStorage.getItem('token')
    });
    let options = new RequestOptions({
      headers
    });
    return this.http
      .post('http://proxy.sandbox.navitaire.com/api/nsk/v2/trip/sell', {
        "preventOverlap": true,
        "keys": [
          {
            "journeyKey": journey['journeyKey'],
            "fareAvailabilityKey": Object.keys(journey['fares'])[0],
            "standbyPriorityCode": "",
            "inventoryControl": "HoldSpace"
          }
        ],
        "suppressPassengerAgeValidation": true,
        "passengers": {
          "types": [
            {
              "type": "ADT",
              "discountCode": "",
              "count": 1
            }
          ],
          "residentCountry": ""
        },
        "currencyCode": "USD",
        "infantCount": 0,
        "promotionCode": "",
        "sourceOrganization": ""
      }, options)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error(error);
    return Observable.throw(error);
  }
}
