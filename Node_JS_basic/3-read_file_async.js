function countStudents(path) {
	const fs = require('fs').promises;
	fs.readFile(path, 'utf8')
	.then(data => {
		console.log(`Number of students in FIELD: 6. List: ${LIST_OF_FIRSTNAMES}`, data);
	})
	.catch(err => console.error('Cannot load the database'));

	console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
}

module.exports = countStudents;