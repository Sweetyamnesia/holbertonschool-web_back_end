class AppController {
	static getHomepage(req, res) {
		return response.status(200).send('Hello Holberton School!');
	}
}