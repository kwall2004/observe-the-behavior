import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import * as AppActions from '../store/app/actions';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
  ) { }

  public getToken(): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}v1/token`, {}, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Ocp-Apim-Subscription-Key', environment.subscriptionKey)
      })
      .catch(this.handleError);
  }

  public deleteToken(): Observable<any> {
    return this.http
      .delete(`${environment.apiUrl}v1/token`, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Ocp-Apim-Subscription-Key', environment.subscriptionKey)
          .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      })
      .catch(this.handleError);
  }

  public getCities(): Observable<any> {
    return this.http
      .get(`${environment.apiUrl}v1/resources/Cities?ActiveOnly=true`, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Ocp-Apim-Subscription-Key', environment.subscriptionKey)
          .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      })
      .catch(this.handleError);
  }

  public searchAvailability(origin: string, destination: string, beginDate: Date): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}v1/availability/search/simple`, {
        "origin": "SLC",
        "destination": "DEN",
        "beginDate": this.datePipe.transform(beginDate, 'yyyy-MM-dd'),
        "passengers": [
          {
            "type": "ADT",
            "count": 1
          }
        ],
        "currencyCode": "USD",
        "loyaltyFilter": "MonetaryOnly"
      }, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Ocp-Apim-Subscription-Key', environment.subscriptionKey)
          .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      })
      .catch(this.handleError);
  }

  public sellTrip(journey: object): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}v2/trip/sell`, {
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
      }, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Ocp-Apim-Subscription-Key', environment.subscriptionKey)
          .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      })
      .catch(this.handleError);
  }

  public savePassenger(passengerKey: string, firstName: string, lastName: string): Observable<any> {
    return this.http
      .patch(`${environment.apiUrl}v2/booking/passengers/${passengerKey}`, {
        "passenger": {
          "name": {
            "first": firstName,
            "last": lastName
          }
        }
      }, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Ocp-Apim-Subscription-Key', environment.subscriptionKey)
          .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      })
      .catch(this.handleError);
  }

  public getBooking(): Observable<any> {
    return this.http
      .get(`${environment.apiUrl}v1/booking`, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Ocp-Apim-Subscription-Key', environment.subscriptionKey)
          .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error(error);
    return Observable.throw(error);
  }
}
