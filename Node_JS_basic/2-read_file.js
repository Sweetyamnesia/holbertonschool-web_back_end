const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n').filter(line => line.trim() !== '');
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const students = lines.slice(1).map(line => {
      const parts = line.split(',');
      return {
        firstname: parts[0].trim(),
        field: parts[parts.length - 1].trim()
      };
    });

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach(({ firstname, field }) => {
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    });

    for (const [field, list] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
    }
  } catch {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
