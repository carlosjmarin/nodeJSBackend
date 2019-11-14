//here you will need to start the server with npm install
//npm run start
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongodb = require('mongodb').MongoClient,
  User = require('./api/models/mainModel'), //created model loading here
  bodyParser = require('body-parser'),
  cors = require('cors');
  
// mongoose instance connection url connection
const url = 'mongodb://localhost:27017'

function addItem( item) {
mongodb.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.collection("testcollection").insertOne(item, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
})};

addItem({
  name: 'carlos',
  age: 23
})

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/mainRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);