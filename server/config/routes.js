'use strict';

/**
 * Module dependencies.
 */

const home = require('../app/controllers/home');
const users = require('../app/controllers/users');
const clubs = require('../app/controllers/clubs');
const roles = require('../app/controllers/setups');
const forums = require('../app/controllers/forums/forums');
const topics = require('../app/controllers/forums/topics');
const posts = require('../app/controllers/forums/posts');
const reportedposts = require('../app/controllers/forums/reportedposts');

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
  app.post('/users/getuserbyid/', users.getProfileById);
  app.post('/users/login/', users.login);
  app.post('/users/checktoken/', users.checkToken);
  app.post('/users/register/', users.register);
  app.post('/users/logout/', users.logout);
  app.post('/users/saveprofile/', users.saveProfile);
  app.post('/users/getprofile/', users.getProfile);
  app.post('/users/getallprofiles/', users.getAllProfiles);

  app.post('/clubs/all/', clubs.getClubs);
  app.post('/clubs/add/', clubs.addClub);
  app.post('/clubs/tag/', clubs.tagClub);
  app.post('/clubs/remove/', clubs.removeClub);
  app.post('/clubs/untag/', clubs.untagClub);
  app.post('/clubs/admin/untag/', clubs.untagFromAdmin);

  app.post('/setups/getallroles/', roles.getAllRoles);
  app.post('/setups/getallvotings/', roles.getAllVotings);
  app.post('/setups/addrole/', roles.addRole);
  app.post('/setups/addsetup/', roles.addSetup);
  app.post('/setups/updatesetup/', roles.updateSetup);

  app.post('/setups/getsetupbyid/', roles.getSetupById);
  app.post('/setups/getallsetups/', roles.getSetups);

  app.post('/setups/removesetup/', roles.removeSetup);
  app.post('/setups/deletesetup/', roles.deleteSetup);
  app.post('/setups/restoresetup/', roles.restoreSetup);
  app.post('/setups/getremovedsetups/', roles.getRemovedSetups);

  app.post('/forums/getforums/', forums.getForums);
  app.post('/forums/getconfirmedforums/', forums.getConfirmedForums);
  app.post('/forums/addforum/', forums.addForum);
  app.post('/forums/activateforum/', forums.activateForum);
  app.post('/forums/deactivateforum/', forums.deactivateForum);
  app.post('/forums/deleteforum/', forums.deleteForum);

  app.post('/forums/gettopics/', topics.getTopics);
  app.post('/forums/gettopicbyid/', topics.getTopicById);
  app.post('/forums/getconfirmedtopics/', topics.getConfirmedTopics);
  app.post('/forums/getconfirmedtopicsbyforumid/', topics.getConfirmedTopicsByForumId);
  app.post('/forums/addtopic/', topics.addTopic);
  app.post('/forums/activatetopic/', topics.activateTopic);
  app.post('/forums/deactivatetopic/', topics.deactivateTopic);
  app.post('/forums/deletetopic/', topics.deleteTopic);
  app.post('/forums/topic/increaseview/', topics.increaseView);


  app.post('/forums/addpost/', posts.addPost);
  app.post('/forums/getallposts/', posts.getPosts);
  app.post('/forums/getpostsbytopicid/', posts.getPostsByTopicId);
  app.post('/forums/getpostbyid/', posts.getPostById);
  app.post('/forums/deletepost/', posts.deletePost);
  app.post('/forums/likepost/', posts.likePostById);
  app.post('/forums/removelikepost/', posts.removeLikePostById);
  app.post('/forums/dislikepost/', posts.dislikePostById);
  app.post('/forums/removedislikepost/', posts.removeDisLikePostById);

  app.post('/forums/reportpostbyid/', reportedposts.reportTest);
  app.post('/forums/getreportposts/', reportedposts.getReportedPosts);
  app.post('/forums/deletereportedpostbyid/', reportedposts.deleteReportedTest);

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
