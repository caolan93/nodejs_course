const request = require('request');
const { geocode, forecast } = require('./utils/geocode.js');

// request({ url: weatherstackURL, json: true }, (error, response) => {
// 	if (error) {
// 		console.log('Unable to connect to weather service!');
// 	} else if (response.body.error) {
// 		console.log('Unable to find location');
// 	} else {
// 		const weatherData = response.body;
// 		const weather = {
// 			name: weatherData.location.name,
// 			country: weatherData.location.country,
// 			region: weatherData.location.region,
// 			time: weatherData.location.localtime,
// 			temp: weatherData.current.temperature + ' Deg'
// 		};
// 		console.log(weather);
// 	}
// });

// request({ url: geoLocation, json: true }, (error, response) => {
// 	if (error) {
// 		console.log('Unable to connect to weather service!');
// 	} else if (response.body.error) {
// 		console.log('Unable to find location');
// 	} else {
// 		const geoLocationData = response.body;
// 		const geoLongLat = geoLocationData.features[0].center;
// 		const longitude = geoLongLat[0];
// 		const latitude = geoLongLat[1];

// 		console.log(longitude, latitude);
// 	}
// });

geocode(process.argv[2], (error, { latitude, longitude, location } = {}) => {
	if (error) {
		return console.log(error);
	} else {
		forecast(latitude, longitude, location, (error, forecastData) => {
			if (error) {
				console.log(error);
			} else {
				console.log(location);
				console.log(forecastData);
			}
		});
	}
});
