var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  var data = {
    title: 'Parking Finder - オーナーサイト'
  };
  res.render('owners/index', data);
});

module.exports = router;
