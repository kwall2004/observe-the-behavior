import { PaymentMethodType } from './payment-method-type.enum';

export interface AddStoredPaymentRequestModel {
	accountNumber: string;
	paymentMethodType: PaymentMethodType;
	accountName?: string;
	expiration?: string;
	paymentMethodCode: string;
	default?: boolean;
}
