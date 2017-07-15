const Club = require('../models/club');
const User = require('../models/user');
var jwt = require("jsonwebtoken");

exports.getClubs = function (req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Club.find(function(err, clubs) {
        if (err) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          return res.json({
            data: clubs
          });
        }
      });
    }
  });
};

exports.addClub = function (req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      var item = req.body;
      item.username = user.name;
      var club = new Club(item);
      club.save(function (err) {
        if (err) {
          res.json({
            type: false,
            msg: 'Could not add your club',
            err: err
          })
        } else {
          res.json({
            type: true,
            msg: 'Added'
          })
        }
      });
    }
  });
}
