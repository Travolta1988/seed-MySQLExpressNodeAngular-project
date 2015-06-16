var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', isLoggedIn, function(req, res, next) {
    res.render('./page3', { title: 'Project | Page3', logged_in: 'logged_in' });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        console.log('Session Expiry '+req.session);
        console.log('Authenticated');
        console.log(req.session);
        return next();
    }
    console.log('Not Authenticated');
    res.render('./page3', { title: 'Project | Page3' });
}


module.exports = router;