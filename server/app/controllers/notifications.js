const Club = require('../models/club');
const User = require('../models/user');
const Notification = require('../models/notification');

const Server = require('../../server');

var io = Server.io;
var clients = [];

function add(type, text, userId) {
  var item = new Notification({
    type: type,
    text: text,
    userId: userId,
    createdDate: new Date()
  });

  item.save(function(err, event) {
    if(err) {
      console.log(err);
    } else {
      if (clients[event.userId]) {
        clients[event.userId].emit('message', {type: 'notification', msg: 'updated'});
      }
    }
  });
}

function currentUTCTime() {
  var now = new Date();
  now = new Date(now.toUTCString());

  return now;
}

exports.checkEvents = function() {
  Club.find({}, function(err, clubs) {
    if (err || !clubs) {
      console.log(err);
    } else if (!clubs.length) {
      console.log('no clubs');
    } else {
      for (var i = 0; i < clubs.length; i++) {
        for (var j = 0; j < clubs[i].events.length; j++) {
          var event = clubs[i].events[j];
          var now = currentUTCTime();
          var eventDate = new Date(event.date);

          if (eventDate.getTime() - now.getTime() < 1000 * 60 * 10 * 6 * 24 && !event.notificationSent) {
            for (var userIndex = 0; userIndex < clubs[i].taggedUsers.length; userIndex++) {
              add("event", event, clubs[i].taggedUsers[userIndex].userId);
            }

            event.notificationSent = true;
            Club.findOneAndUpdate({_id: clubs[i]._id}, clubs[i], function(err, club) {
              if (err) {
                console.log("err: ", err);
              }
            });
          }
        }
      }
    }
  });
};

exports.addNotification = function(type, text, userId) {
  addNotification(type, text, userId);
};

exports.getNotification = function (req, res) {
  if (typeof req.body.access_token === 'undefined') {
    return res.status(400).send('Authentication is required');
  }

  User.findOne({ token: req.body.access_token }, function(err, user) {
    if (err || !user) {
      return res.status(400).send('Authentication failed');
    } else {
      Notification.find({userId: user._id}, null, {sort: {createdDate: -1}}, function(err, notifications) {
        if (err || !notifications) {
          res.json({type: false, msg: "err: " + err});
        } else {
          res.json({type: true, notifications: notifications});
        }
      });
    }
  });
};

exports.addClient = function(id, socket) {
  clients[id] = socket;
};
