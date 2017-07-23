const User = require('../models/user.js');
const Profile = require('../models/profile.js');

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
  if (req.body.name == "") {
    res.json({type: false});
  } else {
    User.findOne({name: req.body.name, token: req.body.token}, function (err, user) {
      if (err || user === null) {
        res.json({type: false});
      } else {
        res.json({type: true});
      }
    });
  }
};

exports.saveProfile = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Profile.findOne({username: user.name}, function(err, userProfile) {
        if (err) {
          return res.status(400).send('Faild to register');
        } else if (userProfile) {
          userProfile.firstname = req.body.firstname;
          userProfile.lastname = req.body.lastname;
          userProfile.imgId = req.body.imgId,
          userProfile.email = req.body.email;
          userProfile.updated_date = new Date();

          userProfile.save(function (err, item) {
            if (err) {
              res.json({
                type: false
              })
            } else {
              res.json({
                type: true,
                profile: item,
                msg: "Successfully updated"
              })
            }
          });
        } else {
          var item = new Profile({
            username: user.name,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            imgId: req.body.imgId,
            email: req.body.email,
            created_date: new Date()
          });
          item.save(function (err, item1) {
            if (err) {
              res.json({
                type: false
              })
            } else {
              res.json({
                type: true,
                profile: item1,
                msg: "Successfully added"
              })
            }
          });
        }
      });
    }
  });
};

exports.getProfile = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Profile.findOne({username: user.name}, function(err, userProfile) {
        var return_val = userProfile ||
          {
            firstname: '',
            lastname: '',
            email: user.email,
            imgId: user.imgId
          };

        res.json({
          type: true,
          profile: return_val
        });
      });
    }
  });
};
