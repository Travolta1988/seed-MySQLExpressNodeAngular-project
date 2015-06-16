var express = require('express');
var router = express.Router();

/* GET page. */
router.get('/', isLoggedIn, function(req, res) {
    res.render('./page4', { title: 'Project | Page4', logged_in: 'logged_in' });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        console.log('Session Expiry '+req.session);
        console.log('Authenticated');
        console.log(req.session);
        return next();
    }
    console.log('Not Authenticated');
    res.render('./page4', { title: 'Project | Page4' });
}


module.exports = router;