export class PassengerBagSelection {
	public unpaid = new SelectedBagCounts();
	public paid = new SelectedBagCounts();
	// total pricing
	public checkedTotal = 0;
	public carryOnTotal = 0;
	public bikeTotal = 0;
	public surfTotal = 0;
	public oversize6Total = 0;
	public oversize8Total = 0;
	public overweight4Total = 0;
	public overweight5Total = 0;
	public overweight7Total = 0;
	// total paid + unpaid
	public checkedTotalCount = 0;
	public carryOnTotalCount = 0;
	public bikeTotalCount = 0;
	public surfTotalCount = 0;
	public oversize6TotalCount = 0;
	public oversize8TotalCount = 0;
	public overweight4TotalCount = 0;
	public overweight5TotalCount = 0;
	public overweight7TotalCount = 0;

	public checkedBagAllowed = 5;

	public ssrCodes: any[] = [];
}

export class SelectedBagCounts {
	public checked = 0;
	public carryOn = 0;
	public bike = 0;
	public surf = 0;
	public oversize6 = 0;
	public oversize8 = 0;
	public overweight4 = 0;
	public overweight5 = 0;
	public overweight7 = 0;
}
