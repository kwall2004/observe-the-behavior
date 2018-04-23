import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class AvailabilityService {
	constructor() { }

	public searchAvailability(search: any): Observable<any> {
		console.log(search);
		return of({
			'availability': {
				'trips': [
					{
						'origin': 'DTW',
						'destination': 'FLL',
						'journeysAvailable': [
							{
								'flightType': 4,
								'stops': 1,
								'designator': {
									'destination': 'FLL',
									'origin': 'DTW',
									'arrival': '2018-03-24T15:42:00',
									'departure': '2018-03-24T06:00:00'
								},
								'fares': {
									'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--': {
										'fareAvailabilityKey': 'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--',
										'fareCode': 'HNR',
										'availableCount': 137,
										'isSumOfSector': false,
										'classOfService': 'H'
									},
									'MH5Zfn5ZTlJ_MDAwMX5_OX5Y': {
										'fareAvailabilityKey': 'MH5Zfn5ZTlJ_MDAwMX5_OX5Y',
										'fareCode': 'YNR',
										'availableCount': 143,
										'isSumOfSector': false,
										'classOfService': 'Y'
									}
								},
								'journeyKey': 'Tkt_IDMxNn4gfn5EVFd_MDMvMjQvMjAxOCAwNjowMH5MR0F_MDMvMjQvMjAxOCAwNzo0Mn5eTkt_IDE5N34gfn5MR0F_MDMvMjQvMjAxOCAxMjozMH5GTEx_MDMvMjQvMjAxOCAxNTo0Mn4-',
								'segments': [
									{
										'isBlocked': false,
										'isHosted': true,
										'isChangeOfGauge': false,
										'designator': {
											'destination': 'LGA',
											'origin': 'DTW',
											'arrival': '2018-03-24T07:42:00',
											'departure': '2018-03-24T06:00:00'
										},
										'isSeatmapViewable': true,
										'segmentKey': 'Tkt_IDMxNn4gfn5EVFd_MDMvMjQvMjAxOCAwNjowMH5MR0F_MDMvMjQvMjAxOCAwNzo0Mn4-',
										'identifier': {
											'identifier': '316',
											'carrierCode': 'NK',
											'opSuffix': null
										},
										'cabinOfService': null,
										'externalIdentifier': null,
										'changeReasonCode': 0,
										'segmentType': 0,
										'international': false,
										'legs': [
											{
												'legKey': 'NjM2NTc0NjgwMDAwMDAwMDAwIU5LITMxNiEgIURUVyFMR0EhMTMwMzg4OA--',
												'operationsInfo': null,
												'designator': {
													'destination': 'LGA',
													'origin': 'DTW',
													'arrival': '2018-03-24T07:42:00',
													'departure': '2018-03-24T06:00:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-24T10:00:00Z',
													'arrivalTimeUtc': '2018-03-24T11:42:00Z',
													'adjustedCapacity': 145,
													'arrivalTerminal': 'D',
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 145,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': 'N',
													'departureTimeVariant': -240,
													'equipmentType': '319',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 146,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '9',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T07:42:00',
													'departureTime': '2018-03-24T06:00:00',
													'prbcCode': '319',
													'scheduleServiceType': 'J',
													'sold': 3,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDMxNiEgITYzNjU3NDY4MDAwMDAwMDAwMCFEVFchTEdB',
												'flightReference': '20180324 NK 316 DTWLGA'
											}
										]
									},
									{
										'isBlocked': false,
										'isHosted': true,
										'isChangeOfGauge': false,
										'designator': {
											'destination': 'FLL',
											'origin': 'LGA',
											'arrival': '2018-03-24T15:42:00',
											'departure': '2018-03-24T12:30:00'
										},
										'isSeatmapViewable': true,
										'segmentKey': 'Tkt_IDE5N34gfn5MR0F_MDMvMjQvMjAxOCAxMjozMH5GTEx_MDMvMjQvMjAxOCAxNTo0Mn4-',
										'identifier': {
											'identifier': '197',
											'carrierCode': 'NK',
											'opSuffix': null
										},
										'cabinOfService': null,
										'externalIdentifier': null,
										'changeReasonCode': 0,
										'segmentType': 0,
										'international': false,
										'legs': [
											{
												'legKey': 'NjM2NTc0OTE0MDAwMDAwMDAwIU5LITE5NyEgIUxHQSFGTEwhMTMwMzgxNA--',
												'operationsInfo': null,
												'designator': {
													'destination': 'FLL',
													'origin': 'LGA',
													'arrival': '2018-03-24T15:42:00',
													'departure': '2018-03-24T12:30:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-24T16:30:00Z',
													'arrivalTimeUtc': '2018-03-24T19:42:00Z',
													'adjustedCapacity': 182,
													'arrivalTerminal': '4',
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 182,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': 'C',
													'departureTimeVariant': -240,
													'equipmentType': '32A',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 182,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '8',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T15:42:00',
													'departureTime': '2018-03-24T12:30:00',
													'prbcCode': '32A',
													'scheduleServiceType': 'J',
													'sold': 7,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDE5NyEgITYzNjU3NDkxNDAwMDAwMDAwMCFMR0EhRkxM',
												'flightReference': '20180324 NK 197 LGAFLL'
											}
										]
									}
								],
								'notForGeneralUser': false
							},
							{
								'flightType': 1,
								'stops': 0,
								'designator': {
									'destination': 'FLL',
									'origin': 'DTW',
									'arrival': '2018-03-24T09:44:00',
									'departure': '2018-03-24T06:40:00'
								},
								'fares': {
									'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--': {
										'fareAvailabilityKey': 'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--',
										'fareCode': 'HNR',
										'availableCount': 223,
										'isSumOfSector': false,
										'classOfService': 'H'
									},
									'MH5Zfn5ZTlJ_MDAwMX5_OX5Y': {
										'fareAvailabilityKey': 'MH5Zfn5ZTlJ_MDAwMX5_OX5Y',
										'fareCode': 'YNR',
										'availableCount': 227,
										'isSumOfSector': false,
										'classOfService': 'Y'
									}
								},
								'journeyKey': 'Tkt_IDQxN34gfn5EVFd_MDMvMjQvMjAxOCAwNjo0MH5GTEx_MDMvMjQvMjAxOCAwOTo0NH4-',
								'segments': [
									{
										'isBlocked': false,
										'isHosted': true,
										'isChangeOfGauge': false,
										'designator': {
											'destination': 'FLL',
											'origin': 'DTW',
											'arrival': '2018-03-24T09:44:00',
											'departure': '2018-03-24T06:40:00'
										},
										'isSeatmapViewable': true,
										'segmentKey': 'Tkt_IDQxN34gfn5EVFd_MDMvMjQvMjAxOCAwNjo0MH5GTEx_MDMvMjQvMjAxOCAwOTo0NH4-',
										'identifier': {
											'identifier': '417',
											'carrierCode': 'NK',
											'opSuffix': null
										},
										'cabinOfService': null,
										'externalIdentifier': null,
										'changeReasonCode': 0,
										'segmentType': 0,
										'international': false,
										'legs': [
											{
												'legKey': 'NjM2NTc0NzA0MDAwMDAwMDAwIU5LITQxNyEgIURUVyFGTEwhMTMwMzk0Nw--',
												'operationsInfo': null,
												'designator': {
													'destination': 'FLL',
													'origin': 'DTW',
													'arrival': '2018-03-24T09:44:00',
													'departure': '2018-03-24T06:40:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-24T10:40:00Z',
													'arrivalTimeUtc': '2018-03-24T13:44:00Z',
													'adjustedCapacity': 228,
													'arrivalTerminal': '4',
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 228,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': 'N',
													'departureTimeVariant': -240,
													'equipmentType': '32B',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 228,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '8',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T09:44:00',
													'departureTime': '2018-03-24T06:40:00',
													'prbcCode': '32B',
													'scheduleServiceType': 'J',
													'sold': 1,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDQxNyEgITYzNjU3NDcwNDAwMDAwMDAwMCFEVFchRkxM',
												'flightReference': '20180324 NK 417 DTWFLL'
											}
										]
									}
								],
								'notForGeneralUser': false
							},
							{
								'flightType': 4,
								'stops': 1,
								'designator': {
									'destination': 'FLL',
									'origin': 'DTW',
									'arrival': '2018-03-24T13:21:00',
									'departure': '2018-03-24T08:30:00'
								},
								'fares': {
									'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--': {
										'fareAvailabilityKey': 'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--',
										'fareCode': 'HNR',
										'availableCount': 183,
										'isSumOfSector': false,
										'classOfService': 'H'
									},
									'MH5Zfn5ZTlJ_MDAwMX5_OX5Y': {
										'fareAvailabilityKey': 'MH5Zfn5ZTlJ_MDAwMX5_OX5Y',
										'fareCode': 'YNR',
										'availableCount': 184,
										'isSumOfSector': false,
										'classOfService': 'Y'
									}
								},
								'journeyKey': 'Tkt_IDc4MX4gfn5EVFd_MDMvMjQvMjAxOCAwODozMH5CV0l_MDMvMjQvMjAxOCAxMDowMX5eTkt_IDMwNX4gfn5CV0l_MDMvMjQvMjAxOCAxMDo0MX5GTEx_MDMvMjQvMjAxOCAxMzoyMX4-',
								'segments': [
									{
										'isBlocked': false,
										'isHosted': true,
										'isChangeOfGauge': false,
										'designator': {
											'destination': 'BWI',
											'origin': 'DTW',
											'arrival': '2018-03-24T10:01:00',
											'departure': '2018-03-24T08:30:00'
										},
										'isSeatmapViewable': true,
										'segmentKey': 'Tkt_IDc4MX4gfn5EVFd_MDMvMjQvMjAxOCAwODozMH5CV0l_MDMvMjQvMjAxOCAxMDowMX4-',
										'identifier': {
											'identifier': '781',
											'carrierCode': 'NK',
											'opSuffix': null
										},
										'cabinOfService': null,
										'externalIdentifier': null,
										'changeReasonCode': 0,
										'segmentType': 0,
										'international': false,
										'legs': [
											{
												'legKey': 'NjM2NTc0NzcwMDAwMDAwMDAwIU5LITc4MSEgIURUVyFCV0khMTMwNDEzNA--',
												'operationsInfo': null,
												'designator': {
													'destination': 'BWI',
													'origin': 'DTW',
													'arrival': '2018-03-24T10:01:00',
													'departure': '2018-03-24T08:30:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-24T12:30:00Z',
													'arrivalTimeUtc': '2018-03-24T14:01:00Z',
													'adjustedCapacity': 182,
													'arrivalTerminal': null,
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 182,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': 'N',
													'departureTimeVariant': -240,
													'equipmentType': '32A',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 184,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '9',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T10:01:00',
													'departureTime': '2018-03-24T08:30:00',
													'prbcCode': '32A',
													'scheduleServiceType': 'J',
													'sold': 0,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDc4MSEgITYzNjU3NDc3MDAwMDAwMDAwMCFEVFchQldJ',
												'flightReference': '20180324 NK 781 DTWBWI'
											}
										]
									},
									{
										'isBlocked': false,
										'isHosted': true,
										'isChangeOfGauge': false,
										'designator': {
											'destination': 'FLL',
											'origin': 'BWI',
											'arrival': '2018-03-24T13:21:00',
											'departure': '2018-03-24T10:41:00'
										},
										'isSeatmapViewable': true,
										'segmentKey': 'Tkt_IDMwNX4gfn5CV0l_MDMvMjQvMjAxOCAxMDo0MX5GTEx_MDMvMjQvMjAxOCAxMzoyMX4-',
										'identifier': {
											'identifier': '305',
											'carrierCode': 'NK',
											'opSuffix': null
										},
										'cabinOfService': null,
										'externalIdentifier': null,
										'changeReasonCode': 0,
										'segmentType': 0,
										'international': false,
										'legs': [
											{
												'legKey': 'NjM2NTc0ODQ4NjAwMDAwMDAwIU5LITMwNSEgIUJXSSFGTEwhMTMwMzg4MQ--',
												'operationsInfo': null,
												'designator': {
													'destination': 'FLL',
													'origin': 'BWI',
													'arrival': '2018-03-24T13:21:00',
													'departure': '2018-03-24T10:41:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-24T14:41:00Z',
													'arrivalTimeUtc': '2018-03-24T17:21:00Z',
													'adjustedCapacity': 228,
													'arrivalTerminal': '4',
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 228,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': null,
													'departureTimeVariant': -240,
													'equipmentType': '32B',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 230,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '9',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T13:21:00',
													'departureTime': '2018-03-24T10:41:00',
													'prbcCode': '32B',
													'scheduleServiceType': 'J',
													'sold': 2,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDMwNSEgITYzNjU3NDg0ODYwMDAwMDAwMCFCV0khRkxM',
												'flightReference': '20180324 NK 305 BWIFLL'
											}
										]
									}
								],
								'notForGeneralUser': false
							},
							{
								'flightType': 4,
								'stops': 1,
								'designator': {
									'destination': 'FLL',
									'origin': 'DTW',
									'arrival': '2018-03-24T19:34:00',
									'departure': '2018-03-24T09:51:00'
								},
								'fares': {
									'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--': {
										'fareAvailabilityKey': 'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--',
										'fareCode': 'HNR',
										'availableCount': 137,
										'isSumOfSector': false,
										'classOfService': 'H'
									},
									'MH5Zfn5ZTlJ_MDAwMX5_OX5Y': {
										'fareAvailabilityKey': 'MH5Zfn5ZTlJ_MDAwMX5_OX5Y',
										'fareCode': 'YNR',
										'availableCount': 138,
										'isSumOfSector': false,
										'classOfService': 'Y'
									}
								},
								'journeyKey': 'Tkt_IDU2NX4gfn5EVFd_MDMvMjQvMjAxOCAwOTo1MX5BVEx_MDMvMjQvMjAxOCAxMTo1NX5eTkt_IDQwM34gfn5BVEx_MDMvMjQvMjAxOCAxNzo0MX5GTEx_MDMvMjQvMjAxOCAxOTozNH4-',
								'segments': [
									{
										'isBlocked': false,
										'isHosted': true,
										'isChangeOfGauge': false,
										'designator': {
											'destination': 'ATL',
											'origin': 'DTW',
											'arrival': '2018-03-24T11:55:00',
											'departure': '2018-03-24T09:51:00'
										},
										'isSeatmapViewable': true,
										'segmentKey': 'Tkt_IDU2NX4gfn5EVFd_MDMvMjQvMjAxOCAwOTo1MX5BVEx_MDMvMjQvMjAxOCAxMTo1NX4-',
										'identifier': {
											'identifier': '565',
											'carrierCode': 'NK',
											'opSuffix': null
										},
										'cabinOfService': null,
										'externalIdentifier': null,
										'changeReasonCode': 0,
										'segmentType': 0,
										'international': false,
										'legs': [
											{
												'legKey': 'NjM2NTc0ODE4NjAwMDAwMDAwIU5LITU2NSEgIURUVyFBVEwhMTMwNDAyNA--',
												'operationsInfo': null,
												'designator': {
													'destination': 'ATL',
													'origin': 'DTW',
													'arrival': '2018-03-24T11:55:00',
													'departure': '2018-03-24T09:51:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-24T13:51:00Z',
													'arrivalTimeUtc': '2018-03-24T15:55:00Z',
													'adjustedCapacity': 182,
													'arrivalTerminal': 'N',
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 182,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': 'N',
													'departureTimeVariant': -240,
													'equipmentType': '32A',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 187,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '8',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T11:55:00',
													'departureTime': '2018-03-24T09:51:00',
													'prbcCode': '32A',
													'scheduleServiceType': 'J',
													'sold': 0,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDU2NSEgITYzNjU3NDgxODYwMDAwMDAwMCFEVFchQVRM',
												'flightReference': '20180324 NK 565 DTWATL'
											}
										]
									},
									{
										'isBlocked': false,
										'isHosted': true,
										'isChangeOfGauge': false,
										'designator': {
											'destination': 'FLL',
											'origin': 'ATL',
											'arrival': '2018-03-24T19:34:00',
											'departure': '2018-03-24T17:41:00'
										},
										'isSeatmapViewable': true,
										'segmentKey': 'Tkt_IDQwM34gfn5BVEx_MDMvMjQvMjAxOCAxNzo0MX5GTEx_MDMvMjQvMjAxOCAxOTozNH4-',
										'identifier': {
											'identifier': '403',
											'carrierCode': 'NK',
											'opSuffix': null
										},
										'cabinOfService': null,
										'externalIdentifier': null,
										'changeReasonCode': 0,
										'segmentType': 0,
										'international': false,
										'legs': [
											{
												'legKey': 'NjM2NTc1MTAwNjAwMDAwMDAwIU5LITQwMyEgIUFUTCFGTEwhMTMwMzkzNA--',
												'operationsInfo': null,
												'designator': {
													'destination': 'FLL',
													'origin': 'ATL',
													'arrival': '2018-03-24T19:34:00',
													'departure': '2018-03-24T17:41:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-24T21:41:00Z',
													'arrivalTimeUtc': '2018-03-24T23:34:00Z',
													'adjustedCapacity': 145,
													'arrivalTerminal': '4',
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 145,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': 'N',
													'departureTimeVariant': -240,
													'equipmentType': '319',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 146,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '8',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T19:34:00',
													'departureTime': '2018-03-24T17:41:00',
													'prbcCode': '319',
													'scheduleServiceType': 'J',
													'sold': 8,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDQwMyEgITYzNjU3NTEwMDYwMDAwMDAwMCFBVEwhRkxM',
												'flightReference': '20180324 NK 403 ATLFLL'
											}
										]
									}
								],
								'notForGeneralUser': false
							},
							{
								'flightType': 4,
								'stops': 2,
								'designator': {
									'destination': 'FLL',
									'origin': 'DTW',
									'arrival': '2018-03-24T21:06:00',
									'departure': '2018-03-24T09:51:00'
								},
								'fares': {
									'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--': {
										'fareAvailabilityKey': 'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--',
										'fareCode': 'HNR',
										'availableCount': 108,
										'isSumOfSector': false,
										'classOfService': 'H'
									},
									'MH5Zfn5ZTlJ_MDAwMX5_OX5Y': {
										'fareAvailabilityKey': 'MH5Zfn5ZTlJ_MDAwMX5_OX5Y',
										'fareCode': 'YNR',
										'availableCount': 183,
										'isSumOfSector': false,
										'classOfService': 'Y'
									}
								},
								'journeyKey': 'Tkt_IDU2NX4gfn5EVFd_MDMvMjQvMjAxOCAwOTo1MX5NQ09_MDMvMjQvMjAxOCAxNDoxMH5BVExeTkt_IDE5NX4gfn5NQ09_MDMvMjQvMjAxOCAxOTo1OX5GTEx_MDMvMjQvMjAxOCAyMTowNn4-',
								'segments': [
									{
										'isBlocked': false,
										'isHosted': true,
										'isChangeOfGauge': false,
										'designator': {
											'destination': 'MCO',
											'origin': 'DTW',
											'arrival': '2018-03-24T14:10:00',
											'departure': '2018-03-24T09:51:00'
										},
										'isSeatmapViewable': true,
										'segmentKey': 'Tkt_IDU2NX4gfn5EVFd_MDMvMjQvMjAxOCAwOTo1MX5NQ09_MDMvMjQvMjAxOCAxNDoxMH5BVEw-',
										'identifier': {
											'identifier': '565',
											'carrierCode': 'NK',
											'opSuffix': null
										},
										'cabinOfService': null,
										'externalIdentifier': null,
										'changeReasonCode': 0,
										'segmentType': 0,
										'international': false,
										'legs': [
											{
												'legKey': 'NjM2NTc0ODE4NjAwMDAwMDAwIU5LITU2NSEgIURUVyFBVEwhMTMwNDAyNA--',
												'operationsInfo': null,
												'designator': {
													'destination': 'ATL',
													'origin': 'DTW',
													'arrival': '2018-03-24T11:55:00',
													'departure': '2018-03-24T09:51:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-24T13:51:00Z',
													'arrivalTimeUtc': '2018-03-24T15:55:00Z',
													'adjustedCapacity': 182,
													'arrivalTerminal': 'N',
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 182,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': 'N',
													'departureTimeVariant': -240,
													'equipmentType': '32A',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 187,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '8',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T11:55:00',
													'departureTime': '2018-03-24T09:51:00',
													'prbcCode': '32A',
													'scheduleServiceType': 'J',
													'sold': 0,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDU2NSEgITYzNjU3NDgxODYwMDAwMDAwMCFEVFchTUNP',
												'flightReference': '20180324 NK 565 DTWATL'
											},
											{
												'legKey': 'NjM2NTc0OTIzMDAwMDAwMDAwIU5LITU2NSEgIUFUTCFNQ08hMTMwNDAyMw--',
												'operationsInfo': null,
												'designator': {
													'destination': 'MCO',
													'origin': 'ATL',
													'arrival': '2018-03-24T14:10:00',
													'departure': '2018-03-24T12:45:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-24T16:45:00Z',
													'arrivalTimeUtc': '2018-03-24T18:10:00Z',
													'adjustedCapacity': 182,
													'arrivalTerminal': null,
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 182,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': 'N',
													'departureTimeVariant': -240,
													'equipmentType': '32A',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 184,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '8',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T14:10:00',
													'departureTime': '2018-03-24T12:45:00',
													'prbcCode': '32A',
													'scheduleServiceType': 'J',
													'sold': 0,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDU2NSEgITYzNjU3NDgxODYwMDAwMDAwMCFEVFchTUNP',
												'flightReference': '20180324 NK 565 ATLMCO'
											}
										]
									},
									{
										'isBlocked': false,
										'isHosted': true,
										'isChangeOfGauge': false,
										'designator': {
											'destination': 'FLL',
											'origin': 'MCO',
											'arrival': '2018-03-24T21:06:00',
											'departure': '2018-03-24T19:59:00'
										},
										'isSeatmapViewable': true,
										'segmentKey': 'Tkt_IDE5NX4gfn5NQ09_MDMvMjQvMjAxOCAxOTo1OX5GTEx_MDMvMjQvMjAxOCAyMTowNn4-',
										'identifier': {
											'identifier': '195',
											'carrierCode': 'NK',
											'opSuffix': null
										},
										'cabinOfService': null,
										'externalIdentifier': null,
										'changeReasonCode': 0,
										'segmentType': 0,
										'international': false,
										'legs': [
											{
												'legKey': 'NjM2NTc1MTgzNDAwMDAwMDAwIU5LITE5NSEgIU1DTyFGTEwhMTMwMzgxMw--',
												'operationsInfo': null,
												'designator': {
													'destination': 'FLL',
													'origin': 'MCO',
													'arrival': '2018-03-24T21:06:00',
													'departure': '2018-03-24T19:59:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-24T23:59:00Z',
													'arrivalTimeUtc': '2018-03-25T01:06:00Z',
													'adjustedCapacity': 182,
													'arrivalTerminal': '4',
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 182,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': null,
													'departureTimeVariant': -240,
													'equipmentType': '32A',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 187,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '8',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T21:06:00',
													'departureTime': '2018-03-24T19:59:00',
													'prbcCode': '32A',
													'scheduleServiceType': 'J',
													'sold': 4,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDE5NSEgITYzNjU3NTE4MzQwMDAwMDAwMCFNQ08hRkxM',
												'flightReference': '20180324 NK 195 MCOFLL'
											}
										]
									}
								],
								'notForGeneralUser': false
							},
							{
								'flightType': 4,
								'stops': 1,
								'designator': {
									'destination': 'FLL',
									'origin': 'DTW',
									'arrival': '2018-03-24T17:50:00',
									'departure': '2018-03-24T09:51:00'
								},
								'fares': {
									'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--': {
										'fareAvailabilityKey': 'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--',
										'fareCode': 'HNR',
										'availableCount': 145,
										'isSumOfSector': false,
										'classOfService': 'H'
									},
									'MH5Zfn5ZTlJ_MDAwMX5_OX5Y': {
										'fareAvailabilityKey': 'MH5Zfn5ZTlJ_MDAwMX5_OX5Y',
										'fareCode': 'YNR',
										'availableCount': 146,
										'isSumOfSector': false,
										'classOfService': 'Y'
									}
								},
								'journeyKey': 'Tkt_IDU2NX4gfn5EVFd_MDMvMjQvMjAxOCAwOTo1MX5BVEx_MDMvMjQvMjAxOCAxMTo1NX5eTkt_IDUzN34gfn5BVEx_MDMvMjQvMjAxOCAxNTo1NX5GTEx_MDMvMjQvMjAxOCAxNzo1MH4-',
								'segments': [
									{
										'isBlocked': false,
										'isHosted': true,
										'isChangeOfGauge': false,
										'designator': {
											'destination': 'ATL',
											'origin': 'DTW',
											'arrival': '2018-03-24T11:55:00',
											'departure': '2018-03-24T09:51:00'
										},
										'isSeatmapViewable': true,
										'segmentKey': 'Tkt_IDU2NX4gfn5EVFd_MDMvMjQvMjAxOCAwOTo1MX5BVEx_MDMvMjQvMjAxOCAxMTo1NX4-',
										'identifier': {
											'identifier': '565',
											'carrierCode': 'NK',
											'opSuffix': null
										},
										'cabinOfService': null,
										'externalIdentifier': null,
										'changeReasonCode': 0,
										'segmentType': 0,
										'international': false,
										'legs': [
											{
												'legKey': 'NjM2NTc0ODE4NjAwMDAwMDAwIU5LITU2NSEgIURUVyFBVEwhMTMwNDAyNA--',
												'operationsInfo': null,
												'designator': {
													'destination': 'ATL',
													'origin': 'DTW',
													'arrival': '2018-03-24T11:55:00',
													'departure': '2018-03-24T09:51:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-24T13:51:00Z',
													'arrivalTimeUtc': '2018-03-24T15:55:00Z',
													'adjustedCapacity': 182,
													'arrivalTerminal': 'N',
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 182,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': 'N',
													'departureTimeVariant': -240,
													'equipmentType': '32A',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 187,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '8',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T11:55:00',
													'departureTime': '2018-03-24T09:51:00',
													'prbcCode': '32A',
													'scheduleServiceType': 'J',
													'sold': 0,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDU2NSEgITYzNjU3NDgxODYwMDAwMDAwMCFEVFchQVRM',
												'flightReference': '20180324 NK 565 DTWATL'
											}
										]
									},
									{
										'isBlocked': false,
										'isHosted': true,
										'isChangeOfGauge': false,
										'designator': {
											'destination': 'FLL',
											'origin': 'ATL',
											'arrival': '2018-03-24T17:50:00',
											'departure': '2018-03-24T15:55:00'
										},
										'isSeatmapViewable': true,
										'segmentKey': 'Tkt_IDUzN34gfn5BVEx_MDMvMjQvMjAxOCAxNTo1NX5GTEx_MDMvMjQvMjAxOCAxNzo1MH4-',
										'identifier': {
											'identifier': '537',
											'carrierCode': 'NK',
											'opSuffix': null
										},
										'cabinOfService': null,
										'externalIdentifier': null,
										'changeReasonCode': 0,
										'segmentType': 0,
										'international': false,
										'legs': [
											{
												'legKey': 'NjM2NTc1MDM3MDAwMDAwMDAwIU5LITUzNyEgIUFUTCFGTEwhMTMwNDAwNA--',
												'operationsInfo': null,
												'designator': {
													'destination': 'FLL',
													'origin': 'ATL',
													'arrival': '2018-03-24T17:50:00',
													'departure': '2018-03-24T15:55:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-24T19:55:00Z',
													'arrivalTimeUtc': '2018-03-24T21:50:00Z',
													'adjustedCapacity': 145,
													'arrivalTerminal': '4',
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 145,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': 'N',
													'departureTimeVariant': -240,
													'equipmentType': '319',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 146,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '7',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T17:50:00',
													'departureTime': '2018-03-24T15:55:00',
													'prbcCode': '319',
													'scheduleServiceType': 'J',
													'sold': 0,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDUzNyEgITYzNjU3NTAzNzAwMDAwMDAwMCFBVEwhRkxM',
												'flightReference': '20180324 NK 537 ATLFLL'
											}
										]
									}
								],
								'notForGeneralUser': false
							},
							{
								'flightType': 4,
								'stops': 1,
								'designator': {
									'destination': 'FLL',
									'origin': 'DTW',
									'arrival': '2018-03-24T21:06:00',
									'departure': '2018-03-24T11:25:00'
								},
								'fares': {
									'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--': {
										'fareAvailabilityKey': 'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--',
										'fareCode': 'HNR',
										'availableCount': 108,
										'isSumOfSector': false,
										'classOfService': 'H'
									},
									'MH5Zfn5ZTlJ_MDAwMX5_OX5Y': {
										'fareAvailabilityKey': 'MH5Zfn5ZTlJ_MDAwMX5_OX5Y',
										'fareCode': 'YNR',
										'availableCount': 146,
										'isSumOfSector': false,
										'classOfService': 'Y'
									}
								},
								'journeyKey': 'Tkt_IDMzN34gfn5EVFd_MDMvMjQvMjAxOCAxMToyNX5NQ09_MDMvMjQvMjAxOCAxNDowNH5eTkt_IDE5NX4gfn5NQ09_MDMvMjQvMjAxOCAxOTo1OX5GTEx_MDMvMjQvMjAxOCAyMTowNn4-',
								'segments': [
									{
										'isBlocked': false,
										'isHosted': true,
										'isChangeOfGauge': false,
										'designator': {
											'destination': 'MCO',
											'origin': 'DTW',
											'arrival': '2018-03-24T14:04:00',
											'departure': '2018-03-24T11:25:00'
										},
										'isSeatmapViewable': true,
										'segmentKey': 'Tkt_IDMzN34gfn5EVFd_MDMvMjQvMjAxOCAxMToyNX5NQ09_MDMvMjQvMjAxOCAxNDowNH4-',
										'identifier': {
											'identifier': '337',
											'carrierCode': 'NK',
											'opSuffix': null
										},
										'cabinOfService': null,
										'externalIdentifier': null,
										'changeReasonCode': 0,
										'segmentType': 0,
										'international': false,
										'legs': [
											{
												'legKey': 'NjM2NTc0ODc1MDAwMDAwMDAwIU5LITMzNyEgIURUVyFNQ08hMTMwMzkwMA--',
												'operationsInfo': null,
												'designator': {
													'destination': 'MCO',
													'origin': 'DTW',
													'arrival': '2018-03-24T14:04:00',
													'departure': '2018-03-24T11:25:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-24T15:25:00Z',
													'arrivalTimeUtc': '2018-03-24T18:04:00Z',
													'adjustedCapacity': 145,
													'arrivalTerminal': null,
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 145,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': null,
													'departureTimeVariant': -240,
													'equipmentType': '319',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 146,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '7',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T14:04:00',
													'departureTime': '2018-03-24T11:25:00',
													'prbcCode': '319',
													'scheduleServiceType': 'J',
													'sold': 0,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDMzNyEgITYzNjU3NDg3NTAwMDAwMDAwMCFEVFchTUNP',
												'flightReference': '20180324 NK 337 DTWMCO'
											}
										]
									},
									{
										'isBlocked': false,
										'isHosted': true,
										'isChangeOfGauge': false,
										'designator': {
											'destination': 'FLL',
											'origin': 'MCO',
											'arrival': '2018-03-24T21:06:00',
											'departure': '2018-03-24T19:59:00'
										},
										'isSeatmapViewable': true,
										'segmentKey': 'Tkt_IDE5NX4gfn5NQ09_MDMvMjQvMjAxOCAxOTo1OX5GTEx_MDMvMjQvMjAxOCAyMTowNn4-',
										'identifier': {
											'identifier': '195',
											'carrierCode': 'NK',
											'opSuffix': null
										},
										'cabinOfService': null,
										'externalIdentifier': null,
										'changeReasonCode': 0,
										'segmentType': 0,
										'international': false,
										'legs': [
											{
												'legKey': 'NjM2NTc1MTgzNDAwMDAwMDAwIU5LITE5NSEgIU1DTyFGTEwhMTMwMzgxMw--',
												'operationsInfo': null,
												'designator': {
													'destination': 'FLL',
													'origin': 'MCO',
													'arrival': '2018-03-24T21:06:00',
													'departure': '2018-03-24T19:59:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-24T23:59:00Z',
													'arrivalTimeUtc': '2018-03-25T01:06:00Z',
													'adjustedCapacity': 182,
													'arrivalTerminal': '4',
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 182,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': null,
													'departureTimeVariant': -240,
													'equipmentType': '32A',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 187,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '8',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T21:06:00',
													'departureTime': '2018-03-24T19:59:00',
													'prbcCode': '32A',
													'scheduleServiceType': 'J',
													'sold': 4,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDE5NSEgITYzNjU3NTE4MzQwMDAwMDAwMCFNQ08hRkxM',
												'flightReference': '20180324 NK 195 MCOFLL'
											}
										]
									}
								],
								'notForGeneralUser': false
							},
							{
								'flightType': 4,
								'stops': 1,
								'designator': {
									'destination': 'FLL',
									'origin': 'DTW',
									'arrival': '2018-03-24T21:53:00',
									'departure': '2018-03-24T15:10:00'
								},
								'fares': {
									'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--': {
										'fareAvailabilityKey': 'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--',
										'fareCode': 'HNR',
										'availableCount': 180,
										'isSumOfSector': false,
										'classOfService': 'H'
									},
									'MH5Zfn5ZTlJ_MDAwMX5_OX5Y': {
										'fareAvailabilityKey': 'MH5Zfn5ZTlJ_MDAwMX5_OX5Y',
										'fareCode': 'YNR',
										'availableCount': 180,
										'isSumOfSector': false,
										'classOfService': 'Y'
									}
								},
								'journeyKey': 'Tkt_IDY0NX4gfn5EVFd_MDMvMjQvMjAxOCAxNToxMH5UUEF_MDMvMjQvMjAxOCAxNzo1MX5eTkt_IDU3NX4gfn5UUEF_MDMvMjQvMjAxOCAyMDo0OX5GTEx_MDMvMjQvMjAxOCAyMTo1M34-',
								'segments': [
									{
										'isBlocked': false,
										'isHosted': true,
										'isChangeOfGauge': false,
										'designator': {
											'destination': 'TPA',
											'origin': 'DTW',
											'arrival': '2018-03-24T17:51:00',
											'departure': '2018-03-24T15:10:00'
										},
										'isSeatmapViewable': true,
										'segmentKey': 'Tkt_IDY0NX4gfn5EVFd_MDMvMjQvMjAxOCAxNToxMH5UUEF_MDMvMjQvMjAxOCAxNzo1MX4-',
										'identifier': {
											'identifier': '645',
											'carrierCode': 'NK',
											'opSuffix': null
										},
										'cabinOfService': null,
										'externalIdentifier': null,
										'changeReasonCode': 0,
										'segmentType': 0,
										'international': false,
										'legs': [
											{
												'legKey': 'NjM2NTc1MDEwMDAwMDAwMDAwIU5LITY0NSEgIURUVyFUUEEhMTM2MDEzMQ--',
												'operationsInfo': null,
												'designator': {
													'destination': 'TPA',
													'origin': 'DTW',
													'arrival': '2018-03-24T17:51:00',
													'departure': '2018-03-24T15:10:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-24T19:10:00Z',
													'arrivalTimeUtc': '2018-03-24T21:51:00Z',
													'adjustedCapacity': 178,
													'arrivalTerminal': null,
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 178,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': 'N',
													'departureTimeVariant': -240,
													'equipmentType': '320',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 180,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '8',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T17:51:00',
													'departureTime': '2018-03-24T15:10:00',
													'prbcCode': '320',
													'scheduleServiceType': 'J',
													'sold': 0,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDY0NSEgITYzNjU3NTAxMDAwMDAwMDAwMCFEVFchVFBB',
												'flightReference': '20180324 NK 645 DTWTPA'
											}
										]
									},
									{
										'isBlocked': false,
										'isHosted': true,
										'isChangeOfGauge': false,
										'designator': {
											'destination': 'FLL',
											'origin': 'TPA',
											'arrival': '2018-03-24T21:53:00',
											'departure': '2018-03-24T20:49:00'
										},
										'isSeatmapViewable': true,
										'segmentKey': 'Tkt_IDU3NX4gfn5UUEF_MDMvMjQvMjAxOCAyMDo0OX5GTEx_MDMvMjQvMjAxOCAyMTo1M34-',
										'identifier': {
											'identifier': '575',
											'carrierCode': 'NK',
											'opSuffix': null
										},
										'cabinOfService': null,
										'externalIdentifier': null,
										'changeReasonCode': 0,
										'segmentType': 0,
										'international': false,
										'legs': [
											{
												'legKey': 'NjM2NTc1MjEzNDAwMDAwMDAwIU5LITU3NSEgIVRQQSFGTEwhMTMwNDAyOQ--',
												'operationsInfo': null,
												'designator': {
													'destination': 'FLL',
													'origin': 'TPA',
													'arrival': '2018-03-24T21:53:00',
													'departure': '2018-03-24T20:49:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-25T00:49:00Z',
													'arrivalTimeUtc': '2018-03-25T01:53:00Z',
													'adjustedCapacity': 182,
													'arrivalTerminal': '4',
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 182,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': null,
													'departureTimeVariant': -240,
													'equipmentType': '32A',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 184,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '8',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T21:53:00',
													'departureTime': '2018-03-24T20:49:00',
													'prbcCode': '32A',
													'scheduleServiceType': 'J',
													'sold': 0,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDU3NSEgITYzNjU3NTIxMzQwMDAwMDAwMCFUUEEhRkxM',
												'flightReference': '20180324 NK 575 TPAFLL'
											}
										]
									}
								],
								'notForGeneralUser': false
							},
							{
								'flightType': 4,
								'stops': 1,
								'designator': {
									'destination': 'FLL',
									'origin': 'DTW',
									'arrival': '2018-03-24T23:36:00',
									'departure': '2018-03-24T16:10:00'
								},
								'fares': {
									'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--': {
										'fareAvailabilityKey': 'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--',
										'fareCode': 'HNR',
										'availableCount': 174,
										'isSumOfSector': false,
										'classOfService': 'H'
									},
									'MH5Zfn5ZTlJ_MDAwMX5_OX5Y': {
										'fareAvailabilityKey': 'MH5Zfn5ZTlJ_MDAwMX5_OX5Y',
										'fareCode': 'YNR',
										'availableCount': 177,
										'isSumOfSector': false,
										'classOfService': 'Y'
									}
								},
								'journeyKey': 'Tkt_IDM0N34gfn5EVFd_MDMvMjQvMjAxOCAxNjoxMH5MR0F_MDMvMjQvMjAxOCAxNzo1OX5eTkt_IDc3OX4gfn5MR0F_MDMvMjQvMjAxOCAyMDoyNX5GTEx_MDMvMjQvMjAxOCAyMzozNn4-',
								'segments': [
									{
										'isBlocked': false,
										'isHosted': true,
										'isChangeOfGauge': false,
										'designator': {
											'destination': 'LGA',
											'origin': 'DTW',
											'arrival': '2018-03-24T17:59:00',
											'departure': '2018-03-24T16:10:00'
										},
										'isSeatmapViewable': true,
										'segmentKey': 'Tkt_IDM0N34gfn5EVFd_MDMvMjQvMjAxOCAxNjoxMH5MR0F_MDMvMjQvMjAxOCAxNzo1OX4-',
										'identifier': {
											'identifier': '347',
											'carrierCode': 'NK',
											'opSuffix': null
										},
										'cabinOfService': null,
										'externalIdentifier': null,
										'changeReasonCode': 0,
										'segmentType': 0,
										'international': false,
										'legs': [
											{
												'legKey': 'NjM2NTc1MDQ2MDAwMDAwMDAwIU5LITM0NyEgIURUVyFMR0EhMTMwMzkwOA--',
												'operationsInfo': null,
												'designator': {
													'destination': 'LGA',
													'origin': 'DTW',
													'arrival': '2018-03-24T17:59:00',
													'departure': '2018-03-24T16:10:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-24T20:10:00Z',
													'arrivalTimeUtc': '2018-03-24T21:59:00Z',
													'adjustedCapacity': 182,
													'arrivalTerminal': 'D',
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 182,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': 'N',
													'departureTimeVariant': -240,
													'equipmentType': '32A',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 183,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '6',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T17:59:00',
													'departureTime': '2018-03-24T16:10:00',
													'prbcCode': '32A',
													'scheduleServiceType': 'J',
													'sold': 0,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDM0NyEgITYzNjU3NTA0NjAwMDAwMDAwMCFEVFchTEdB',
												'flightReference': '20180324 NK 347 DTWLGA'
											}
										]
									},
									{
										'isBlocked': false,
										'isHosted': true,
										'isChangeOfGauge': false,
										'designator': {
											'destination': 'FLL',
											'origin': 'LGA',
											'arrival': '2018-03-24T23:36:00',
											'departure': '2018-03-24T20:25:00'
										},
										'isSeatmapViewable': true,
										'segmentKey': 'Tkt_IDc3OX4gfn5MR0F_MDMvMjQvMjAxOCAyMDoyNX5GTEx_MDMvMjQvMjAxOCAyMzozNn4-',
										'identifier': {
											'identifier': '779',
											'carrierCode': 'NK',
											'opSuffix': null
										},
										'cabinOfService': null,
										'externalIdentifier': null,
										'changeReasonCode': 0,
										'segmentType': 0,
										'international': false,
										'legs': [
											{
												'legKey': 'NjM2NTc1MTk5MDAwMDAwMDAwIU5LITc3OSEgIUxHQSFGTEwhMTMwNDEzMg--',
												'operationsInfo': null,
												'designator': {
													'destination': 'FLL',
													'origin': 'LGA',
													'arrival': '2018-03-24T23:36:00',
													'departure': '2018-03-24T20:25:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-25T00:25:00Z',
													'arrivalTimeUtc': '2018-03-25T03:36:00Z',
													'adjustedCapacity': 182,
													'arrivalTerminal': '4',
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 182,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': 'C',
													'departureTimeVariant': -240,
													'equipmentType': '32A',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 182,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '6',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T23:36:00',
													'departureTime': '2018-03-24T20:25:00',
													'prbcCode': '32A',
													'scheduleServiceType': 'J',
													'sold': 5,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDc3OSEgITYzNjU3NTE5OTAwMDAwMDAwMCFMR0EhRkxM',
												'flightReference': '20180324 NK 779 LGAFLL'
											}
										]
									}
								],
								'notForGeneralUser': false
							},
							{
								'flightType': 4,
								'stops': 1,
								'designator': {
									'destination': 'FLL',
									'origin': 'DTW',
									'arrival': '2018-03-24T21:06:00',
									'departure': '2018-03-24T16:35:00'
								},
								'fares': {
									'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--': {
										'fareAvailabilityKey': 'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--',
										'fareCode': 'HNR',
										'availableCount': 108,
										'isSumOfSector': false,
										'classOfService': 'H'
									},
									'MH5Zfn5ZTlJ_MDAwMX5_OX5Y': {
										'fareAvailabilityKey': 'MH5Zfn5ZTlJ_MDAwMX5_OX5Y',
										'fareCode': 'YNR',
										'availableCount': 183,
										'isSumOfSector': false,
										'classOfService': 'Y'
									}
								},
								'journeyKey': 'Tkt_IDg5OX4gfn5EVFd_MDMvMjQvMjAxOCAxNjozNX5NQ09_MDMvMjQvMjAxOCAxOToxNH5eTkt_IDE5NX4gfn5NQ09_MDMvMjQvMjAxOCAxOTo1OX5GTEx_MDMvMjQvMjAxOCAyMTowNn4-',
								'segments': [
									{
										'isBlocked': false,
										'isHosted': true,
										'isChangeOfGauge': false,
										'designator': {
											'destination': 'MCO',
											'origin': 'DTW',
											'arrival': '2018-03-24T19:14:00',
											'departure': '2018-03-24T16:35:00'
										},
										'isSeatmapViewable': true,
										'segmentKey': 'Tkt_IDg5OX4gfn5EVFd_MDMvMjQvMjAxOCAxNjozNX5NQ09_MDMvMjQvMjAxOCAxOToxNH4-',
										'identifier': {
											'identifier': '899',
											'carrierCode': 'NK',
											'opSuffix': null
										},
										'cabinOfService': null,
										'externalIdentifier': null,
										'changeReasonCode': 0,
										'segmentType': 0,
										'international': false,
										'legs': [
											{
												'legKey': 'NjM2NTc1MDYxMDAwMDAwMDAwIU5LITg5OSEgIURUVyFNQ08hMTMwNDE5NQ--',
												'operationsInfo': null,
												'designator': {
													'destination': 'MCO',
													'origin': 'DTW',
													'arrival': '2018-03-24T19:14:00',
													'departure': '2018-03-24T16:35:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-24T20:35:00Z',
													'arrivalTimeUtc': '2018-03-24T23:14:00Z',
													'adjustedCapacity': 182,
													'arrivalTerminal': null,
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 182,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': 'N',
													'departureTimeVariant': -240,
													'equipmentType': '32A',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 184,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '8',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T19:14:00',
													'departureTime': '2018-03-24T16:35:00',
													'prbcCode': '32A',
													'scheduleServiceType': 'J',
													'sold': 0,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDg5OSEgITYzNjU3NTA2MTAwMDAwMDAwMCFEVFchTUNP',
												'flightReference': '20180324 NK 899 DTWMCO'
											}
										]
									},
									{
										'isBlocked': false,
										'isHosted': true,
										'isChangeOfGauge': false,
										'designator': {
											'destination': 'FLL',
											'origin': 'MCO',
											'arrival': '2018-03-24T21:06:00',
											'departure': '2018-03-24T19:59:00'
										},
										'isSeatmapViewable': true,
										'segmentKey': 'Tkt_IDE5NX4gfn5NQ09_MDMvMjQvMjAxOCAxOTo1OX5GTEx_MDMvMjQvMjAxOCAyMTowNn4-',
										'identifier': {
											'identifier': '195',
											'carrierCode': 'NK',
											'opSuffix': null
										},
										'cabinOfService': null,
										'externalIdentifier': null,
										'changeReasonCode': 0,
										'segmentType': 0,
										'international': false,
										'legs': [
											{
												'legKey': 'NjM2NTc1MTgzNDAwMDAwMDAwIU5LITE5NSEgIU1DTyFGTEwhMTMwMzgxMw--',
												'operationsInfo': null,
												'designator': {
													'destination': 'FLL',
													'origin': 'MCO',
													'arrival': '2018-03-24T21:06:00',
													'departure': '2018-03-24T19:59:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-24T23:59:00Z',
													'arrivalTimeUtc': '2018-03-25T01:06:00Z',
													'adjustedCapacity': 182,
													'arrivalTerminal': '4',
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 182,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': null,
													'departureTimeVariant': -240,
													'equipmentType': '32A',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 187,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '8',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T21:06:00',
													'departureTime': '2018-03-24T19:59:00',
													'prbcCode': '32A',
													'scheduleServiceType': 'J',
													'sold': 4,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDE5NSEgITYzNjU3NTE4MzQwMDAwMDAwMCFNQ08hRkxM',
												'flightReference': '20180324 NK 195 MCOFLL'
											}
										]
									}
								],
								'notForGeneralUser': false
							},
							{
								'flightType': 4,
								'stops': 1,
								'designator': {
									'destination': 'FLL',
									'origin': 'DTW',
									'arrival': '2018-03-24T21:53:00',
									'departure': '2018-03-24T17:35:00'
								},
								'fares': {
									'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--': {
										'fareAvailabilityKey': 'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--',
										'fareCode': 'HNR',
										'availableCount': 184,
										'isSumOfSector': false,
										'classOfService': 'H'
									},
									'MH5Zfn5ZTlJ_MDAwMX5_OX5Y': {
										'fareAvailabilityKey': 'MH5Zfn5ZTlJ_MDAwMX5_OX5Y',
										'fareCode': 'YNR',
										'availableCount': 184,
										'isSumOfSector': false,
										'classOfService': 'Y'
									}
								},
								'journeyKey': 'Tkt_IDYzMX4gfn5EVFd_MDMvMjQvMjAxOCAxNzozNX5UUEF_MDMvMjQvMjAxOCAyMDoxMn5eTkt_IDU3NX4gfn5UUEF_MDMvMjQvMjAxOCAyMDo0OX5GTEx_MDMvMjQvMjAxOCAyMTo1M34-',
								'segments': [
									{
										'isBlocked': false,
										'isHosted': true,
										'isChangeOfGauge': false,
										'designator': {
											'destination': 'TPA',
											'origin': 'DTW',
											'arrival': '2018-03-24T20:12:00',
											'departure': '2018-03-24T17:35:00'
										},
										'isSeatmapViewable': true,
										'segmentKey': 'Tkt_IDYzMX4gfn5EVFd_MDMvMjQvMjAxOCAxNzozNX5UUEF_MDMvMjQvMjAxOCAyMDoxMn4-',
										'identifier': {
											'identifier': '631',
											'carrierCode': 'NK',
											'opSuffix': null
										},
										'cabinOfService': null,
										'externalIdentifier': null,
										'changeReasonCode': 0,
										'segmentType': 0,
										'international': false,
										'legs': [
											{
												'legKey': 'NjM2NTc1MDk3MDAwMDAwMDAwIU5LITYzMSEgIURUVyFUUEEhMTMwNDA1Ng--',
												'operationsInfo': null,
												'designator': {
													'destination': 'TPA',
													'origin': 'DTW',
													'arrival': '2018-03-24T20:12:00',
													'departure': '2018-03-24T17:35:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-24T21:35:00Z',
													'arrivalTimeUtc': '2018-03-25T00:12:00Z',
													'adjustedCapacity': 182,
													'arrivalTerminal': null,
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 182,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': 'N',
													'departureTimeVariant': -240,
													'equipmentType': '32A',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 184,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '8',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T20:12:00',
													'departureTime': '2018-03-24T17:35:00',
													'prbcCode': '32A',
													'scheduleServiceType': 'J',
													'sold': 0,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDYzMSEgITYzNjU3NTA5NzAwMDAwMDAwMCFEVFchVFBB',
												'flightReference': '20180324 NK 631 DTWTPA'
											}
										]
									},
									{
										'isBlocked': false,
										'isHosted': true,
										'isChangeOfGauge': false,
										'designator': {
											'destination': 'FLL',
											'origin': 'TPA',
											'arrival': '2018-03-24T21:53:00',
											'departure': '2018-03-24T20:49:00'
										},
										'isSeatmapViewable': true,
										'segmentKey': 'Tkt_IDU3NX4gfn5UUEF_MDMvMjQvMjAxOCAyMDo0OX5GTEx_MDMvMjQvMjAxOCAyMTo1M34-',
										'identifier': {
											'identifier': '575',
											'carrierCode': 'NK',
											'opSuffix': null
										},
										'cabinOfService': null,
										'externalIdentifier': null,
										'changeReasonCode': 0,
										'segmentType': 0,
										'international': false,
										'legs': [
											{
												'legKey': 'NjM2NTc1MjEzNDAwMDAwMDAwIU5LITU3NSEgIVRQQSFGTEwhMTMwNDAyOQ--',
												'operationsInfo': null,
												'designator': {
													'destination': 'FLL',
													'origin': 'TPA',
													'arrival': '2018-03-24T21:53:00',
													'departure': '2018-03-24T20:49:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-25T00:49:00Z',
													'arrivalTimeUtc': '2018-03-25T01:53:00Z',
													'adjustedCapacity': 182,
													'arrivalTerminal': '4',
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 182,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': null,
													'departureTimeVariant': -240,
													'equipmentType': '32A',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 184,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '8',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T21:53:00',
													'departureTime': '2018-03-24T20:49:00',
													'prbcCode': '32A',
													'scheduleServiceType': 'J',
													'sold': 0,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDU3NSEgITYzNjU3NTIxMzQwMDAwMDAwMCFUUEEhRkxM',
												'flightReference': '20180324 NK 575 TPAFLL'
											}
										]
									}
								],
								'notForGeneralUser': false
							},
							{
								'flightType': 1,
								'stops': 0,
								'designator': {
									'destination': 'FLL',
									'origin': 'DTW',
									'arrival': '2018-03-24T21:44:00',
									'departure': '2018-03-24T18:39:00'
								},
								'fares': {
									'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--': {
										'fareAvailabilityKey': 'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--',
										'fareCode': 'HNR',
										'availableCount': 194,
										'isSumOfSector': false,
										'classOfService': 'H'
									},
									'MH5Zfn5ZTlJ_MDAwMX5_OX5Y': {
										'fareAvailabilityKey': 'MH5Zfn5ZTlJ_MDAwMX5_OX5Y',
										'fareCode': 'YNR',
										'availableCount': 195,
										'isSumOfSector': false,
										'classOfService': 'Y'
									}
								},
								'journeyKey': 'Tkt_IDg0NX4gfn5EVFd_MDMvMjQvMjAxOCAxODozOX5GTEx_MDMvMjQvMjAxOCAyMTo0NH4-',
								'segments': [
									{
										'isBlocked': false,
										'isHosted': true,
										'isChangeOfGauge': false,
										'designator': {
											'destination': 'FLL',
											'origin': 'DTW',
											'arrival': '2018-03-24T21:44:00',
											'departure': '2018-03-24T18:39:00'
										},
										'isSeatmapViewable': true,
										'segmentKey': 'Tkt_IDg0NX4gfn5EVFd_MDMvMjQvMjAxOCAxODozOX5GTEx_MDMvMjQvMjAxOCAyMTo0NH4-',
										'identifier': {
											'identifier': '845',
											'carrierCode': 'NK',
											'opSuffix': null
										},
										'cabinOfService': null,
										'externalIdentifier': null,
										'changeReasonCode': 0,
										'segmentType': 0,
										'international': false,
										'legs': [
											{
												'legKey': 'NjM2NTc1MTM1NDAwMDAwMDAwIU5LITg0NSEgIURUVyFGTEwhMTMwNDE3NA--',
												'operationsInfo': null,
												'designator': {
													'destination': 'FLL',
													'origin': 'DTW',
													'arrival': '2018-03-24T21:44:00',
													'departure': '2018-03-24T18:39:00'
												},
												'legInfo': {
													'departureTimeUtc': '2018-03-24T22:39:00Z',
													'arrivalTimeUtc': '2018-03-25T01:44:00Z',
													'adjustedCapacity': 228,
													'arrivalTerminal': '4',
													'arrivalTimeVariant': -240,
													'backMoveDays': 0,
													'capacity': 228,
													'changeOfDirection': false,
													'codeShareIndicator': 0,
													'departureTerminal': 'N',
													'departureTimeVariant': -240,
													'equipmentType': '32B',
													'equipmentTypeSuffix': null,
													'eTicket': true,
													'irop': false,
													'lid': 228,
													'marketingCode': null,
													'marketingOverride': false,
													'onTime': '9',
													'operatedByText': null,
													'operatingCarrier': null,
													'operatingFlightNumber': null,
													'operatingOpSuffix': null,
													'outMoveDays': 0,
													'arrivalTime': '2018-03-24T21:44:00',
													'departureTime': '2018-03-24T18:39:00',
													'prbcCode': '32B',
													'scheduleServiceType': 'J',
													'sold': 33,
													'status': 0,
													'subjectToGovtApproval': false
												},
												'nests': [],
												'ssrs': [],
												'seatmapReference': 'TkshIDg0NSEgITYzNjU3NTEzNTQwMDAwMDAwMCFEVFchRkxM',
												'flightReference': '20180324 NK 845 DTWFLL'
											}
										]
									}
								],
								'notForGeneralUser': false
							}
						]
					}
				],
				'faresAvailable': {
					'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--': {
						'isGoverning': true,
						'downgradeAvailable': false,
						'fareAvailabilityKey': 'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--',
						'fareCode': 'HNR',
						'isSumOfSector': false,
						'classOfService': 'H',
						'classType': null,
						'fareApplicationType': 0,
						'fareClassOfService': 'H',
						'fareSequence': 25,
						'fareStatus': 0,
						'inboundOutBound': 0,
						'isAllotmentMarketFare': false,
						'productClass': null,
						'ruleNumber': '0001',
						'ruleTariff': null,
						'travelClassCode': null,
						'passengerFares': [
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 119,
								'revenueFare': 119,
								'publishedFare': 119,
								'loyaltyPoints': 0,
								'discountedFare': 119,
								'serviceCharges': [
									{
										'amount': 119,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 119,
										'ticketCode': null
									}
								]
							},
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 119,
								'revenueFare': 119,
								'publishedFare': 119,
								'loyaltyPoints': 0,
								'discountedFare': 119,
								'serviceCharges': [
									{
										'amount': 119,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 119,
										'ticketCode': null
									}
								]
							}
						]
					},
					'MH5Zfn5ZTlJ_MDAwMX5_OX5Y': {
						'isGoverning': true,
						'downgradeAvailable': false,
						'fareAvailabilityKey': 'MH5Zfn5ZTlJ_MDAwMX5_OX5Y',
						'fareCode': 'YNR',
						'isSumOfSector': false,
						'classOfService': 'Y',
						'classType': null,
						'fareApplicationType': 0,
						'fareClassOfService': 'Y',
						'fareSequence': 9,
						'fareStatus': 0,
						'inboundOutBound': 0,
						'isAllotmentMarketFare': false,
						'productClass': null,
						'ruleNumber': '0001',
						'ruleTariff': null,
						'travelClassCode': null,
						'passengerFares': [
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 149,
								'revenueFare': 149,
								'publishedFare': 149,
								'loyaltyPoints': 0,
								'discountedFare': 149,
								'serviceCharges': [
									{
										'amount': 149,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 149,
										'ticketCode': null
									}
								]
							},
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 149,
								'revenueFare': 149,
								'publishedFare': 149,
								'loyaltyPoints': 0,
								'discountedFare': 149,
								'serviceCharges': [
									{
										'amount': 149,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 149,
										'ticketCode': null
									}
								]
							}
						]
					},
					'Mn5Lfn5LTlJ_MDAwMX5_MX5YXjF_SH5_SE5SfjAwMDF_fjIzfg--': {
						'isGoverning': true,
						'downgradeAvailable': false,
						'fareAvailabilityKey': 'Mn5Lfn5LTlJ_MDAwMX5_MX5YXjF_SH5_SE5SfjAwMDF_fjIzfg--',
						'fareCode': 'KNR',
						'isSumOfSector': true,
						'classOfService': 'K',
						'classType': null,
						'fareApplicationType': 2,
						'fareClassOfService': 'K',
						'fareSequence': 1,
						'fareStatus': 0,
						'inboundOutBound': 0,
						'isAllotmentMarketFare': false,
						'productClass': null,
						'ruleNumber': '0001',
						'ruleTariff': null,
						'travelClassCode': null,
						'passengerFares': [
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 218,
								'revenueFare': 218,
								'publishedFare': 218,
								'loyaltyPoints': 0,
								'discountedFare': 198,
								'serviceCharges': [
									{
										'amount': 99,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 99,
										'ticketCode': null
									}
								]
							},
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 218,
								'revenueFare': 218,
								'publishedFare': 218,
								'loyaltyPoints': 0,
								'discountedFare': 198,
								'serviceCharges': [
									{
										'amount': 99,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 99,
										'ticketCode': null
									}
								]
							}
						]
					},
					'MX5Ifn5IQTdOUn4wMDAxfn4yfl4yflV_flVBN05SfjAwMDF_fjF_WA--': {
						'isGoverning': true,
						'downgradeAvailable': false,
						'fareAvailabilityKey': 'MX5Ifn5IQTdOUn4wMDAxfn4yfl4yflV_flVBN05SfjAwMDF_fjF_WA--',
						'fareCode': 'UA7NR',
						'isSumOfSector': true,
						'classOfService': 'U',
						'classType': null,
						'fareApplicationType': 2,
						'fareClassOfService': 'U',
						'fareSequence': 1,
						'fareStatus': 0,
						'inboundOutBound': 0,
						'isAllotmentMarketFare': false,
						'productClass': null,
						'ruleNumber': '0001',
						'ruleTariff': null,
						'travelClassCode': null,
						'passengerFares': [
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 250,
								'revenueFare': 250,
								'publishedFare': 250,
								'loyaltyPoints': 0,
								'discountedFare': 18,
								'serviceCharges': [
									{
										'amount': 9,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 9,
										'ticketCode': null
									}
								]
							},
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 250,
								'revenueFare': 250,
								'publishedFare': 250,
								'loyaltyPoints': 0,
								'discountedFare': 18,
								'serviceCharges': [
									{
										'amount': 9,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 9,
										'ticketCode': null
									}
								]
							}
						]
					},
					'MX5Ifn5IQTdOUn4wMDAxfn4yfl4yflJ_flJBN05SfjAwMDF_fjF_WA--': {
						'isGoverning': true,
						'downgradeAvailable': false,
						'fareAvailabilityKey': 'MX5Ifn5IQTdOUn4wMDAxfn4yfl4yflJ_flJBN05SfjAwMDF_fjF_WA--',
						'fareCode': 'RA7NR',
						'isSumOfSector': true,
						'classOfService': 'R',
						'classType': null,
						'fareApplicationType': 2,
						'fareClassOfService': 'R',
						'fareSequence': 1,
						'fareStatus': 0,
						'inboundOutBound': 0,
						'isAllotmentMarketFare': false,
						'productClass': null,
						'ruleNumber': '0001',
						'ruleTariff': null,
						'travelClassCode': null,
						'passengerFares': [
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 270,
								'revenueFare': 270,
								'publishedFare': 270,
								'loyaltyPoints': 0,
								'discountedFare': 58,
								'serviceCharges': [
									{
										'amount': 29,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 29,
										'ticketCode': null
									}
								]
							},
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 270,
								'revenueFare': 270,
								'publishedFare': 270,
								'loyaltyPoints': 0,
								'discountedFare': 58,
								'serviceCharges': [
									{
										'amount': 29,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 29,
										'ticketCode': null
									}
								]
							}
						]
					},
					'MX5Ifn5IQTdOUn4wMDAxfn4yfl4yflR_flRBN05SfjAwMDF_fjF_WA--': {
						'isGoverning': true,
						'downgradeAvailable': false,
						'fareAvailabilityKey': 'MX5Ifn5IQTdOUn4wMDAxfn4yfl4yflR_flRBN05SfjAwMDF_fjF_WA--',
						'fareCode': 'TA7NR',
						'isSumOfSector': true,
						'classOfService': 'T',
						'classType': null,
						'fareApplicationType': 2,
						'fareClassOfService': 'T',
						'fareSequence': 1,
						'fareStatus': 0,
						'inboundOutBound': 0,
						'isAllotmentMarketFare': false,
						'productClass': null,
						'ruleNumber': '0001',
						'ruleTariff': null,
						'travelClassCode': null,
						'passengerFares': [
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 290,
								'revenueFare': 290,
								'publishedFare': 290,
								'loyaltyPoints': 0,
								'discountedFare': 98,
								'serviceCharges': [
									{
										'amount': 49,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 49,
										'ticketCode': null
									}
								]
							},
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 290,
								'revenueFare': 290,
								'publishedFare': 290,
								'loyaltyPoints': 0,
								'discountedFare': 98,
								'serviceCharges': [
									{
										'amount': 49,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 49,
										'ticketCode': null
									}
								]
							}
						]
					},
					'MX5Ifn5IQTdOUn4wMDAxfn4yfl4yflZ_flZOUn4wMDAxfn4xflg-': {
						'isGoverning': true,
						'downgradeAvailable': false,
						'fareAvailabilityKey': 'MX5Ifn5IQTdOUn4wMDAxfn4yfl4yflZ_flZOUn4wMDAxfn4xflg-',
						'fareCode': 'VNR',
						'isSumOfSector': true,
						'classOfService': 'V',
						'classType': null,
						'fareApplicationType': 2,
						'fareClassOfService': 'V',
						'fareSequence': 1,
						'fareStatus': 0,
						'inboundOutBound': 0,
						'isAllotmentMarketFare': false,
						'productClass': null,
						'ruleNumber': '0001',
						'ruleTariff': null,
						'travelClassCode': null,
						'passengerFares': [
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 320,
								'revenueFare': 320,
								'publishedFare': 320,
								'loyaltyPoints': 0,
								'discountedFare': 158,
								'serviceCharges': [
									{
										'amount': 79,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 79,
										'ticketCode': null
									}
								]
							},
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 320,
								'revenueFare': 320,
								'publishedFare': 320,
								'loyaltyPoints': 0,
								'discountedFare': 158,
								'serviceCharges': [
									{
										'amount': 79,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 79,
										'ticketCode': null
									}
								]
							}
						]
					},
					'MX5Ifn5IQTdOUn4wMDAxfn4yfl4yfkt_fktOUn4wMDAxfn4xflg-': {
						'isGoverning': true,
						'downgradeAvailable': false,
						'fareAvailabilityKey': 'MX5Ifn5IQTdOUn4wMDAxfn4yfl4yfkt_fktOUn4wMDAxfn4xflg-',
						'fareCode': 'KNR',
						'isSumOfSector': true,
						'classOfService': 'K',
						'classType': null,
						'fareApplicationType': 2,
						'fareClassOfService': 'K',
						'fareSequence': 1,
						'fareStatus': 0,
						'inboundOutBound': 0,
						'isAllotmentMarketFare': false,
						'productClass': null,
						'ruleNumber': '0001',
						'ruleTariff': null,
						'travelClassCode': null,
						'passengerFares': [
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 340,
								'revenueFare': 340,
								'publishedFare': 340,
								'loyaltyPoints': 0,
								'discountedFare': 198,
								'serviceCharges': [
									{
										'amount': 99,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 99,
										'ticketCode': null
									}
								]
							},
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 340,
								'revenueFare': 340,
								'publishedFare': 340,
								'loyaltyPoints': 0,
								'discountedFare': 198,
								'serviceCharges': [
									{
										'amount': 99,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 99,
										'ticketCode': null
									}
								]
							}
						]
					},
					'MH5Lfn5LTlJ_MDAwMX5_MX5Y': {
						'isGoverning': true,
						'downgradeAvailable': false,
						'fareAvailabilityKey': 'MH5Lfn5LTlJ_MDAwMX5_MX5Y',
						'fareCode': 'KNR',
						'isSumOfSector': false,
						'classOfService': 'K',
						'classType': null,
						'fareApplicationType': 0,
						'fareClassOfService': 'K',
						'fareSequence': 1,
						'fareStatus': 0,
						'inboundOutBound': 0,
						'isAllotmentMarketFare': false,
						'productClass': null,
						'ruleNumber': '0001',
						'ruleTariff': null,
						'travelClassCode': null,
						'passengerFares': [
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 126.9,
								'revenueFare': 126.9,
								'publishedFare': 99,
								'loyaltyPoints': 0,
								'discountedFare': 99,
								'serviceCharges': [
									{
										'amount': 99,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 99,
										'ticketCode': null
									},
									{
										'amount': 27.9,
										'code': 'S3D',
										'detail': 'FLL-DTW',
										'type': 19,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 27.9,
										'ticketCode': 'S'
									}
								]
							},
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 126.9,
								'revenueFare': 126.9,
								'publishedFare': 99,
								'loyaltyPoints': 0,
								'discountedFare': 99,
								'serviceCharges': [
									{
										'amount': 99,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 99,
										'ticketCode': null
									},
									{
										'amount': 27.9,
										'code': 'S3D',
										'detail': 'FLL-DTW',
										'type': 19,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 27.9,
										'ticketCode': 'S'
									}
								]
							}
						]
					},
					'Mn5Pfn5PMTRYU05SfjEwMDF_fjN_WF4xfkt_fks3WFNOUn4xMDAxfn4yfg--': {
						'isGoverning': true,
						'downgradeAvailable': false,
						'fareAvailabilityKey': 'Mn5Pfn5PMTRYU05SfjEwMDF_fjN_WF4xfkt_fks3WFNOUn4xMDAxfn4yfg--',
						'fareCode': 'O14XSNR',
						'isSumOfSector': true,
						'classOfService': 'O',
						'classType': null,
						'fareApplicationType': 2,
						'fareClassOfService': 'O',
						'fareSequence': 3,
						'fareStatus': 0,
						'inboundOutBound': 0,
						'isAllotmentMarketFare': false,
						'productClass': 'RO',
						'ruleNumber': '1001',
						'ruleTariff': null,
						'travelClassCode': null,
						'passengerFares': [
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 208,
								'revenueFare': 208,
								'publishedFare': 208,
								'loyaltyPoints': 0,
								'discountedFare': 38,
								'serviceCharges': [
									{
										'amount': 19,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 19,
										'ticketCode': null
									}
								]
							},
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 208,
								'revenueFare': 208,
								'publishedFare': 208,
								'loyaltyPoints': 0,
								'discountedFare': 38,
								'serviceCharges': [
									{
										'amount': 19,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 19,
										'ticketCode': null
									}
								]
							}
						]
					},
					'Mn5Sfn5SMTRYU05SfjEwMDF_fjF_WF4xfkt_fks3WFNOUn4xMDAxfn4yfg--': {
						'isGoverning': true,
						'downgradeAvailable': false,
						'fareAvailabilityKey': 'Mn5Sfn5SMTRYU05SfjEwMDF_fjF_WF4xfkt_fks3WFNOUn4xMDAxfn4yfg--',
						'fareCode': 'R14XSNR',
						'isSumOfSector': true,
						'classOfService': 'R',
						'classType': null,
						'fareApplicationType': 2,
						'fareClassOfService': 'R',
						'fareSequence': 1,
						'fareStatus': 0,
						'inboundOutBound': 0,
						'isAllotmentMarketFare': false,
						'productClass': null,
						'ruleNumber': '1001',
						'ruleTariff': null,
						'travelClassCode': null,
						'passengerFares': [
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 217,
								'revenueFare': 217,
								'publishedFare': 217,
								'loyaltyPoints': 0,
								'discountedFare': 56,
								'serviceCharges': [
									{
										'amount': 28,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 28,
										'ticketCode': null
									}
								]
							},
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 217,
								'revenueFare': 217,
								'publishedFare': 217,
								'loyaltyPoints': 0,
								'discountedFare': 56,
								'serviceCharges': [
									{
										'amount': 28,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 28,
										'ticketCode': null
									}
								]
							}
						]
					},
					'Mn5Ufn5UMTRYU05SfjEwMDF_fjF_WF4xfkt_fks3WFNOUn4xMDAxfn4yfg--': {
						'isGoverning': true,
						'downgradeAvailable': false,
						'fareAvailabilityKey': 'Mn5Ufn5UMTRYU05SfjEwMDF_fjF_WF4xfkt_fks3WFNOUn4xMDAxfn4yfg--',
						'fareCode': 'T14XSNR',
						'isSumOfSector': true,
						'classOfService': 'T',
						'classType': null,
						'fareApplicationType': 2,
						'fareClassOfService': 'T',
						'fareSequence': 1,
						'fareStatus': 0,
						'inboundOutBound': 0,
						'isAllotmentMarketFare': false,
						'productClass': null,
						'ruleNumber': '1001',
						'ruleTariff': null,
						'travelClassCode': null,
						'passengerFares': [
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 240,
								'revenueFare': 240,
								'publishedFare': 240,
								'loyaltyPoints': 0,
								'discountedFare': 102,
								'serviceCharges': [
									{
										'amount': 51,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 51,
										'ticketCode': null
									}
								]
							},
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 240,
								'revenueFare': 240,
								'publishedFare': 240,
								'loyaltyPoints': 0,
								'discountedFare': 102,
								'serviceCharges': [
									{
										'amount': 51,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 51,
										'ticketCode': null
									}
								]
							}
						]
					},
					'Mn5Wfn5WMTRYU05SfjEwMDF_fjF_WF4xfkt_fks3WFNOUn4xMDAxfn4yfg--': {
						'isGoverning': true,
						'downgradeAvailable': false,
						'fareAvailabilityKey': 'Mn5Wfn5WMTRYU05SfjEwMDF_fjF_WF4xfkt_fks3WFNOUn4xMDAxfn4yfg--',
						'fareCode': 'V14XSNR',
						'isSumOfSector': true,
						'classOfService': 'V',
						'classType': null,
						'fareApplicationType': 2,
						'fareClassOfService': 'V',
						'fareSequence': 1,
						'fareStatus': 0,
						'inboundOutBound': 0,
						'isAllotmentMarketFare': false,
						'productClass': null,
						'ruleNumber': '1001',
						'ruleTariff': null,
						'travelClassCode': null,
						'passengerFares': [
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 262,
								'revenueFare': 262,
								'publishedFare': 262,
								'loyaltyPoints': 0,
								'discountedFare': 146,
								'serviceCharges': [
									{
										'amount': 73,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 73,
										'ticketCode': null
									}
								]
							},
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 262,
								'revenueFare': 262,
								'publishedFare': 262,
								'loyaltyPoints': 0,
								'discountedFare': 146,
								'serviceCharges': [
									{
										'amount': 73,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 73,
										'ticketCode': null
									}
								]
							}
						]
					},
					'Mn5Vfn5VQTdOUn4wMDAxfn4xflheMX5Ifn5IQTdOUn4wMDAxfn4yfg--': {
						'isGoverning': true,
						'downgradeAvailable': false,
						'fareAvailabilityKey': 'Mn5Vfn5VQTdOUn4wMDAxfn4xflheMX5Ifn5IQTdOUn4wMDAxfn4yfg--',
						'fareCode': 'UA7NR',
						'isSumOfSector': true,
						'classOfService': 'U',
						'classType': null,
						'fareApplicationType': 2,
						'fareClassOfService': 'U',
						'fareSequence': 1,
						'fareStatus': 0,
						'inboundOutBound': 0,
						'isAllotmentMarketFare': false,
						'productClass': null,
						'ruleNumber': '0001',
						'ruleTariff': null,
						'travelClassCode': null,
						'passengerFares': [
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 305.8,
								'revenueFare': 305.8,
								'publishedFare': 250,
								'loyaltyPoints': 0,
								'discountedFare': 18,
								'serviceCharges': [
									{
										'amount': 9,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 9,
										'ticketCode': null
									},
									{
										'amount': 27.9,
										'code': 'S3D',
										'detail': 'FLL-MCO',
										'type': 19,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 27.9,
										'ticketCode': 'S'
									}
								]
							},
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 305.8,
								'revenueFare': 305.8,
								'publishedFare': 250,
								'loyaltyPoints': 0,
								'discountedFare': 18,
								'serviceCharges': [
									{
										'amount': 9,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 9,
										'ticketCode': null
									},
									{
										'amount': 27.9,
										'code': 'S3D',
										'detail': 'FLL-MCO',
										'type': 19,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 27.9,
										'ticketCode': 'S'
									}
								]
							}
						]
					},
					'Mn5Sfn5SQTdOUn4wMDAxfn4xflheMX5Ifn5IQTdOUn4wMDAxfn4yfg--': {
						'isGoverning': true,
						'downgradeAvailable': false,
						'fareAvailabilityKey': 'Mn5Sfn5SQTdOUn4wMDAxfn4xflheMX5Ifn5IQTdOUn4wMDAxfn4yfg--',
						'fareCode': 'RA7NR',
						'isSumOfSector': true,
						'classOfService': 'R',
						'classType': null,
						'fareApplicationType': 2,
						'fareClassOfService': 'R',
						'fareSequence': 1,
						'fareStatus': 0,
						'inboundOutBound': 0,
						'isAllotmentMarketFare': false,
						'productClass': null,
						'ruleNumber': '0001',
						'ruleTariff': null,
						'travelClassCode': null,
						'passengerFares': [
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 325.8,
								'revenueFare': 325.8,
								'publishedFare': 270,
								'loyaltyPoints': 0,
								'discountedFare': 58,
								'serviceCharges': [
									{
										'amount': 29,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 29,
										'ticketCode': null
									},
									{
										'amount': 27.9,
										'code': 'S3D',
										'detail': 'FLL-MCO',
										'type': 19,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 27.9,
										'ticketCode': 'S'
									}
								]
							},
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 325.8,
								'revenueFare': 325.8,
								'publishedFare': 270,
								'loyaltyPoints': 0,
								'discountedFare': 58,
								'serviceCharges': [
									{
										'amount': 29,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 29,
										'ticketCode': null
									},
									{
										'amount': 27.9,
										'code': 'S3D',
										'detail': 'FLL-MCO',
										'type': 19,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 27.9,
										'ticketCode': 'S'
									}
								]
							}
						]
					},
					'Mn5Ufn5UQTdOUn4wMDAxfn4xflheMX5Ifn5IQTdOUn4wMDAxfn4yfg--': {
						'isGoverning': true,
						'downgradeAvailable': false,
						'fareAvailabilityKey': 'Mn5Ufn5UQTdOUn4wMDAxfn4xflheMX5Ifn5IQTdOUn4wMDAxfn4yfg--',
						'fareCode': 'TA7NR',
						'isSumOfSector': true,
						'classOfService': 'T',
						'classType': null,
						'fareApplicationType': 2,
						'fareClassOfService': 'T',
						'fareSequence': 1,
						'fareStatus': 0,
						'inboundOutBound': 0,
						'isAllotmentMarketFare': false,
						'productClass': null,
						'ruleNumber': '0001',
						'ruleTariff': null,
						'travelClassCode': null,
						'passengerFares': [
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 345.8,
								'revenueFare': 345.8,
								'publishedFare': 290,
								'loyaltyPoints': 0,
								'discountedFare': 98,
								'serviceCharges': [
									{
										'amount': 49,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 49,
										'ticketCode': null
									},
									{
										'amount': 27.9,
										'code': 'S3D',
										'detail': 'FLL-MCO',
										'type': 19,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 27.9,
										'ticketCode': 'S'
									}
								]
							},
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 345.8,
								'revenueFare': 345.8,
								'publishedFare': 290,
								'loyaltyPoints': 0,
								'discountedFare': 98,
								'serviceCharges': [
									{
										'amount': 49,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 49,
										'ticketCode': null
									},
									{
										'amount': 27.9,
										'code': 'S3D',
										'detail': 'FLL-MCO',
										'type': 19,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 27.9,
										'ticketCode': 'S'
									}
								]
							}
						]
					},
					'Mn5Wfn5WTlJ_MDAwMX5_MX5YXjF_SH5_SEE3TlJ_MDAwMX5_Mn4-': {
						'isGoverning': true,
						'downgradeAvailable': false,
						'fareAvailabilityKey': 'Mn5Wfn5WTlJ_MDAwMX5_MX5YXjF_SH5_SEE3TlJ_MDAwMX5_Mn4-',
						'fareCode': 'VNR',
						'isSumOfSector': true,
						'classOfService': 'V',
						'classType': null,
						'fareApplicationType': 2,
						'fareClassOfService': 'V',
						'fareSequence': 1,
						'fareStatus': 0,
						'inboundOutBound': 0,
						'isAllotmentMarketFare': false,
						'productClass': null,
						'ruleNumber': '0001',
						'ruleTariff': null,
						'travelClassCode': null,
						'passengerFares': [
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 375.8,
								'revenueFare': 375.8,
								'publishedFare': 320,
								'loyaltyPoints': 0,
								'discountedFare': 158,
								'serviceCharges': [
									{
										'amount': 79,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 79,
										'ticketCode': null
									},
									{
										'amount': 27.9,
										'code': 'S3D',
										'detail': 'FLL-MCO',
										'type': 19,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 27.9,
										'ticketCode': 'S'
									}
								]
							},
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 375.8,
								'revenueFare': 375.8,
								'publishedFare': 320,
								'loyaltyPoints': 0,
								'discountedFare': 158,
								'serviceCharges': [
									{
										'amount': 79,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 79,
										'ticketCode': null
									},
									{
										'amount': 27.9,
										'code': 'S3D',
										'detail': 'FLL-MCO',
										'type': 19,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 27.9,
										'ticketCode': 'S'
									}
								]
							}
						]
					},
					'Mn5Lfn5LTlJ_MDAwMX5_MX5YXjF_SH5_SEE3TlJ_MDAwMX5_Mn4-': {
						'isGoverning': true,
						'downgradeAvailable': false,
						'fareAvailabilityKey': 'Mn5Lfn5LTlJ_MDAwMX5_MX5YXjF_SH5_SEE3TlJ_MDAwMX5_Mn4-',
						'fareCode': 'KNR',
						'isSumOfSector': true,
						'classOfService': 'K',
						'classType': null,
						'fareApplicationType': 2,
						'fareClassOfService': 'K',
						'fareSequence': 1,
						'fareStatus': 0,
						'inboundOutBound': 0,
						'isAllotmentMarketFare': false,
						'productClass': null,
						'ruleNumber': '0001',
						'ruleTariff': null,
						'travelClassCode': null,
						'passengerFares': [
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 395.8,
								'revenueFare': 395.8,
								'publishedFare': 340,
								'loyaltyPoints': 0,
								'discountedFare': 198,
								'serviceCharges': [
									{
										'amount': 99,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 99,
										'ticketCode': null
									},
									{
										'amount': 27.9,
										'code': 'S3D',
										'detail': 'FLL-MCO',
										'type': 19,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 27.9,
										'ticketCode': 'S'
									}
								]
							},
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 395.8,
								'revenueFare': 395.8,
								'publishedFare': 340,
								'loyaltyPoints': 0,
								'discountedFare': 198,
								'serviceCharges': [
									{
										'amount': 99,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 99,
										'ticketCode': null
									},
									{
										'amount': 27.9,
										'code': 'S3D',
										'detail': 'FLL-MCO',
										'type': 19,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 27.9,
										'ticketCode': 'S'
									}
								]
							}
						]
					},
					'MX5Ifn5ITlJ_MDAwMX5_MjN_XjJ_S35_S05SfjAwMDF_fjF_WA--': {
						'isGoverning': true,
						'downgradeAvailable': false,
						'fareAvailabilityKey': 'MX5Ifn5ITlJ_MDAwMX5_MjN_XjJ_S35_S05SfjAwMDF_fjF_WA--',
						'fareCode': 'KNR',
						'isSumOfSector': true,
						'classOfService': 'K',
						'classType': null,
						'fareApplicationType': 2,
						'fareClassOfService': 'K',
						'fareSequence': 1,
						'fareStatus': 0,
						'inboundOutBound': 0,
						'isAllotmentMarketFare': false,
						'productClass': null,
						'ruleNumber': '0001',
						'ruleTariff': null,
						'travelClassCode': null,
						'passengerFares': [
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 273.8,
								'revenueFare': 273.8,
								'publishedFare': 218,
								'loyaltyPoints': 0,
								'discountedFare': 198,
								'serviceCharges': [
									{
										'amount': 99,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 99,
										'ticketCode': null
									},
									{
										'amount': 27.9,
										'code': 'S3D',
										'detail': 'LGA-DTW',
										'type': 19,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 27.9,
										'ticketCode': 'S'
									}
								]
							},
							{
								'fareDiscountCode': null,
								'passengerDiscountCode': null,
								'passengerType': 'ADT',
								'fareAmount': 273.8,
								'revenueFare': 273.8,
								'publishedFare': 218,
								'loyaltyPoints': 0,
								'discountedFare': 198,
								'serviceCharges': [
									{
										'amount': 99,
										'code': null,
										'detail': null,
										'type': 0,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 99,
										'ticketCode': null
									},
									{
										'amount': 27.9,
										'code': 'S3D',
										'detail': 'LGA-DTW',
										'type': 19,
										'collectType': 0,
										'currencyCode': 'USD',
										'foreignCurrencyCode': 'USD',
										'foreignAmount': 27.9,
										'ticketCode': 'S'
									}
								]
							}
						]
					}
				},
				'currencyCode': 'USD',
				'includeTaxesAndFees': false
			},
			'clubFares': {
				'MH5Ifn5ITlJ_MDAwMX5_MjV_WA--': true
			}
		});
	}

	public searchAvailabilityLowFare(search: any): Observable<any> {
		console.log(search);
		return of({
			'data': {
				'lowFareDateMarkets': [
					{
						'lowestFareAmount': {
							'fareAmount': 119,
							'farePointAmount': 0,
							'taxesAndFeesAmount': 0
						},
						'lowFares': [
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-24T09:44:00',
								'departureTime': '2018-03-24T06:40:00',
								'legs': [
									{
										'arrivalTime': '2018-03-24T09:44:00',
										'departureTime': '2018-03-24T06:40:00',
										'destination': 'FLL',
										'origin': 'DTW',
										'flightNumber': '417',
										'carrierCode': 'NK',
										'equipmentType': '32B',
										'operatingCarrier': null
									}
								],
								'availableCount': 223,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-24T21:44:00',
								'departureTime': '2018-03-24T18:39:00',
								'legs': [
									{
										'arrivalTime': '2018-03-24T21:44:00',
										'departureTime': '2018-03-24T18:39:00',
										'destination': 'FLL',
										'origin': 'DTW',
										'flightNumber': '845',
										'carrierCode': 'NK',
										'equipmentType': '32B',
										'operatingCarrier': null
									}
								],
								'availableCount': 194,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-24T15:42:00',
								'departureTime': '2018-03-24T06:00:00',
								'legs': [
									{
										'arrivalTime': '2018-03-24T07:42:00',
										'departureTime': '2018-03-24T06:00:00',
										'destination': 'LGA',
										'origin': 'DTW',
										'flightNumber': '316',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-24T15:42:00',
										'departureTime': '2018-03-24T12:30:00',
										'destination': 'FLL',
										'origin': 'LGA',
										'flightNumber': '197',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 137,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-24T13:21:00',
								'departureTime': '2018-03-24T08:30:00',
								'legs': [
									{
										'arrivalTime': '2018-03-24T10:01:00',
										'departureTime': '2018-03-24T08:30:00',
										'destination': 'BWI',
										'origin': 'DTW',
										'flightNumber': '781',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-24T13:21:00',
										'departureTime': '2018-03-24T10:41:00',
										'destination': 'FLL',
										'origin': 'BWI',
										'flightNumber': '305',
										'carrierCode': 'NK',
										'equipmentType': '32B',
										'operatingCarrier': null
									}
								],
								'availableCount': 183,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-24T17:50:00',
								'departureTime': '2018-03-24T09:51:00',
								'legs': [
									{
										'arrivalTime': '2018-03-24T11:55:00',
										'departureTime': '2018-03-24T09:51:00',
										'destination': 'ATL',
										'origin': 'DTW',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-24T17:50:00',
										'departureTime': '2018-03-24T15:55:00',
										'destination': 'FLL',
										'origin': 'ATL',
										'flightNumber': '537',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									}
								],
								'availableCount': 145,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-24T19:34:00',
								'departureTime': '2018-03-24T09:51:00',
								'legs': [
									{
										'arrivalTime': '2018-03-24T11:55:00',
										'departureTime': '2018-03-24T09:51:00',
										'destination': 'ATL',
										'origin': 'DTW',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-24T19:34:00',
										'departureTime': '2018-03-24T17:41:00',
										'destination': 'FLL',
										'origin': 'ATL',
										'flightNumber': '403',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									}
								],
								'availableCount': 137,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-24T21:06:00',
								'departureTime': '2018-03-24T09:51:00',
								'legs': [
									{
										'arrivalTime': '2018-03-24T11:55:00',
										'departureTime': '2018-03-24T09:51:00',
										'destination': 'ATL',
										'origin': 'DTW',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-24T14:10:00',
										'departureTime': '2018-03-24T12:45:00',
										'destination': 'MCO',
										'origin': 'ATL',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-24T21:06:00',
										'departureTime': '2018-03-24T19:59:00',
										'destination': 'FLL',
										'origin': 'MCO',
										'flightNumber': '195',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 108,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-24T21:06:00',
								'departureTime': '2018-03-24T11:25:00',
								'legs': [
									{
										'arrivalTime': '2018-03-24T14:04:00',
										'departureTime': '2018-03-24T11:25:00',
										'destination': 'MCO',
										'origin': 'DTW',
										'flightNumber': '337',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-24T21:06:00',
										'departureTime': '2018-03-24T19:59:00',
										'destination': 'FLL',
										'origin': 'MCO',
										'flightNumber': '195',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 108,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-24T21:53:00',
								'departureTime': '2018-03-24T15:10:00',
								'legs': [
									{
										'arrivalTime': '2018-03-24T17:51:00',
										'departureTime': '2018-03-24T15:10:00',
										'destination': 'TPA',
										'origin': 'DTW',
										'flightNumber': '645',
										'carrierCode': 'NK',
										'equipmentType': '320',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-24T21:53:00',
										'departureTime': '2018-03-24T20:49:00',
										'destination': 'FLL',
										'origin': 'TPA',
										'flightNumber': '575',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 180,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-24T23:36:00',
								'departureTime': '2018-03-24T16:10:00',
								'legs': [
									{
										'arrivalTime': '2018-03-24T17:59:00',
										'departureTime': '2018-03-24T16:10:00',
										'destination': 'LGA',
										'origin': 'DTW',
										'flightNumber': '347',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-24T23:36:00',
										'departureTime': '2018-03-24T20:25:00',
										'destination': 'FLL',
										'origin': 'LGA',
										'flightNumber': '779',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 174,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-24T21:06:00',
								'departureTime': '2018-03-24T16:35:00',
								'legs': [
									{
										'arrivalTime': '2018-03-24T19:14:00',
										'departureTime': '2018-03-24T16:35:00',
										'destination': 'MCO',
										'origin': 'DTW',
										'flightNumber': '899',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-24T21:06:00',
										'departureTime': '2018-03-24T19:59:00',
										'destination': 'FLL',
										'origin': 'MCO',
										'flightNumber': '195',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 108,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-24T21:53:00',
								'departureTime': '2018-03-24T17:35:00',
								'legs': [
									{
										'arrivalTime': '2018-03-24T20:12:00',
										'departureTime': '2018-03-24T17:35:00',
										'destination': 'TPA',
										'origin': 'DTW',
										'flightNumber': '631',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-24T21:53:00',
										'departureTime': '2018-03-24T20:49:00',
										'destination': 'FLL',
										'origin': 'TPA',
										'flightNumber': '575',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 184,
								'productClass': null
							}
						],
						'destination': 'FLL',
						'origin': 'DTW',
						'departureDate': '2018-03-24T00:00:00'
					},
					{
						'lowestFareAmount': {
							'fareAmount': 99,
							'farePointAmount': 0,
							'taxesAndFeesAmount': 0
						},
						'lowFares': [
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 99,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'K'
								],
								'arrivalTime': '2018-03-25T09:44:00',
								'departureTime': '2018-03-25T06:40:00',
								'legs': [
									{
										'arrivalTime': '2018-03-25T09:44:00',
										'departureTime': '2018-03-25T06:40:00',
										'destination': 'FLL',
										'origin': 'DTW',
										'flightNumber': '417',
										'carrierCode': 'NK',
										'equipmentType': '32B',
										'operatingCarrier': null
									}
								],
								'availableCount': 218,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 99,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'K'
								],
								'arrivalTime': '2018-03-25T21:44:00',
								'departureTime': '2018-03-25T18:39:00',
								'legs': [
									{
										'arrivalTime': '2018-03-25T21:44:00',
										'departureTime': '2018-03-25T18:39:00',
										'destination': 'FLL',
										'origin': 'DTW',
										'flightNumber': '845',
										'carrierCode': 'NK',
										'equipmentType': '32B',
										'operatingCarrier': null
									}
								],
								'availableCount': 212,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 99,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'K'
								],
								'arrivalTime': '2018-03-25T15:42:00',
								'departureTime': '2018-03-25T06:00:00',
								'legs': [
									{
										'arrivalTime': '2018-03-25T07:42:00',
										'departureTime': '2018-03-25T06:00:00',
										'destination': 'LGA',
										'origin': 'DTW',
										'flightNumber': '316',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-25T15:42:00',
										'departureTime': '2018-03-25T12:30:00',
										'destination': 'FLL',
										'origin': 'LGA',
										'flightNumber': '197',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 114,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-25T13:21:00',
								'departureTime': '2018-03-25T08:30:00',
								'legs': [
									{
										'arrivalTime': '2018-03-25T10:01:00',
										'departureTime': '2018-03-25T08:30:00',
										'destination': 'BWI',
										'origin': 'DTW',
										'flightNumber': '781',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-25T13:21:00',
										'departureTime': '2018-03-25T10:41:00',
										'destination': 'FLL',
										'origin': 'BWI',
										'flightNumber': '305',
										'carrierCode': 'NK',
										'equipmentType': '32B',
										'operatingCarrier': null
									}
								],
								'availableCount': 184,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 99,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'K'
								],
								'arrivalTime': '2018-03-25T17:50:00',
								'departureTime': '2018-03-25T09:51:00',
								'legs': [
									{
										'arrivalTime': '2018-03-25T11:55:00',
										'departureTime': '2018-03-25T09:51:00',
										'destination': 'ATL',
										'origin': 'DTW',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-25T17:50:00',
										'departureTime': '2018-03-25T15:55:00',
										'destination': 'FLL',
										'origin': 'ATL',
										'flightNumber': '537',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									}
								],
								'availableCount': 137,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 99,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'K'
								],
								'arrivalTime': '2018-03-25T19:34:00',
								'departureTime': '2018-03-25T09:51:00',
								'legs': [
									{
										'arrivalTime': '2018-03-25T11:55:00',
										'departureTime': '2018-03-25T09:51:00',
										'destination': 'ATL',
										'origin': 'DTW',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-25T19:34:00',
										'departureTime': '2018-03-25T17:41:00',
										'destination': 'FLL',
										'origin': 'ATL',
										'flightNumber': '403',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									}
								],
								'availableCount': 130,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-25T21:06:00',
								'departureTime': '2018-03-25T09:51:00',
								'legs': [
									{
										'arrivalTime': '2018-03-25T11:55:00',
										'departureTime': '2018-03-25T09:51:00',
										'destination': 'ATL',
										'origin': 'DTW',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-25T14:10:00',
										'departureTime': '2018-03-25T12:45:00',
										'destination': 'MCO',
										'origin': 'ATL',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-25T21:06:00',
										'departureTime': '2018-03-25T19:59:00',
										'destination': 'FLL',
										'origin': 'MCO',
										'flightNumber': '195',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 109,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-25T21:06:00',
								'departureTime': '2018-03-25T11:25:00',
								'legs': [
									{
										'arrivalTime': '2018-03-25T14:04:00',
										'departureTime': '2018-03-25T11:25:00',
										'destination': 'MCO',
										'origin': 'DTW',
										'flightNumber': '337',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-25T21:06:00',
										'departureTime': '2018-03-25T19:59:00',
										'destination': 'FLL',
										'origin': 'MCO',
										'flightNumber': '195',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 109,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 99,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'K'
								],
								'arrivalTime': '2018-03-25T23:36:00',
								'departureTime': '2018-03-25T16:10:00',
								'legs': [
									{
										'arrivalTime': '2018-03-25T17:59:00',
										'departureTime': '2018-03-25T16:10:00',
										'destination': 'LGA',
										'origin': 'DTW',
										'flightNumber': '347',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-25T23:36:00',
										'departureTime': '2018-03-25T20:25:00',
										'destination': 'FLL',
										'origin': 'LGA',
										'flightNumber': '779',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 97,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-25T21:06:00',
								'departureTime': '2018-03-25T16:35:00',
								'legs': [
									{
										'arrivalTime': '2018-03-25T19:14:00',
										'departureTime': '2018-03-25T16:35:00',
										'destination': 'MCO',
										'origin': 'DTW',
										'flightNumber': '899',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-25T21:06:00',
										'departureTime': '2018-03-25T19:59:00',
										'destination': 'FLL',
										'origin': 'MCO',
										'flightNumber': '195',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 109,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-25T21:53:00',
								'departureTime': '2018-03-25T17:35:00',
								'legs': [
									{
										'arrivalTime': '2018-03-25T20:12:00',
										'departureTime': '2018-03-25T17:35:00',
										'destination': 'TPA',
										'origin': 'DTW',
										'flightNumber': '631',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-25T21:53:00',
										'departureTime': '2018-03-25T20:49:00',
										'destination': 'FLL',
										'origin': 'TPA',
										'flightNumber': '575',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 184,
								'productClass': null
							}
						],
						'destination': 'FLL',
						'origin': 'DTW',
						'departureDate': '2018-03-25T00:00:00'
					},
					{
						'lowestFareAmount': {
							'fareAmount': 49,
							'farePointAmount': 0,
							'taxesAndFeesAmount': 0
						},
						'lowFares': [
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 79,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'V'
								],
								'arrivalTime': '2018-03-26T09:44:00',
								'departureTime': '2018-03-26T06:40:00',
								'legs': [
									{
										'arrivalTime': '2018-03-26T09:44:00',
										'departureTime': '2018-03-26T06:40:00',
										'destination': 'FLL',
										'origin': 'DTW',
										'flightNumber': '417',
										'carrierCode': 'NK',
										'equipmentType': '32B',
										'operatingCarrier': null
									}
								],
								'availableCount': 212,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 49,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'T'
								],
								'arrivalTime': '2018-03-26T11:13:00',
								'departureTime': '2018-03-26T08:10:00',
								'legs': [
									{
										'arrivalTime': '2018-03-26T11:13:00',
										'departureTime': '2018-03-26T08:10:00',
										'destination': 'FLL',
										'origin': 'DTW',
										'flightNumber': '461',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									}
								],
								'availableCount': 67,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 49,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'T'
								],
								'arrivalTime': '2018-03-26T21:44:00',
								'departureTime': '2018-03-26T18:39:00',
								'legs': [
									{
										'arrivalTime': '2018-03-26T21:44:00',
										'departureTime': '2018-03-26T18:39:00',
										'destination': 'FLL',
										'origin': 'DTW',
										'flightNumber': '845',
										'carrierCode': 'NK',
										'equipmentType': '32B',
										'operatingCarrier': null
									}
								],
								'availableCount': 193,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 49,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'T'
								],
								'arrivalTime': '2018-03-26T15:42:00',
								'departureTime': '2018-03-26T06:00:00',
								'legs': [
									{
										'arrivalTime': '2018-03-26T07:42:00',
										'departureTime': '2018-03-26T06:00:00',
										'destination': 'LGA',
										'origin': 'DTW',
										'flightNumber': '316',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-26T15:42:00',
										'departureTime': '2018-03-26T12:30:00',
										'destination': 'FLL',
										'origin': 'LGA',
										'flightNumber': '197',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 96,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 49,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'T'
								],
								'arrivalTime': '2018-03-26T13:21:00',
								'departureTime': '2018-03-26T08:30:00',
								'legs': [
									{
										'arrivalTime': '2018-03-26T10:01:00',
										'departureTime': '2018-03-26T08:30:00',
										'destination': 'BWI',
										'origin': 'DTW',
										'flightNumber': '781',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-26T13:21:00',
										'departureTime': '2018-03-26T10:41:00',
										'destination': 'FLL',
										'origin': 'BWI',
										'flightNumber': '305',
										'carrierCode': 'NK',
										'equipmentType': '32B',
										'operatingCarrier': null
									}
								],
								'availableCount': 152,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 49,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'T'
								],
								'arrivalTime': '2018-03-26T17:50:00',
								'departureTime': '2018-03-26T09:51:00',
								'legs': [
									{
										'arrivalTime': '2018-03-26T11:55:00',
										'departureTime': '2018-03-26T09:51:00',
										'destination': 'ATL',
										'origin': 'DTW',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-26T17:50:00',
										'departureTime': '2018-03-26T15:55:00',
										'destination': 'FLL',
										'origin': 'ATL',
										'flightNumber': '537',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									}
								],
								'availableCount': 111,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 49,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'T'
								],
								'arrivalTime': '2018-03-26T19:34:00',
								'departureTime': '2018-03-26T09:51:00',
								'legs': [
									{
										'arrivalTime': '2018-03-26T11:55:00',
										'departureTime': '2018-03-26T09:51:00',
										'destination': 'ATL',
										'origin': 'DTW',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-26T19:34:00',
										'departureTime': '2018-03-26T17:41:00',
										'destination': 'FLL',
										'origin': 'ATL',
										'flightNumber': '403',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									}
								],
								'availableCount': 127,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 49,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'T'
								],
								'arrivalTime': '2018-03-26T21:06:00',
								'departureTime': '2018-03-26T09:51:00',
								'legs': [
									{
										'arrivalTime': '2018-03-26T11:55:00',
										'departureTime': '2018-03-26T09:51:00',
										'destination': 'ATL',
										'origin': 'DTW',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-26T14:10:00',
										'departureTime': '2018-03-26T12:45:00',
										'destination': 'MCO',
										'origin': 'ATL',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-26T21:06:00',
										'departureTime': '2018-03-26T19:59:00',
										'destination': 'FLL',
										'origin': 'MCO',
										'flightNumber': '195',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 73,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 49,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'T'
								],
								'arrivalTime': '2018-03-26T21:06:00',
								'departureTime': '2018-03-26T11:25:00',
								'legs': [
									{
										'arrivalTime': '2018-03-26T14:04:00',
										'departureTime': '2018-03-26T11:25:00',
										'destination': 'MCO',
										'origin': 'DTW',
										'flightNumber': '337',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-26T21:06:00',
										'departureTime': '2018-03-26T19:59:00',
										'destination': 'FLL',
										'origin': 'MCO',
										'flightNumber': '195',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 73,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 49,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'T'
								],
								'arrivalTime': '2018-03-26T21:53:00',
								'departureTime': '2018-03-26T15:10:00',
								'legs': [
									{
										'arrivalTime': '2018-03-26T17:51:00',
										'departureTime': '2018-03-26T15:10:00',
										'destination': 'TPA',
										'origin': 'DTW',
										'flightNumber': '645',
										'carrierCode': 'NK',
										'equipmentType': '320',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-26T21:53:00',
										'departureTime': '2018-03-26T20:49:00',
										'destination': 'FLL',
										'origin': 'TPA',
										'flightNumber': '575',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 171,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 49,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'T'
								],
								'arrivalTime': '2018-03-26T23:36:00',
								'departureTime': '2018-03-26T16:10:00',
								'legs': [
									{
										'arrivalTime': '2018-03-26T17:59:00',
										'departureTime': '2018-03-26T16:10:00',
										'destination': 'LGA',
										'origin': 'DTW',
										'flightNumber': '347',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-26T23:36:00',
										'departureTime': '2018-03-26T20:25:00',
										'destination': 'FLL',
										'origin': 'LGA',
										'flightNumber': '779',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 111,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-26T21:06:00',
								'departureTime': '2018-03-26T16:35:00',
								'legs': [
									{
										'arrivalTime': '2018-03-26T19:14:00',
										'departureTime': '2018-03-26T16:35:00',
										'destination': 'MCO',
										'origin': 'DTW',
										'flightNumber': '899',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-26T21:06:00',
										'departureTime': '2018-03-26T19:59:00',
										'destination': 'FLL',
										'origin': 'MCO',
										'flightNumber': '195',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 106,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 49,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'T'
								],
								'arrivalTime': '2018-03-26T21:53:00',
								'departureTime': '2018-03-26T17:35:00',
								'legs': [
									{
										'arrivalTime': '2018-03-26T20:12:00',
										'departureTime': '2018-03-26T17:35:00',
										'destination': 'TPA',
										'origin': 'DTW',
										'flightNumber': '631',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-26T21:53:00',
										'departureTime': '2018-03-26T20:49:00',
										'destination': 'FLL',
										'origin': 'TPA',
										'flightNumber': '575',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 179,
								'productClass': null
							}
						],
						'destination': 'FLL',
						'origin': 'DTW',
						'departureDate': '2018-03-26T00:00:00'
					},
					{
						'lowestFareAmount': {
							'fareAmount': 9,
							'farePointAmount': 0,
							'taxesAndFeesAmount': 0
						},
						'lowFares': [
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 9,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'U'
								],
								'arrivalTime': '2018-03-27T09:44:00',
								'departureTime': '2018-03-27T06:40:00',
								'legs': [
									{
										'arrivalTime': '2018-03-27T09:44:00',
										'departureTime': '2018-03-27T06:40:00',
										'destination': 'FLL',
										'origin': 'DTW',
										'flightNumber': '417',
										'carrierCode': 'NK',
										'equipmentType': '32B',
										'operatingCarrier': null
									}
								],
								'availableCount': 60,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 9,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'U'
								],
								'arrivalTime': '2018-03-27T21:44:00',
								'departureTime': '2018-03-27T18:39:00',
								'legs': [
									{
										'arrivalTime': '2018-03-27T21:44:00',
										'departureTime': '2018-03-27T18:39:00',
										'destination': 'FLL',
										'origin': 'DTW',
										'flightNumber': '845',
										'carrierCode': 'NK',
										'equipmentType': '32B',
										'operatingCarrier': null
									}
								],
								'availableCount': 166,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 9,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'U'
								],
								'arrivalTime': '2018-03-27T15:42:00',
								'departureTime': '2018-03-27T06:00:00',
								'legs': [
									{
										'arrivalTime': '2018-03-27T07:42:00',
										'departureTime': '2018-03-27T06:00:00',
										'destination': 'LGA',
										'origin': 'DTW',
										'flightNumber': '316',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-27T15:42:00',
										'departureTime': '2018-03-27T12:30:00',
										'destination': 'FLL',
										'origin': 'LGA',
										'flightNumber': '197',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 67,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 9,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'U'
								],
								'arrivalTime': '2018-03-27T13:21:00',
								'departureTime': '2018-03-27T08:30:00',
								'legs': [
									{
										'arrivalTime': '2018-03-27T10:01:00',
										'departureTime': '2018-03-27T08:30:00',
										'destination': 'BWI',
										'origin': 'DTW',
										'flightNumber': '781',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-27T13:21:00',
										'departureTime': '2018-03-27T10:41:00',
										'destination': 'FLL',
										'origin': 'BWI',
										'flightNumber': '305',
										'carrierCode': 'NK',
										'equipmentType': '32B',
										'operatingCarrier': null
									}
								],
								'availableCount': 150,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 9,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'U'
								],
								'arrivalTime': '2018-03-27T17:50:00',
								'departureTime': '2018-03-27T09:51:00',
								'legs': [
									{
										'arrivalTime': '2018-03-27T11:55:00',
										'departureTime': '2018-03-27T09:51:00',
										'destination': 'ATL',
										'origin': 'DTW',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-27T17:50:00',
										'departureTime': '2018-03-27T15:55:00',
										'destination': 'FLL',
										'origin': 'ATL',
										'flightNumber': '537',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									}
								],
								'availableCount': 61,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 9,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'U'
								],
								'arrivalTime': '2018-03-27T19:34:00',
								'departureTime': '2018-03-27T09:51:00',
								'legs': [
									{
										'arrivalTime': '2018-03-27T11:55:00',
										'departureTime': '2018-03-27T09:51:00',
										'destination': 'ATL',
										'origin': 'DTW',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-27T19:34:00',
										'departureTime': '2018-03-27T17:41:00',
										'destination': 'FLL',
										'origin': 'ATL',
										'flightNumber': '403',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									}
								],
								'availableCount': 90,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 9,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'U'
								],
								'arrivalTime': '2018-03-27T21:06:00',
								'departureTime': '2018-03-27T09:51:00',
								'legs': [
									{
										'arrivalTime': '2018-03-27T11:55:00',
										'departureTime': '2018-03-27T09:51:00',
										'destination': 'ATL',
										'origin': 'DTW',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-27T14:10:00',
										'departureTime': '2018-03-27T12:45:00',
										'destination': 'MCO',
										'origin': 'ATL',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-27T21:06:00',
										'departureTime': '2018-03-27T19:59:00',
										'destination': 'FLL',
										'origin': 'MCO',
										'flightNumber': '195',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 60,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 49,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'T'
								],
								'arrivalTime': '2018-03-27T21:06:00',
								'departureTime': '2018-03-27T11:25:00',
								'legs': [
									{
										'arrivalTime': '2018-03-27T14:04:00',
										'departureTime': '2018-03-27T11:25:00',
										'destination': 'MCO',
										'origin': 'DTW',
										'flightNumber': '337',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-27T21:06:00',
										'departureTime': '2018-03-27T19:59:00',
										'destination': 'FLL',
										'origin': 'MCO',
										'flightNumber': '195',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 75,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 9,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'U'
								],
								'arrivalTime': '2018-03-27T23:36:00',
								'departureTime': '2018-03-27T16:10:00',
								'legs': [
									{
										'arrivalTime': '2018-03-27T17:59:00',
										'departureTime': '2018-03-27T16:10:00',
										'destination': 'LGA',
										'origin': 'DTW',
										'flightNumber': '347',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-27T23:36:00',
										'departureTime': '2018-03-27T20:25:00',
										'destination': 'FLL',
										'origin': 'LGA',
										'flightNumber': '779',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 112,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-27T21:06:00',
								'departureTime': '2018-03-27T16:35:00',
								'legs': [
									{
										'arrivalTime': '2018-03-27T19:14:00',
										'departureTime': '2018-03-27T16:35:00',
										'destination': 'MCO',
										'origin': 'DTW',
										'flightNumber': '899',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-27T21:06:00',
										'departureTime': '2018-03-27T19:59:00',
										'destination': 'FLL',
										'origin': 'MCO',
										'flightNumber': '195',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 110,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 29,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'R'
								],
								'arrivalTime': '2018-03-27T21:53:00',
								'departureTime': '2018-03-27T17:35:00',
								'legs': [
									{
										'arrivalTime': '2018-03-27T20:12:00',
										'departureTime': '2018-03-27T17:35:00',
										'destination': 'TPA',
										'origin': 'DTW',
										'flightNumber': '631',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-27T21:53:00',
										'departureTime': '2018-03-27T20:49:00',
										'destination': 'FLL',
										'origin': 'TPA',
										'flightNumber': '575',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 163,
								'productClass': null
							}
						],
						'destination': 'FLL',
						'origin': 'DTW',
						'departureDate': '2018-03-27T00:00:00'
					},
					{
						'lowestFareAmount': {
							'fareAmount': 9,
							'farePointAmount': 0,
							'taxesAndFeesAmount': 0
						},
						'lowFares': [
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 49,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'T'
								],
								'arrivalTime': '2018-03-28T09:44:00',
								'departureTime': '2018-03-28T06:40:00',
								'legs': [
									{
										'arrivalTime': '2018-03-28T09:44:00',
										'departureTime': '2018-03-28T06:40:00',
										'destination': 'FLL',
										'origin': 'DTW',
										'flightNumber': '417',
										'carrierCode': 'NK',
										'equipmentType': '32B',
										'operatingCarrier': null
									}
								],
								'availableCount': 48,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 29,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'R'
								],
								'arrivalTime': '2018-03-28T21:44:00',
								'departureTime': '2018-03-28T18:39:00',
								'legs': [
									{
										'arrivalTime': '2018-03-28T21:44:00',
										'departureTime': '2018-03-28T18:39:00',
										'destination': 'FLL',
										'origin': 'DTW',
										'flightNumber': '845',
										'carrierCode': 'NK',
										'equipmentType': '32B',
										'operatingCarrier': null
									}
								],
								'availableCount': 113,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 9,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'U'
								],
								'arrivalTime': '2018-03-28T15:42:00',
								'departureTime': '2018-03-28T06:00:00',
								'legs': [
									{
										'arrivalTime': '2018-03-28T07:42:00',
										'departureTime': '2018-03-28T06:00:00',
										'destination': 'LGA',
										'origin': 'DTW',
										'flightNumber': '316',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-28T15:42:00',
										'departureTime': '2018-03-28T12:30:00',
										'destination': 'FLL',
										'origin': 'LGA',
										'flightNumber': '197',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 84,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 9,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'U'
								],
								'arrivalTime': '2018-03-28T13:21:00',
								'departureTime': '2018-03-28T08:30:00',
								'legs': [
									{
										'arrivalTime': '2018-03-28T10:01:00',
										'departureTime': '2018-03-28T08:30:00',
										'destination': 'BWI',
										'origin': 'DTW',
										'flightNumber': '781',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-28T13:21:00',
										'departureTime': '2018-03-28T10:41:00',
										'destination': 'FLL',
										'origin': 'BWI',
										'flightNumber': '305',
										'carrierCode': 'NK',
										'equipmentType': '32B',
										'operatingCarrier': null
									}
								],
								'availableCount': 158,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 9,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'U'
								],
								'arrivalTime': '2018-03-28T17:50:00',
								'departureTime': '2018-03-28T09:51:00',
								'legs': [
									{
										'arrivalTime': '2018-03-28T11:55:00',
										'departureTime': '2018-03-28T09:51:00',
										'destination': 'ATL',
										'origin': 'DTW',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-28T17:50:00',
										'departureTime': '2018-03-28T15:55:00',
										'destination': 'FLL',
										'origin': 'ATL',
										'flightNumber': '537',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									}
								],
								'availableCount': 34,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 9,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'U'
								],
								'arrivalTime': '2018-03-28T19:34:00',
								'departureTime': '2018-03-28T09:51:00',
								'legs': [
									{
										'arrivalTime': '2018-03-28T11:55:00',
										'departureTime': '2018-03-28T09:51:00',
										'destination': 'ATL',
										'origin': 'DTW',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-28T19:34:00',
										'departureTime': '2018-03-28T17:41:00',
										'destination': 'FLL',
										'origin': 'ATL',
										'flightNumber': '403',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									}
								],
								'availableCount': 46,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 9,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'U'
								],
								'arrivalTime': '2018-03-28T21:06:00',
								'departureTime': '2018-03-28T09:51:00',
								'legs': [
									{
										'arrivalTime': '2018-03-28T11:55:00',
										'departureTime': '2018-03-28T09:51:00',
										'destination': 'ATL',
										'origin': 'DTW',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-28T14:10:00',
										'departureTime': '2018-03-28T12:45:00',
										'destination': 'MCO',
										'origin': 'ATL',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-28T21:06:00',
										'departureTime': '2018-03-28T19:59:00',
										'destination': 'FLL',
										'origin': 'MCO',
										'flightNumber': '195',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 60,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 49,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'T'
								],
								'arrivalTime': '2018-03-28T21:06:00',
								'departureTime': '2018-03-28T11:25:00',
								'legs': [
									{
										'arrivalTime': '2018-03-28T14:04:00',
										'departureTime': '2018-03-28T11:25:00',
										'destination': 'MCO',
										'origin': 'DTW',
										'flightNumber': '337',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-28T21:06:00',
										'departureTime': '2018-03-28T19:59:00',
										'destination': 'FLL',
										'origin': 'MCO',
										'flightNumber': '195',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 75,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 29,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'R'
								],
								'arrivalTime': '2018-03-28T21:53:00',
								'departureTime': '2018-03-28T15:10:00',
								'legs': [
									{
										'arrivalTime': '2018-03-28T17:51:00',
										'departureTime': '2018-03-28T15:10:00',
										'destination': 'TPA',
										'origin': 'DTW',
										'flightNumber': '645',
										'carrierCode': 'NK',
										'equipmentType': '320',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-28T21:53:00',
										'departureTime': '2018-03-28T20:49:00',
										'destination': 'FLL',
										'origin': 'TPA',
										'flightNumber': '575',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 150,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 29,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'R'
								],
								'arrivalTime': '2018-03-28T23:36:00',
								'departureTime': '2018-03-28T16:10:00',
								'legs': [
									{
										'arrivalTime': '2018-03-28T17:59:00',
										'departureTime': '2018-03-28T16:10:00',
										'destination': 'LGA',
										'origin': 'DTW',
										'flightNumber': '347',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-28T23:36:00',
										'departureTime': '2018-03-28T20:25:00',
										'destination': 'FLL',
										'origin': 'LGA',
										'flightNumber': '779',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 122,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-28T21:06:00',
								'departureTime': '2018-03-28T16:35:00',
								'legs': [
									{
										'arrivalTime': '2018-03-28T19:14:00',
										'departureTime': '2018-03-28T16:35:00',
										'destination': 'MCO',
										'origin': 'DTW',
										'flightNumber': '899',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-28T21:06:00',
										'departureTime': '2018-03-28T19:59:00',
										'destination': 'FLL',
										'origin': 'MCO',
										'flightNumber': '195',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 110,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 79,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'V'
								],
								'arrivalTime': '2018-03-28T21:53:00',
								'departureTime': '2018-03-28T17:35:00',
								'legs': [
									{
										'arrivalTime': '2018-03-28T20:12:00',
										'departureTime': '2018-03-28T17:35:00',
										'destination': 'TPA',
										'origin': 'DTW',
										'flightNumber': '631',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-28T21:53:00',
										'departureTime': '2018-03-28T20:49:00',
										'destination': 'FLL',
										'origin': 'TPA',
										'flightNumber': '575',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 177,
								'productClass': null
							}
						],
						'destination': 'FLL',
						'origin': 'DTW',
						'departureDate': '2018-03-28T00:00:00'
					},
					{
						'lowestFareAmount': {
							'fareAmount': 99,
							'farePointAmount': 0,
							'taxesAndFeesAmount': 0
						},
						'lowFares': [
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 149,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'Y'
								],
								'arrivalTime': '2018-03-29T09:44:00',
								'departureTime': '2018-03-29T06:40:00',
								'legs': [
									{
										'arrivalTime': '2018-03-29T09:44:00',
										'departureTime': '2018-03-29T06:40:00',
										'destination': 'FLL',
										'origin': 'DTW',
										'flightNumber': '417',
										'carrierCode': 'NK',
										'equipmentType': '32B',
										'operatingCarrier': null
									}
								],
								'availableCount': 230,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 149,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'Y'
								],
								'arrivalTime': '2018-03-29T21:44:00',
								'departureTime': '2018-03-29T18:39:00',
								'legs': [
									{
										'arrivalTime': '2018-03-29T21:44:00',
										'departureTime': '2018-03-29T18:39:00',
										'destination': 'FLL',
										'origin': 'DTW',
										'flightNumber': '845',
										'carrierCode': 'NK',
										'equipmentType': '32B',
										'operatingCarrier': null
									}
								],
								'availableCount': 208,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-29T15:42:00',
								'departureTime': '2018-03-29T06:00:00',
								'legs': [
									{
										'arrivalTime': '2018-03-29T07:42:00',
										'departureTime': '2018-03-29T06:00:00',
										'destination': 'LGA',
										'origin': 'DTW',
										'flightNumber': '316',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-29T15:42:00',
										'departureTime': '2018-03-29T12:30:00',
										'destination': 'FLL',
										'origin': 'LGA',
										'flightNumber': '197',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 145,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 99,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'K'
								],
								'arrivalTime': '2018-03-29T13:21:00',
								'departureTime': '2018-03-29T08:30:00',
								'legs': [
									{
										'arrivalTime': '2018-03-29T10:01:00',
										'departureTime': '2018-03-29T08:30:00',
										'destination': 'BWI',
										'origin': 'DTW',
										'flightNumber': '781',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-29T13:21:00',
										'departureTime': '2018-03-29T10:41:00',
										'destination': 'FLL',
										'origin': 'BWI',
										'flightNumber': '305',
										'carrierCode': 'NK',
										'equipmentType': '32B',
										'operatingCarrier': null
									}
								],
								'availableCount': 167,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 99,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'K'
								],
								'arrivalTime': '2018-03-29T17:50:00',
								'departureTime': '2018-03-29T09:51:00',
								'legs': [
									{
										'arrivalTime': '2018-03-29T11:55:00',
										'departureTime': '2018-03-29T09:51:00',
										'destination': 'ATL',
										'origin': 'DTW',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-29T17:50:00',
										'departureTime': '2018-03-29T15:55:00',
										'destination': 'FLL',
										'origin': 'ATL',
										'flightNumber': '537',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									}
								],
								'availableCount': 135,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-29T19:34:00',
								'departureTime': '2018-03-29T09:51:00',
								'legs': [
									{
										'arrivalTime': '2018-03-29T11:55:00',
										'departureTime': '2018-03-29T09:51:00',
										'destination': 'ATL',
										'origin': 'DTW',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-29T19:34:00',
										'departureTime': '2018-03-29T17:41:00',
										'destination': 'FLL',
										'origin': 'ATL',
										'flightNumber': '403',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									}
								],
								'availableCount': 145,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 99,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'K'
								],
								'arrivalTime': '2018-03-29T21:06:00',
								'departureTime': '2018-03-29T09:51:00',
								'legs': [
									{
										'arrivalTime': '2018-03-29T11:55:00',
										'departureTime': '2018-03-29T09:51:00',
										'destination': 'ATL',
										'origin': 'DTW',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-29T14:10:00',
										'departureTime': '2018-03-29T12:45:00',
										'destination': 'MCO',
										'origin': 'ATL',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-29T21:06:00',
										'departureTime': '2018-03-29T19:59:00',
										'destination': 'FLL',
										'origin': 'MCO',
										'flightNumber': '195',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 89,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 149,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'Y'
								],
								'arrivalTime': '2018-03-29T21:06:00',
								'departureTime': '2018-03-29T11:25:00',
								'legs': [
									{
										'arrivalTime': '2018-03-29T14:04:00',
										'departureTime': '2018-03-29T11:25:00',
										'destination': 'MCO',
										'origin': 'DTW',
										'flightNumber': '337',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-29T21:06:00',
										'departureTime': '2018-03-29T19:59:00',
										'destination': 'FLL',
										'origin': 'MCO',
										'flightNumber': '195',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 146,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 149,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'Y'
								],
								'arrivalTime': '2018-03-29T23:36:00',
								'departureTime': '2018-03-29T16:10:00',
								'legs': [
									{
										'arrivalTime': '2018-03-29T17:59:00',
										'departureTime': '2018-03-29T16:10:00',
										'destination': 'LGA',
										'origin': 'DTW',
										'flightNumber': '347',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-29T23:36:00',
										'departureTime': '2018-03-29T20:25:00',
										'destination': 'FLL',
										'origin': 'LGA',
										'flightNumber': '779',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 182,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-29T21:06:00',
								'departureTime': '2018-03-29T16:35:00',
								'legs': [
									{
										'arrivalTime': '2018-03-29T19:14:00',
										'departureTime': '2018-03-29T16:35:00',
										'destination': 'MCO',
										'origin': 'DTW',
										'flightNumber': '899',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-29T21:06:00',
										'departureTime': '2018-03-29T19:59:00',
										'destination': 'FLL',
										'origin': 'MCO',
										'flightNumber': '195',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 109,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-29T21:53:00',
								'departureTime': '2018-03-29T17:35:00',
								'legs': [
									{
										'arrivalTime': '2018-03-29T20:12:00',
										'departureTime': '2018-03-29T17:35:00',
										'destination': 'TPA',
										'origin': 'DTW',
										'flightNumber': '631',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-29T21:53:00',
										'departureTime': '2018-03-29T20:49:00',
										'destination': 'FLL',
										'origin': 'TPA',
										'flightNumber': '575',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 184,
								'productClass': null
							}
						],
						'destination': 'FLL',
						'origin': 'DTW',
						'departureDate': '2018-03-29T00:00:00'
					},
					{
						'lowestFareAmount': {
							'fareAmount': 119,
							'farePointAmount': 0,
							'taxesAndFeesAmount': 0
						},
						'lowFares': [
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 149,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'Y'
								],
								'arrivalTime': '2018-03-30T09:44:00',
								'departureTime': '2018-03-30T06:40:00',
								'legs': [
									{
										'arrivalTime': '2018-03-30T09:44:00',
										'departureTime': '2018-03-30T06:40:00',
										'destination': 'FLL',
										'origin': 'DTW',
										'flightNumber': '417',
										'carrierCode': 'NK',
										'equipmentType': '32B',
										'operatingCarrier': null
									}
								],
								'availableCount': 214,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 149,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'Y'
								],
								'arrivalTime': '2018-03-30T21:44:00',
								'departureTime': '2018-03-30T18:39:00',
								'legs': [
									{
										'arrivalTime': '2018-03-30T21:44:00',
										'departureTime': '2018-03-30T18:39:00',
										'destination': 'FLL',
										'origin': 'DTW',
										'flightNumber': '845',
										'carrierCode': 'NK',
										'equipmentType': '32B',
										'operatingCarrier': null
									}
								],
								'availableCount': 213,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-30T15:42:00',
								'departureTime': '2018-03-30T06:00:00',
								'legs': [
									{
										'arrivalTime': '2018-03-30T07:42:00',
										'departureTime': '2018-03-30T06:00:00',
										'destination': 'LGA',
										'origin': 'DTW',
										'flightNumber': '316',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-30T15:42:00',
										'departureTime': '2018-03-30T12:30:00',
										'destination': 'FLL',
										'origin': 'LGA',
										'flightNumber': '197',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 139,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-30T13:21:00',
								'departureTime': '2018-03-30T08:30:00',
								'legs': [
									{
										'arrivalTime': '2018-03-30T10:01:00',
										'departureTime': '2018-03-30T08:30:00',
										'destination': 'BWI',
										'origin': 'DTW',
										'flightNumber': '781',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-30T13:21:00',
										'departureTime': '2018-03-30T10:41:00',
										'destination': 'FLL',
										'origin': 'BWI',
										'flightNumber': '305',
										'carrierCode': 'NK',
										'equipmentType': '32B',
										'operatingCarrier': null
									}
								],
								'availableCount': 183,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-30T17:50:00',
								'departureTime': '2018-03-30T09:51:00',
								'legs': [
									{
										'arrivalTime': '2018-03-30T11:55:00',
										'departureTime': '2018-03-30T09:51:00',
										'destination': 'ATL',
										'origin': 'DTW',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-30T17:50:00',
										'departureTime': '2018-03-30T15:55:00',
										'destination': 'FLL',
										'origin': 'ATL',
										'flightNumber': '537',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									}
								],
								'availableCount': 141,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-30T19:34:00',
								'departureTime': '2018-03-30T09:51:00',
								'legs': [
									{
										'arrivalTime': '2018-03-30T11:55:00',
										'departureTime': '2018-03-30T09:51:00',
										'destination': 'ATL',
										'origin': 'DTW',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-30T19:34:00',
										'departureTime': '2018-03-30T17:41:00',
										'destination': 'FLL',
										'origin': 'ATL',
										'flightNumber': '403',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									}
								],
								'availableCount': 142,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-30T21:06:00',
								'departureTime': '2018-03-30T09:51:00',
								'legs': [
									{
										'arrivalTime': '2018-03-30T11:55:00',
										'departureTime': '2018-03-30T09:51:00',
										'destination': 'ATL',
										'origin': 'DTW',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-30T14:10:00',
										'departureTime': '2018-03-30T12:45:00',
										'destination': 'MCO',
										'origin': 'ATL',
										'flightNumber': '565',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-30T21:06:00',
										'departureTime': '2018-03-30T19:59:00',
										'destination': 'FLL',
										'origin': 'MCO',
										'flightNumber': '195',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 110,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 149,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'Y'
								],
								'arrivalTime': '2018-03-30T21:06:00',
								'departureTime': '2018-03-30T11:25:00',
								'legs': [
									{
										'arrivalTime': '2018-03-30T14:04:00',
										'departureTime': '2018-03-30T11:25:00',
										'destination': 'MCO',
										'origin': 'DTW',
										'flightNumber': '337',
										'carrierCode': 'NK',
										'equipmentType': '319',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-30T21:06:00',
										'departureTime': '2018-03-30T19:59:00',
										'destination': 'FLL',
										'origin': 'MCO',
										'flightNumber': '195',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 146,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 149,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'Y'
								],
								'arrivalTime': '2018-03-30T21:53:00',
								'departureTime': '2018-03-30T15:10:00',
								'legs': [
									{
										'arrivalTime': '2018-03-30T17:51:00',
										'departureTime': '2018-03-30T15:10:00',
										'destination': 'TPA',
										'origin': 'DTW',
										'flightNumber': '645',
										'carrierCode': 'NK',
										'equipmentType': '320',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-30T21:53:00',
										'departureTime': '2018-03-30T20:49:00',
										'destination': 'FLL',
										'origin': 'TPA',
										'flightNumber': '575',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 180,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-30T23:36:00',
								'departureTime': '2018-03-30T16:10:00',
								'legs': [
									{
										'arrivalTime': '2018-03-30T17:59:00',
										'departureTime': '2018-03-30T16:10:00',
										'destination': 'LGA',
										'origin': 'DTW',
										'flightNumber': '347',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-30T23:36:00',
										'departureTime': '2018-03-30T20:25:00',
										'destination': 'FLL',
										'origin': 'LGA',
										'flightNumber': '779',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 171,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-30T21:06:00',
								'departureTime': '2018-03-30T16:35:00',
								'legs': [
									{
										'arrivalTime': '2018-03-30T19:14:00',
										'departureTime': '2018-03-30T16:35:00',
										'destination': 'MCO',
										'origin': 'DTW',
										'flightNumber': '899',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-30T21:06:00',
										'departureTime': '2018-03-30T19:59:00',
										'destination': 'FLL',
										'origin': 'MCO',
										'flightNumber': '195',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 110,
								'productClass': null
							},
							{
								'passengers': {
									'ADT': {
										'discountCode': null,
										'fareAmount': 119,
										'type': 'ADT',
										'farePointAmount': 0,
										'taxesAndFeesAmount': 0
									}
								},
								'bookingClasses': [
									'H'
								],
								'arrivalTime': '2018-03-30T21:53:00',
								'departureTime': '2018-03-30T17:35:00',
								'legs': [
									{
										'arrivalTime': '2018-03-30T20:12:00',
										'departureTime': '2018-03-30T17:35:00',
										'destination': 'TPA',
										'origin': 'DTW',
										'flightNumber': '631',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									},
									{
										'arrivalTime': '2018-03-30T21:53:00',
										'departureTime': '2018-03-30T20:49:00',
										'destination': 'FLL',
										'origin': 'TPA',
										'flightNumber': '575',
										'carrierCode': 'NK',
										'equipmentType': '32A',
										'operatingCarrier': null
									}
								],
								'availableCount': 184,
								'productClass': null
							}
						],
						'destination': 'FLL',
						'origin': 'DTW',
						'departureDate': '2018-03-30T00:00:00'
					}
				],
				'includeTaxesAndFees': false,
				'currencyCode': 'USD'
			}
		});
	}
}
