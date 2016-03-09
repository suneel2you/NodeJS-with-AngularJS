/* Main Server file 
 * Include libreries
 */
var express = require('express');
var mysql = require('mysql');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var	dbconfig = require('./dbconf.js');



/* Give Port number
 */
var port = process.env.PORT || 4040;

var app = express();

console.log(app.get('env'));
/* view file load  Default */
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());                        

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


/* or */
app.get('/', function(req, res){
  res.send('hello world');
});
app.post('/register', function(req, res) 
{
	var form = req.body.data;
	//console.log(form);
	var user = {name:form.name, username: form.username, email: form.email,  password: form.password};	
	dbconfig.addUserData(user, function(err, info)
	{
		if(err) console.log("Something Went Wrong :"+ err);
		user.id = info.insertId;
		res.json(user);
		console.log(user.id);
		if(user.id){
			console.log("Successfully Registered.");
		}
	});
});
app.use('/controllers',  express.static(__dirname + '/controllers'));
app.use('/views',  express.static(__dirname + '/views'));
    
app.listen(port);
	console.log("Listening on Port :"+port);
