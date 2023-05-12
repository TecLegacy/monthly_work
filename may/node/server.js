const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Server file statically
app.use(express.static(path.join(__dirname, 'public')));

app.use((err, req, res, next) => {
  next();
  console.log('hitting first middleware');
  throw new Error(err.stack);
});

app.use('/user', require('./router/user-routes/userRoutes'));
app.get('/', (req, res) => {
  console.log('2nd hit');
  res.status(200).send('<h1>Hello</h1>');
});
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

//

app.listen(3001);
