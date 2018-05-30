var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({code: 200, data: {name: 'zhangsan'}})
});

router.get('/home', function(req, res, next) {
  res.send({code: 200, data: {home: 'home1'}})
});

router.get('/user/:id', function(req, res, next) {
  res.send({code: 200, data: {id: req.params.id}})
});

router.post('/login', function(req, res, next) {
  res.send({code: 200, data: {state: true}})
});

module.exports = router;
