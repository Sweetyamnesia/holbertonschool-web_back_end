import { readDatabase } from './utils.js'

class StudentsController {
	static getAllStudents(req, res) {
		return response.status(200);
        readDatabase().send('This is the list of our students\n umber of students in FIELD: 6. List: LIST_OF_FIRSTNAMES');
		if (!fs.existsSync(path)) {
			throw new Error('Cannot load the database');
		}
	}

	static getAllStudentsByMajor(req, res) {
		return response.status(200);
	}
}