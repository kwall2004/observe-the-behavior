export function parseDesignator(designator: string): { row: number, column: string } {
	const colMap = {
		'A': 0,
		'B': 1,
		'C': 2,
		'D': 4,
		'E': 5,
		'F': 6,
	};
	const parts = designator.match(/([0-9]+)([A-Za-z]+)/);
	// row number will not match UI, as it's 0 based
	return {
		row: (+parts[1] - 1),
		column: colMap[parts[2]]
	};
}

export function isAssigned(unit): boolean {
	return (unit.selectedByPassengerKey || unit.availability === 11);
}

export function isUnavailable(unit): boolean {
	return unit.group === 0 || unit.availability === 1 || unit.availability === 7;
}

export function reformatSeatMap(seatMap) {
	const seats = [];
	const results = [];
	seatMap.forEach(unit => {
		if (!unit.assignable) {
			if (unit.text && !isNaN(unit.text)) {
				results.push({
					seats: [null, null, null, { row: unit.text, text: unit.text }, null, null, null],
					hasBigFrontSeat: false,
					isExitRow: false
				});
			}
		} else {
			seats.push(unit);
		}
	});
	seats.forEach(unit => {
		const designator = parseDesignator(unit.designator);
		if (unit.group === 1) {
			results[designator.row].hasBigFrontSeat = true;
		}
		if (unit.properties && unit.properties.find(p => p.code === 'EXITROW')) {
			results[designator.row].isExitRow = true;
		}
		results[designator.row].seats[designator.column] = unit;
	});
	return results;
}
