var port = 1210;
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var multiparty = require('connect-multiparty');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var WindowsStrategy = require('passport-windowsauth');
var flash = require('connect-flash');

var mongo = require('mongodb'); 
var dbPort = 27017;
var ObjectID = require('mongodb').ObjectID;
var	db = new mongo.Db('pis', new mongo.Server('localhost', dbPort, {}), {safe:false});

//================ CONFIG ===============//

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser()); // required before session.
app.use(session({ 
	secret: 'p1s',
	resave: true,
	saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//=============== START ===============//
startServer();


//=============== ROUTES ===============//


//=============== FUNCTIONS ============//

//Function that authenticates user
function setAuthentication(){

	app.engine('html', require('ejs').renderFile);
	
	

	function findById(id, fn) {
	  var idx = id - 1;
	  if (users[idx]) {
		fn(null, users[idx]);
	  } else {
		fn(new Error('User ' + id + ' does not exist'));
	  }
	} 
	
	function findByUsername(username, fn) {
	  for (var i = 0, len = users.length; i < len; i++) {
		var user = users[i];
		if (user.username === username) {
		  return fn(null, user);
		}
	  }
	  return fn(null, null);
	} 
	
	function ensureAuthenticated(req, res, next) {
		console.log(req.isAuthenticated());
		if (req.isAuthenticated()) { return next(); }
	  	res.sendFile('/login.html', {root: __dirname + '/../static'});
	}

	//use windows strategy here instead of local strategy
	passport.use(new WindowsStrategy({
		ldap: {
			url:             'ldap://192.168.8.11/OU=NAMRIA,DC=namria,DC=gov,DC=ph',
			base:            'OU=NAMRIA,DC=namria,DC=gov,DC=ph',
			bindDN:          'auth',
			bindCredentials: 'p@$$w0rd'
		},
		integrated:false,
	}, 
	
	function(profile, done){
		//console.log(profile, done);
		
		if(profile)
			{
				done(null, profile)
			}
		else
			{
				done(null, false, { message: 'Login Error!' });
			}
		/*User.findOrCreate({ waId: profile.id }, function (err, user) {
			done(err, user);
		});*/
	}));
	
	/* passport.use(new LocalStrategy(
		
		function(username, password, done) {
		console.log('passport use',username + ' ' +password);
		// asynchronous verification, for effect...
		process.nextTick(function () {
		  
		  // Find the user by username.  If there is no user with the given
		  // username, or the password is not correct, set the user to `false` to
		  // indicate failure and set a flash message.  Otherwise, return the
		  // authenticated `user`.
		  findByUsername(username, function(err, user) {
			if (err) { return done(err); }
			if (!user) { return done(null, false, { message: 'Unknown user: ' + username }); }
			if (user.password != password) { return done(null, false, { message: 'Invalid password' }); }
			//var validPassword = passwordHash.verify(password, user.password);
			//if (!validPassword) { return done(null, false, { message: 'Invalid password' }); }
			//console.log('validPassword =', validPassword, password, user.password);
			return done(null, user);
		  })
		});
	  }
	));  */

	passport.serializeUser(function(user, done) {
	  done(null, user);
	  console.log(user);
	});

	passport.deserializeUser(function(user, done) {
	  /*findById(id, function (err, user) {
		done(err, user);
	  });*/
	  //var user = {id:user};
	  done(null, user);
	  console.log('from deserialize', user);
	});
	
	app.post('/login',
		passport.authenticate('WindowsAuthentication'), 
		function(req,res){
			if(req.user)
			{
				res.json({success:true,user:req.user});
			}
			else
			{
				res.json({success:false});
			}
			
			//res.json({success:false, user:req.user});
			
		}
	);
	
	/* app.post('/login', function(req, res, next) {
		passport.authenticate('WindowsAuthentication', function(err, user, info) {
		console.log(err, user, info);
			if (err) { return next(err) }
			if (!user) {
				return res.json({success: false});//, msg: info.message});
			}
			req.login(user, function(err) {
				
				if (err) { return next(err); }
				return res.json({success: true, msg: 'Valid user!'});
			});
		})(req, res, next);
	}); */
	
	app.get('/', ensureAuthenticated, function(req, res){
		res.sendFile('/index.html', {root: __dirname + '/../static'});
	});	
	
	app.get('/index.html', ensureAuthenticated, function(req, res){
		res.sendFile('/index.html', {root: __dirname + '/../static'});
	});
	
	app.get('/logout', function(req, res){
	  req.logout();
	  res.redirect('/');
	});
	
}

//Function that set the routes
function setRoutes(){
	// test routes
	app.get('/test', function(req, res){
		var profPic = 'Hello! It\'s functioning';
		res.end(profPic);
	});

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
}

function startServer(){

	setAuthentication();
	setRoutes();
	
	app.use('/', express.static(__dirname + '/../static'));
	//app.use(express.static(__dirname));
	var server = app.listen(port, function(){
		console.log('Listening on port %d', server.address().port);
	});

}




