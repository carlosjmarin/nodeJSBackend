//here we will route things
'use strict';
module.exports = function(app) {
  var userList = require('../controllers/mainController');
  var studentList = require('.../controllers/maniController')

  // userList Routes
  app.route('/users')
    .get(userList.list_all_users)
    .post(userList.create_a_user);


  app.route('/users/:UserId')
    .get(studentList.read_a_user)
    .put(studentList.update_a_user)
    .delete(studentList.delete_a_user);

  //studentList Routes
  app.route('/students')
    .get(studentList.list_all_users)
    .post(studentList.create_a_user);


  app.route('/students/:StudentId')
    .get(studentList.read_a_user)
    .put(studentList.update_a_user)
    .delete(studentList.delete_a_user);
};