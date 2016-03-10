var	dbconfig = require('./dbconf.js');

module.exports = function(app){
	app.get('/index', function(req, res){
	  res.send('hello world');
	});
	app.get('/user', function(req, res){
	  res.send('Suneel Kumar');
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

};
