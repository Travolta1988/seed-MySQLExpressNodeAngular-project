var express         = require('express');
var path            = require('path');
var passport        = require('passport');
var logger          = require('morgan');

var mainpage        = require('./routes/mainpage');
var page1           = require('./routes/page1');
var page2           = require('./routes/page2');
var page3           = require('./routes/page3');
var page4           = require('./routes/page4');
var page5           = require('./routes/page5');
var loginsignup     = require('./routes/login-signup');

var app = express();

require('./config/auth')(app, passport); // pass passport for configuration
// routes ======================================================================

// view engine setup
app.set('views', path.join(__dirname, 'public/views/pages'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req,res,next){
    res.locals.session = req.session;
    next();
});
app.use('/', mainpage);
app.use('/page1', page1);
app.use('/page2', page2);
app.use('/page3', page3);
app.use('/page4', page4);
app.use('/page5', page5);
app.use('/login-signup', loginsignup);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


/**********************RUN SERVER*********************/
var debug = require('debug')();
var http = require('http');

var port = normalizePort(process.env.PORT || '3300');
app.set('port', port);
/*** Create HTTP server.*/

var server = http.createServer(app);

/*** Listen on provided port, on all network interfaces.*/

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);



/*** Backend scripts for Project *****/
require('./modules/mainModule')(server);



/*** Normalize a port into a number, string, or false.*/
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/*** Event listener for HTTP server "error" event.*/
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/** Event listener for HTTP server "listening" event.*/
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
module.exports = app;
