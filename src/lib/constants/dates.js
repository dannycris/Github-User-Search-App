const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec'
];

export const formatDate = date => {
	var d = new Date(date),
		month = d.getMonth(),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (day.length < 2) day = '0' + day;

	return [day, months[month], year].join(' ');
};
