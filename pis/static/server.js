var port = 1210;
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var multiparty = require('connect-multiparty');


var mongo = require('mongodb'); 
var dbPort = 27017;
var ObjectID = require('mongodb').ObjectID;
var	db = new mongo.Db('pis', new mongo.Server('localhost', dbPort, {}), {safe:false});

//================ CONFIG ===============//

app.use(bodyParser.json());
app.use(cookieParser()) // required before session.
app.use(session({ 
	secret: 'g30p0rt@l',
	resave: true,
	saveUninitialized: true
}));

//=============== ROUTES ===============//


// read list
app.get('/employees', function(req, res){
	
	db.open(function(err, client){
		
		var employees = db.collection('employees');
		employees.find().toArray(function(err, employeeList){
			res.json(employeeList);
			client.close();
		});	

	});
	
});

/* // read a record
app.get('/employees/:id', function(req, res){
	db.open(function(err, client){
		
		var _id = new ObjectID(req.params.id);
		
		var employees = db.collection('employees');
		employees.findOne({_id: _id}, function(err, employee){
			res.json(employee);
			client.close();
		});	

	});
}); */

// read a record using NAMRIA ID
app.get('/employees/:id', function(req, res){
	db.open(function(err, client){
		
		var NID = req.params.id;
		var employees = db.collection('employees');
		employees.findOne({NID: NID}, function(err, employee){
			res.json(employee);
			client.close();
		});	

	});
});

// create/insert or update
app.post('/employees', function(req, res){

	db.open(function(err, client){
		var personnelData = req.body.personnelInfo;
		var employees = db.collection('employees');
		if(personnelData._id)
			personnelData._id = new ObjectID(personnelData._id);
		employees.save(personnelData, function(err, employeeSaved){
			res.end();
			client.close();
		});
		
	});
	
});


// delete
app.delete('/employees/:id', function(req, res){
	db.open(function(err, client){
		
		var NID = req.params.id;
		var employees = db.collection('employees');
		employees.remove({NID: NID}, function(err, count){
			res.json({count: count});
			client.close();
		});
		
	});
});





//=============== FUNCTIONS ============//









//=============== START ===============//
app.use(express.static(__dirname));
var server = app.listen(port, function(){

	console.log('Listening on port %d', server.address().port);

});

