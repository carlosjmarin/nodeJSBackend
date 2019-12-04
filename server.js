//here you will need to start the server with npm install
//npm run start
var express = require('express'),//importing express, runs app
  app = express(),               //express class constructor
  port = process.env.PORT || 3000, //first goto p.e.p process attribute attribute | if null | runs on 3000 port
  mongoose = require('mongoose'),//importing mongoose
  //User = require('./api/models/mainModel'), //importing model here
  bodyParser = require('body-parser');//parses requests and responses
  
// mongoose instance connection url connection
mongoose.connect('mongodb://localhost/Maindb'); //POWERFUL, singleton instance
//connects to database, stores ref point to single db connection
//this is a huge library of functions for connecting to mongo
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/mainRoutes'); //importing route, saved in routes
routes(app); //register the route, as an instance of express

app.listen(port);//listening for use req, will match req uri to routes
//routes then controller then model

console.log('todo list RESTful API server started on: ' + port);