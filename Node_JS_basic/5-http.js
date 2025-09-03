const http = require('http');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    let output = `This is the list of our students\n${studentsList}`;

    const originalLog = console.log;
    console.log = (msg) => { output += `${msg}\n`; };

    countStudents(database)
      .then(() => {
        console.log = originalLog;
        res.end(output.trim());
      })
      .catch(() => {
        console.log = originalLog;
        res.end('Cannot load the database');
      });

    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

app.listen(1245);

module.exports = app;
