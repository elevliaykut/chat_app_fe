import moment from 'moment-timezone';
const currentTimezone = moment.tz.guess();

export const transformTimestampToDate = (
	date,
	timezone = currentTimezone,
	dateFormat = 'LL',
	timeFormat = 'HH:mm'
) => {
	if (!date) return { date: null, time: null };
	const momentDate = moment(date).tz(timezone);
	if (!momentDate) return { date: null, time: null };
	return {
		date: momentDate.format(dateFormat),
		time: momentDate.format(timeFormat),
	};
};

export const stringToFormattedDate = str => {
	if (!str) return null;
	const date = new Date(str);

	// Extract the yyyy, mm, and dd parts
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
	const day = String(date.getDate()).padStart(2, '0');

	// Combine into yyyy-mm/-d format
	const formattedDate = `${year}-${month}-${day}`;

	return formattedDate;
};
