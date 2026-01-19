import readDatabase from '../utils.js';

class StudentsController {
  static getAllStudents(req, res) {
    const databasePath = process.argv[2];

    readDatabase(databasePath)
      .then((students) => {
        let response = 'This is the list of our students\n';
        
        const fields = Object.keys(students).sort((a, b) => 
          a.toLowerCase().localeCompare(b.toLowerCase())
        );

        fields.forEach((field, index) => {
          const list = students[field].join(', ');
          response += `Number of students in ${field}: ${students[field].length}. List: ${list}`;
          if (index < fields.length - 1) {
            response += '\n';
          }
        });

        res.status(200).send(response);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const databasePath = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databasePath)
      .then((students) => {
        const list = students[major] ? students[major].join(', ') : '';
        res.status(200).send(`List: ${list}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;