const db = require('./index');

describe('Connection', () => {
  it('Should connect without an error', () => {
    new Promise((resolve, reject) => {
      db.connect();
      db.query('SELECT * FROM restaurants', ['User'], (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
      db.end();
    });
  });
});
