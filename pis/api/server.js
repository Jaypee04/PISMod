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

var connection  = require('express-myconnection'); 
var mssql = require('mssql');

/* //MongoDB connection Config
var mongo = require('mongodb'); 
var dbPort = 27017;
var ObjectID = require('mongodb').ObjectID;
var	db = new mongo.Db('pis', new mongo.Server('localhost', dbPort, {}), {safe:false}); */

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
		//console.log(req.isAuthenticated());
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
		//var email = profile.userPrincipalName;'
		
		
		
		if(profile)
			{
				var name = profile.name.givenName+ ' ' + profile.name.familyName;
				done(null, name);
				
			}
		else
			{
				done(null, false, { message: 'Login Error!' });
			}
	}));
	
	passport.serializeUser(function(user, done) {
	  done(null, user);
	  //console.log(user);
	});

	passport.deserializeUser(function(user, done) {
	  done(null, user);
	  //console.log('from deserialize', user);
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
			
		}
	);
	
	app.get('/', ensureAuthenticated, function(req, res){
		res.sendFile('/index.html', {root: __dirname + '/../static'});
	});	
	
	app.get('/index.html', ensureAuthenticated, function(req, res){
		res.sendFile('/index.html', {root: __dirname + '/../static'});
	});
	
	app.get('/newEmployee', function(req, res){
		res.sendFile('/index.html', {root: __dirname + '/../static'});
	});
	
	app.get('/logout', function(req, res){
	  req.logout();
	  res.redirect('/');
	});
	
}

//Function that set the routes
function setRoutes(){
	//database configuration
	var config = {
		user: 'pis',
		password: 'pis',
		server: '192.168.8.16', 
		database: 'PIS'
	}
	
	// test routes
	app.get('/test', function(req, res){
		var profPic = 'Hello! It\'s functioning';
		res.end(profPic);
		
	});
	
	app.get('/getDegreeCourse',function(req,res){
		
		
		res.json([{degreeCode:'12',degreeType:'B.S.'}]);
		
	});
	
	app.post('/testUpdate', function(req, res){
				
		var connection = new mssql.Connection(config, function(err) {
			var ps = new mssql.PreparedStatement(connection);
			ps.input('DoB', mssql.Date);
			ps.input('IDP', mssql.VarChar(mssql.MAX));
			ps.input('PoB', mssql.VarChar(50));
			ps.input('sex', mssql.VarChar(2));
			ps.input('civilStatus', mssql.VarChar(50));
			ps.input('height', mssql.Decimal(18, 2));
			ps.input('weight', mssql.Decimal(18,2));
			ps.input('citizenship', mssql.VarChar(50));
			ps.input('bloodType', mssql.VarChar(50));
			ps.input('NamriaID', mssql.VarChar(50));
			ps.input('tin', mssql.VarChar(50));
			ps.input('GSIS', mssql.VarChar(50));
			ps.input('PAGIBIG', mssql.VarChar(50));
			ps.input('PHILHEALTH', mssql.VarChar(50));
			ps.input('SSS', mssql.VarChar(50));
			ps.input('eMail', mssql.VarChar(50));
			ps.input('cellphone', mssql.VarChar(50));
			ps.input('residentialSt', mssql.VarChar(50));
			ps.input('residentialMun', mssql.VarChar(50));
			ps.input('residentialProv', mssql.VarChar(50));
			ps.input('residentialZip', mssql.VarChar(50));
			ps.input('residentialTel', mssql.VarChar(50));
			ps.input('provincialSt', mssql.VarChar(50));
			ps.input('provincialMun', mssql.VarChar(50));
			ps.input('provincialProv', mssql.VarChar(50));
			ps.input('provincialZip', mssql.VarChar(50));
			ps.input('provincialTel', mssql.VarChar(50));
			ps.input('spouse_f', mssql.VarChar(50));
			ps.input('spouse_m', mssql.VarChar(50));
			ps.input('spouse_l', mssql.VarChar(50));
			ps.input('spouse_occu', mssql.VarChar(50));
			ps.input('spouse_empl', mssql.VarChar(50));
			ps.input('spouse_emplAdd', mssql.VarChar(50));
			ps.input('spouse_emplTel', mssql.VarChar(50));
			ps.input('father_f', mssql.VarChar(50));
			ps.input('father_m', mssql.VarChar(50));
			ps.input('father_l', mssql.VarChar(50));
			ps.input('mother_f', mssql.VarChar(50));
			ps.input('mother_m', mssql.VarChar(50));
			ps.input('mother_l', mssql.VarChar(50));
			ps.input('tax_no', mssql.VarChar(50));
			ps.input('tax_place', mssql.VarChar(50));
			ps.input('tax_date', mssql.Date);
			ps.input('date_accomplished', mssql.Date);
			
			ps.prepare("UPDATE EMP_DTL SET birth_date=@DoB, birth_prov=@PoB, sex_c=@sex, civil_stat=@civilStatus, height=@height, weight=@weight, blood_t=@bloodType, citizen=@citizenship, tin=@tin, gsis_id_no=@GSIS, pag_ibig=@PAGIBIG, ph_no=@PHILHEALTH, sss_no=@SSS, cel_no=@cellphone, email=@eMail, addr_st=@residentialSt, addr_mun=@residentialMun, addr_prov=@residentialProv, tel_no=@residentialTel, addr_zp=@residentialZip, paddr_st=@provincialSt, paddr_mun=@provincialMun,paddr_prov=@provincialProv,ptel_no=@provincialTel,paddr_zp=@provincialZip, s_first=@spouse_f,s_middle=@spouse_m,s_last=@spouse_l,spouse_occ=@spouse_occu,bus_name=@spouse_empl,bus_add=@spouse_emplAdd,bus_tel=@spouse_emplTel, f_first=@father_f,f_middle=@father_m,f_last=@father_l,m_first=@mother_f,m_middle=@mother_m,m_last=@mother_l, ctc_no=@tax_no, ctc_place=@tax_place, ctc_date=@tax_date,pds_accomp=@date_accomplished where emp_id=@NamriaID", function(err) {
				//console.log(err);
				var p = req.body.personnelInfo;
				var dOB = new Date(p.dateOfBirth);
				var taxdate = new Date(p.issuedDate);
				var dateaccomplished = new Date(p.dateAccomplished);
				var address = p.resAdd.split(',');
				var p_address = p.perAdd.split(',');
				var resSt = address[0];	
				var resMun = address[1]; 
				var resProv = address[2];
				var provSt = p_address[0]; 
				var provMun = p_address[1]; 
				var provProv = p_address[2];
				
				ps.execute({DoB:dOB,PoB:p.placeOfBirth, sex:p.sex, civilStatus:p.civilStatus, height:p.height, weight:p.weight, bloodType:p.bloodType, citizenship:p.citizenship, tin:p.TIN, GSIS:p.GSIS, PAGIBIG:p.PAGIBIG, PHILHEALTH:p.PHILHEALTH, SSS:p.SSS, cellphone:p.cellphone, eMail:p.eMail, residentialSt:resSt,residentialMun:resMun,residentialProv:resProv,residentialTel:p.resTel,residentialZip:p.resZip, provincialSt:provSt,provincialMun:provMun,provincialProv:provProv,provincialTel:p.perTel,provincialZip:p.perZip,spouse_f:p.spFirstname,spouse_m:p.spMiddlename,spouse_l:p.spSurname,spouse_occu:p.spOccu,spouse_empl:p.spEmployer,spouse_emplAdd:p.spBusAdd,spouse_emplTel:p.spBusTel, father_f:p.fatFirstname,father_m:p.fatMiddlename,father_l:p.fatSurname, mother_f:p.motFirstname,mother_m:p.motMiddlename,mother_l:p.motSurname, tax_no:p.taxNo,tax_place:p.issuedAt,tax_date:taxdate,date_accomplished:dateaccomplished, NamriaID:p.NID}, function(err, recordset) {
					//console.dir(err);
					
			
					ps.unprepare(function(err) {
						console.log("Record has been updated.");
						res.json({success:true});
					});
				});
			});
			/*
			for(var i=0;i<p.eligibility.length;i++)
				{
					var Title = p.eligibility[i].eligTitle;
					console.log(Title);
				}
			*/
			
			//Update Eligibility
			/* var p = req.body.personnelInfo;
			ps.input('careerTitle', mssql.NVarChar(35));
			ps.input('careerRating', mssql.Decimal(18, 2));
			ps.input('careerPlace', mssql.NVarChar(30));
			ps.input('NamriaID', mssql.VarChar(50));
			ps.input('licenseNumber', mssql.NVarChar(30));
			ps.input('dateOfRelease', mssql.Date);
			
				
				ps.prepare("INSERT INTO ELIG (EMP_ID,EXAM_T,[RATING], EXAM_PLACE) VALUES (@NamriaID,@careerTitle,@careerRating,@careerPlace)", function(err){
					for(item in p.eligibility){
						var e = p.eligibility[item];
						var CseCareer = e.eligTitle;
						var CseRating = e.eligRating;
						//var CseDate = e.eligDate.split('/');
						//var CseDateMonth = cseDate[0];
						//var CseDateDay = cseDate[1];
						//var CseDateYear = cseDate[2];
						var CsePlace = e.eligPlace;
						var CseNumber = e.eligLicenseNumber;
						var CseDor = new Date(e.eligDateOfRelease);
					
						ps.execute({careerTitle:CseCareer, careerRating:CseRating, careerPlace:CsePlace, dateOfRelease:CseDor ,NamriaID:p.NID},function(err, recordset){
							ps.unprepare(function(err){
								console.log("Record has been updated.");
								res.json({success:true});
							});
						});
					
					}
				});
			 */
		});
		
		
	});
	
	app.get('/connect', function(req, res){
		
		var connection = new mssql.Connection(config, function(err) {
			// ... error checks

			// Query
			//console.log(err);
			var request = new mssql.Request(connection); // or: var request = connection.request();
			request.query("select first_m +' '+middle_m+' '+last_m as employee, emp_dtl.* from emp_dtl left outer join plant on emp_dtl.emp_id = plant.emp_id where plant.ad_account = 'jcdelmundo'", function(err, recordset) {
				// ... error checks
				res.json(recordset);
				//console.dir(recordset);
			});

			

		});
		
	});//app.get ends here
	
	// read a record using NAMRIA ID
	app.get('/employees/:name', function(req, res){
		
		var connection = new mssql.Connection(config, function(err) {
			var ad_account = req.params.name;
			//basic profile
			query(connection, "SELECT DISTINCT FIRST_M as firstName, MIDDLE_M as middleName, LAST_M as surName, Sex_C as sex, civil_stat as civilStatus, BIRTH_DATE AS dateOfBirth, BIRTH_PROV AS placeOfBirth,CITIZEN as citizenship,HEIGHT as height,[WEIGHT] as weight,BLOOD_T as bloodType, id_picture as picture, EMP_DTL.EMP_ID as NID,TIN,GSIS_ID_NO as GSIS,PAG_IBIG as PAGIBIG,PH_NO as PHILHEALTH,SSS_NO as SSS,EMAIL as eMail,CEL_NO as cellphone,ADDR_ST+ ', ' +ADDR_MUN+ ', ' +ADDR_PROV as resAdd, ADDR_ZP as resZip, TEL_NO as resTel, PADDR_ST+ ', ' +PADDR_MUN+ ', '+PADDR_PROV as perAdd, PADDR_ZP as perZip, PTEL_NO as perTel,F_FIRST as fatFirstname, F_MIDDLE as fatMiddlename, F_LAST as fatSurname,M_FIRST as motFirstname, M_MIDDLE as motMiddlename, M_LAST as motSurname,S_FIRST as spFirstname, S_MIDDLE as spMiddlename, S_LAST as spSurname,SPOUSE_OCC as spOccu, BUS_NAME as spEmployer, BUS_ADD as spBusAdd, BUS_TEL as spBusTel, CTC_NO as taxNo, CTC_PLACE as issuedAt, CTC_DATE as issuedDate, PDS_ACCOMP as dateAccomplished FROM EMP_DTL LEFT OUTER JOIN plant ON EMP_DTL.EMP_ID = plant.emp_id WHERE plant.AD_ACCOUNT = @param",{param:ad_account}, function(rs){
				var employee = rs[0];
				//training
				query(connection, "SELECT COURSE_M as titleOfSeminar, SPONSOR as conductedBy, DATE_START AS trainingFrom, DATE_END AS trainingTo, HOURS AS numberOfHours FROM plant LEFT OUTER JOIN TRAINEMP ON plant.emp_id = TRAINEMP.EMP_ID WHERE plant.AD_ACCOUNT = @param",{param:ad_account}, function(rs){										
					employee.trainings = rs;
					
					//eligibility				
					query(connection, "SELECT DISTINCT EXAM_T as eligTitle, EXAM_PLACE as eligPlace, rating as eligRating FROM plant LEFT OUTER JOIN ELIG ON plant.emp_id = ELIG.EMP_ID WHERE plant.AD_ACCOUNT=@param",{param:ad_account}, function(rs){
						employee.eligibility = rs;
						
						//children
						query(connection, "SELECT DISTINCT CHILD_NAME as fullName, CHILD_BDAY as dateOfBirth FROM plant LEFT OUTER JOIN CHILD ON plant.emp_id = CHILD.EMP_ID WHERE plant.AD_ACCOUNT = @param",{param:ad_account}, function(rs){
							employee.children = rs;
							
							//education
							query(connection, "SELECT LEVEL_C as level, INSTITUTE as schoolName, Y_GRAD as yearGraduated, UNITS as highestGrade, START_YEAR as fromDate, END_YEAR as toDate, HONORS_T as scholarship FROM plant LEFT OUTER JOIN EDUC ON plant.emp_id = EDUC.EMP_ID WHERE plant.AD_ACCOUNT = @param",{param:ad_account}, function(rs){
								employee.education = rs;
							
								//work experience
								query(connection, "SELECT START_D as wrkExFrm, END_D as wrkExTo, POS_TITLE as wrkExPos, OFFICE_M as wrkExOff, SALARY_A as wrkExMonSal, PERSAL as wrkExPerSal, SERV.STAT_APPT as wrkExAppt FROM plant LEFT OUTER JOIN SERV ON plant.emp_id = SERV.EMP_ID WHERE plant.AD_ACCOUNT = @param",{param:ad_account}, function(rs){
									employee.experience = rs;
							
									//skills
									query(connection, "SELECT skills as sSkills FROM plant LEFT OUTER JOIN sp_skill ON plant.emp_id = sp_skill.EMP_ID WHERE plant.AD_ACCOUNT = @param",{param:ad_account}, function(rs){
										employee.skills = rs;
										
										//recognition
										query(connection, "SELECT distinct as recog FROM plant LEFT OUTER JOIN non_acad ON plant.EMP_ID = non_acad.EMP_ID WHERE plant.AD_ACCOUNT = @param",{param:ad_account}, function(rs){
											employee.recognition = rs;
										
											//organization
											query(connection, "SELECT a_org as org FROM plant LEFT OUTER JOIN mem_org ON plant.EMP_ID = mem_org.EMP_ID WHERE plant.AD_ACCOUNT = @param",{param:ad_account}, function(rs){
												employee.organization = rs;
											
												//others
												query(connection, "SELECT [deg_3] as [national],[deg_4] as [local],[deg_3r] as nationalRemarks,[deg_4r] as localRemarks,[charged] as [charged],[charged_r] as chargedRemarks,[admin] as [offense],[admin_r] as offenseRemarks,[crime] as [violation],[crime_r] as violationRemarks,[retire] as [separated],[retire_r] as separatedRemarks,[elect] as [candidate],[elect_r] as candidateRemarks,[ind_g] as [indigenous],[ind_r] as indigenousRemarks,[dif_a] as [abled],[dif_r] as abledRemarks,[solo],[solo_r] as soloRemarks FROM plant LEFT OUTER JOIN chk_list ON plant.EMP_ID = chk_list.EMP_ID WHERE plant.AD_ACCOUNT = @param",{param:ad_account}, function(rs){
													employee.others = rs[0];
												
													//reference
													query(connection, "SELECT REFNAME as cName,REF_ADDR + ', ' + REF_MUN + ', ' + REF_PROV as cAdd, TEL_NO as cNum FROM plant LEFT OUTER JOIN REF ON plant.emp_id = REF.EMP_ID WHERE plant.AD_ACCOUNT = @param",{param:ad_account}, function(rs){
														employee.charReference = rs;
														res.json(employee);
														
													});
												});
											});
										});
									});
								});
							});
						}); 
					});
				});
				
				
			});
		
		});	
	});
	
	function query(conn,sql,param,callback){
		var ps = new mssql.PreparedStatement(conn);
		ps.input('param', mssql.VarChar(50));
		ps.prepare(sql, function(err){
			
			ps.execute(param, function(err, rs) {
				console.log(err,rs);
				callback(rs);
			});
		});
		
		
	}
	
	//Get data from apps
	app.get('/employees', function(req, res){
		var personnelData = req.body.personnelInfo;
		
	});
	
	/* //MongoDB CRUD
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

	// read a record using givenName
	app.get('/employees/:pangalan', function(req, res){
		db.open(function(err, client){
			
			var eName = req.params.pangalan;
			var employees = db.collection('employees');
			employees.findOne({firstName: eName}, function(err, employee){
				res.json(employee);
				client.close();
			});	

		});
	});
	
	// create/insert or update
	app.post('/employees', function(req, res){
		var personnelData = req.body.personnelInfo;
		db.open(function(err, client){
			
			if(personnelData._id)
				personnelData._id = new ObjectID(personnelData._id);
				
			var employees = db.collection('employees');
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
	}); */
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