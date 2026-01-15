const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const database = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const output = ['This is the list of our students'];

  try {
    const originalLog = console.log;
    const logs = [];
    console.log = (msg) => logs.push(msg);

    await countStudents(database);

    console.log = originalLog;
    output.push(...logs);
    res.send(output.join('\n'));
  } catch (error) {
    output.push(error.message);
    res.send(output.join('\n'));
  }
});

app.listen(1245);
module.exports = app;
