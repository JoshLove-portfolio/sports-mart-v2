const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('hbs');

const homeRouter = require('./pos_app/routes/home');
const addItemRouter = require('./pos_app/routes/addItem');
const addSellerRouter = require('./pos_app/routes/addSeller');
const posHomeRouter = require('./pos_app/routes/posHome');
const dataEntryHomeRouter = require('./pos_app/routes/dataEntryHome');
const sellItemRouter = require('./pos_app/routes/sellItem');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'pos_app', 'views'));
app.set('view engine', 'hbs');

// register hbs partials
hbs.registerPartials(path.join(__dirname, 'pos_app', 'views/partials'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//FIXME - should probably protect these paths in the future
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.use('/', homeRouter);
app.use('/addItem', addItemRouter);
app.use('/addSeller', addSellerRouter);
app.use('/dataEntryHome', dataEntryHomeRouter);
app.use('/posHome', posHomeRouter);
app.use('/sellItem', sellItemRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
