//here we will control things
'use strict';


var mongoose = require('mongoose'),
  User = mongoose.model('Users');
  Student = mongoose.model('Students')

exports.list_all_users = function(req, res) {
  User.find({}, function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};

exports.create_a_user = function(req, res) {
  var new_User = new User(req.body);
  new_User.save(function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};

exports.read_a_user = function(req, res) {
User.findOne({trinityID: req.params.trinityID},
  function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};

exports.update_a_user = function(req, res) {
  User.findOneAndUpdate({trinityID: req.params.trinityID}, req.body, 
    {new: true}, function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};

exports.delete_a_user = function(req, res) {

  User.remove({
    trinityID: req.params.trinityID
  }, function(err, User) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};

//Student

exports.Students.list_all_users = function(req, res) {
  User.find({}, function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};

exports.Students.create_a_user = function(req, res) {
  var new_User = new User(req.body);
  new_User.save(function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};