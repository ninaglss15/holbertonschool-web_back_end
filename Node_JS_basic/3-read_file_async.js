const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim().length > 0);

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    const students = lines.slice(1);
    console.log(`Number of students: ${students.length}`);

    const fields = {};
    for (const student of students) {
      const parts = student.split(',');
      const firstname = parts[0];
      const field = parts[3];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }
    for (const field of Object.keys(fields)) {
      const list = fields[field];
      console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
    }
    return Promise.resolve();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
