const https = require('https');
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/dublin.json?access_token=pk.eyJ1IjoiY2FvbGFubm45MyIsImEiOiJja3M3djN5Y3QwYW03MnVrMWJrOTY3OTYyIn0.uysmpQDW8BvZ3Smb6xV_Gw&limit=1`;

const request = https.request(url, (res) => {
	let data = '';

	res.on('data', (chunk) => {
		data = data + chunk.toString();
	});

	res.on('end', () => {});
});

request.end();
