const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        let output = 'This is the list of our students';
        const keys = Object.keys(data).sort((a, b) => (
          a.toLowerCase().localeCompare(b.toLowerCase())
        ));
        keys.forEach((key) => {
          const students = data[key];
          output += `\nNumber of students in ${key}: ${students.length}. List: ${students.join(', ')}`;
        });
        response.status(200).send(output);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2])
      .then((data) => {
        const students = data[major];
        const list = students.join(', ');
        response.status(200).send(`List: ${list}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;