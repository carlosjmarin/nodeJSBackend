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

var StudentSchema = new Schema({
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

var AdminSchema = new Schema({
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
  },
  facultyTF: {
    type: Boolean
  }
});

var EventSchema = new Schema({
  Created_date: {
    type: Date,
    default: Date.now
  },
  Club: {
    type: Boolean
  },
  Sport: {
    type: Boolean
  }
});

var HawkinsSchema = new Schema({
  Created_date: {
    type: Date,
    default: Date.now
  },
  Meal: {
    type: Boolean
  },
  FRESH: {
    type: Boolean
  }
});

var SportsSchema = new Schema({
  Created_date: {
    type: Date,
    default: Date.now
  },
  Basketball: {
    type: Boolean
  },
  Football: {
    type: Boolean
  },
  Baseball: {
    type: Boolean
  }
});

module.exports = mongoose.model('Users', UserSchema);