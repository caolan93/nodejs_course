const validator = require('validator');
const yargs = require('yargs');
const getNotes = require('./notes.js');

const isEmail = validator.isEmail('Andrew@gmail.com');
const isURL = validator.isURL('www.xoio.ie');

// add notes
yargs.command({
	command: 'add',
	describe: 'Add a new note.',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Note body',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function(argv) {
		console.log('Adding a note', argv);
	}
});

// remove notes
yargs.command({
	command: 'remove',
	describe: 'Remove a new note.',

	handler: function() {
		console.log('Removing a note');
	}
});

// read
yargs.command({
	command: 'read',
	describe: 'Reading a new note.',
	handler: function() {
		console.log('Removing a note');
	}
});

// // list
yargs.command({
	command: 'list',
	describe: 'Listing notes.',
	handler: function() {
		console.log('Listing Notes');
	}
});

yargs.parse();
