const http = require('http');

const app = http.createServer((req, res) => {
	if (req.url === '/') {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
  		res.end('Hello Holberton School!');
	}
	else if (req.url === '/students') {
		res.write('This is the list of our students\n');
	}
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245');
});

module.exports = app;