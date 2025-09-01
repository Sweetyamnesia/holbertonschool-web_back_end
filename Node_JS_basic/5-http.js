const http = require('http');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    countStudents(database)
      .then(output => {
        res.end(output);
      })
      .catch(() => {
        res.end('Cannot load the database\n');
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245');
});

module.exports = app;
