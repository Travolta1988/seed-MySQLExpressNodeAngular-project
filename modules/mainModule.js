var session                 = require('express-session');
var RedisStore              = require('connect-redis')(session);
var sessionStore            = new RedisStore();
var cookieParser            = require('cookie-parser');
var myCookieParser          = cookieParser('ababagalamaga');

var mainModule = function(server) {
    var mysql               = require('mysql');
    var dbconfig            = require('../config/database');
    var cookie              = require('cookie');
    var secret              = 'session-secret-key';
    var io                  = require('socket.io').listen(server);
    var connection          = mysql.createConnection(dbconfig.connection);

    connection.query('USE ' + dbconfig.database);
    var SessionSockets = require('session.socket.io');
    var sessionSockets = new SessionSockets(io, sessionStore, myCookieParser);
    sessionSockets.on('connection', function (err, socket, session) {
        /************GET CURRENT USER***************/
        var currentUserId = session.passport.user;
        var q = 'SELECT * from users WHERE `id` = "'+ currentUserId +'"';


        //Getting All Current User Information from Database and sending on Client side
        socket.on('call', function(){
            connection.query(q, function(err, rows) {
                socket.emit('userInfo', rows)
            });
            setInterval(function(){
                connection.query(q, function(err, rows) {
                    socket.emit('userInfo', rows)
                });
            }, 5000);

        });



        //Getting All Questions from Database and sending on Client side
        var renderQuestionsList = function(currentGroup){
            var questionsRequest = 'SELECT user_id, status_class, status_name, group_name, user_avatar, username, user_status, date_asked, question_id, question_text, question_group ' +
                'FROM questions ' +
                'JOIN users, groups, user_status ' +
                'WHERE users.id = questions.user_id ' +
                'AND group_id = "' + currentGroup + '" ' +
                'AND user_status.status_id = users.user_status ' +
                'AND question_group = "' + currentGroup + '" ' +
                'ORDER BY question_id DESC';
            connection.query(questionsRequest, function(err, rows) {
                socket.emit('renderQuestions', rows);
            });
            //setInterval(function(){
            //    connection.query(questionsRequest, function(err, rows) {
            //        socket.emit('renderQuestions', rows)
            //    });
            //}, 5000);
        };
        socket.on('questionsList', renderQuestionsList);

        //Getting All Answers from Database and sending on Client side
        socket.on('answersList', function(questionId){
            var currentQuestionRequest = 'SELECT user_id, status_class, status_name, user_avatar, username, user_status, date_asked, question_id, question_text, question_group ' +
                'FROM questions ' +
                'JOIN users, user_status ' +
                'WHERE users.id = questions.user_id ' +
                'AND question_id = "' + questionId + '"' +
                'AND user_status.status_id = users.user_status ';
            var answersRequest = 'SELECT *' +
                'FROM answers ' +
                'JOIN users, user_status ' +
                'WHERE answer_for_question_id = "' + questionId + '" '+
                'AND users.id = user_who_answered_id ' +
                'AND user_status.status_id = users.user_status ';

            connection.query(currentQuestionRequest, function(err, rows) {
                socket.emit('renderCurrentQuestion', rows);
            });
            connection.query(answersRequest, function(err, rows) {
                socket.emit('renderListOfAnswers', rows)
            });
            //setInterval(function(){
            //    connection.query(currentQuestionRequest, function(err, rows) {
            //        socket.emit('renderCurrentQuestion', rows);
            //    });
            //    connection.query(answersRequest, function(err, rows) {
            //        socket.emit('renderListOfAnswers', rows)
            //    });
            //}, 5000);
        });

        socket.on('question', function (userQuestion) {
            var dateAsked = new Date().toISOString().slice(0, 19).replace('T', ' ');
            connection.query("INSERT INTO `questions`(`user_id`, `date_asked`, `question_text`, `question_group`) VALUES ('" + currentUserId + "','" + dateAsked + "','" + userQuestion[0] + "', '" + userQuestion[1] + "')", function(err, rows, fields) {
                return fields
            });
            connection.query('SELECT user_id, status_class, status_name, group_name, user_avatar, username, user_status, date_asked, question_id, question_text, question_group ' +
                'FROM questions ' +
                'JOIN users, groups, user_status ' +
                'WHERE users.id = questions.user_id ' +
                'AND group_id = "' + userQuestion[1] + '" ' +
                'AND user_status.status_id = users.user_status ' +
                'AND question_group = "' + userQuestion[1] + '" ' +
                'ORDER BY question_id DESC',
                function(err, rows) {
                    io.emit('renderQuestions', rows)
                });
        });

        socket.on('answer', function (answer, callback) {
            var dateAnswered = new Date().toISOString().slice(0, 19).replace('T', ' ');
            var answerInsert = "INSERT INTO `answers`(`answer_for_question_id`, `user_who_answered_id`, `answer_text`, `date_answered`) VALUES ('" + answer[1] + "','" + currentUserId + "','" + answer[0] + "', '" + dateAnswered + "')";
            connection.query(answerInsert, function(err, rows) {
                return rows
            });
            var answersRequest = 'SELECT *' +
                'FROM answers ' +
                'JOIN users, user_status ' +
                'WHERE answer_for_question_id = "' + answer[1] + '" '+
                'AND users.id = user_who_answered_id ' +
                'AND user_status.status_id = users.user_status ';
            connection.query(answersRequest, function(err, rows) {
                io.emit('renderListOfAnswers', rows)
            });
            connection.query(answersRequest, function(err, rows) {
                io.emit('renderListOfAnswers', rows)
            });
        });



    });
};
module.exports = mainModule;