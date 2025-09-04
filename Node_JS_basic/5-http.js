const http = require('http');
const fs = require('fs');

const database = process.argv[2] || '';

function countStudents(path) {
  return fs.promises.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').map((l) => l.trim()).filter((l) => l !== '');
      if (lines.length <= 1) {
        return 'Number of students: 0';
      }

      const fields = {};

      for (let i = 1; i < lines.length; i += 1) {
        const parts = lines[i].split(',');
        if (parts.length >= 4) {
          const firstname = parts[0].trim();
          const field = parts[3].trim();
          if (!fields[field]) fields[field] = [];
          fields[field].push(firstname);
        }
      }

      const total = Object.values(fields).reduce((acc, arr) => acc + arr.length, 0);

      let output = `Number of students: ${total}`;
      const sortedFields = Object.keys(fields).sort();
      sortedFields.forEach((field) => {
        output += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
      });

      return output;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    countStudents(database)
      .then((result) => {
        res.end(`This is the list of our students\n${result}`);
      })
      .catch(() => {
        res.end('This is the list of our students\nCannot load the database');
      });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

app.listen(1245);

module.exports = app;
