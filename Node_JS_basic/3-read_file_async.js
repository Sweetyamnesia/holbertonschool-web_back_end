const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
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

module.exports = countStudents;
