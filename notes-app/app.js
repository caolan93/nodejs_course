const validator = require('validator');
const yargs = require('yargs');
const { getNotes, addNote, removeNote } = require('./notes.js');

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
		addNote(argv.title, argv.body);
	}
});

// remove notes
yargs.command({
	command: 'remove',
	describe: 'Remove a new note.',
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
		removeNote(argv.title, argv.body);
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
