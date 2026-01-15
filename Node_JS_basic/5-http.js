const http = require('http');
const fs = require('fs');

const dbFile = process.argv[2];

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

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
      const students = lines.slice(1).filter((line) => line.trim() !== '');
      
      res.write(`Number of students: ${students.length}\n`);
      
      const fields = {};
      
      for (const line of students) {
        const student = line.split(',');
        const field = student[3];
        const firstName = student[0];
        
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
      
      for (const [field, names] of Object.entries(fields)) {
        res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
      }
      
      res.end();
    });
  }
});

app.listen(1245);

module.exports = app;
