import { Action } from '@ngrx/store';

import { Passenger } from '../../models/passenger';
import { Contact } from '../../models/contact';

export const SET_DATA = '[booking] SET_DATA';
export const GET_DATA = '[booking] GET_DATA';
export const SAVE_PASSENGER = '[booking] SAVE_PASSENGER';
export const SAVE_PRIMARY_CONTACT = '[booking] SAVE_PRIMARY_CONTACT';
export const SAVE_PAYMENT = '[booking] SAVE_PAYMENT';
export const COMMIT = '[booking] COMMIT';

export class SetData implements Action {
  readonly type = SET_DATA;

  constructor(public payload: object) { }
}

export class GetData implements Action {
  readonly type = GET_DATA;

  constructor(public payload: {
    showErrors: boolean
  } = {
      showErrors: true
    }) { }
}

export class SavePassenger implements Action {
  readonly type = SAVE_PASSENGER;

  constructor(public payload: Passenger) { }
}

export class SavePrimaryContact implements Action {
  readonly type = SAVE_PRIMARY_CONTACT;

  constructor(public payload: Contact) { }
}

export class SavePayment implements Action {
  readonly type = SAVE_PAYMENT;

  constructor(public payload: {
    accountNumber: string,
    accountHolderName: string
  }) { }
}

export class Commit implements Action {
  readonly type = COMMIT;
}

export type All =
  SetData |
  GetData |
  SavePassenger |
  SavePrimaryContact |
  SavePayment |
  Commit;
