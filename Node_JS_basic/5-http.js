const http = require('http');
const fs = require('fs');

const database = process.argv[2];

function countStudents(path) {
  return fs.promises.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        console.log('Number of students: 0');
        return;
      }

      const students = [];
      const fields = {};

      for (let i = 1; i < lines.length; i += 1) {
        const line = lines[i].trim();
        if (line !== '') {
          const parts = line.split(',');
          if (parts.length >= 4) {
            const firstname = parts[0].trim();
            const field = parts[3].trim();
            students.push({ firstname, field });

            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(firstname);
          }
        }
      }

      console.log(`Number of students: ${students.length}`);
      Object.keys(fields).forEach((field) => {
        console.log(
          `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`,
        );
      });
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    let output = 'This is the list of our students\n';

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
