/*!
 * Module dependencies
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/**
 * User schema
 */

var HomeSchema = new Schema(
  {
    type: String,
    setting: Object
  },
  { collection : 'home_settings' }
);

module.exports = mongoose.model('Setting', HomeSchema);
