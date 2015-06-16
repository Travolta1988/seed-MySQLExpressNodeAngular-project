var session                 = require('express-session');
var RedisStore              = require('connect-redis')(session);
var sessionStore            = new RedisStore();
var cookieParser            = require('cookie-parser');
var myCookieParser          = cookieParser('ababagalamaga');

var mainModule = function(server) {
    var mysql               = require('mysql');
    var dbconfig            = require('../config/database');
    var secret              = 'session-secret-key';
    var io                  = require('socket.io').listen(server);
    var connection          = mysql.createConnection(dbconfig.connection);

    connection.query('USE ' + dbconfig.database);
    var SessionSockets = require('session.socket.io');
    var sessionSockets = new SessionSockets(io, sessionStore, myCookieParser);
    sessionSockets.on('connection', function (err, socket, session) {
        /************GET CURRENT USER***************/
        var currentUserId = session.passport.user;
        console.log('currentUserId: '+currentUserId);
        var q = 'SELECT id, username FROM users WHERE id = "' + currentUserId + '"';

        //Getting All Current User Information from Database and sending on Client side
        socket.on('call', function(){
            connection.query(q, function(err, rows) {
                socket.emit('userInfo', rows)
            });
        });
    });
};
module.exports = mainModule;