const http = require('http');
const fs = require('fs');

const dbFile = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    fs.readFile(dbFile, 'utf-8', (err, data) => {
      if (err) {
        res.end('Cannot load the database');
        return;
      }

      const lines = data.trim().split('\n');
      const students = lines.slice(1);

      let outputBuffer = `Number of students: ${students.length}\n`;

      const fields = {};
      for (const line of students) {
        if (!line);
        const student = line.split(',');
        const field = student[3];
        const firstName = student[0];

        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      }

      for (const [field, names] of Object.entries(fields)) {
        outputBuffer += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      res.end(outputBuffer);
    });
  }
});

app.listen(1245);

module.exports = app;
