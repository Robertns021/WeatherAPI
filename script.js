const url = 'https://open-weather13.p.rapidapi.com/city/belgrade/EN';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'dce80dc61amshdf3c4e73f0633eep1b579ajsn9caa69d6bb9d',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

(async() => {
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);

} catch (error) {
	console.error(error);
}
})();