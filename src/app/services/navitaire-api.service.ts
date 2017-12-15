import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class NavitaireApiService {
  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
  ) { }

  public getToken(): Observable<any> {
    return this.http.post(`${environment.navitaireApiUrl}v1/token`, {});
  }

  public deleteToken(): Observable<any> {
    return this.http.delete(`${environment.navitaireApiUrl}v1/token`);
  }

  public getCities(): Observable<any> {
    return this.http.get(`${environment.navitaireApiUrl}v1/resources/Cities?ActiveOnly=true`);
  }

  public searchAvailability(origin: string, destination: string, beginDate: Date): Observable<any> {
    return this.http.post(`${environment.navitaireApiUrl}v1/availability/search/simple`, {
      'origin': 'SLC',
      'destination': 'DEN',
      'beginDate': this.datePipe.transform(beginDate, 'yyyy-MM-dd'),
      'passengers': [
        {
          'type': 'ADT',
          'count': 1
        }
      ],
      'currencyCode': 'USD',
      'loyaltyFilter': 'MonetaryOnly'
    });
  }

  public sellTrip(journey: object): Observable<any> {
    return this.http.post(`${environment.navitaireApiUrl}v2/trip/sell`, {
      'preventOverlap': true,
      'keys': [
        {
          'journeyKey': journey['journeyKey'],
          'fareAvailabilityKey': Object.keys(journey['fares'])[0],
          'standbyPriorityCode': '',
          'inventoryControl': 'HoldSpace'
        }
      ],
      'suppressPassengerAgeValidation': true,
      'passengers': {
        'types': [
          {
            'type': 'ADT',
            'discountCode': '',
            'count': 1
          }
        ],
        'residentCountry': ''
      },
      'currencyCode': 'USD',
      'infantCount': 0,
      'promotionCode': '',
      'sourceOrganization': ''
    });
  }

  public savePassenger(passengerKey: string, firstName: string, lastName: string): Observable<any> {
    return this.http.patch(`${environment.navitaireApiUrl}v2/booking/passengers/${passengerKey}`, {
      'passenger': {
        'name': {
          'first': firstName,
          'last': lastName
        }
      }
    });
  }

  public addPrimaryContact(firstName: string, lastName: string, phoneNumber: string): Observable<any> {
    return this.http.post(`${environment.navitaireApiUrl}v1/booking/contacts/primary`, {
      'phoneNumbers': [
        {
          'type': 'Other',
          'number': phoneNumber
        }
      ],
      'name': {
        'first': firstName,
        'last': lastName
      }
    });
  }

  public savePrimaryContact(firstName: string, lastName: string, phoneNumber: string): Observable<any> {
    return this.http.put(`${environment.navitaireApiUrl}v1/booking/contacts/primary`, {
      'phoneNumbers': [
        {
          'type': 'Other',
          'number': phoneNumber
        }
      ],
      'name': {
        'first': firstName,
        'last': lastName
      }
    });
  }

  public getBooking(): Observable<any> {
    return this.http.get(`${environment.navitaireApiUrl}v1/booking`);
  }

  public commitBooking(): Observable<any> {
    return this.http.post(`${environment.navitaireApiUrl}v1/booking`, {});
  }
}
