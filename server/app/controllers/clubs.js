const Club = require('../models/club');
const User = require('../models/user');
const Notification = require('../controllers/notifications');
var jwt = require("jsonwebtoken");

exports.getClubs = function (req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Club.find({}, null, {sort: {created: -1}}, function(err, clubs) {
        if (err) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          var tmpclubs = [];
          for (var i = 0; i < clubs.length; i++) {
            if (user.type == 'admin') {
              tmpclubs.push(clubs[i]);
            } else {
              for (var j = 0; j < clubs[i].taggedUsers.length; j++) {
                if (clubs[i].taggedUsers[j].userId == user._id.toString() && clubs[i].taggedUsers[j].memberType == 'admin') {
                  tmpclubs.push(clubs[i]);
                  break;
                }
              }
            }
          }
          return res.json({
            data: tmpclubs
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
      Club.find({confirmed: true}, null, {sort: {created: -1}}, function(err, clubs) {
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
      item.userId = user._id;
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

exports.updateClub = function (req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      var item = req.body;

      Club.findOne({_id: item.club._id}, function(err, club) {
        if (err || !club) {
          return res.json({
            type: false,
            msg: err || "club not found"
          });
        } else {
          var isAdmin = user.type == 'admin';
          for (var i = 0; !isAdmin && i < club.taggedUsers.length; i++) {
            if (club.taggedUsers[i].memberType == 'admin' && club.taggedUsers[i].confirmed && club.taggedUsers[i].userId.toString() == user._id.toString()) {
              isAdmin = true;
            }
          }

          if (isAdmin) {
            for (key in item.club) {
              club[key] = item.club[key];
            }

            club.save(function(err) {
              if (err) {
                return res.json({
                  type: false,
                  msg: err + " save failed"
                });
              } else {
                return res.json({
                  type: true,
                  msg: "udpated"
                });
              }
            });
          } else {
            return res.json({
              type: false,
              msg: "Forbidden"
            });
          }
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
      var item = req.body;

      Club.findOne({_id: item.id}, function(err, club) {
        if (err || !club) {
          return res.json({
            type: false,
            msg: err || "club not found"
          });
        } else {
          var isAdmin = user.type == 'admin';
          for (var i = 0; !isAdmin && i < club.taggedUsers.length; i++) {
            if (club.taggedUsers[i].memberType == 'admin' && club.taggedUsers[i].confirmed && club.taggedUsers[i].userId.toString() == user._id.toString()) {
              isAdmin = true;
            }
          }

          if (isAdmin) {
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
          } else {
            return res.json({
              type: false,
              msg: "Forbidden"
            });
          }
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
    } else {
      Club.update({_id: req.body.id}, { $set: { confirmed: true }}, function(err, club) {
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
            userId: user._id,
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
        } else if (findIndex(club.taggedUsers, user._id) != -1) {
          var index = findIndex(club.taggedUsers, user._id);
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
        } else if (findIndex(club.taggedUsers, req.body.userId) != -1) {
          var index = findIndex(club.taggedUsers, req.body.userId);
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

exports.sendNotificationNow = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Club.findOne({_id: req.body.event.clubId}, function(err1, club) {
        if (err || !club) {
          console.log('sendNotificationNow err: ', err1);
          return res.json({type: false});
        } else {
          for (var userIndex = 0; userIndex < club.taggedUsers.length; userIndex++) {
            Notification.addNotification("event", req.body.event, club.taggedUsers[userIndex].userId);
          }
          return res.json({type: true, msg: 'notification sent'});
        }
      });
    }
  });
};

function findIndex(arr, user) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].userId == user) {
      return i;
    }
  }

  return -1;
}
