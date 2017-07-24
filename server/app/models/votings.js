
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var userPlugin = require('mongoose-user');

var Schema = mongoose.Schema;

/**
 * User schema
 */

var VotingsSchema = new Schema(
  {
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    created_date: { type: Date },
    updated_date: { type: Date }
  },
  { collection : 'votings' }
);

module.exports = mongoose.model('Voting', VotingsSchema);
