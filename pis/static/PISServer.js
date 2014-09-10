var port = 1210;
var express = require('express');
var app = express();
var router = express.Router();

var mongo = require('mongodb'); 
var dbPort = 27017;
var	db = new mongo.Db('mydb', new mongo.Server('localhost', dbPort, {}), {});
var doc1 = {
			"name":"me",
			"office":"here"
	};
		
db.open(function(){
	db.collection('testCollection', function(err, collection){
		var doc = {
			"name":"me",
			"office":"here"
		};
		var docu = JSON.stringify(doc);
		collection.insert(docu, function(){
			console.log("\nInsert command successful!");
			console.log(doc.name);
			console.log("Collection name: ", collection.collectionName);
		});
		
		
	});
	
});
db.close();
app.get('/collection', function(req, res) {
    db.open(function(){
		var x = db.collection('testCollection').find({name:'me'});
		console.log(x);
		
	});
});
/* app.get("/", function(req, res) {
    res.sendFile('index.html')
});

app.get("/app/users", function(req, res) {
   if (req.query.filter){
		res.send("List of Users matching " + req.query.filter + " handled by Jaypee");
	}
	else{
		res.send('List of users handled by Jaypee');
	}
}); 
 

 
app.get("/app/users/:name", function(req, res) {
    res.send("GET " + req.params.name + " user handled by Jaypee")
}); */
 
/* app.get("/app/users/?filter=", function(req, res) {
    res.send("List of Users matching " + req.query.filter + " handled by Jaypee")
 }); */

/* app.post("/app/users", function(req, res) { 
    res.send('POST handled by Jaypee')
	
});
 
app.put("/app/users", function(req, res) {
    res.send('PUT handled by Jaypee')
});
 
app.delete("/app/users", function(req, res) {
    res.send('DELETE handled by Jaypee')
}); */

app.use(express.static(__dirname));


var server = app.listen(port, function(){
	console.log('Listening on port %d', port); 
	console.log('Database connection on port',dbPort);
});