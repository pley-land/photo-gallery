const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'pley',
});

connection.connect();

const getPictures = (restaurant, cb) => {
  connection.query(`SELECT url, helpful, not_helpful FROM pictures INNER JOIN restaurants ON pictures.restaurant_id = restaurants.id WHERE restaurants.name = '${restaurant}';`, (error, results) => {
    if (error) throw error;
    cb.send(results);
  });
};


module.exports = { connection, getPictures };
