var express = require('express');
var router = express.Router();

/* GET page2 page. */
router.get('/:somenamespace',isLoggedIn, function(req, res) {
    res.render('./page2', {
        title: 'MEAN Project| Page2',
        logged_in: 'logged_in'
    })
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        console.log('Session Expiry '+req.session);
        console.log('Authenticated');
        console.log(req.session);
        return next();
    }
    console.log('Not Authenticated');
    res.render('./page2', { title: 'MEAN Project | Page2' });
}

module.exports = router;