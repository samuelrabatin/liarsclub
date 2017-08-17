/*!
 * Module dependencies
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/**
 * post schema
 */

var PostSchema = new Schema(
  {
    text: {type: String, default: ''},
    topicId: {type: String, default: null},
    createdUserDate: {type: Date, default: null},
    createdUserId: {type: String, default: null},
    likeUsersId: {type: Array, default: []},
    unlikeUsersId: {type: Array, default: []}
  },
  { collection : 'posts' }
);

module.exports = mongoose.model('Post', PostSchema);
