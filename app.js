import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './src/routes';
import errorHandler from './src/middleware/errorHandler';
import RedisService from './src/services/redis';

RedisService.init();

const { URL_CLIENT } = process.env;

dotenv.config();
require('./src/config/sequelize');

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(
  cors({
    origin: [URL_CLIENT],
    credentials: true,
  }),
);

app.use(bodyParser.json());
app.use('/api', routes);
app.use('/documentation', express.static(path.join(__dirname, 'documentation', 'apidoc')));
app.use(errorHandler);

module.exports = app;
