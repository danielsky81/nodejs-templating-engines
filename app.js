const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

const users = [];

// app.engine('hbs', expressHbs.engine({defaultLayout: 'main', extname: 'hbs'}));
app.engine('hbs', expressHbs.engine({ layoutsDir: __dirname + '/views/layout', extname: 'hbs'}));

// app.set('view engine', 'pug');
// app.set('view engine', 'hbs');
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res, next) => {
  res.render('index', {pageTitle: 'Add User'});
})

app.get('/users', (req, res, next) => {
  res.render('users', {pageTitle: 'Users', users: users, hasUsers: users.lentgh > 0});
})

app.post('/add-user', (req, res, next) => {
  users.push({name: req.body.username});
  res.redirect('/users');
})

app.listen(3003);