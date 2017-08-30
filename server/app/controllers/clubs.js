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
    } else if ( user.type != 'admin' ) {
      return res.status(400).send('Forbidden');
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

exports.getConfirmedClubs = function (req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Club.find({confirmed: true}, null, {created_date: -1}, function(err, clubs) {
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
    } else if ( user.type != 'admin' ) {
      return res.status(400).send('Forbidden');
    } else {
      Club.remove({_id: req.body.id}, function(err) {
        if (err) {
          res.json({
            type: false,
            msg: 'remove failed'
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

exports.approveClub = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else if ( user.type != 'admin' ) {
      return res.status(400).send('Forbidden');
    } else {
      Club.update({_id: req.body.id}, { $set: { confirmed: true }}, function(err) {
        if (err) {
          res.json({
            type: false,
            msg: 'confirm failed'
          });
        } else {
          res.json({
            type: true,
            msg: 'confirmed'
          })
        }
      });
    }
  });
};

exports.getClubById = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else if ( user.type != 'admin' ) {
      return res.status(400).send('Forbidden');
    } else {
      Club.findOne({_id: req.body.id}, function(err, club) {
        if (err || !club) {
          res.json({
            type: false,
            msg: 'get club error'
          });
        } else {
          res.json({
            type: true,
            club: club
          })
        }
      });
    }
  });
};

exports.updateUserTag = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else if ( user.type != 'admin' ) {
      return res.status(400).send('Forbidden');
    } else {
      Club.findOne({_id: req.body.id}, function(err, club) {
        if (err || !club) {
          return res.json({
            type: false,
            msg: 'get club error'
          });
        } else {
          for (var i = 0; i < club.taggedUsers.length; i++) {
            if (club.taggedUsers[i].user == req.body.user.user) {
              club.taggedUsers[i].memberState = req.body.user.memberState;
              club.taggedUsers[i].memberType = req.body.user.memberType;
              club.taggedUsers[i].confirmed = req.body.user.confirmed;

              break;
            }
          }

          if (req.body.user.confirmed) {
            req.body.user.memberState == 'active' ? club.activeMembers++ : club.pastMembers++;
            club.tagWaitingMembers--;
          } else {
            req.body.user.memberState == 'active' ? club.activeMembers-- : club.pastMembers--;
            club.tagWaitingMembers++;
          }

          Club.findOneAndUpdate({_id: req.body.id},
            {taggedUsers: club.taggedUsers, activeMembers: club.activeMembers, pastMembers: club.pastMembers, tagWaitingMembers: club.tagWaitingMembers},
            function(err1) {
            if (err1) {
              return res.json({
                type: false,
                msg: 'update club error'
              });
            } else {
              return res.json({
                type: true,
                msg: 'updated'
              });
            }
          });
        }
      });
    }
  });
};

exports.rejectClub = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else if ( user.type != 'admin' ) {
      return res.status(400).send('Forbidden');
    } else {
      Club.update({_id: req.body.id}, { $set: { confirmed: false }}, function(err) {
        if (err) {
          res.json({
            type: false,
            msg: 'confirm failed'
          });
        } else {
          res.json({
            type: true,
            msg: 'confirmed'
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
            taggedDate: new Date(),
            confirmed: false
          });

          //req.body.memberState == 'active' ?  club.activeMembers++ : club.pastMembers++;
          club.tagWaitingMembers++;

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

exports.confirmTaggedUser = function(req, res) {

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
