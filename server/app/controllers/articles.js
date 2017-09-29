const Article = require('../models/article');
const User = require('../models/user');
const Settings = require('../models/home');

exports.addArticle = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  } else {
    User.findOne({ token: req.body.access_token }, function(err, user) {
      if (err || !user) {
        return res.status(400).send('Authentication failed');
      } else if (user.type != 'admin') {
        return res.status(400).send('Forbidden');
      } else {
        var item = new Article(req.body.article);

        item.createdDate = new Date();
        item.createdUserId = user._id;
        item.likedUsers = [];

        Article.find({}, function(err, articles) {
          var order = 0;
          if (err) {
            return res.json({
              type: false,
              msg: 'err: ' + err
            });
          } else {
            for (var i = 0; i < articles.length; i++) {
              if (order < articles[i].order) {
                order = articles[i].order;
              }
            }

            item.order = order + 1;
            item.save();

            return res.json({
              type: true
            });
          }
        });
      }
    });
  }
};

exports.getArticles = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  } else {
    User.findOne({ token: req.body.access_token }, function(err, user) {
      if (err || !user) {
        return res.status(400).send('Authentication failed');
      } else {
        Article.find({}, null, {sort: {order: -1}}, function(err, articles) {
          if (err || !articles) {
            return res.json({
              type: false,
              msg: 'err: ' + err
            });
          } else {
            return res.json({
              type: true,
              data: articles
            });
          }
        });
      }
    });
  }
};

exports.getHomeArticles = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  } else {
    User.findOne({ token: req.body.access_token }, function(err, user) {
      if (err || !user) {
        return res.status(400).send('Authentication failed');
      } else {
        Article.find({}, null, {sort: {order: -1}}, function(err, articles) {
          if (err || !articles) {
            return res.json({
              type: false,
              msg: 'err: ' + err
            });
          } else {
            Settings.findOne({type: 'article'}, function(err, setting) {
              if (err) {
                return res.json({
                  type: false,
                  msg: 'err1: ' + err
                });
              } else if (!setting) {
                return res.json({
                  type: true,
                  data: articles
                });
              } else {
                return res.json({
                  type: true,
                  data: articles.slice(0, setting.setting.count)
                });
              }
            });
          }
        });
      }
    });
  }
};

exports.updateArticle = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  } else {
    User.findOne({token: req.body.access_token}, function (err, user) {
      if (err || !user) {
        return res.status(400).send('Authentication failed');
      } else {
        Article.findOne({_id: req.body.article._id}, function(err, article) {
          if (err || !article) {
            return res.json({
              type: false,
              msg: 'err: ' + err
            });
          } else {
            article.title = req.body.article.title;
            article.text = req.body.article.text;
            article.abstractText = req.body.article.abstractText;
            article.likedUsers = req.body.article.likedUsers.slice();
            article.order = req.body.article.order;
            article.featuredImage = req.body.article.featuredImage;
            article.isPrivate = req.body.article.isPrivate;

            article.save(function(err) {
              if (err) {
                return res.json({
                  type: false,
                  msg: 'err: ' + err
                });
              } else {
                return res.json({
                  type: true,
                  msg: 'updated'
                })
              }
            });
          }
        });
      }
    });
  }
};

exports.removeArticle = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  } else {
    User.findOne({token: req.body.access_token}, function (err, user) {
      if (err || !user) {
        return res.status(400).send('Authentication failed');
      } else {
        Article.findOneAndRemove({_id: req.body.id}, function(err) {
          if (err) {
            return res.json({
              type: false,
              msg: 'err: ' + err
            });
          } else {
            return res.json({
              type: true,
              msg: 'removed'
            })
          }
        });
      }
    });
  }
};

exports.getArticleById = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  } else {
    User.findOne({token: req.body.access_token}, function (err, user) {
      if (err || !user) {
        return res.status(400).send('Authentication failed');
      } else {
        Article.findOne({_id: req.body.id}, function(err, article) {
          if (err || !article) {
            return res.json({
              type: false,
              msg: 'err: ' + err
            });
          } else {
            return res.json({
              type: true,
              article: article
            });
          }
        });
      }
    });
  }
};
