const express = require('express');

const db = require('./../db/index');

const app = express();

app.use('/', express.static('public'));

app.get('/biz/:restaurant', (req, res) => {
  console.log(req.params);
  db.getPictures(req.params.restaurant, res);
});

app.listen(3005, () => console.log('Server listening on port 3005'));

module.exports = app;
