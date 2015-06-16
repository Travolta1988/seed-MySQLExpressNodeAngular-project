var session                 = require('express-session');
var RedisStore              = require('connect-redis')(session);
var sessionStore            = new RedisStore();
var cookieParser            = require('cookie-parser');
var myCookieParser          = cookieParser('ababagalamaga');

var auth = function(app, passport, server) {
    var express             = require('express');
    var signature           = require('cookie-signature');
    var cookie              = require('cookie');
    var connect             = require('connect');
    var io                  = require('socket.io').listen(server);
    var bodyParser          = require('body-parser');
    var LocalStrategy       = require('passport-local').Strategy;
    var VkontakteStrategy   = require('passport-vkontakte').Strategy;
    var OKStrategy          = require('passport-odnoklassniki').Strategy;
    var FBStrategy          = require('passport-facebook').Strategy;
    var GPStrategy          = require('passport-google-oauth').Strategy;
    var flash               = require('connect-flash');
    var bcrypt              = require('bcrypt-nodejs');
    var mysql               = require('mysql');
    var dbconfig            = require('./database');

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    var connection = mysql.createConnection(dbconfig.connection);
    connection.query('USE ' + dbconfig.database);
    // required for passport
    var secret = 'ababagalamaga';
    app.use(myCookieParser);
    app.use(session({
        secret: secret,
        resave: true,
        cookie: {maxAge: 60000 * 60 * 24 * 30, path: '/', httpOnly: true},
        store: sessionStore,
        saveUninitialized: true}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());

    /******************************************************/
    /*LOCAL (USING E-MAIL AND PASSWORD) STRATEGY
    /******************************************************/

    passport.use(
        'local-signup',
        new LocalStrategy({
                usernameField : 'username',
                passwordField : 'password',
                passReqToCallback : true
            },
            function(req, username, password, done) {
                connection.query("SELECT * FROM `users` WHERE username = '" +username + "'", function(err, rows) {
                    if (err)
                        return done(err);
                    if (rows.length) {
                        return done(null, false, req.flash('signupMessage', 'Пользователь существует'));
                    } else {
                        connection.query("SELECT * FROM `users` WHERE email = '" + req.body.email + "'", function (err, rows){
                            if (err)
                                return done(err);
                            if (rows.length) {
                                return done(null, false, req.flash('addressMessage', 'Этот адрес уже используется'));
                            } else {
                                var newUserMysql = {
                                    username: username,
                                    email: req.body.email,
                                    password: bcrypt.hashSync(password, null, null)
                                };
                                console.log(newUserMysql);
                                var insertQuery = "INSERT INTO users ( username, email, password ) values (?,?,?)";

                                connection.query(insertQuery,[newUserMysql.username,  newUserMysql.email, newUserMysql.password],function(err, rows) {
                                    newUserMysql.id = rows.insertId;
                                    return done(null, newUserMysql);
                                });
                            }
                        });
                    }
                });
            })
    );

    passport.use(
        'local-login',
        new LocalStrategy({
                usernameField : 'username',
                passwordField : 'password',
                passReqToCallback : true
            },
            function(req, username, password, done) {
                connection.query("SELECT * FROM users WHERE username = '" + username + "'", function(err, rows){
                    if (err)
                        return done(err);
                    if (!rows.length) {
                        return done(null, false, req.flash('loginMessageName', 'Пользователь не найден. Повторите попытку'));
                    }
                    if (!bcrypt.compareSync(password, rows[0].password)) {
                        if (err) return done(null, false, req.flash('loginMessagePass', 'Неверный пароль'));

                        console.log(err);
                        return done(null, false, req.flash('loginMessagePass', 'Неверный пароль'));
                    }
                    return done(null, rows[0]);
                });
            })
    );


    /******************************************************/
    /*GOOGLE PLUS STRATEGY
    /******************************************************/

    passport.use(new GPStrategy({
            consumerKey: 'YOUR VALUE GOES HERE',
            consumerSecret: 'YOUR VALUE GOES HERE',
            callbackURL: "YOUR VALUE GOES HERE"
        },
        function(token, tokenSecret, profile, done) {
            console.log(profile)
        }
    ));

    /******************************************************/
    /*VKONTAKTE STRATEGY
    /******************************************************/
    passport.use(new VkontakteStrategy({
            clientID:     'YOUR VALUE GOES HERE',
            clientSecret: 'YOUR VALUE GOES HERE',
            callbackURL:  'YOUR VALUE GOES HERE'
        },
        function (accessToken, refreshToken, profile, done) {
             var vkUser ={
                username: profile.displayName,
                photoUrl: profile.photos[0].value,
                profileUrl: profile.profileUrl
            };
            console.log(vkUser)
        }
    ));

    /******************************************************/
    /*FACEBOOK STRATEGY
    /******************************************************/
    passport.use(new FBStrategy({
            clientID: 'YOUR VALUE GOES HERE',
            clientSecret: 'YOUR VALUE GOES HERE',
            callbackURL: 'YOUR VALUE GOES HERE',
            profileFields: [ 'emails', 'first_name', 'last_name' ]
        },
        function(accessToken, refreshToken, profile) {
            //code here
        }
    ));



    /******************************************************/
    /*ODNOKLASSNIKI STRATEGY
     /******************************************************/
    passport.use(new OKStrategy({
            clientID: 'YOUR VALUE GOES HERE',
            clientPublic: 'YOUR VALUE GOES HERE',
            clientSecret: 'YOUR VALUE GOES HERE',
            callbackURL: 'YOUR VALUE GOES HERE'
        },
        function(accessToken, refreshToken, profile, done) {
            //YOUR CODE GOES HERE
        }
    ));

    /******************************************************/
    /*ODNOKLASSNIKI AUTHORISATION
    /******************************************************/
    app.get('/auth/odnoklassniki',
        passport.authenticate('odnoklassniki'),
        function(req, res){
            // The request will be redirected to Odnoklassniki for authentication, so
            // this function will not be called.
        });

    app.get('/auth/odnoklassniki/callback',
        passport.authenticate('odnoklassniki', { failureRedirect: '/login' }),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/');
        });

    /******************************************************/
    /*GOOGLE PLUS AUTHORISATION
     /******************************************************/
    app.get('/auth/google',
        passport.authenticate('google', { scope: 'https://www.google.com/m8/feeds' }));

    app.get('/auth/google/callback',
        passport.authenticate('google', { failureRedirect: '/login' }),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/');
        });


    /******************************************************/
    /*FACEBOOK AUTHORISATION
    /******************************************************/
    app.get('/auth/facebook',
        passport.authenticate('facebook', { scope: ['read_stream', 'publish_actions'] })
    );

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook',
            function(req, res) {
                console.log(res)
                res.redirect('/');
            }
    ));

    /******************************************************/
    /*VKONTAKTE AUTHORISATION
    /******************************************************/
    app.get('/auth/vkontakte',
        passport.authenticate('vkontakte'),
        function(req, res){
            // The request will be redirected to vk.com for authentication, so
            // this function will not be called.
        });

    app.get('/auth/vkontakte/callback',
        passport.authenticate('vkontakte'),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/');
        });

    /******************************************************/
    /*LOCAL (USING E-MAIL AND PASSWORD) AUTHORISATION******/
    /******************************************************/
    app.post('/signup',
        function(req, res, next) {
            passport.authenticate('local-signup',
                function(err, user, info) {
                    if (err) { return next(err);}
                    if (!user) { return res.redirect('/login-signup');}
                req.logIn(user, function(err) {
                    if (err) { return next(err); }
                    return res.redirect('/page2/main');
                });
            })(req, res, next)
    });

    app.post('/login', function(req, res, next) {
        passport.authenticate('local-login',
            function(err, user, info) {
                if (err) { return next(err);}
                if (!user) { return res.redirect('/login-signup');}
            req.logIn(user, function(err) {
                if (err) { return next(err); }
                return res.redirect('/page2/main');
            });
        })(req, res, next);
    });

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        userSerie = {
            id : user.id,
            username: user.username,
            email: user.email
        };

        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        connection.query("SELECT * FROM users WHERE id = ? ",[id], function(err, rows){
            done(err, rows[0]);
        });
    });

    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/login-signup');
    });

};

module.exports = auth;



