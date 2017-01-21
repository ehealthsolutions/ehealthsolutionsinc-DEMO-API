var mongoose = require('mongoose');



//Username schema
var usernameSchema = mongoose.Schema({
    firstname:{
    	type: String,
    	required: true 
    },
     lastname:{
         type: String,
         required: true
     }

});
//object to be accesed from outside- from app.js
var Username = module.exports = mongoose.model('Username', usernameSchema);

// getting the data from the database collection.
 module.exports.getUsernames = function(callback, limit){
 	Username.find(callback).limit(limit);
 }


// getting the user name by id
 module.exports.getUsernamesbyID = function(id, callback){
 	Username.findById(id, callback);
 }
// problem with the below module.....find function not valid!
 module.exports.getUsernamesbylastname = function(lastname, callback){
 	Username.find(lastname, callback);
 }

 //........................................................Post functions module

 // posting 
 module.exports.addUsername = function(username, callback){
 	Username.create(username, callback);
 }
 //........................................................end of post function modules:


 //........................................................Update functions modules

module.exports.updateUsername = function(id, username, options, callback){
 	var query = {_id: id};
 	var update = {
 		firstname : username.firstname,
 		lastname : username.lastname


 	}
 	Username.findOneAndUpdate(query, update, options, callback);
 }

//........................................................end of Update modules

//........................................................delete functions modules

module.exports.deleteUsername = function(id, callback){
 	var query = {_id: id};
 	
 Username.remove(query, callback);
 }

//........................................................end of delete modules





























