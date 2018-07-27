const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3005, () => console.log('Server listening on port 3005'));

module.exports = app;
