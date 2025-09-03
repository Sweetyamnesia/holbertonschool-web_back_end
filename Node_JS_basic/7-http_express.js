const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const database = process.argv[2];

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.type('text/plain');

  try {
    const studentsList = await countStudents(database);
    res.send(`This is the list of our students\n${studentsList}`);
  } catch {
    res.send('Cannot load the database');
  }
});

app.listen(1245);

module.exports = app;
