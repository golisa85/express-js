const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const peoples = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/people', (req, res, next) => {
  res.render('index', { pageTitle: 'New peoples' });
});

app.get('/list', (req, res, next) => {
  res.render('list', {
    pageTitle: 'PeopleList',
    peoples: peoples,
    hasPeoples: peoples.length > 0
  });
});

app.post('/add-people', (req, res, next) => {
  peoples.push({name: req.body.peoplesname });
  res.redirect('/list');
});

app.listen(3000);
