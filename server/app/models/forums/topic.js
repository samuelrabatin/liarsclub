/*!
 * Module dependencies
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/**
 * forum schema
 */

var TopicSchema = new Schema(
  {
    title: {type: String, default: ''},
    text: {type: String, default: ''},
    forumId: {type: String, default: null},
    createdUserId: {type: String, default: null},
    createdDate: {type: Date, default: null},
    views: {type: Number, default: 0},
    replies: {type: Number, default: 0},
    locked: {type: Boolean, default: false},
    confirmed: {type: Boolean, default: true},
    likedUserIds: {type: Array, default: []},
    unlikedUserIds: {type: Array, default: []},
    lastreplied: Date
  },
  { collection : 'topics' }
);

module.exports = mongoose.model('Topic', TopicSchema);
