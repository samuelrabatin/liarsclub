const Role = require('../models/roles');
const Voting = require('../models/votings');
const Setup = require('../models/setup');
const User = require('../models/user');
var jwt = require("jsonwebtoken");

exports.getAllRoles = function (req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Role.find(function(err, roles) {
        if (err) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          return res.json({
            data: roles
          });
        }
      });
    }
  });
};

exports.getAllVotings = function (req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Voting.find(function(err, votings) {
        if (err) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          return res.json({
            data: votings
          });
        }
      });
    }
  });
};

exports.addRole = function (req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      var item = req.body;

      var role = new Role(item);
      role.save(function (err) {
        if (err) {
          res.json({
            type: false,
            msg: 'Could not add your role',
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
};


exports.addSetup = function (req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      var item = req.body;
      item.created_date = new Date();
      var setup = new Setup(item);
      setup.save(function (err) {
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
};

exports.updateSetup = function (req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  console.log(req.body);

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      var item = req.body;
      Setup.findOne({_id: req.body.object_id}, function(err, setup) {
        console.log('setup', setup);
        if (err || !setup) {
          return res.json({
            type: false,
            errmsg: 'setup could not find'
          });
        } else {
          setup.name = req.body.name;
          setup.createdUser = req.body.createdUser;
          setup.setupDescription = req.body.setupDescription;
          setup.difficulty = req.body.difficulty;
          setup.minimumMember = req.body.minimumMember;
          setup.maximumMember = req.body.maximumMember;
          setup.playTime = req.body.playTime;
          setup.narrationText = req.body.narrationText;
          setup.missingRules = req.body.missingRules;
          setup.roleFrequencies = req.body.roleFrequencies;
          setup.imgId = req.body.imgId;
          setup.votings = req.body.votings;
          setup.roles = req.body.roles;

          setup.save(function (err) {
            if (err) {
              res.json({
                type: false,
                msg: 'Could not add your setup',
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
  });
};

exports.getSetups = function (req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Setup.find(function(err, setups) {
        if (err) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          return res.json({
            data: setups
          });
        }
      });
    }
  });
};
