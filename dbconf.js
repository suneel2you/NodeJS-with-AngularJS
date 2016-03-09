/* Database Connection
 */
var mysql = require('mysql');
var connection = mysql.createConnection({   
   host     : 'localhost',
   user     : 'root',
   password : 'root',
   database : 'node_angular'
});

connection.connect(function(err){
	if(err) return console.log(err);	
});

exports.addUserData = function(data, callback)
{
	console.log(data);
	connection.query("INSERT INTO users(name,username,email,password) VALUES (?,?,?,?)",[data.username,data.email,data.password,data.name], callback);
};

