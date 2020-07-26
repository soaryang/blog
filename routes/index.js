var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '5f1272a35ebad02574226b25' });
});

router.get('/index3/:id', function(req, res, next) {
    res.render('index3', { title: req.params.id });
});

router.get('/more/:id', function(req, res, next) {
    res.render('more', { tagId: req.params.id});
});

module.exports = router;
