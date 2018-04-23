export function setGenderFromTitle(title: string) {
	if (title === 'Mr') {
		return 'Male';
	} else if (title === 'Mrs' || title === 'Ms') {
		return 'Female';
	}
}

