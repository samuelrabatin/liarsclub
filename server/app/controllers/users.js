const User = require('../models/user.js');
var jwt        = require("jsonwebtoken");
var randtoken = require('rand-token');

exports.login = function (req, res) {
  User.findOne({name: req.body.name, password: req.body.password}, function(err, user) {
    if (err) {
      res.json({
        type: false,
        data: "Error occured: " + err
      });
    } else {
      if (user) {
          user.token = randtoken.generate(256);
          user.save(function (err, user1) {
            if (err) {
              res.json({
                type: false,
                err: err
              })
            } else {
              res.json({
                type: true,
                data: user
              })
            }
          })
      } else {
        res.json({
          type: false,
          data: "Username or password is not correct!"
        });
      }
    }
  });
};

exports.checkToken = function(req, res) {
  User.findOne({name: req.body.name, token: req.body.token}, function(err, user) {
    if (err || user === null) {
      res.json({type: false});
    } else {
      res.json({type: true});
    }
  });
}
