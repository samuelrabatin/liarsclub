'use strict';

/**
 * Module dependencies.
 */

const home = require('../app/controllers/home');
const users = require('../app/controllers/users');
const clubs = require('../app/controllers/clubs');
const roles = require('../app/controllers/setups');

/**
 * Expose
 */

module.exports = function (app, passport) {
  // Enable CORS from client-side
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    }
    else {
      next();
    }
  });

  app.get('/', home.index);

  app.post('/users/', users.getAllUsers);
  app.post('/users/login/', users.login);
  app.post('/users/checktoken/', users.checkToken);
  app.post('/users/register/', users.register);
  app.post('/users/logout/', users.logout);
  app.post('/users/saveprofile/', users.saveProfile);
  app.post('/users/getprofile/', users.getProfile);

  app.post('/clubs/all/', clubs.getClubs);
  app.post('/clubs/add/', clubs.addClub);

  app.post('/setups/getallroles/', roles.getAllRoles);
  app.post('/setups/getallvotings/', roles.getAllVotings);
  app.post('/setups/addrole/', roles.addRole);
  app.post('/setups/addsetup/', roles.addSetup);
  app.post('/setups/updatesetup/', roles.updateSetup);
  app.post('/setups/getallsetups/', roles.getSetups);

  /**
   * Error handling
   */

  app.use(function (err, req, res, next) {
    // treat as 404
    if (err.message
      && (~err.message.indexOf('not found')
      || (~err.message.indexOf('Cast to ObjectId failed')))) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).render('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function (req, res, next) {
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not found'
    });
  });
};
