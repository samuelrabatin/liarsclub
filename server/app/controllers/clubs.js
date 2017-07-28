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
      Club.find({}, null, {created_date: -1}, function(err, clubs) {
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
};

exports.removeClub = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Club.remove({_id: req.body.id}, function(err) {
        if (err) {
          res.json({
            type: false,
            msg: 'remove faild'
          });
        } else {
          res.json({
            type: true,
            msg: 'removed'
          })
        }
      });
    }
  });
};

exports.tagClub = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Club.findOne({_id: req.body.clubId}, function(err, club) {
        if (err || !club) {
          res.json({
            type: false,
            msg: err || 'club not found'
          });
        } else if (findIndex(club.taggedUsers, user.name) == -1) {
          club.taggedUsers.push({
            user: user.name,
            memberState: req.body.memberState,
            memberType: req.body.memberType,
            taggedDate: new Date()
          });

          req.body.memberState == 'active' ?  club.activeMembers++ : club.pastMembers++;

          club.save(function(err) {
            if (err) {
              res.json({
                type: false,
                msg: err
              });
            } else {
              res.json({
                type: true,
                msg: 'Tagged'
              });
            }
          });
        } else {
          res.json({
            type: false,
            msg: 'already tagged'
          });
        }
      });
    }
  });
};

exports.untagClub = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Club.findOne({_id: req.body.clubId}, function(err, club) {
        if (err || !club) {
          res.json({
            type: false,
            msg: err || 'club not found'
          });
        } else if (findIndex(club.taggedUsers, user.name) != -1) {
          var index = findIndex(club.taggedUsers, user.name);
          club.taggedUsers[index].memberState == 'active' ? club.activeMembers-- : club.pastMembers--;
          club.taggedUsers.splice(index, 1);

          club.save(function(err) {
            if (err) {
              res.json({
                type: false,
                msg: err
              });
            } else {
              res.json({
                type: true,
                msg: 'UnTagged'
              });
            }
          });
        } else {
          res.json({
            type: false,
            msg: 'already untagged'
          });
        }
      });
    }
  });
};


exports.untagFromAdmin = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Club.findOne({_id: req.body.clubId}, function(err, club) {
        if (err || !club) {
          res.json({
            type: false,
            msg: err || 'club not found'
          });
        } else if (findIndex(club.taggedUsers, req.body.user) != -1) {
          var index = findIndex(club.taggedUsers, req.body.user);
          club.taggedUsers[index].memberState == 'active' ? club.activeMembers-- : club.pastMembers--;
          club.taggedUsers.splice(index, 1);

          club.save(function(err) {
            if (err) {
              res.json({
                type: false,
                msg: err
              });
            } else {
              res.json({
                type: true,
                msg: 'UnTagged'
              });
            }
          });
        } else {
          res.json({
            type: false,
            msg: 'already untagged'
          });
        }
      });
    }
  });
};

function findIndex(arr, user) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].user == user) {
      return i;
    }
  }

  return -1;
}
