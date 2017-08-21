/*!
 * Module dependencies
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/**
 * post schema
 */

var ReportedPostSchema = new Schema(
  {
    postId: {type: String, default: null},
    createdDate: {type: Date, default: null},
    createdUserId: {type: String, default: null},
    text: {type: String, default: ''}
  },
  { collection : 'reportedposts' }
);

module.exports = mongoose.model('ReportedPost', ReportedPostSchema);
