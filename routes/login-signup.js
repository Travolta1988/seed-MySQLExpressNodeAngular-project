var express = require('express');
var router = express.Router();

/* GET login-signup page. */
router.get('/',isLoggedIn, function(req, res, next) {
    res.render('./login-signup', {
        title: 'Регистрация | Вход',
        signupmessage: req.flash('signupMessage'),
        loginmessageName: req.flash('loginMessageName'),
        loginmessagePass: req.flash('loginMessagePass'),
        addressmessage: req.flash('addressMessage'),
        logged_in: 'logged_in'
    });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        console.log('Session Expiry '+req.session.cookie._expires);
        console.log('Authenticated');
        console.log(req.session);
        res.redirect('./page2/main');
        return next();
    }
    console.log('Not Authenticated');
    res.render('./login-signup');
}

module.exports = router;