const express = require('express');

const db = require('./../db/index');

const app = express();

// app.use('/biz/', express.static('public'));
// app.get('/biz/', (req, res) => res.send('Hello World!'));
app.use('/', express.static('public'));

// Expose API
app.get('/biz/:restaurant', (req, res) => {
  console.log(req.params);
  db.getPictures(req.params.restaurant, res);
});

// app.get('/biz/:restaurant', (req, res) => {
//   console.log(req.params);
//   db.getPictures(req.params.restaurant, res);
// });

// app.use('/biz/:restaurant', (req, res) => {
//   console.log('test');
// });

app.listen(3005, () => console.log('Server listening on port 3005'));

module.exports = app;
