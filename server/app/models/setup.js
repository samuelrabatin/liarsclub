
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var userPlugin = require('mongoose-user');

var Schema = mongoose.Schema;

/**
 * User schema
 */

var SetupsSchema = new Schema(
  {
    name: { type: String, default: '' },
    createdUser: { type: String, default: '' },
    setupDescription: { type: String, default: '' },
    difficulty: { type: String, default: '' },
    minimumMember: { type: String, default: '' },
    maximumMember: { type: String },
    playTime: { type: String },
    narrationText: { type: String },
    missingRules: { type: String },
    roleFrequencies: { type: String },
    imgId: { type: String },
    roles: { type: Array },
    voting: { type: Object, default: {name: '', description: ''} },
    create_date: { type: Date },
    updated_date: { type: Date }
  },
  { collection : 'setups' }
);

module.exports = mongoose.model('Setup', SetupsSchema);