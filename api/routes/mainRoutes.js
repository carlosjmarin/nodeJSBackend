//here we will route things
'use strict';
module.exports = function(app) { //constructor for module.exports
  var userList = require('../controllers/mainController');
  var studentList = require('../controllers/mainController');
  var adminList = require('../controllers/mainController');
  var eventList = require('../controllers/mainController');
  var sportsList = require('../controllers/mainController');

  // userList Routes
  app.route('/users')
    .get(userList.list_all_users)
    .post(userList.create_a_user);


  app.route('/users/:UserId')
    .get(userList.read_a_user)
    .get(userList.read_auth_level)
    .put(userList.update_a_user)
    .delete(userList.delete_a_user);

  //studentList Routes
  app.route('/students')
    .get(studentList.list_all_users)
    .post(studentList.create_a_user);
  
  app.route('/students/:StudentId')
    .get(studentList.read_a_user)
    .put(studentList.update_a_user)
    .delete(studentList.delete_a_user);
  
  //adminList Routes
  app.route('/admins')
    .get(adminList.list_all_users)
    .post(adminList.create_a_user);
    
  app.route('/admins/:AdminId')
    .get(adminList.read_a_user)
    .put(adminList.update_a_user)
    .delete(adminList.delete_a_user);

  //eventList
  app.route('/events')
    .get(eventList.list_all_users)
    .post(eventList.create_a_user);
  
  app.route('/events/:EventId')
    .get(eventList.read_a_user)
    .put(eventList.update_a_user)
    .delete(eventList.delete_a_user);

  //sportsList
app.route('/sports')
  .get(sportsList.list_all_users)
  .post(sportsList.create_a_user);
  
app.route('/sports/:SportsId')
  .get(sportsList.read_a_user)
  .put(sportsList.update_a_user)
  .delete(sportsList.delete_a_user);

};