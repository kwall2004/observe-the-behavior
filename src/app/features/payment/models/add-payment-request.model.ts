
export interface AddPaymentRequestModel {
	accountNumber: string;
	accountHolderName: string;
	expiryDate: string;
	verificationCode: string;
	amount: number;
	currencyCode: string;
	saveCard: boolean;
	address: string;
}
