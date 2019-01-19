export function formatReadingTime(minutes) {
	return `${minutes} min read`;
}

export function greeting() {
	const now = new Date();
	const hours = now.getHours();

	let timeOfDay = 'morning';

	if (hours <= 6) {
		timeOfDay = 'night';
	} else if (hours >= 13 && hours < 19) {
		timeOfDay = 'afternoon';
	} else if (hours >= 19) {
		timeOfDay = 'evening';
	}

	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const dayName = days[now.getDay()];

	const greetings = [
		`Hope you're having a nice ${dayName} ${timeOfDay}.`,
		`How's this ${dayName} ${timeOfDay} treating you?`,
		`How's your ${dayName} ${timeOfDay} going?`,
	];

	return greetings[Math.floor(Math.random() * greetings.length)];
}
