const fs = require('fs');

function countStudents(path) {
	if (!fs.existsSync(path)) {
		throw new Error('Cannot load the database');
	}
	const contenu = fs.readFileSync(path, 'utf8');
	console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
}

module.exports = countStudents;
