var express = require('express');
var router = express.Router();

// link to the Account model
var Account = require('../models/account');
var passport = require('passport');

/* GET users listing. 
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
  res.render('Users',
  {user: req.user});
});
*/

// auth check
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.redirect('/login');
    }
}

// GET handler for /users
router.get('/', isLoggedIn, function(req, res, next) {

    // use user model to run a query
    Account.find(function(err, users) {
        if (err) {
            console.log(err);
            res.render('error');
        }
        else {
            // load the users view
            res.render('users', {
                title: 'Users',
                users: users,
                user: req.user
            });
        }
    });
});

module.exports = router;
