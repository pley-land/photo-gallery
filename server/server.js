const express = require('express');

const db = require('./../db/index');

const app = express();


app.use(express.static('public'));

// app.use('/biz/', express.static('public'));
// app.get('/biz/', (req, res) => res.send('Hello World!'));

app.get('/biz/:restaurant', (req, res) => {
  db.getPictures(req.params.restaurant, res);
});

app.listen(3005, () => console.log('Server listening on port 3005'));

module.exports = app;
