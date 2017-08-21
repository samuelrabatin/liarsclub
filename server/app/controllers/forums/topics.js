const Topic  = require('../../models/forums/topic');
const Forum = require('../../models/forums/forum');
const User = require('../../models/user');
var jwt = require("jsonwebtoken");

exports.getTopics = function (req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else if (user.type != 'admin') {
      return res.status(400).send('Access denied');
    } else {
      Topic.find({}, null, {sort: {lastreplied: -1, createdDate: -1}}, function(err, topics) {
        if (err) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          return res.json(topics);
        }
      });
    }
  });
};

exports.getConfirmedTopics = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Topic.find({confirmed: true}, null, {lastreplied: -1, sort: {createdDate: -1}}, function(err, topics) {
        if (err) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          return res.json(topics);
        }
      });
    }
  });
};

exports.getConfirmedTopicsByForumId = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Topic.find({confirmed: true, forumId: req.body.id}, null, {lastreplied: -1, sort: {createdDate: -1}}, function(err, topics) {
        if (err) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          return res.json(topics);
        }
      });
    }
  });
};

exports.getTopicById = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Topic.findOne({_id: req.body.id}, function(err, topic) {
        if (err && !topic) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          return res.json({type: 'true', data: topic});
        }
      });
    }
  });
};

exports.activateTopic = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else if (user.type != 'admin') {
      return res.status(400).send('Forbidden');
    } else {
      Topic.findOne({_id: req.body.id}, function(err, topic) {
        if (err && !topic) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          topic.confirmed = true;
          topic.save();
          return res.json({type: 'true'});
        }
      });
    }
  });
};

exports.deactivateTopic = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else if (user.type != 'admin') {
      return res.status(400).send('Forbidden');
    } else {
      Topic.findOne({_id: req.body.id}, function(err, topic) {
        if (err && !forum) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          topic.confirmed = false;
          topic.save();
          return res.json({type: 'true'});
        }
      });
    }
  });
};

exports.increaseView = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Topic.findOne({_id: req.body.id}, function(err, topic) {
        if (err && !forum) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          topic.views++;
          topic.save();
          return res.json({type: 'true'});
        }
      });
    }
  });
};

exports.deleteTopic = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else if (user.type != 'admin') {
      return res.status(400).send('Forbidden');
    } else {
      Topic.findOneAndRemove({_id: req.body.id}, function(err, topic) {
        if (err) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          Forum.findOne({_id: topic.forumId}, function(err, parentForum) {
            if (err) {
              return res.json({type: false, msg: 'err' + err});
            } else if (parentForum) {
              parentForum.topics--;
              parentForum.save();
            }

            return res.json({type: true});
          });
        }
      });
    }
  });
};

exports.addTopic = function (req, res) {
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
      var newTopic = new Topic(item);
      newTopic.save(function (err, topic) {
        if (err) {
          return res.status(500).send('save failed');
        } else {
          if (topic.forumId) {
            Forum.findOne({_id: topic.forumId}, function (err, parentForum) {
              if (err) {
                return res.status(500).send('cannot find parent forum');
              } else {
                parentForum.topics++;
                parentForum.save();
                return res.json({type: true, msg: 'successfully added'});
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
