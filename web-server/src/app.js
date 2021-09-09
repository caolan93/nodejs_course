const path = require('path');
const express = require('express');

const app = express();

const publicDirectory = path.join(__dirname, '../public/index.html');

console.log(publicDirectory);

app.use(express.static(publicDirectory));

app.get('/', (req, res) => {});

app.get('', (req, res) => {
	res.send('<h1>Weather</>');
});

app.get('/help', (req, res) => {
	res.send([
		{
			name: 'Andrew',
			age: 27
		},
		{
			name: 'Andrew',
			age: 27
		}
	]);
});

app.get('/about', (req, res) => {
	res.send('This is the about page!');
});

app.get('/weather', (req, res) => {
	res.send({
		country: 'Ireland',
		region: 'Dublin',
		location: {
			latitude: 53.333,
			longitude: -6 / 269
		},
		temperature: 18 + ' Deg',
		timezone: 'GMT + 0:00hr'
	});
});

app.listen(5000, () => {
	console.log('Server running!');
});
