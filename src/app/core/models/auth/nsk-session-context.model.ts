import { UserIdentityModel } from './user-identity.model';

export interface NskSessionContextModel {
	isPendingLogin: boolean;
	isVirtual: boolean;
	identity: UserIdentityModel;
	/** The user's server context. */
	// serverContext: ServerContext;
	/** The user's role in the current session. */
	// roles: SessionRoles;
	/** The user's default culture if one exits. */
	defaultCultureCode: string;
	defaultCurrencyCode: string;
	/** The user type. i.e. Unknown, customer, anonymous, agent */
	type: number;
	hasBookingInState: boolean;
}
