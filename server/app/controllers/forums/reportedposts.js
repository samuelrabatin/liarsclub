const Topic  = require('../../models/forums/topic');
const Forum = require('../../models/forums/forum');
const ReportedPost = require('../../models/forums/reportedpost');
const Post = require('../../models/forums/post');
const User = require('../../models/user');

exports.getReportedPosts = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      ReportedPost.find({}, null, {sort: {createdDate: -1}}, function(err, posts) {
        if (err) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          return res.json(posts);
        }
      });
    }
  });
};

exports.deleteReportedTest = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      ReportedPost.findOneAndRemove({_id: req.body.id}, function(err) {
        if (err) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          return res.json({
            type: true,
            data: "deleted"
          });
        }
      });
    }
  });
}

exports.reportTest = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      var item = {};
      item.postId = req.body.postId;
      item.createdUserId = req.body.userId;
      item.createdDate = new Date();
      item.text = req.body.text;

      Post.findOne({_id: req.body.postId}, function(err, post) {
        if (err || !post) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          Topic.findOne({_id: post.topicId}, function (err, topic) {
            if (err || !topic) {
              return res.json({
                type: false,
                data: "Error occured: " + err
              });
            } else {

              Forum.findOne({_id: topic.forumId}, function(err, forum) {
                if (err || !forum) {
                  return res.json({
                    type: false,
                    data: "Error occured: " + err
                  });
                } else {
                  item.topic = topic;
                  item.forum = forum;
                  var addItem = new ReportedPost(item);
                  addItem.save(function(err) {
                    if (err) {
                      return res.json({type: false, msg: 'err: ' + err});
                    } else {
                      return res.json({type: true, msg: 'Added'});
                    }
                  });
                }
              });

            }
          });
        }
      });
    }
  });
}
