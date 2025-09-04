const express = require('express');
const { readFile } = require('fs/promises');

const app = express();
const database = process.argv[2];

async function countStudents(databasePath) {
  try {
    const data = await readFile(databasePath, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      return 'Number of students: 0';
    }

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
    Object.keys(fields).sort().forEach((field) => {
      output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
    });

    return output.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.type('text/plain');
  let output = 'This is the list of our students\n';

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
