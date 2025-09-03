const express = require('express');
const fs = require('fs');

const app = express();
const database = process.argv[2];

function countStudents(databasePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(databasePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const headers = lines[0].split(',');
      const students = lines.slice(1).map((line) => {
        const values = line.split(',');
        const student = {};
        headers.forEach((header, index) => {
          student[header.trim()] = values[index].trim();
        });
        return student;
      });

      const fields = {};
      students.forEach((student) => {
        const { field } = student;
        if (field) {
          if (!fields[field]) fields[field] = [];
          fields[field].push(student.firstname);
        }
      });

      let output = `Number of students: ${students.length}\n`;
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }
      }

      resolve(output.trim());
    });
  });
}

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.type('text/plain');
  let output = 'This is the list of our students\n';

  if (!database) {
    res.send(`${output} + 'Database not provided`);
    return;
  }

  try {
    const studentsData = await countStudents(database);
    output += studentsData;
    res.send(output);
  } catch (err) {
    res.send('Cannot load the database');
  }
});

app.listen(1245);

module.exports = app;
