function countStudents(path) {
	const fs = require('fs');
	const contenu = fs.readFileSync(path, 'utf8');
	if (!fs.existsSync(path)) {
		throw Error('Cannot load the database');
	}
	else {
		console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
	}
}

module.exports = countStudents;