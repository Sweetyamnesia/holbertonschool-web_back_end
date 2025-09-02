const express = require('express');

const app = express();

const countStudents = require('./3-read_file_async');

const database = process.argv[2];

app.get('/', (req, res) => {
	res.type('text/plain');
    res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
	res.type('text/plain');
    res.write('This is the list of our students');

  try {
    const studentsList = await countStudents(database);
    res.end(studentsList);
  } catch {
    res.end('Cannot load the database');
  }
});

module.exports = app;
