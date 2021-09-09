const request = require('request');

const weatherstackURL = `http://api.weatherstack.com/current?access_key=4928b50a484363af0a83d22a7f9b05e4&query=dublin`;
const geoLocation = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2FvbGFubm45MyIsImEiOiJja3M3djN5Y3QwYW03MnVrMWJrOTY3OTYyIn0.uysmpQDW8BvZ3Smb6xV_Gw&limit=1`;

request({ url: weatherstackURL, json: true }, (error, response) => {
	if (error) {
		console.log('Unable to connect to weather service!');
	} else if (response.body.error) {
		console.log('Unable to find location');
	} else {
		const weatherData = response.body;
		const weather = {
			name: weatherData.location.name,
			country: weatherData.location.country,
			region: weatherData.location.region,
			time: weatherData.location.localtime,
			temp: weatherData.current.temperature + ' Deg'
		};
		console.log(weather);
	}
});

request({ url: geoLocation, json: true }, (error, response) => {
	if (error) {
		console.log('Unable to connect to weather service!');
	} else if (response.body.error) {
		console.log('Unable to find location');
	} else {
		const geoLocationData = response.body;
		const geoLongLat = geoLocationData.features[0].center;
		const longitude = geoLongLat[0];
		const latitude = geoLongLat[1];

		console.log(longitude, latitude);
	}
});
