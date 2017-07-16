/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var userPlugin = require('mongoose-user');

var Schema = mongoose.Schema;

/**
 * User schema
 */

var ClubSchema = new Schema(
  {
    title: {type: String, default: ''},
    address: {type: String, default: ''},
    type: {type: String, default: ''},
    imgUrl: {type: String, default: ''},
    regularType: {type: String, default: ''},
    regularPeriod: {type: Number, default: ''},
    dayOfWeek: {type: String, default: ''},
    time: {type: String, default: ''},
    starting: {type: String, default: ''},
    location: {type: String, default: ''},
    activeMembers: {type: Number, default: ''},
    pastMembers: {type: Number, default: ''},
    username: {type: String, default: ''},
    confirmed: {type: Boolean, default: false},
    created: {type: String, default: new Date()}
  },
  { collection : 'clubs' }
);

module.exports = mongoose.model('Club', ClubSchema);
