const express = require('express');
const app = express();
const colors = require('colors');
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: false }));

// middleware
app.use((err, req, res, next) => {
  next();
  console.log('hitting first middleware');
  throw new Error(err.stack);
});

app.use('/user', require('./routes/user'));
app.use('/admin', (req, res) => {
  res.status(200).json({
    message: 'admins',
  });
});

app.get('/', (req, res) => {
  res.json({
    message: ' Hello user',
  });
});

app.use((req, res) => {
  res.json('Error page not found');
});

app.listen(port, () => {
  console.log(`Port Running on ${port}`.underline.bgCyan);
});
