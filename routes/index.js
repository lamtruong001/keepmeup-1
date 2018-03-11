var express = require('express');
var router = express.Router();

//get homgpage
router.get('/', function(req, res){
  res.render('index');
});
module.exports = router;
