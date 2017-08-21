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
          for (var i = 0; i < posts.length; i++) {
            Post.findOne({_id: posts[i].postId}, function(err, post) {
              if (err || !post) {
                return res.json({
                  type: false,
                  data: "Error occured: " + err
                });
              } else {
                Topic.findOne({_id: post.topicId}, function(err, topic) {
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
                        posts[i].post = post;
                        posts[i].topic = topic;
                        posts[i].forum = forum;
                      }
                    });
                  }
                })
              }
            });
          }
          return res.json(posts);
        }
      });
    }
  });
};

exports.getPostsByTopicId = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Post.find({topicId: req.body.id}, null, {sort: {createdDate: -1}}, function(err, posts) {
        if (err) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          return res.json({type: true, data: posts});
        }
      });
    }
  });
};

exports.likePostById = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Post.findOne({_id: req.body.id}, function(err, post) {
        if (err || !post) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          console.log(post);
          if (post.likeUsersId.indexOf(user._id) == -1) {
            console.log(post);
            post.likeUsersId.push(user._id);
            post.save();
          }
          return res.json({type: true});
        }
      });
    }
  });
};

exports.removeLikePostById = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Post.findOne({_id: req.body.id}, function(err, post) {
        if (err || !post) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          var idx = post.likeUsersId.indexOf(user._id);
          if (idx > -1) {
            post.likeUsersId.splice(idx);
            post.save();
            return res.json({type: true});
          }
        }
      });
    }
  });
};

exports.dislikePostById = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      console.log(req.body.id);
      Post.findOne({_id: req.body.id}, function(err, post) {
        if (err || !post) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          if (post.unlikeUsersId.indexOf(user._id) == -1) {
            post.unlikeUsersId.push(user._id);
            post.save();
            return res.json({type: true});
          }
        }
      });
    }
  });
};

exports.removeDisLikePostById = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Post.findOne({_id: req.body.id}, function(err, post) {
        if (err || !post) {
          return res.json({
            type: false,
            data: "Error occured: " + err
          });
        } else {
          var idx = post.unlikeUsersId.indexOf(user._id);
          if (idx > -1) {
            post.unlikeUsersId.splice(idx);
            post.save();
            return res.json({type: true});
          }
        }
      });
    }
  });
};

exports.addPost = function(req, res) {
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
      var newPost = new Post(item);
      newPost.save(function (err, post) {
        if (err || !post) {
          return res.status(500).send(err);
        } else {
          if (post.topicId) {
            Topic.findOne({_id: post.topicId}, function(err, topic) {
              if (err || !topic) {
                res.json({type: false, msg: 'err: ' + err});
              } else {
                topic.replies++;
                topic.lastreplied = new Date();
                topic.save();

                Forum.findOne({_id: topic.forumId}, function (err, parentForum) {
                  if (err) {
                    return res.status(500).send('cannot find parent forum');
                  } else {
                    parentForum.posts++;
                    parentForum.lastreplied = new Date();
                    parentForum.save();
                    return res.json({type: true, msg: 'successfully added'});
                  }
                })
              }
            });
          } else {
            return res.json({ type: true, msg: 'successfully added'});
          }
        }
      })
    }
  });
};

exports.deletePost = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Post.findOneAndRemove({_id: req.body.id}, function (err, post) {
        if (err || !post) {
          return res.status(500).send(err);
        } else {
          if (post.topicId) {
            Topic.findOne({_id: post.topicId}, function(err, topic) {
              if (err) {
                return res.json({type: false, msg: 'err: ' + err});
              } else {
                topic.replies--;
                topic.save();

                Forum.findOne({_id: topic.forumId}, function (err, parentForum) {
                  if (err) {
                    return res.status(500).send('cannot find parent forum');
                  } else {
                    parentForum.posts--;
                    parentForum.save();
                    return res.json({type: true, msg: 'successfully deleted'});
                  }
                })
              }
            });
          } else {
            return res.json({ type: true, msg: 'successfully added'});
          }
        }
      })
    }
  });
};

exports.addReportedPosts = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      var item;
      item.postId = req.body.postId;
      item.createdUserId = req.body.userId;
      item.createdDate = new Date();
      item.text = req.body.text;

      var addItem = new ReportedPost(item);
      item.save(function(err) {
        if (err) {
          return res.json({type: false, msg: 'err: ' + err});
        } else {
          return res.json({type: true, msg: 'Added'});
        }
      });
    }
  });
}
