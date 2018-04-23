import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class ResourceService {
	constructor() { }

	public getStations(): Observable<any> {
		return of({
			'data': [
				{
					'stationCode': 'BQN',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'Aguadilla, Puerto Rico',
					'shortName': 'Aguadilla, Puerto Rico',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'USD',
					'cultureCode': 'en-US',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '182945N',
							'longitude': '0670748W'
						},
						'zoneCode': '15',
						'subZoneCode': '151',
						'countryCode': 'PR',
						'provinceStateCode': null,
						'cityCode': 'BQN',
						'timeZoneCode': 'PR',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'CAK',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KCAK',
					'fullName': 'Akron/Canton, OH',
					'shortName': 'Akron-Canton, OH',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '405450N',
							'longitude': '0812630W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'OH',
						'cityCode': 'CAK',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'AXM',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'Armenia, Colombia',
					'shortName': 'Armenia, Colombia',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'COP',
					'cultureCode': 'es-CO',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '042700N',
							'longitude': '0754600W'
						},
						'zoneCode': '17',
						'subZoneCode': '172',
						'countryCode': 'CO',
						'provinceStateCode': null,
						'cityCode': 'AXM',
						'timeZoneCode': 'CO',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'AUA',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'Aruba, Aruba',
					'shortName': 'Aruba, Aruba',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'AWG',
					'cultureCode': 'en-US',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '123008N',
							'longitude': '0700050W'
						},
						'zoneCode': '14',
						'subZoneCode': '140',
						'countryCode': 'AW',
						'provinceStateCode': null,
						'cityCode': 'AUA',
						'timeZoneCode': 'AW',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'ATL',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KATL',
					'fullName': 'Atlanta, GA',
					'shortName': 'Atlanta, GA',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': '\u0000',
					'locationDetails': {
						'coordinates': {
							'latitude': '333827N',
							'longitude': '0842538W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'GA',
						'cityCode': 'ATL',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'ACY',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KACY',
					'fullName': 'Atlantic City, NJ',
					'shortName': 'Atlantic City, NJ',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'USD',
					'cultureCode': 'en-US',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '392700N',
							'longitude': '0743500W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'NJ',
						'cityCode': 'AIY',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'BWI',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KBWI',
					'fullName': 'Baltimore, MD / Washington, DC AREA',
					'shortName': 'Baltimore, MD',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '391032N',
							'longitude': '0764017W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'MD',
						'cityCode': 'BWI',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'BOG',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'Bogota, Colombia',
					'shortName': 'Bogota, Colombia',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'COP',
					'cultureCode': 'es-CO',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '044200N',
							'longitude': '0740900W'
						},
						'zoneCode': '17',
						'subZoneCode': '172',
						'countryCode': 'CO',
						'provinceStateCode': null,
						'cityCode': 'BOG',
						'timeZoneCode': 'CO',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'BOS',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KBOS',
					'fullName': 'Boston, MA',
					'shortName': 'Boston, MA',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'USD',
					'cultureCode': 'en-US',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '422154N',
							'longitude': '0710019W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'MA',
						'cityCode': 'BOS',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'CUN',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'Cancun, Mexico',
					'shortName': 'Cancun, Mexico',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'MXN',
					'cultureCode': 'es-MX',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '210200N',
							'longitude': '0865200W'
						},
						'zoneCode': '00',
						'subZoneCode': '009',
						'countryCode': 'MX',
						'provinceStateCode': null,
						'cityCode': 'CUN',
						'timeZoneCode': 'CA3A',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'CAP',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'Cap Haitien, Haiti',
					'shortName': 'Cap Haitien, Haiti',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'HTG',
					'cultureCode': 'en-US',
					'class': '\u0000',
					'locationDetails': {
						'coordinates': {
							'latitude': '194358N',
							'longitude': '0721142W'
						},
						'zoneCode': '14',
						'subZoneCode': '140',
						'countryCode': 'HT',
						'provinceStateCode': null,
						'cityCode': 'CAP',
						'timeZoneCode': 'HT',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'CTG',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'Cartagena, Colombia',
					'shortName': 'Cartagena, Colombia',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'COP',
					'cultureCode': 'es-CO',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '102648N',
							'longitude': '0753039W'
						},
						'zoneCode': '17',
						'subZoneCode': '172',
						'countryCode': 'CO',
						'provinceStateCode': null,
						'cityCode': 'CTG',
						'timeZoneCode': 'CO',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'CRW',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KCRW',
					'fullName': 'Charleston, WV',
					'shortName': 'Charleston, WV',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'USD',
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '382222N',
							'longitude': '0813535W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'WV',
						'cityCode': 'CRW',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'ORD',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KORD',
					'fullName': 'Chicago, IL - O\Hare',
					'shortName': 'Chicago, IL - O\'Hare',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'USD',
					'cultureCode': 'en-US',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '415841N',
							'longitude': '0875422W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'IL',
						'cityCode': 'CHI',
						'timeZoneCode': 'US2',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'CLE',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KCLE',
					'fullName': 'Cleveland, OH',
					'shortName': 'Cleveland, OH',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '412443N',
							'longitude': '0815053W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'OH',
						'cityCode': 'CLE',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'CMH',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KCMH',
					'fullName': 'Columbus, OH',
					'shortName': 'Columbus, OH',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '395928N',
							'longitude': '0825242W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'OH',
						'cityCode': 'CMH',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'DFW',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KDFW',
					'fullName': 'Dallas/Ft. Worth, TX',
					'shortName': 'Dallas/Ft. Worth, TX',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'USD',
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '325340N',
							'longitude': '0970147W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'TX',
						'cityCode': 'DFW',
						'timeZoneCode': 'US2',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'DEN',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KDEN',
					'fullName': 'Denver, CO',
					'shortName': 'Denver, CO',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'USD',
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '395117N',
							'longitude': '1044305W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'CO',
						'cityCode': 'DEN',
						'timeZoneCode': 'US3',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'DTW',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KDTW',
					'fullName': 'Detroit, MI',
					'shortName': 'Detroit, MI',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'USD',
					'cultureCode': 'en-US',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '421307N',
							'longitude': '0832055W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'MI',
						'cityCode': 'DTT',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'FLL',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KFLL',
					'fullName': 'Fort Lauderdale, FL / Miami, FL AREA',
					'shortName': 'Fort Lauderdale, FL',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': '\u0000',
					'locationDetails': {
						'coordinates': {
							'latitude': '260427N',
							'longitude': '0800906W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'FL',
						'cityCode': 'FLL',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'RSW',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KRSW',
					'fullName': 'Fort Myers, FL',
					'shortName': 'Fort Myers, FL',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'USD',
					'cultureCode': 'en-US',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '263200N',
							'longitude': '0814500W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'FL',
						'cityCode': 'FMY',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'GUA',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'Guatemala City, Guatemala',
					'shortName': 'Guatemala City, Guatemala',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'USD',
					'cultureCode': 'es-GT',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '143455N',
							'longitude': '0903139W'
						},
						'zoneCode': '16',
						'subZoneCode': '160',
						'countryCode': 'GT',
						'provinceStateCode': null,
						'cityCode': 'GUA',
						'timeZoneCode': 'GT',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'GYE',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'SEGU',
					'fullName': 'Guayaquil, Ecuador',
					'shortName': 'Guayaquil, Ecuador',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '020916S',
							'longitude': '0795232W'
						},
						'zoneCode': '17',
						'subZoneCode': '172',
						'countryCode': 'EC',
						'provinceStateCode': null,
						'cityCode': 'GYE',
						'timeZoneCode': 'EC1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'BDL',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KBDL',
					'fullName': 'Hartford, CT',
					'shortName': 'Hartford, CT',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '415619N',
							'longitude': '0724100W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'CT',
						'cityCode': 'HFD',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'IAH',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KIAH',
					'fullName': 'Houston, TX - Intercontinental',
					'shortName': 'Houston, TX - Intercontinental',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '295900N',
							'longitude': '0952024W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'TX',
						'cityCode': 'HOU',
						'timeZoneCode': 'US2',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'MCI',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KMCI',
					'fullName': 'Kansas City, MO',
					'shortName': 'Kansas City, MO',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '391734N',
							'longitude': '0944336W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'MO',
						'cityCode': 'MKC',
						'timeZoneCode': 'US2',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'KIN',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'Kingston, Jamaica',
					'shortName': 'Kingston, Jamaica',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'JMD',
					'cultureCode': 'en-JM',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '175605N',
							'longitude': '0764652W'
						},
						'zoneCode': '14',
						'subZoneCode': '140',
						'countryCode': 'JM',
						'provinceStateCode': null,
						'cityCode': 'KIN',
						'timeZoneCode': 'JM',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'LAS',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KLAS',
					'fullName': 'Las Vegas, NV',
					'shortName': 'Las Vegas, NV',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'USD',
					'cultureCode': 'en-US',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '360448N',
							'longitude': '1150908W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'NV',
						'cityCode': 'LAS',
						'timeZoneCode': 'US4',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'LBE',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KLBE',
					'fullName': 'Latrobe, PA',
					'shortName': 'Latrobe, PA',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'USD',
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '401635N',
							'longitude': '0792410W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'PA',
						'cityCode': 'LBE',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'LIM',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'Lima, Peru',
					'shortName': 'Lima, Peru',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'PEN',
					'cultureCode': 'en-US',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '120136S',
							'longitude': '0770722W'
						},
						'zoneCode': '17',
						'subZoneCode': '170',
						'countryCode': 'PE',
						'provinceStateCode': null,
						'cityCode': 'LIM',
						'timeZoneCode': 'PE',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'LAX',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KLAX',
					'fullName': 'Los Angeles, CA',
					'shortName': 'Los Angeles, CA',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'USD',
					'cultureCode': 'en-US',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '335632N',
							'longitude': '1182426W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'CA',
						'cityCode': 'LAX',
						'timeZoneCode': 'US4',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'SJD',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'MMSD',
					'fullName': 'Los Cabos, Mexico',
					'shortName': 'San Jose del Cabo, Mexico',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'MXN',
					'cultureCode': 'es-MX',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '231000N',
							'longitude': '1094200W'
						},
						'zoneCode': '00',
						'subZoneCode': '009',
						'countryCode': 'MX',
						'provinceStateCode': null,
						'cityCode': 'SJD',
						'timeZoneCode': 'MX2',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'MGA',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'Managua, Nicaragua',
					'shortName': 'Managua, Nicaragua',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'NIO',
					'cultureCode': 'es-NI',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '120828N',
							'longitude': '0861007W'
						},
						'zoneCode': '16',
						'subZoneCode': '160',
						'countryCode': 'NI',
						'provinceStateCode': null,
						'cityCode': 'MGA',
						'timeZoneCode': 'NI',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'MDE',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'Medellin, Colombia',
					'shortName': 'Medellin, Colombia',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'COP',
					'cultureCode': 'es-CO',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '061315N',
							'longitude': '0753535W'
						},
						'zoneCode': '17',
						'subZoneCode': '172',
						'countryCode': 'CO',
						'provinceStateCode': null,
						'cityCode': 'MDE',
						'timeZoneCode': 'CO',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'MSP',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KMSP',
					'fullName': 'Minneapolis/St. Paul, MN',
					'shortName': 'Minneapolis/St. Paul, MN',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'USD',
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '445310N',
							'longitude': '0931304W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'MN',
						'cityCode': 'MSP',
						'timeZoneCode': 'US2',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'MBJ',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'Montego Bay, Jamaica',
					'shortName': 'Montego Bay, Jamaica',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'JMD',
					'cultureCode': 'en-US',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '183007N',
							'longitude': '0775445W'
						},
						'zoneCode': '14',
						'subZoneCode': '140',
						'countryCode': 'JM',
						'provinceStateCode': null,
						'cityCode': 'MBJ',
						'timeZoneCode': 'JM',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'MYR',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KMYR',
					'fullName': 'Myrtle Beach, SC',
					'shortName': 'Myrtle Beach, SC',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '334045N',
							'longitude': '0785547W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'SC',
						'cityCode': 'MYR',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'MSY',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KMSY',
					'fullName': 'New Orleans, LA',
					'shortName': 'New Orleans, LA',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '295928N',
							'longitude': '0901505W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'LA',
						'cityCode': 'MSY',
						'timeZoneCode': 'US2',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'LGA',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KLGA',
					'fullName': 'New York, NY - LaGuardia',
					'shortName': 'New York, NY - LaGuardia',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'USD',
					'cultureCode': 'en-US',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '404646N',
							'longitude': '0735233W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'NY',
						'cityCode': 'NYC',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'EWR',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KEWR',
					'fullName': 'Newark, NJ',
					'shortName': 'Newark, NJ',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '404145N',
							'longitude': '0741018W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'NJ',
						'cityCode': 'EWR',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'IAG',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KIAG',
					'fullName': 'Niagara Falls, NY / Toronto, Canada AREA',
					'shortName': 'Niagara Falls, NY / Toronto AREA',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'USD',
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '430600N',
							'longitude': '0785700W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'NY',
						'cityCode': 'IAG',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'OAK',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KOAK',
					'fullName': 'Oakland, CA / San Francisco, CA AREA',
					'shortName': 'Oakland, CA / San Francisco AREA',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'USD',
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '374325N',
							'longitude': '1221256W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'CA',
						'cityCode': 'OAK',
						'timeZoneCode': 'US4',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'MCO',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KMCO',
					'fullName': 'Orlando, FL',
					'shortName': 'Orlando, FL',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'USD',
					'cultureCode': 'en-US',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '282555N',
							'longitude': '0811929W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'FL',
						'cityCode': 'ORL',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'PTY',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'Panama City, Panama',
					'shortName': 'Panama City, Panama',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'PAB',
					'cultureCode': 'es-PA',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '090500N',
							'longitude': '0792300W'
						},
						'zoneCode': '16',
						'subZoneCode': '160',
						'countryCode': 'PA',
						'provinceStateCode': null,
						'cityCode': 'PTY',
						'timeZoneCode': 'PA',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'PHL',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KPHL',
					'fullName': 'Philadelphia, PA',
					'shortName': 'Philadelphia, PA',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '395218N',
							'longitude': '0751432W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'PA',
						'cityCode': 'PHL',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'PHX',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KPHX',
					'fullName': 'Phoenix/Sky Harbor, AZ',
					'shortName': 'Phoenix/Sky Harbor, AZ',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '332607N',
							'longitude': '1120043W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'AZ',
						'cityCode': 'PHX',
						'timeZoneCode': 'US3A',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'PIT',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KPIT',
					'fullName': 'Pittsburgh, PA',
					'shortName': 'Pittsburgh, PA',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '402948N',
							'longitude': '0801409W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'PA',
						'cityCode': 'PIT',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'PBG',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KPBG',
					'fullName': 'Plattsburgh, NY / Montreal, Canada AREA',
					'shortName': 'Plattsburgh, NY / Montreal AREA',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'USD',
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '444200N',
							'longitude': '0732900W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'NY',
						'cityCode': 'PBG',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'PAP',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'Port-au-Prince, Haiti',
					'shortName': 'Port-au-Prince, Haiti',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'HTG',
					'cultureCode': 'en-US',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '183338N',
							'longitude': '0721944W'
						},
						'zoneCode': '14',
						'subZoneCode': '140',
						'countryCode': 'HT',
						'provinceStateCode': null,
						'cityCode': 'PAP',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'PDX',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KPDX',
					'fullName': 'Portland, OR',
					'shortName': 'Portland, OR',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '453521N',
							'longitude': '1223542W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'OR',
						'cityCode': 'PDX',
						'timeZoneCode': 'US4',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'PUJ',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'Punta Cana, Dominican Republic',
					'shortName': 'Punta Cana, Dominican Republic',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'DOP',
					'cultureCode': 'es-DO',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '183400N',
							'longitude': '0682300W'
						},
						'zoneCode': '14',
						'subZoneCode': '140',
						'countryCode': 'DO',
						'provinceStateCode': null,
						'cityCode': 'PUJ',
						'timeZoneCode': 'DO',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'RIC',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KRIC',
					'fullName': 'Richmond, VA',
					'shortName': 'Richmond, VA',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '373022N',
							'longitude': '0771921W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'VA',
						'cityCode': 'RIC',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'SAN',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KSAN',
					'fullName': 'San Diego, CA',
					'shortName': 'San Diego, CA',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '324358N',
							'longitude': '1171114W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'CA',
						'cityCode': 'SAN',
						'timeZoneCode': 'US4',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'SJO',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'San Jose, Costa Rica',
					'shortName': 'San Jose, Costa Rica',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'CRC',
					'cultureCode': 'es-CR',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '100000N',
							'longitude': '0841200W'
						},
						'zoneCode': '16',
						'subZoneCode': '160',
						'countryCode': 'CR',
						'provinceStateCode': null,
						'cityCode': 'SJO',
						'timeZoneCode': 'CR',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'SJU',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'San Juan, Puerto Rico',
					'shortName': 'San Juan, Puerto Rico',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'USD',
					'cultureCode': 'en-US',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '182624N',
							'longitude': '0660008W'
						},
						'zoneCode': '15',
						'subZoneCode': '151',
						'countryCode': 'PR',
						'provinceStateCode': null,
						'cityCode': 'SJU',
						'timeZoneCode': 'PR',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'SAP',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'San Pedro Sula, Honduras',
					'shortName': 'San Pedro Sula, Honduras',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'HNL',
					'cultureCode': 'es-HN',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '152710N',
							'longitude': '0875525W'
						},
						'zoneCode': '16',
						'subZoneCode': '160',
						'countryCode': 'HN',
						'provinceStateCode': null,
						'cityCode': 'SAP',
						'timeZoneCode': 'HN',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'SAL',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'MSLP',
					'fullName': 'San Salvador, El Salvador',
					'shortName': 'San Salvador, El Salvador',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'USD',
					'cultureCode': 'es-SV',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '132629N',
							'longitude': '0890320W'
						},
						'zoneCode': '16',
						'subZoneCode': '160',
						'countryCode': 'SV',
						'provinceStateCode': null,
						'cityCode': 'SAL',
						'timeZoneCode': 'SV',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'STI',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'Santiago, Dominican Republic',
					'shortName': 'Santiago, Dominican Republic',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'DOP',
					'cultureCode': 'es-DO',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '192420N',
							'longitude': '0703615W'
						},
						'zoneCode': '14',
						'subZoneCode': '140',
						'countryCode': 'DO',
						'provinceStateCode': null,
						'cityCode': 'STI',
						'timeZoneCode': 'DO',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'SDQ',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'Santo Domingo, Dominican Republic',
					'shortName': 'Santo Domingo, Dominican Republi',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'DOP',
					'cultureCode': 'en-US',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '182545N',
							'longitude': '0694009W'
						},
						'zoneCode': '14',
						'subZoneCode': '140',
						'countryCode': 'DO',
						'provinceStateCode': null,
						'cityCode': 'SDQ',
						'timeZoneCode': 'DO',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'SEA',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KSEA',
					'fullName': 'Seattle-Tacoma, WA',
					'shortName': 'Seattle-Tacoma, WA',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': 'A',
					'locationDetails': {
						'coordinates': {
							'latitude': '472650N',
							'longitude': '1221820W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'WA',
						'cityCode': 'SEA',
						'timeZoneCode': 'US4',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'STX',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'St. Croix, U.S. Virgin Islands',
					'shortName': 'St. Croix, U.S. Virgin Islands',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': '\u0000',
					'locationDetails': {
						'coordinates': {
							'latitude': '174207N',
							'longitude': '0644755W'
						},
						'zoneCode': '15',
						'subZoneCode': '152',
						'countryCode': 'VI',
						'provinceStateCode': null,
						'cityCode': 'STX',
						'timeZoneCode': 'VI',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'SXM',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'St. Maarten, St. Maarten',
					'shortName': 'St. Maarten, St. Maarten',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'ANG',
					'cultureCode': 'en-US',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '180237N',
							'longitude': '0630643W'
						},
						'zoneCode': '14',
						'subZoneCode': '140',
						'countryCode': 'AN',
						'provinceStateCode': null,
						'cityCode': 'SXM',
						'timeZoneCode': 'SX',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'STT',
					'inActive': false,
					'allowed': true,
					'icaoCode': null,
					'fullName': 'St. Thomas, U.S. Virgin Islands',
					'shortName': 'St. Thomas, U.S. Virgin Islands',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '182015N',
							'longitude': '0645810W'
						},
						'zoneCode': '15',
						'subZoneCode': '152',
						'countryCode': 'VI',
						'provinceStateCode': null,
						'cityCode': 'STT',
						'timeZoneCode': 'VI',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 2
					}
				},
				{
					'stationCode': 'TPA',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KTPA',
					'fullName': 'Tampa, FL',
					'shortName': 'Tampa, FL',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': 'USD',
					'cultureCode': 'en-US',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '275823N',
							'longitude': '0823207W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'FL',
						'cityCode': 'TPA',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				},
				{
					'stationCode': 'PBI',
					'inActive': false,
					'allowed': true,
					'icaoCode': 'KPBI',
					'fullName': 'West Palm Beach, FL',
					'shortName': 'West Palm Beach, FL',
					'macCode': null,
					'currencyCode': 'USD',
					'conversionCurrencyCode': null,
					'cultureCode': 'en-US',
					'class': ' ',
					'locationDetails': {
						'coordinates': {
							'latitude': '264056N',
							'longitude': '0800539W'
						},
						'zoneCode': '00',
						'subZoneCode': '001',
						'countryCode': 'US',
						'provinceStateCode': 'FL',
						'cityCode': 'PBI',
						'timeZoneCode': 'US1',
						'thirdPartyControlled': false,
						'customsRequiredForCrew': false,
						'weightType': 1
					}
				}
			]
		});
	}

	public getProvinceStates(): Observable<any> {
		return of(null);
	}

	public getCountries(): Observable<any> {
		return of(null);
	}
}
