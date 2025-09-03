import { readDatabase } from './utils.js'

class StudentsController {
	static getAllStudents(req, res) {
		const data = readDatabase();
		return response.status(200).send(data);
	}

	static getAllStudentsByMajor(req, res) {
		return response.status(200);
	}
}