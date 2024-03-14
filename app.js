/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { errors } = require('celebrate');
const router = require('./routes');
const { handleErrorCentralized } = require('./middlewares/handleErrorCentralized');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { PORT, MONGO_URL } = require('./utils/utils');

const app = express();

const allowedCors = [
  'https://matveeva.movie.nomoredomainswork.ru',
  'http://matveeva.movie.nomoredomainswork.ru',
  'http://localhost:3000',
  'http://localhost:3001',
  'https://localhost:3000',
  'https://localhost:3001',
];

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', allowedCors.join(', '));
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(cors(allowedCors));

mongoose.connect(MONGO_URL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

app.use(router);

app.use(errorLogger);

app.use(errors());

app.use(handleErrorCentralized);

app.listen(PORT, () => {
  console.log('Ссылка на сервер');
});
