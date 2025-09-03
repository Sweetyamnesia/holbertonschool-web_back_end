const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter(line => line.trim() !== '');
  if (lines.length <= 1) {
    console.log('Number of students: 0');
    return;
  }

  const students = [];
  const fields = {};

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line === '') continue;
    const parts = line.split(',');
    if (parts.length < 4) continue;
    const firstname = parts[0].trim();
    const field = parts[3].trim();
    students.push({ firstname, field });
    if (!fields[field]) fields[field] = [];
    fields[field].push(firstname);
  }

  console.log(`Number of students: ${students.length}`);
  for (const [field, list] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
  }
}

module.exports = countStudents;
