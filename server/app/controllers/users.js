const User = require('../models/user.js');
var bcrypt = require('bcrypt');
const Profile = require('../models/profile.js');

var jwt        = require("jsonwebtoken");
var randtoken = require('rand-token');

const saltRounds = 4;

exports.login = function (req, res) {
  User.findOne({name: req.body.name}, function(err, user) {
    if (err) {
      res.json({
        type: false,
        data: "Error occured: " + err
      });
    } else if (!user) {
      res.json({
        type: false,
        data: "Username does not exist"
      });
    } else {
      bcrypt.compare(req.body.password, user.password, function(err, res1) {
        if (res1 == true) {
          user.token = randtoken.generate(256);
          user.last_login = new Date();
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
            data: "Password is not correct!"
          });
        }
      });
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
      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
          const user = new User({
            name: req.body.username,
            email: req.body.email,
            password: hash,
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
        });
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
      var date1 = new Date(user.active);
      var date2 = new Date();
      if (err || user === null || date2.getTime() - date1.getTime() > 60 * 1000 * 60 * 24) {
        res.json({type: false});
      } else {
        user.active = date2;
        res.json({type: true});
        user.save();
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
          userProfile.imgId = req.body.imgId;
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
                profile: userProfile,
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
            created_date: new Date(),
            updated_date: new Date()
          });
          item.save(function (err, item1) {
            if (err) {
              res.json({
                type: false
              })
            } else {
              res.json({
                type: true,
                profile: item,
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
        var return_val;
        if (userProfile) {
          return_val = {
            firstname: userProfile.firstname,
            lastname: userProfile.lastname,
            email: userProfile.email,
            imgId: userProfile.imgId
          };
        } else {
          return_val = {
            firstname: '',
            lastname: '',
            email: user.email,
            imgId: user.imgId
          };
        }

        res.json({
          type: true,
          profile: return_val
        });
      });
    }
  });
};

exports.getAllUsers = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.find({}, 'name email created_date', function(err, users) {
    if (err) {
      res.json({
        type: false
      });
    } else {
      res.json({
        users: users
      });
    }
  });
};
