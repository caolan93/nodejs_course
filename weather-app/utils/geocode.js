const request = require('request');

const geocode = (address, callback) => {
	const geoLocation = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
		address
	)}.json?access_token=pk.eyJ1IjoiY2FvbGFubm45MyIsImEiOiJja3M3djN5Y3QwYW03MnVrMWJrOTY3OTYyIn0.uysmpQDW8BvZ3Smb6xV_Gw&limit=1`;

	request({ url: geoLocation, json: true }, (error, response) => {
		if (error) {
			callback('Unable to connect to the weather service', undefined);
		} else if (response.body.features.length === 0) {
			callback('Unable to find location. Try another search.', undefined);
		} else {
			callback(undefined, {
				latitude: response.body.features[0].center[1],
				longitude: response.body.features[0].center[0],
				location: response.body.features[0].place_name
			});
		}
	});
};

const forecast = (lat, long, location, callback) => {
	const weatherstackURL = `http://api.weatherstack.com/current?access_key=4928b50a484363af0a83d22a7f9b05e4&query=${lat},${long}`;

	request({ url: weatherstackURL, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to your location service!', undefined);
		} else if (body === undefined) {
			callback(undefined, 'Unable to find your search locations weather!');
		} else {
			callback(undefined, {
				temperature: body.current.temperature,
				description: body.current.weather_descriptions,
				wind: body.current.wind_speed
			});
		}
	});
};

module.exports = { geocode, forecast };
