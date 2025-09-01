const express = require('express');
const app = express();

const countStudents = require('./3-read_file_async');
const database = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
	res.write(`This is the list of our students\n`);
});

countStudents(database)
    .then(output => {
      res.end(output);
    })
    .catch(() => {
      res.end('Cannot load the database\n');
    });

app.listen(1245, () => {
  console.log('Serveur Express démarré sur http://localhost:1245');
});

module.exports = app;
