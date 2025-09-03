const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

function countStudents(databasePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(databasePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter(line => line.trim() !== '');
      const headers = lines[0].split(',');
      const students = lines.slice(1).map(line => {
        const values = line.split(',');
        const student = {};
        headers.forEach((header, index) => {
          student[header.trim()] = values[index].trim();
        });
        return student;
      });

      const fields = {};
      students.forEach(student => {
        const field = student.field;
        if (!fields[field]) fields[field] = [];
        fields[field].push(student.firstname);
      });

      let output = `Number of students: ${students.length}\n`;
      for (const field in fields) {
        output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
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
  const database = process.argv[2]; // Le fichier CSV passé en argument
  res.type('text/plain');
  let responseText = 'This is the list of our students\n';
  if (!database) {
    responseText += 'Database not provided';
    res.send(responseText);
    return;
  }

  try {
    const studentsData = await countStudents(database);
    responseText += studentsData;
    res.send(responseText);
  } catch (err) {
    res.send(`Cannot load the database`);
  }
});

app.listen(1245);

module.exports = app;
