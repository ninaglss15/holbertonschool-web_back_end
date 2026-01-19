import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = {};

    for (let i = 1; i < lines.length; i += 1) {
      const [firstname, , , field] = lines[i].split(',');
      
      if (firstname && field) {
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      }
    }

    resolve(students);
  });
});

export default readDatabase;