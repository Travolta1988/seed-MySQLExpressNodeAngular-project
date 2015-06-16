var express = require('express');
var router = express.Router();

/* GET mainpage page. */
router.get('/', isLoggedIn, function(req, res, next) {
  res.render('./mainpage', { title: 'MEAN Project', logged_in: 'logged_in' });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        console.log('Session Expiry '+req.session);
        console.log('Authenticated');
        console.log(req.session);
        return next();
    }
    res.render('./mainpage', { title: 'MEAN Project' });
}

module.exports = router;
