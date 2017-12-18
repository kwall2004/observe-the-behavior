import { ActionReducerMap } from '@ngrx/store';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

import * as fromRouter from '@ngrx/router-store';
import * as fromApp from './app/reducer';
import * as fromAvailability from './availability/reducer';
import * as fromBooking from './booking/reducer';
import * as fromDynamicContent from './dynamic-content/reducer';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    return {
      url,
      queryParams
    };
  }
}

export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  app: fromApp.State;
  availability: fromAvailability.State;
  booking: fromBooking.State;
  dynamicContent: fromDynamicContent.State;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  app: fromApp.reducer,
  availability: fromAvailability.reducer,
  booking: fromBooking.reducer,
  dynamicContent: fromDynamicContent.reducer
};
