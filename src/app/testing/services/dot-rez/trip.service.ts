import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class TripService {
	constructor() { }

	public sellTrip(tripSelection: any): Observable<any> {
		console.log(tripSelection);
		return of({
			'data': {
				'bookingKey': null,
				'recordLocator': null,
				'currencyCode': 'USD',
				'systemCode': null,
				'groupName': null,
				'locators': {
					'numericRecordLocator': null,
					'parentRecordLocator': null,
					'parentId': 0,
					'recordLocators': []
				},
				'info': {
					'status': 0,
					'paidStatus': 0,
					'priceStatus': 2,
					'profileStatus': 0,
					'bookingType': null,
					'channelType': 0,
					'bookedDate': '2018-03-13T14:40:49.3907529Z',
					'createdDate': null,
					'expirationDate': null,
					'modifiedDate': null,
					'modifiedAgentId': 0,
					'createdAgentId': 0,
					'owningCarrierCode': null,
					'changeAllowed': true
				},
				'sales': {
					'created': {
						'agentCode': 'Mob_API',
						'domainCode': 'EXT',
						'locationCode': 'MOAP',
						'organizationCode': 'NK'
					},
					'source': {
						'agentCode': 'Mob_API',
						'domainCode': 'EXT',
						'locationCode': 'MOAP',
						'organizationCode': 'NK'
					},
					'modified': null
				},
				'typeOfSale': {
					'residentCountry': 'US',
					'promotionCode': null,
					'fareTypes': []
				},
				'hold': null,
				'breakdown': {
					'balanceDue': 211.98,
					'pointsBalanceDue': 0,
					'authorizedBalanceDue': 211.98,
					'totalAmount': 211.98,
					'totalPoints': 0,
					'totalToCollect': 211.98,
					'totalPointsToCollect': 0,
					'totalCharged': 211.98,
					'passengerTotals': {
						'services': null,
						'specialServices': null,
						'seats': null,
						'upgrades': null,
						'spoilage': null,
						'nameChanges': null,
						'convenience': null,
						'infant': null
					},
					'passengers': {
						'MCFBRFQ-': {
							'passengerKey': 'MCFBRFQ-',
							'services': null,
							'specialServices': null,
							'seats': null,
							'upgrades': null,
							'spoilage': null,
							'nameChanges': null,
							'convenience': null,
							'infant': null
						}
					},
					'journeyTotals': {
						'totalAmount': 108.6,
						'totalPoints': 0,
						'totalTax': 103.38,
						'totalDiscount': 0
					},
					'journeys': {
						'Tkt_IDMxNn4gfn5EVFd_MDMvMjQvMjAxOCAwNjowMH5MR0F_MDMvMjQvMjAxOCAwNzo0Mn5eTkt_IDE5N34gfn5MR0F_MDMvMjQvMjAxOCAxMjozMH5GTEx_MDMvMjQvMjAxOCAxNTo0Mn4-': {
							'journeyKey': 'Tkt_IDMxNn4gfn5EVFd_MDMvMjQvMjAxOCAwNjowMH5MR0F_MDMvMjQvMjAxOCAwNzo0Mn5eTkt_IDE5N34gfn5MR0F_MDMvMjQvMjAxOCAxMjozMH5GTEx_MDMvMjQvMjAxOCAxNTo0Mn4-',
							'totalAmount': 108.6,
							'totalPoints': 0,
							'totalTax': 103.38,
							'totalDiscount': 0
						}
					},
					'addOnTotals': {
						'car': null,
						'hotel': null,
						'activities': null
					}
				},
				'receivedBy': {
					'receivedBy': null,
					'latestReceivedBy': null,
					'receivedReference': null,
					'latestReceivedReference': null,
					'referralCode': null
				},
				'contacts': {},
				'passengers': {
					'MCFBRFQ-': {
						'passengerKey': 'MCFBRFQ-',
						'passengerAlternateKey': null,
						'customerNumber': null,
						'fees': [],
						'name': null,
						'passengerTypeCode': 'ADT',
						'discountCode': null,
						'bags': [],
						'program': null,
						'infant': null,
						'info': {
							'nationality': null,
							'residentCountry': null,
							'gender': 1,
							'dateOfBirth': null,
							'familyNumber': null
						},
						'travelDocuments': [],
						'addresses': [],
						'weightCategory': 1
					}
				},
				'journeys': [
					{
						'flightType': 4,
						'stops': 1,
						'designator': {
							'destination': 'FLL',
							'origin': 'DTW',
							'arrival': '2018-03-24T15:42:00',
							'departure': '2018-03-24T06:00:00'
						},
						'move': null,
						'segments': [
							{
								'isStandby': false,
								'isConfirming': false,
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
								'fares': [
									{
										'isGoverning': true,
										'downgradeAvailable': false,
										'carrierCode': 'NK',
										'fareKey': 'MH5IfiB_SE5SfjAwMDF_fjI1flg-',
										'classOfService': 'H',
										'classType': null,
										'fareApplicationType': 0,
										'fareClassOfService': 'H',
										'fareBasisCode': 'HNR',
										'fareSequence': 25,
										'inboundOutBound': 0,
										'fareStatus': 0,
										'isAllotmentMarketFare': false,
										'originalClassOfService': 'H',
										'ruleNumber': '0001',
										'productClass': null,
										'ruleTariff': null,
										'travelClassCode': 'Y',
										'crossReferenceClassOfService': null,
										'passengerFares': [
											{
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
													},
													{
														'amount': 8.3,
														'code': 'US',
														'detail': 'DTW-LGA',
														'type': 3,
														'collectType': 0,
														'currencyCode': 'USD',
														'foreignCurrencyCode': 'USD',
														'foreignAmount': 8.3,
														'ticketCode': 'US'
													},
													{
														'amount': 7,
														'code': 'DOTUC',
														'detail': 'DTW-LGA',
														'type': 4,
														'collectType': 0,
														'currencyCode': 'USD',
														'foreignCurrencyCode': 'USD',
														'foreignAmount': 7,
														'ticketCode': 'DUC'
													},
													{
														'amount': 8,
														'code': 'FEC',
														'detail': 'DTW-LGA',
														'type': 4,
														'collectType': 0,
														'currencyCode': 'USD',
														'foreignCurrencyCode': 'USD',
														'foreignAmount': 8,
														'ticketCode': 'FEC'
													},
													{
														'amount': 7,
														'code': 'DOTUC',
														'detail': 'LGA-FLL',
														'type': 4,
														'collectType': 0,
														'currencyCode': 'USD',
														'foreignCurrencyCode': 'USD',
														'foreignAmount': 7,
														'ticketCode': 'DUC'
													},
													{
														'amount': 8,
														'code': 'FEC',
														'detail': 'LGA-FLL',
														'type': 4,
														'collectType': 0,
														'currencyCode': 'USD',
														'foreignCurrencyCode': 'USD',
														'foreignAmount': 8,
														'ticketCode': 'FEC'
													},
													{
														'amount': 5.6,
														'code': 'AY',
														'detail': 'DTW-LGA',
														'type': 4,
														'collectType': 0,
														'currencyCode': 'USD',
														'foreignCurrencyCode': 'USD',
														'foreignAmount': 5.6,
														'ticketCode': 'AY'
													},
													{
														'amount': 19.99,
														'code': 'PUF',
														'detail': 'DTW-LGA',
														'type': 4,
														'collectType': 0,
														'currencyCode': 'USD',
														'foreignCurrencyCode': 'USD',
														'foreignAmount': 19.99,
														'ticketCode': 'PUF'
													},
													{
														'amount': 4.5,
														'code': 'XF',
														'detail': 'DTW-LGA',
														'type': 4,
														'collectType': 0,
														'currencyCode': 'USD',
														'foreignCurrencyCode': 'USD',
														'foreignAmount': 4.5,
														'ticketCode': 'XF'
													},
													{
														'amount': 4.2,
														'code': 'ZP',
														'detail': 'DTW-LGA',
														'type': 4,
														'collectType': 0,
														'currencyCode': 'USD',
														'foreignCurrencyCode': 'USD',
														'foreignAmount': 4.2,
														'ticketCode': 'ZP'
													},
													{
														'amount': 19.99,
														'code': 'PUF',
														'detail': 'LGA-FLL',
														'type': 4,
														'collectType': 0,
														'currencyCode': 'USD',
														'foreignCurrencyCode': 'USD',
														'foreignAmount': 19.99,
														'ticketCode': 'PUF'
													},
													{
														'amount': 4.5,
														'code': 'XF',
														'detail': 'LGA-FLL',
														'type': 4,
														'collectType': 0,
														'currencyCode': 'USD',
														'foreignCurrencyCode': 'USD',
														'foreignAmount': 4.5,
														'ticketCode': 'XF'
													},
													{
														'amount': 4.2,
														'code': 'ZP',
														'detail': 'LGA-FLL',
														'type': 4,
														'collectType': 0,
														'currencyCode': 'USD',
														'foreignCurrencyCode': 'USD',
														'foreignAmount': 4.2,
														'ticketCode': 'ZP'
													},
													{
														'amount': 1.12,
														'code': 'US',
														'detail': 'DTW-LGA',
														'type': 3,
														'collectType': 0,
														'currencyCode': 'USD',
														'foreignCurrencyCode': 'USD',
														'foreignAmount': 1.12,
														'ticketCode': 'US'
													},
													{
														'amount': 0.98,
														'code': 'US',
														'detail': 'DTW-LGA',
														'type': 3,
														'collectType': 0,
														'currencyCode': 'USD',
														'foreignCurrencyCode': 'USD',
														'foreignAmount': 0.98,
														'ticketCode': 'US'
													}
												],
												'discountCode': null,
												'fareDiscountCode': null,
												'passengerType': 'ADT'
											}
										]
									}
								],
								'segmentKey': 'Tkt_IDMxNn4gfn5EVFd_MDMvMjQvMjAxOCAwNjowMH5MR0F_MDMvMjQvMjAxOCAwNzo0Mn4-',
								'identifier': {
									'identifier': '316',
									'carrierCode': 'NK',
									'opSuffix': null
								},
								'passengerSegment': {
									'MCFBRFQ-': {
										'passengerKey': 'MCFBRFQ-',
										'activityDate': null,
										'baggageAllowanceUsed': false,
										'baggageAllowanceWeight': 0,
										'baggageAllowanceWeightType': 1,
										'boardingSequence': null,
										'createdDate': null,
										'liftStatus': 0,
										'modifiedDate': null,
										'overBookIndicator': 0,
										'priorityDate': null,
										'timeChanged': false,
										'verifiedTravelDocs': null,
										'sourcePointOfSale': null,
										'pointOfSale': null,
										'seats': [],
										'ssrs': [],
										'tickets': [],
										'bags': [],
										'scores': [],
										'boardingPassDetail': null,
										'hasInfant': false,
										'seatPreferences': {
											'seat': 0,
											'travelClass': 0,
											'advancedPreferences': []
										}
									}
								},
								'channelType': 4,
								'cabinOfService': 'Y',
								'externalIdentifier': null,
								'priorityCode': null,
								'changeReasonCode': 0,
								'segmentType': 0,
								'salesDate': null,
								'international': false,
								'flightReference': '20180324 NK 316 DTWLGA',
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
										'ssrs': [
											{
												'available': 250,
												'ssrNestCode': 'BAG1',
												'lid': 250,
												'sold': 0,
												'unitSold': 0
											},
											{
												'available': 250,
												'ssrNestCode': 'BAGS',
												'lid': 250,
												'sold': 0,
												'unitSold': 0
											},
											{
												'available': 1,
												'ssrNestCode': 'JSCA',
												'lid': 1,
												'sold': 0,
												'unitSold': 0
											},
											{
												'available': 2,
												'ssrNestCode': 'JSCP',
												'lid': 2,
												'sold': 0,
												'unitSold': 0
											},
											{
												'available': 4,
												'ssrNestCode': 'PETC',
												'lid': 4,
												'sold': 0,
												'unitSold': 0
											},
											{
												'available': 100,
												'ssrNestCode': 'SCPS',
												'lid': 100,
												'sold': 0,
												'unitSold': 0
											},
											{
												'available': 144,
												'ssrNestCode': 'UMNR',
												'lid': 144,
												'sold': 0,
												'unitSold': 0
											},
											{
												'available': 1,
												'ssrNestCode': 'WCOB',
												'lid': 1,
												'sold': 0,
												'unitSold': 0
											}
										],
										'seatmapReference': 'TkshIDMxNiEgITYzNjU3NDY4MDAwMDAwMDAwMCFEVFchTEdB',
										'flightReference': '20180324 NK 316 DTWLGA'
									}
								]
							},
							{
								'isStandby': false,
								'isConfirming': false,
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
								'fares': [
									{
										'isGoverning': true,
										'downgradeAvailable': false,
										'carrierCode': 'NK',
										'fareKey': 'MH5IfiB_SE5SfjAwMDF_fjI1flg-',
										'classOfService': 'H',
										'classType': null,
										'fareApplicationType': 0,
										'fareClassOfService': 'H',
										'fareBasisCode': 'HNR',
										'fareSequence': 25,
										'inboundOutBound': 0,
										'fareStatus': 0,
										'isAllotmentMarketFare': false,
										'originalClassOfService': 'H',
										'ruleNumber': '0001',
										'productClass': null,
										'ruleTariff': null,
										'travelClassCode': 'Y',
										'crossReferenceClassOfService': null,
										'passengerFares': []
									}
								],
								'segmentKey': 'Tkt_IDE5N34gfn5MR0F_MDMvMjQvMjAxOCAxMjozMH5GTEx_MDMvMjQvMjAxOCAxNTo0Mn4-',
								'identifier': {
									'identifier': '197',
									'carrierCode': 'NK',
									'opSuffix': null
								},
								'passengerSegment': {
									'MCFBRFQ-': {
										'passengerKey': 'MCFBRFQ-',
										'activityDate': null,
										'baggageAllowanceUsed': false,
										'baggageAllowanceWeight': 0,
										'baggageAllowanceWeightType': 1,
										'boardingSequence': null,
										'createdDate': null,
										'liftStatus': 0,
										'modifiedDate': null,
										'overBookIndicator': 0,
										'priorityDate': null,
										'timeChanged': false,
										'verifiedTravelDocs': null,
										'sourcePointOfSale': null,
										'pointOfSale': null,
										'seats': [],
										'ssrs': [],
										'tickets': [],
										'bags': [],
										'scores': [],
										'boardingPassDetail': null,
										'hasInfant': false,
										'seatPreferences': {
											'seat': 0,
											'travelClass': 0,
											'advancedPreferences': []
										}
									}
								},
								'channelType': 4,
								'cabinOfService': 'Y',
								'externalIdentifier': null,
								'priorityCode': null,
								'changeReasonCode': 0,
								'segmentType': 0,
								'salesDate': null,
								'international': false,
								'flightReference': '20180324 NK 197 LGAFLL',
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
										'ssrs': [
											{
												'available': 250,
												'ssrNestCode': 'BAG1',
												'lid': 250,
												'sold': 0,
												'unitSold': 0
											},
											{
												'available': 250,
												'ssrNestCode': 'BAGS',
												'lid': 250,
												'sold': 0,
												'unitSold': 0
											},
											{
												'available': 0,
												'ssrNestCode': 'JSCA',
												'lid': 0,
												'sold': 0,
												'unitSold': 0
											},
											{
												'available': 1,
												'ssrNestCode': 'JSCP',
												'lid': 1,
												'sold': 0,
												'unitSold': 0
											},
											{
												'available': 4,
												'ssrNestCode': 'PETC',
												'lid': 4,
												'sold': 0,
												'unitSold': 0
											},
											{
												'available': 100,
												'ssrNestCode': 'SCPS',
												'lid': 100,
												'sold': 0,
												'unitSold': 0
											},
											{
												'available': 182,
												'ssrNestCode': 'UMNR',
												'lid': 182,
												'sold': 0,
												'unitSold': 0
											},
											{
												'available': 1,
												'ssrNestCode': 'WCOB',
												'lid': 1,
												'sold': 0,
												'unitSold': 0
											}
										],
										'seatmapReference': 'TkshIDE5NyEgITYzNjU3NDkxNDAwMDAwMDAwMCFMR0EhRkxM',
										'flightReference': '20180324 NK 197 LGAFLL'
									}
								]
							}
						],
						'journeyKey': 'Tkt_IDMxNn4gfn5EVFd_MDMvMjQvMjAxOCAwNjowMH5MR0F_MDMvMjQvMjAxOCAwNzo0Mn5eTkt_IDE5N34gfn5MR0F_MDMvMjQvMjAxOCAxMjozMH5GTEx_MDMvMjQvMjAxOCAxNTo0Mn4-',
						'notForGeneralUser': false
					}
				],
				'comments': [],
				'queues': [],
				'history': [],
				'payments': [],
				'addOns': {}
			}
		});
	}
}
