//dependencies 
var express = require('express');
var app = express();
var bodyParser= require('body-parser');
var mongoose = require('mongoose');
Username = require('./models/username');

//body parser initializer for post functions-Json format
app.use(bodyParser.json());
//Two=require('./models/two.js');
// database connect- for now MongoDB

mongoose.connect('mongodb://localhost/ehealthsolutionsinc');
//database object
var db = mongoose.connection;   


// connection to database-check
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('database connected');
});

//..............................................................................................

app.get('/', function(req, res){

	res.send('ehealthsolutionsinc');
});

//..............................................................................................
// username get function 
app.get('/api/usernames', function(req, res){
	//passing the collection name in the function -collection name in database = usernames
 Username.getUsernames(function(err, usernames){

    if(err)
    {
    	 throw err;
    	 res.send('error at /api/usernames');

    }
     res.json(usernames);

 });
});
//..............................................................................................
// username get function by ID
app.get('/api/usernames/:_id', function(req, res){
  //passing the collection name in the function -collection name in database = usernames
  //usernames changed to username.......?????????
 Username.getUsernamesbyID  (req.params._id, function(err, username){

    if(err)
    {
       throw err;
       res.send('error api/username/:_id');

    }
     res.json(username);

 });
});
//..............................................................................................
// problem with the below module........exiting with error
app.get('/api/usernames/:lastname', function(req, res){
  //passing the collection name in the function -collection name in database = usernames
  //usernames changed to username.......?????????
 Username.getUsernamesbylastname(req.params.lastname, function(err, username){

    if(err)
    {
       throw err;
       res.send('error api/username/:lastname');

    }
     res.json(username);

 });
});
//Posting functions satrt from below
//***********************************************************


//..............................................................................................
app.post('/api/usernames', function(req, res){
  var username = req.body;
  //passing the collection name in the function -collection name in database = usernames
 Username.addUsername(username, function(err, username){

    if(err)
    {
       throw err;
       res.send('error at post  /api/username');

    }
     res.json(username);

 });
});
//..............................................................................................

//Update functions satrt from below
//***********************************************************
// any 500 server errors check for reference errors in functions: 

app.put('/api/usernames/:_id', function(req, res){
 var id = req.params._id;
  var username = req.body;
  //passing the collection name in the function -collection name in database = usernames
 Username.updateUsername(id, username, {}, function(err, username){

    if(err)
    {   
       throw err;
       res.send('error at put  /api/username');

    }
     res.json(username);

 });
});
//..............................................................................................

//Delete functions start from below
//***********************************************************

app.delete('/api/usernames/:_id', function(req, res){
 var id = req.params._id;
  // var username = req.body;
  //passing the collection name in the function -collection name in database = usernames
 Username.deleteUsername(id, function(err, username){

    if(err)
    {   
       throw err;
       res.send('error at delete  /api/username');

    }
     res.json(username);

 });
});
//..............................................................................................

 
app.listen(3000);
console.log('Running on hemanth3000');

