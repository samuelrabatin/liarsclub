/*!
 * Module dependencies
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/**
 * forum schema
 */

var ForumSchema = new Schema(
  {
    title: {type: String, default: ''},
    description: {type: String, default: ''},
    createdDate: {type: Date, default: null},
    createdUserId: {type: String, default: null},
    parentForumId: {type: String, default: null},
    subForumsId: {type: String, default: null},
    topics: {type: Number, default: 0},
    posts: {type: Number, default: 0},
    confirmed: {type: Boolean, default: false},
    level: {type: Number, default: 0}
  },
  { collection : 'forums' }
);

module.exports = mongoose.model('Forum', ForumSchema);
