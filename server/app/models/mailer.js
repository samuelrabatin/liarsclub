/*!
 * Module dependencies
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MailerSchema = new Schema(
  {
    from: String,
    host: String,
    secureConnection: Boolean, // use SSL
    port: Number, // port for secure SMTP
    transportMethod: {type: String, default: 'SMTP'}, // default is SMTP. Accepts anything that nodemailer accepts
    auth: Object
  },
  { collection : 'mailer' }
);

module.exports = mongoose.model('Mailer', MailerSchema);
