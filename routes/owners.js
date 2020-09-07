const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('passport');

const checkLogin = (req, res, next) => {
  if (!req.user) {
      return res.redirect('../owners/login');
  }
  return next();
};

router.get('/', checkLogin, (req, res, next) => {
  db.Parking.findAll({
    where: { ownerId: req.user.id}
  }).then(parkings => {
    var data = {
      title: 'Parking Finder',
      user: req.user,
      content: parkings
    };
    res.render('owners/index', data);
  });
});

router.get('/login', (req, res) => {
  var data = {
    title: 'Parking Finder',
    user: req.user
  };
  res.render('owners/login', data);
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '../owners',
  failureRedirect: '../owners/login',
  session: true
}));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('../owners/login');
});

module.exports = router;
