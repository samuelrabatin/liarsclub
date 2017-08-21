const Forum = require('../../models/forums/forum');
const User = require('../../models/user');
var jwt = require("jsonwebtoken");

buildForum = function(forums) {
  var structuredForms = forums.slice();

  var maximumLevel = 0;
  for (var i = 0; i < forums.length; i++) {
    maximumLevel = maximumLevel > forums[i].level ? maximumLevel : forums[i].level;
  }

  for (var i = maximumLevel; i > 0; i--) {
    for (var j = 0; j < structuredForms.length; j++) {
      if (structuredForms[j].level == i) {
        for (var k = 0; k < structuredForms.length; k++) {
          if (structuredForms[k]._id == structuredForms[j].parentForumId) {
            structuredForms[k].forums = structuredForms[k].subforums ? structuredForms[k].subforums.concat(structuredForms[j]) : [structuredForms[j]];
          }
        }
      }
    }
    for (var j = structuredForms.length -1; j >= 0; j--) {
      if (structuredForms[j].level == i) {
        structuredForms.splice(j, 1);
      }
    }
  }

  return structuredForms;
};

exports.getForums = function (req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else if (user.type != 'admin') {
      return res.status(400).send('Access denied');
    } else {
      Forum.find({}, null, {sort: {createdDate: -1}}, function(err, forums) {
        if (err) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          return res.json(forums);
        }
      });
    }
  });
};

exports.getConfirmedForums = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Forum.find({confirmed: true}, null, {sort: {createdDate: -1}}, function(err, forums) {
        if (err) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          return res.json(forums);
        }
      });
    }
  });
};

exports.activateForum = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else if (user.type != 'admin') {
      return res.status(400).send('Forbidden');
    } else {
      Forum.findOne({_id: req.body.id}, function(err, forum) {
        if (err && !forum) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          forum.confirmed = true;
          forum.save();
          return res.json({type: 'true'});
        }
      });
    }
  });
};

exports.deactivateForum = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else if (user.type != 'admin') {
      return res.status(400).send('Forbidden');
    } else {
      Forum.findOne({_id: req.body.id}, function(err, forum) {
        if (err && !forum) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          forum.confirmed = false;
          forum.save();
          return res.json({type: 'true'});
        }
      });
    }
  });
};

exports.deleteForum = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else if (user.type != 'admin') {
      return res.status(400).send('Forbidden');
    } else {
      Forum.findOneAndRemove({_id: req.body.id}, function(err) {
        if (err) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          return res.json({type: 'true'});
        }
      });
    }
  });
};

exports.addForum = function (req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      var item = req.body.data;
      item.createdDate = new Date();
      item.createdUserId = user._id;
      var newForum = new Forum(item);
      newForum.save(function (err, forum) {
        if (err) {
          return res.status(500).send('save failed');
        } else {
          if (forum.parentForumId) {
            Forum.findOne({_id: forum.parentForumId}, function (err, parentForum) {
              if (err) {
                return res.status(500).send('cannot find parent forum');
              } else {
                parentForum.subForumsId.push(forum._id);
                parentForum.save();
                return res.status(200).send('successfully added');
              }
            })
          } else {
            return res.json({ type: true, msg: 'successfully added'});
          }
        }
      })
    }
  });
};
