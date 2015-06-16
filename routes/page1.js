var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id',isLoggedIn, function(req, res) {
    var id = req.params.id;

    console.log(req.params.id)
    res.render('./page1', {
        title: 'MeanProject | ' + req.params.id,
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
    res.redirect('/login-signup');
}


module.exports = router;
