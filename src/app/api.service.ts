import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  public token(): Observable<any> {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': 'b8ba8ddde55a46fda12ffee38f72a530'
    });
    let options = new RequestOptions({
      headers
    });
    return this.http
      .post('http://sandboxnavitaire.azure-api.net/api/nsk/v1/token', {}, options)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  public availabilitySearchSimple(): Observable<any> {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': 'b8ba8ddde55a46fda12ffee38f72a530',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let options = new RequestOptions({
      headers
    });
    return this.http
      .post('http://proxy.sandbox.navitaire.com/api/nsk/v1/availability/search/simple', {
        "origin": "SLC",
        "destination": "DEN",
        "beginDate": "2017-11-03",
        "endDate": "2017-11-10",
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

  public sellTrip(): Observable<any> {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': 'b8ba8ddde55a46fda12ffee38f72a530',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let options = new RequestOptions({
      headers
    });
    return this.http
      .post('http://proxy.sandbox.navitaire.com/api/nsk/v2/trip/sell', {
        "preventOverlap": true,
        "keys": [
          {
            "journeyKey": "",
            "fareAvailabilityKey": "",
            "standbyPriorityCode": "",
            "inventoryControl": "HoldSpace"
          }
        ],
        "suppressPassengerAgeValidation": true,
        "passengers": {
          "types": [
            {
              "type": "",
              "discountCode": "",
              "count": 0
            }
          ],
          "residentCountry": ""
        },
        "currencyCode": "",
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
