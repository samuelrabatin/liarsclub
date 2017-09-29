/*!
 * Module dependencies
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/**
 * User schema
 */

var ArticleSchema = new Schema(
  {
    title: String,
    text: String,
    createdUserId: String,
    createdDate: Date,
    likedUsers: Array,
    order: Number,
    featuredImage: String,
    abstractText: String,
    isPrivate: {type: Boolean, default: true}
  },
  { collection : 'articles' }
);

module.exports = mongoose.model('Article', ArticleSchema);
