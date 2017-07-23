
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var userPlugin = require('mongoose-user');

var Schema = mongoose.Schema;

/**
 * User schema
 */

var ProfileSchema = new Schema(
  {
    firstname: { type: String, default: '' },
    lastname: { type: String, default: '' },
    username: { type: String, default: '' },
    email: { type: String, default: '' },
    imgId: { type: String, default: '' },
    created_date: { type: Date },
    updated_date: { type: Date }
  },
  { collection : 'profiles' }
);

module.exports = mongoose.model('Profile', ProfileSchema);
