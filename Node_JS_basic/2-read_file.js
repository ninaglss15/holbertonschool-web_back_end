const fs = require('fs');

module.exports = function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const lines = data
    .split('\n')
    .filter((line) => line.trim() !== '');
  const students = lines.slice(1);
  console.log(`Number of students: ${students.length}`);

  const fields = {};
  for (const student of students) {
    const parts = student.split(',');
    const firstname = parts[0];
    const field = parts[parts.length - 1];
    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(firstname);
  }
  for (const field of Object.keys(fields)) {
    console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
  }
};
