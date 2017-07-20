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

exports.register = function(req, res) {
  User.find( {$or:[{name: req.body.username}, {email: req.body.email}]}, function(err, user) {
    if (user.length) {
      res.json({
        type: false,
        errmsg: "Same username or email address already exists"
      });
    } else {
      const user = new User({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        created_date: new Date(),
        token: ''
      });

      user.save(function (err, user1) {
        if (err) {
          res.json({
            type: false,
            errmsg: "Database Error",
            err: err
          })
        } else {
          res.json({
            type: true,
            data: user
          })
        }
      });
    }
  });
};

exports.logout = function(req, res) {
  User.findOne({name: req.body.username}, function(err, user) {
    if (user) {
      user.token = '';
      user.save(function (err, user1) {
        if (err) {
          res.json({
            type: false
          })
        } else {
          res.json({
            type: true
          })
        }
      });
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
};
