const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(err);
      return;
    }
    const result = {};
    const lines = data.toString().trim().split('\n');

    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i];

      if (line) {
        const fieldData = line.split(',');
        const firstname = fieldData[0];
        const field = fieldData[3];

        if (field) {
          if (!result[field]) {
            result[field] = [];
          }
          result[field].push(firstname);
        }
      }
    }
    resolve(result);
  });
});

module.exports = readDatabase;