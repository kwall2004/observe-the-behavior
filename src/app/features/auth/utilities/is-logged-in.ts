// Models
import { NskSessionContextModel, SessionType } from '../../../core/models';

/** Determines if a context is logged in or not */
export function isLoggedIn(context: NskSessionContextModel): boolean {
	return context && context.type === SessionType.Customer || context.type === SessionType.Agent;
}
