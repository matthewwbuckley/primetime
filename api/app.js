const express = require('express');
const bodyParser = require('body-parser');
const prime = require('./src/routes/prime');
const lastPage = require('./src/routes/lastPage');
const errorHandler = require('./src/helper/errorHandler');

// CORS SETUP WILL GO HERE IF NEEDED
const allowCrossDomain = function allowCrossDomainBackendSettings(
  req,
  res,
  next
) {
  // res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  );

  // intercept OPTIONS method
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
};

// SET UP EXPRESS
const app = express();
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use('/prime/last-page', lastPage);
app.use('/prime', prime);
app.use((req, res, next) => {
  const err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});
app.use(errorHandler);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`The API is listening on port: ${port}`);
});
