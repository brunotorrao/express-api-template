import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import appController from './controller/app';
import indexRouter from './routes/index';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/', indexRouter);

app.use(appController.notFound);
app.use(appController.handleError);

export default app;
