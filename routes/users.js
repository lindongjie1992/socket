var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post("/dologin", function(req, res){
  res.json({
    "username" : req.body.username
  })
});


module.exports = router;
