//here you will need to start the server with npm install
//npm run start
var express = require('express'),//importing express, runs app
  //path = require('path'),//added for pug
  app = express(),               //express class constructor
  port = process.env.PORT || 3000, //first goto p.e.p process attribute attribute | if null | runs on 3000 port
  mongoose = require('mongoose'),//importing mongoose
  User = require('./api/models/mainModel'), //importing model here
  bodyParser = require('body-parser');//parses requests and responses
  //app.set('views', path.join(__dirname, 'views'));
  //app.set('view engine', 'pug');
// mongoose instance connection url connection
mongoose.connect('mongodb://localhost/users'); //POWERFUL, singleton instance
//let db = mongoose.connection;//setting a varibale for database
//let Superuser = require('./api/models/mainModel');

//connects to database, stores ref point to single db connection
//this is a huge library of functions for connecting to mongo
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// app.get('/', function(req, res){
//   Superuser.find({}, function(err, supuser){
//     if(err){
//       console.log(err);
//     }else
//     res.render('index');
//   })
// });

var routes = require('./api/routes/mainRoutes'); //importing route, saved in routes
routes(app); //register the route, as an instance of express

app.listen(port);//listening for use req, will match req uri to routes
//routes then controller then model

console.log('Calendar App RESTful API server started on: ' + port);