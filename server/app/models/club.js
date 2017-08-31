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
    regularType: {type: Array, default: []},
    regularPeriod: {type: Number, default: ''},
    dayOfWeek: {type: Array, default: []},
    time: {type: String, default: ''},
    starting: {type: String, default: ''},
    location: {type: String, default: ''},
    activeMembers: {type: Number, default: 0},
    pastMembers: {type: Number, default: 0},
    tagWaitingMembers: {type: Number, default: 0},
    username: {type: String, default: ''},
    userId: {type: String, default: ''},
    email: {type: String, default: ''},
    websiteLink: {type: String, default: ''},
    facebookLink: {type: String, default: ''},
    confirmed: {type: Boolean, default: false},
    irregularly: {type: Boolean, default: false},
    regularly: {type: Boolean, default: false},
    created: {type: String, default: new Date()},
    taggedUsers: Array,
    events: Array,
  },
  { collection : 'clubs' }
);

module.exports = mongoose.model('Club', ClubSchema);
