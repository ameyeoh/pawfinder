const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controllers = require('../db/controllers.js');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/dogs', controllers.getDogs);
app.post('/api/dogs', controllers.addDog);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
