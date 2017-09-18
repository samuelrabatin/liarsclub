
/*!
 * Module dependencies.
 */

const User = require('../models/user');
const Setting = require('../models/home');

exports.index = function (req, res) {
  res.send({
    title: 'Node Express Mongoose Boilerplate'
  });
};

exports.getArticleSetting = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  } else {
    User.findOne({token: req.body.access_token}, function (err, user) {
      if (err || !user) {
        return res.status(400).send('Authentication failed');
      } else {
        Setting.findOne({type: 'article'}, function(err, articleSetting) {
          if (err) {
            res.json({
              type: false,
              msg: 'err:' + err
            });
          } else if (!articleSetting) {
            res.json({
              type: false,
              msg: 'noArticleSetting'
            });
          } else {
            res.json({
              type: true,
              setting: articleSetting
            })
          }
        });
      }
    });
  }
};

exports.setArticleSetting = function(req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  } else {
    User.findOne({token: req.body.access_token}, function (err, user) {
      if (err || !user) {
        return res.status(400).send('Authentication failed');
      } else {
        if (req.body.articleSetting._id) {
          Setting.findOne({_id: req.body.articleSetting._id}, function (err, articleSetting) {
            if (err || !articleSetting) {
              res.json({
                type: false,
                msg: 'err:' + err
              });
            } else {
              articleSetting.setting = req.body.articleSetting.setting;
              articleSetting.save(function (err) {
                if (err) {
                  res.json({
                    type: false,
                    msg: 'err:' + err
                  });
                } else {
                  res.json({
                    type: true,
                    msg: 'updated'
                  });
                }
              });
            }
          });
        } else {
          var newSetting = new Setting({
            type: 'article',
            setting: req.body.articleSetting.setting
          });
          newSetting.save(function (err) {
            if (err) {
              res.json({
                type: false,
                msg: 'err1:' + err
              });
            } else {
              res.json({
                type: true,
                msg: 'updated'
              });
            }
          });
        }
      }
    });
  }
};
