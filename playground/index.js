const fs = require('fs');
// const book = {
// 	title: 'Ego',
// 	author: 'Ryan Holiday'
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data);

const jsonSampleBuffer = fs.readFileSync('1-json.json');
const jsonSampleString = jsonSampleBuffer.toString();
const jsonSample = JSON.parse(jsonSampleString);

jsonSample.name = 'Caolan';
jsonSample.age = 24;

const userJSON = JSON.stringify(jsonSample);

fs.writeFileSync('1-json.json', userJSON);
