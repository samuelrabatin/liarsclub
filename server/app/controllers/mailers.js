const User = require('../models/user');
const Mailer = require('../models/mailer');

var send = require('gmail-send')({
  user: 'user@gmail.com',
  pass: 'abcdefghijklmnop',
  to:   'user@gmail.com',
  subject: 'test subject',
  text:    'gmail-send example 1'
});

exports.sendMail = function(to, msg) {
  Mailer.find({}, function(err, mailers) {
    if (err || !mailers || !mailers.length) {
      console.log('err ' + err);
    } else {
      send({
        user: mailers[0].auth.user,
        pass: mailers[0].auth.pass,
        to: to,
        subject: msg.subject,
        text: msg.text
      }, function (err, res) {
        console.log('* [example 1.1] send() callback returned: err:', err, '; res:', res);
      })
    }
  })
};
