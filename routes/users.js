var express = require('express');
var router = express.Router();

//get register page
router.get('/register', function(req, res){
  res.render('register');
});
//get login page
router.get('/login', function(req, res){
  res.render('login');
});
module.exports = router;
