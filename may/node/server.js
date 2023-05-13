const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// .env file handle
require('dotenv').config();
const port = process.env.PORT || 3001;

// Root directory
const root = require('./utils/parentDirectory');

// Template Engine
app.set('view engine', 'ejs ');
app.set('views', path.join(root, 'views'));

// Server file statically
app.use(express.static(path.join(root, 'public')));

// BodyParser
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Middleware
app.use((err, req, res, next) => {
  next();
  console.log('hitting first middleware');
  throw new Error(err.stack);
});

// User-Route
app.use('/user', require('./router/user-routes/userRoutes'));

// Home-page
app.get('/', (req, res) => {
  res.render('home/index.ejs', {
    title: 'Home Page',
    heading: 'Hello From EJS 🙋‍♂️',
  });
});

// Page-Not-Found!
app.use((req, res, next) => {
  res.render('404.ejs', {
    title: 'Error Page',
    heading: 'Page Not Found! 🙀',
  });
});

app.listen(port, () => {
  console.log('Server Started');
});
