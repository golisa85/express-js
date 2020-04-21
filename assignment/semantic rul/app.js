const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({extended: false}));

app.get('/hello/:id', (req, res, next) => {
  res.send('Hello ' + req.params.id);
});

app.listen(3000);
