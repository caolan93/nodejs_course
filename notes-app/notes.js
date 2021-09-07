const fs = require('fs');

const getNotes = () => {
	return 'Your notes...';
};

const addNote = (title) => {
	const notes = loadNotes();

	const duplicateNotes = notes.filter((note) => {
		return note.title === title;
	});

	if (duplicateNotes.length === 0) {
		notes.push({
			title,
			body
		});
	}
	saveNotes(notes);
};

const removeNote = (title, body) => {
	const notes = loadNotes();

	const newNotes = notes.filter((note) => {
		return note.title !== title;
	});
	saveNotes(newNotes);
};

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (error) {
		return [];
	}
};

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {
	getNotes,
	addNote,
	removeNote
};
