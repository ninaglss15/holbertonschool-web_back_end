const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);
    
    if (students.length === 0) {
      throw new Error('Cannot load the database');
    }
    
    console.log(`Number of students: ${students.length}`);
    
    const fields = {};
    
    students.forEach((student) => {
      const details = student.split(',');
      const fieldName = details[3];
      
      if (!fields[fieldName]) {
        fields[fieldName] = [];
      }
      fields[fieldName].push(details[0]);
    });
    
    for (const [key, value] of Object.entries(fields)) {
      console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;