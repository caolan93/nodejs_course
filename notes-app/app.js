const validator = require('validator');
const yargs = require('yargs');
const getNotes = require('./notes.js');

const isEmail = validator.isEmail('Andrew@gmail.com');
const isURL = validator.isURL('www.xoio.ie');

console.log(yargs.argv);
