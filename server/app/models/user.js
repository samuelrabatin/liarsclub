
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var userPlugin = require('mongoose-user');

var Schema = mongoose.Schema;

/**
 * User schema
 */

var UserSchema = new Schema(
  {
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    password: { type: String, default: '' },
    hashed_password: { type: String, default: '' },
    created_date: { type: Date },
    updated_date: { type: Date },
    active: { type: Date },
    last_login: { type: Date },
    token: String,
    type: { type: String, default: 'user' },
    confirmed: { type: Boolean, default: false }
  },
  { collection : 'users' }
);

module.exports = mongoose.model('User', UserSchema);
