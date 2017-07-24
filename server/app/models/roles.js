
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var userPlugin = require('mongoose-user');

var Schema = mongoose.Schema;

/**
 * User schema
 */

var RolesSchema = new Schema(
  {
    name: { type: String, default: '' },
    team: { type: String, default: '' },
    description: { type: String, default: '' },
    imgId: { type: String, default: '' },
    created_date: { type: Date },
    updated_date: { type: Date }
  },
  { collection : 'roles' }
);

module.exports = mongoose.model('Role', RolesSchema);
