//here we will model things
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  firstName: {
    type: String,
    required: 'Kindly enter your firstName'
  },
  lastName: {
    type: String,
    required: 'Kindly enter your lastName'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  trinityID: {
    type: Number,
    required: 'put your trinity id here'
  }
});

module.exports = mongoose.model('Users', UserSchema);