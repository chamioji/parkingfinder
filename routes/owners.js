const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('passport');

const checkLogin = (req, res, next) => {
  if (!req.user) {
    return res.redirect('/owners/login');
  }
  return next();
};

router.get('/', checkLogin, (req, res, next) => {
  db.Parking.findAll({
    where: { ownerId: req.user.id}
  })
    .then(parkings => {
      var data = {
        title: 'Parking Finder',
        user: req.user,
        content: parkings
      };
      res.render('owners/index', data);
    });
});

router.get('/show/:id', checkLogin, (req, res, next) => {
  db.Parking.findByPk(req.params.id)
    .then(parkings => {
      var data = {
        title: 'Parking Finder',
        user: req.user,
        content: parkings
      };
      res.render('owners/show', data);
    });
});

router.get('/edit/:id', checkLogin, (req, res, next) => {
  db.Parking.findByPk(req.params.id)
    .then(parkings => {
      var data = {
        title: 'Parking Finder',
        user: req.user,
        form: parkings,
      };
      res.render('owners/edit', data);
    });
});

router.post('/edit/:id', checkLogin, (req, res, next) => {
  db.Parking.findByPk(req.params.id)
    .then(parking => {
      parking.status = req.body.status;
      parking.name = req.body.name;
      parking.postcode = req.body.postcode;
      parking.address = req.body.address;
      parking.capacity = req.body.capacity;
      parking.price = req.body.price;
      parking.save()
      res.redirect('/owners/show/' + req.params.id);
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
  successRedirect: '/owners',
  failureRedirect: '/owners/login',
  session: true
}));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/owners/login');
});

module.exports = router;
