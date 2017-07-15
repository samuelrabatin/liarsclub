const User = require('../models/user.js');
var jwt        = require("jsonwebtoken");

exports.login = function (req, res) {
  User.findOne({name: req.body.name, password: req.body.password}, function(err, user) {
    if (err) {
      res.json({
        type: false,
        data: "Error occured: " + err
      });
    } else {
      if (user) {
          user.token = jwt.sign(user, 'JWT_SECRET');
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
          data: "User already exists!"
        });
      }
    }
  });
};
