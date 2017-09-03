/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var userPlugin = require('mongoose-user');

var Schema = mongoose.Schema;

/**
 * User schema
 */

var NotificationSchema = new Schema(
  {
    type: {type: String, default: ''},
    userId: {type: String, default: ''},
    text: {type: Object, default: {}},
    createdDate: Date
  },
  { collection : 'notifications' }
);

module.exports = mongoose.model('Notification', NotificationSchema);
