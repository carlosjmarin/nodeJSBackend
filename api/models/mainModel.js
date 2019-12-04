//here we will model things
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  FirstName: 
  {
    type: String,
    required: 'Kindly enter your firstName'
  },
  LastName: 
  {
    type: String,
    required: 'Kindly enter your lastName'
  },
  CreatedDate: 
  {
    type: Date,
    default: Date.now
  },
  TrinityID: 
  {
    type: Number,
    required: 'put your trinity id here'
  }
});

var StudentSchema = new Schema({
  FirstName: 
  {
    type: String,
    required: 'Kindly enter your firstName'
  },
  LastName: 
  {
    type: String,
    required: 'Kindly enter your lastName'
  },
  CreatedDate: 
  {
    type: Date,
    default: Date.now
  },
  TrinityID: 
  {
    type: Number,
    required: 'put your trinity id here'
  }
});

var AdminSchema = new Schema({
  FirstName: 
  {
    type: String,
    required: 'Kindly enter your firstName'
  },
  LastName: 
  {
    type: String,
    required: 'Kindly enter your lastName'
  },
  CreatedDate: 
  {
    type: Date,
    default: Date.now
  },
  TrinityID: 
  {
    type: Number,
    required: 'Put your Trinity ID here'
  },
  Faculty: 
  {
    type: Boolean
  },
  Password: 
  {
    type: String
  }
});

var EventSchema = new Schema({
  EventDate: 
  {
    type: Date,
    required: 'Enter the event date'
    //default: Date.now
  },
  Club: 
  {
    Type: Boolean,
    Name: 
    {
      type: String
    },
    Description: 
    {
      type: String
    }
  },
  Sport: 
  {
    type: Boolean,
    MensSport: 
    {
      //Baseball, Basketball, Cross Country, Football, Soccer
      
    },
    WomensSport:
    {
      //Basketball, Cross Country, Soccer, Softball, Volleyball
    }
  }
});

/*var HawkinsSchema = new Schema({
  CreatedDate: {
    type: Date,
    default: Date.now
  },
  Meal: {
    type: Boolean
  },
  FRESH: {
    type: Boolean
  }
});*/

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
});

module.exports = mongoose.model('Users', UserSchema);
//we will make more of these for each schema nesseccary