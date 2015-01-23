var personnelNoData = {
  "surName": "",
  "firstName": "",
  "middleName": "",
  "nameExtension": "",
  "dateOfBirth": "",
  "placeOfBirth": "",
  "sex": "",
  "civilStatus": "",
  "citizenship": "",
  "height": "",
  "weight": "",
  "bloodType": "",
  "picture":"data:image/png;base64,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",
  "NID": "",
  "TIN": "",
  "GSIS": "",
  "PAGIBIG": "",
  "PHILHEALTH": "",
  "SSS": "",
  "eMail": "",
  "cellphone": "",
  "resAdd": "",
  "resZip": 0,
  "resTel": "",
  "perAdd": "",
  "perZip": 0,
  "perTel": "",
  "spSurname": "",
  "spFirstname": "",
  "spMiddlename": "",
  "spOccu": "",
  "spEmployer": "",
  "spBusAdd": "",
  "spBusTel": "",
  "children": [
    
  ],
  "fatSurname": "",
  "fatFirstname": "",
  "fatMiddlename": "",
  "motSurname": "",
  "motFirstname": "",
  "motMiddlename": "",
  "education": [
    
  ],
  "training": [
    
  ],
  "skills": [
    
  ],
  "recognition": [
    
  ],
  "organization": [
    
  ],
  "charReference": [
    
  ],
  "tax": {
    "taxNo": "",
    "issuedAt": "",
    "issuedDate": ""
  },
  "dateAccomplished": ""
};

Ext.define('Wizard', {
	
	alias: 'widget.wizard',
	extend: 'Ext.tab.Panel',
	requires:['Ext.util.*'],
	tbar: [
		'->',
		{
			xtype: 'button',
			text: 'Save',
			handler: function(){
				var me = this.up('wizard');
				var personnel = me.getFormData();
				
				//Send the personnel data to server.js
				Ext.Ajax.request({
					url: '/testUpdate',
					method: 'POST',
					jsonData: {
						personnelInfo: personnel
					},
					success: function(response){
						Ext.Msg.alert('Success', 'Employee record has been updated!');
					},
					failure: function(response){
						console.log(response.statusText);
						Ext.Msg.alert('Error', response.statusText);
						
					}
				
				});
			}
		},
		'-',
		/* {
			xtype: 'textfield',
			fieldLabel: 'Search NAMRIA ID',
			labelWidth:140,
			itemId:'txtSearch'
		}, 
		{
			xtype: 'button',
			text: 'Search',
			handler: function(){
				var me = this.up('wizard');
				var NamriaID = me.down('#txtSearch').getValue();
				
				me.getEmployee(NamriaID);
				
			}
		}, */
		{
			xtype: 'button',
			text: 'Logout',
			handler: function(){
				Ext.Ajax.request({
					url: '/logout',
					method: 'GET',
					success: function(response){
						
						location.href = '/';
					},
					failure: function(response){
						Ext.Msg.alert('Error', response.status);
						console.log(response.status);
					}
				 
				});
			}
		} 
		
	],
	loadFormData: function(p){
		var me = this;

		
		me.down('#txtSurname').setValue(p.surName);
		me.down('#txtFirstname').setValue(p.firstName);
		me.down('#txtMiddlename').setValue(p.middleName);
		me.down('#txtNameExtension').setValue(p.nameExtension);
		me.down('#dteDateofBirth').setValue(new Date(p.dateOfBirth));
		me.down('#txtPlaceofBirth').setValue(p.placeOfBirth);
		me.down('#cboSex').setValue(p.sex);
		me.down('#cboCivilStatus').setValue(p.civilStatus);
		me.down('#txtCitizenship').setValue(p.citizenship);
		me.down('#txtHeight').setValue(p.height);
		me.down('#txtWeight').setValue(p.weight);
		me.down('#txtBloodType').setValue(p.bloodType);
		console.log(p.picture);
		if (p.picture==null)
		{
			var pic = me.down('#txtImage').setValue('data:image/png;base64,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');
			me.down('#imageViewer').setSrc(pic);
		}
		else if (p.picture!=='')
		{
			var pic = me.down('#txtImage').setValue(p.picture);
			me.down('#imageViewer').setSrc(pic);
		}
		
		me.down('#imageViewer').setSrc(p.picture);
		me.down('#txtNID').setValue(p.NID);
		me.down('#txtTIN').setValue(p.TIN);
		me.down('#txtGSIS').setValue(p.GSIS);
		me.down('#txtPagIbig').setValue(p.PAGIBIG);
		me.down('#txtPhilH').setValue(p.PHILHEALTH);
		me.down('#txtSSS').setValue(p.SSS);
		me.down('#txtEmail').setValue(p.eMail);
		me.down('#txtCp').setValue(p.cellphone);
		me.down('#txtResAdd').setValue(p.resAdd);
		me.down('#txtResZip').setValue(p.resZip);
		me.down('#txtResTel').setValue(p.resTel);
		me.down('#txtPerAdd').setValue(p.perAdd);
		me.down('#txtPerZip').setValue(p.perZip);
		me.down('#txtPerTel').setValue(p.perTel);
		me.down('#txtSpSurname').setValue(p.spSurname);
		me.down('#txtSpFirstname').setValue(p.spFirstname);
		me.down('#txtSpMiddlename').setValue(p.spMiddlename);
		me.down('#txtSpOccu').setValue(p.spOccu);
		me.down('#txtSpEmp').setValue(p.spEmployer);
		me.down('#txtSpBus').setValue(p.spBusAdd);
		me.down('#txtSpBusTel').setValue(p.spBusTel);
		
		var grid = me.down('#gridChildren');
		grid.getStore().removeAll();
		// load children
		for(item in p.children){
			var child = p.children[item];
			grid.getStore().add({
				name: child.fullName,
				dob:  new Date(child.dateOfBirth)
			});
		}
		
		me.down('#txtFatSurname').setValue(p.fatSurname);
		me.down('#txtFatFirstname').setValue(p.fatFirstname);
		me.down('#txtFatMiddlename').setValue(p.fatMiddlename);
		me.down('#txtMotSurname').setValue(p.motSurname);
		me.down('#txtMotFirstname').setValue(p.motFirstname);
		me.down('#txtMotMiddlename').setValue(p.motMiddlename);
		
		// load education
		var grid1 = me.down('#gridEducation');
		grid1.getStore().removeAll();
		
		for(item in p.education){
			var educ = p.education[item];
			grid1.getStore().add({
				Level: educ.level,
				NameofSchool: educ.schoolName,
				Degree:educ.degree,
				Course: educ.course,
				YearGraduated: educ.yearGraduated,
				HighestGrade: educ.highestGrade,
				FromDate: educ.fromDate,
				ToDate: educ.toDate,
				Scholarship: educ.scholarship
			});
		}
		
		// load eligibility
		var grid2 = me.down('#gridCSE');
		grid2.getStore().removeAll();
		
		for(item in p.eligibility){
			var cse = p.eligibility[item];
			grid2.getStore().add({
				CseCareer: cse.eligTitle,
				CseRating: cse.eligRating,
				CseDate: cse.eligDate,
				CsePlace: cse.eligPlace,
				CseNumber: cse.eligLicenseNumber,
				CseDor: cse.eligDateOfRelease
			});
			
		}
		
		// load training
		var grid3 = me.down('#gridTraining');
		grid3.getStore().removeAll();
		
		for(item in p.trainings){
			var train = p.trainings[item];
			grid3.getStore().add({
				TitleofSeminar: train.titleOfSeminar,
				TrainingFrom: new Date(train.trainingFrom),
				TrainingTo: new Date(train.trainingTo),
				NumberofHours: train.numberOfHours,
				ConductedBy: train.conductedBy
			});
			
		}
		
		//load work experience
		var grid4 = me.down('#gridWE');
		grid4.getStore().removeAll();
		
		for(item in p.experience){
			var exp = p.experience[item];
			
			//Salary Computation
			var monthlySalary;
			if (exp.wrkExPerSal==1)//Annually
			{
				monthlySalary = exp.wrkExMonSal/12;
			}
			if (exp.wrkExPerSal=='2')//Monthly
			{
				monthlySalary = exp.wrkExMonSal;
			}
			if (exp.wrkExPerSal=='3')//Daily
			{
				monthlySalary = (exp.wrkExMonSal*22)*12;
			}
			
			//Appointment Status
			var appointmentStatus;
			if (exp.wrkExAppt=='1')
			{
				appointmentStatus = 'Permanent';
			}
			else if (exp.wrkExAppt=='2')
			{
				appointmentStatus = 'Temporary';
			}
			else if (exp.wrkExAppt=='3')
			{
				appointmentStatus = 'Probitionary';
			}
			else if (exp.wrkExAppt=='4')
			{
				appointmentStatus = 'Co-Terminus';
			}
			else if (exp.wrkExAppt=='5')
			{
				appointmentStatus = 'Contractual';
			}
			else if (exp.wrkExAppt=='6')
			{
				appointmentStatus = 'Casual';
			}
			
			grid4.getStore().add({
				workExFrom:  new Date(exp.wrkExFrm),
				workExTo: new Date(exp.wrkExTo),
				workExPosition:exp.wrkExPos,
				workExDep: exp.wrkExOff,
				workExMnth:monthlySalary,
				workExSal: exp.wrkExSalGrd,
				workExStat:appointmentStatus,
				workExGovt:exp.wrkExGovServ
			});
			
		}
		
		//load voluntary works
		var gridVoluntary = me.down('#gridVW');
		gridVoluntary.getStore().removeAll();
		['VwName', 'VwFrom', 'VwTo', 'VwNumbers', 'VwPosition']
		for(item in p.voluntary){
			var v = p.voluntary[item];
			grid6.getStore().add({
				VwName: v.org_name,
				VwFrom: v.fr_date,
				VwTo: v.to_date,
				VwNumbers: v.no_hrs,
				VwPosition: v.position
			});
		}
		
		// load skills
		var grid5 = me.down('#gridSkills');
		grid5.getStore().removeAll();
		
		for(item in p.skills){
			var s = p.skills[item];
			grid5.getStore().add({
				SpecialSkills: s.sSkills
				
			});
			console.log(s.sSkills);
		}
		/* //if skills came from emp_dtl table
		console.log(p.skills[0].sSkills);
		var s = p.skills[0].sSkills;
		
		if (s!=='null')
		{
			var output = s.split(',');
			
			for(item in output){
				grid5.getStore().add({
					SpecialSkills: output[item]
				});
			}
		}
		else if (s=='null')
		{
			SpecialSkills:s;
		} */
		
		// load recognition
		var grid6 = me.down('#gridRecognition');
		grid6.getStore().removeAll();
		
		for(item in p.recognition){
			var r = p.recognition[item];
			grid6.getStore().add({
				TitleofRecognition: r.recog
			});
		}
		
		var grid7 = me.down('#gridOrganization');
		grid7.getStore().removeAll();
		// load organization
		for(item in p.organization){
			var o = p.organization[item];
			grid7.getStore().add({
				NameofOrganization: o.org
			});
		}
		me.down('#txtThirdDegree').setValue(p.others.nationalRemarks);
		me.down('#txtFourthDegree').setValue(p.others.localRemarks);
		me.down('#txtCharged').setValue(p.others.chargedRemarks);
		me.down('#txtAdministrative').setValue(p.others.offenseRemarks);
		me.down('#txtConvicted').setValue(p.others.violationRemarks);
		me.down('#txtSeparated').setValue(p.others.separatedRemarks);
		me.down('#txtElection').setValue(p.others.candidateRemarks);
		me.down('#txtIndigenous').setValue(p.others.indigenousRemarks);
		me.down('#txtAbled').setValue(p.others.abledRemarks);
		me.down('#txtSolo').setValue(p.others.soloRemarks);
		/* console.log(p.others.national);
		if (p.others.national=='0')
		{
			me.down('#radio1').setValue(false);
			me.down('#radio2').setValue(true);
		}
		else if(p.others.national=='1')
		{
			me.down('#radio1').setValue(true);
			me.down('#radio2').setValue(false);
		} */
		me.down('#national').setValue(p.others.national);
		me.down('#local').setValue(p.others.local);
		me.down('#charged').setValue(p.others.charged);
		me.down('#offense').setValue(p.others.offense);
		me.down('#violation').setValue(p.others.violation);
		me.down('#separated').setValue(p.others.separated);
		me.down('#candidate').setValue(p.others.candidate);
		me.down('#indigenous').setValue(p.others.indigenous);
		me.down('#abled').setValue(p.others.abled);
		me.down('#solo').setValue(p.others.solo);
		
		var grid8 = me.down('#gridReference');
		grid8.getStore().removeAll();
		// load reference
		for(item in p.charReference){
			var c = p.charReference[item];
			grid8.getStore().add({
				cReference: c.cName, 
				Address: c.cAdd, 
				cNumber: c.cNum
				
			});
		}
		me.down('#txtCertificate').setValue(p.taxNo);
		me.down('#txtIssuedAt').setValue(p.issuedAt);
		me.down('#dteIssuance').setValue(new Date(p.issuedDate));
		me.down('#dteDateAccomplished').setValue(new Date(p.dateAccomplished));
		
	}, 
	getFormData: function(){
		var me = this;
		console.log(me.down('#national').getValue());
		var personnel = {
			surName: me.down('#txtSurname').getValue(),
			firstName: me.down('#txtFirstname').getValue(),
			middleName: me.down('#txtMiddlename').getValue(),
			nameExtension: me.down('#txtNameExtension').getValue(),
			dateOfBirth: me.down('#dteDateofBirth').getValue(),
			placeOfBirth: me.down('#txtPlaceofBirth').getValue(),
			sex: me.down('#cboSex').getValue(),
			
			civilStatus: me.down('#cboCivilStatus').getValue(),
			citizenship: me.down('#txtCitizenship').getValue(),
			height: me.down('#txtHeight').getValue(),
			weight: me.down('#txtWeight').getValue(),
			bloodType: me.down('#txtBloodType').getValue(),
			//picture: me.down('#txtImage').getValue(),
			NID: me.down('#txtNID').getValue(),
			TIN: me.down('#txtTIN').getValue(),
			GSIS: me.down('#txtGSIS').getValue(),
			PAGIBIG: me.down('#txtPagIbig').getValue(),
			PHILHEALTH: me.down('#txtPhilH').getValue(),
			SSS: me.down('#txtSSS').getValue(),
			eMail: me.down('#txtEmail').getValue(),
			cellphone: me.down('#txtCp').getValue(),
			resAdd: me.down('#txtResAdd').getValue(),
			resZip: me.down('#txtResZip').getValue(),
			resTel: me.down('#txtResTel').getValue(),
			perAdd: me.down('#txtPerAdd').getValue(),
			perZip: me.down('#txtPerZip').getValue(),
			perTel: me.down('#txtPerTel').getValue(),
			spSurname: me.down('#txtSpSurname').getValue(),
			spFirstname: me.down('#txtSpFirstname').getValue(),
			spMiddlename: me.down('#txtSpMiddlename').getValue(),
			spOccu: me.down('#txtSpOccu').getValue(),
			spEmployer: me.down('#txtSpEmp').getValue(),
			spBusAdd: me.down('#txtSpBus').getValue(),
			spBusTel: me.down('#txtSpBusTel').getValue(),
			children: me.getChildren(),
			fatSurname: me.down('#txtFatSurname').getValue(),
			fatFirstname: me.down('#txtFatFirstname').getValue(),
			fatMiddlename: me.down('#txtFatMiddlename').getValue(),
			motSurname: me.down('#txtMotSurname').getValue(),
			motFirstname: me.down('#txtMotFirstname').getValue(),
			motMiddlename: me.down('#txtMotMiddlename').getValue(),
			education: me.getEducation(),
			eligibility:me.getEligibility(),
			training: me.getTraining(),
			skills: me.getSkills(),
			recognition: me.getRecognition(),
			organization: me.getOrganization(),
			nationalRemarks: me.down('#txtThirdDegree').getValue(),
			localRemarks: me.down('#txtFourthDegree').getValue(),
			chargedRemarks: me.down('#txtCharged').getValue(),
			offenseRemarks: me.down('#txtAdministrative').getValue(),
			violationRemarks: me.down('#txtConvicted').getValue(),
			separatedRemarks: me.down('#txtSeparated').getValue(),
			candidateRemarks: me.down('#txtElection').getValue(),
			indigenousRemarks: me.down('#txtIndigenous').getValue(),
			abledRemarks: me.down('#txtAbled').getValue(),
			soloRemarks: me.down('#txtSolo').getValue(),
			national: me.down('#national').getValue(),
			local: me.down('#local').getValue(),
			charged: me.down('#charged').getValue(),
			offense: me.down('#offense').getValue(),
			violation: me.down('#violation').getValue(),
			separated: me.down('#separated').getValue(),
			candidate: me.down('#candidate').getValue(),
			indigenous: me.down('#indigenous').getValue(),
			abled: me.down('#abled').getValue(),
			solo: me.down('#solo').getValue(),
			charReference: me.getCharRef(),
			taxNo:	me.down('#txtCertificate').getValue(),
			issuedAt: me.down('#txtIssuedAt').getValue(),
			issuedDate: me.down('#dteIssuance').getValue(),
			dateAccomplished: me.down('#dteDateAccomplished').getValue() 
		};
		return personnel;
		//console.log(JSON.stringify(personnel));
		
		
	},
	getChildren: function(){
		var me = this;
		var children = [];
		
		
		var grid = me.down('#gridChildren');
		
		grid.getStore().data.each(function(row) {
			children.push({ 
				fullName: row.data['name'], 
				dateOfBirth: row.data['dob'] 
			});
		});
		
		return children;
		
	},
	getEducation: function(){
		var me = this;
		var education = [];
		
		
		var grid = me.down('#gridEducation');
		
		grid.getStore().data.each(function(row) {
			education.push({ 
				level: row.data['Level'],
				schoolName: row.data['NameofSchool'],
				degree: row.data['Degree'],
				course: row.data['Course'],
				yearGraduated: row.data['YearGraduated'],
				highestGrade: row.data['HighestGrade'],
				fromDate: row.data['FromDate'],
				toDate: row.data['ToDate'],
				scholarship: row.data['Scholarship']
			});
		});
		
		return education;
		
	},
	getEligibility: function(){
		var me = this;
		var eligibility = [];
		
		
		var grid = me.down('#gridCSE');
		grid.getStore().data.each(function(row) {
			eligibility.push({ 
				eligTitle: row.data['CseCareer'], 
				eligRating: row.data['CseRating'],
				eligDate: row.data['CseDate'],
				eligPlace: row.data['CsePlace'],
				eligLicenseNumber: row.data['CseNumber'],
				eligDateOfRelease:row.data['CseDor']
				
			});
		});
		
		return eligibility;
	},
	getTraining: function(){
		var me = this;
		var training = [];
		
		
		var grid = me.down('#gridTraining');
		grid.getStore().data.each(function(row) {
			training.push({ 
				titleOfSeminar: row.data['TitleofSeminar'], 
				trainingFrom: row.data['TrainingFrom'],
				trainingTo: row.data['TrainingTo'],
				numberOfHours: row.data['NumberofHours'],
				conductedBy: row.data['ConductedBy']
			});
		});
		
		return training;
		
	},
	getWorkExperience: function(){
		var me = this;
		var experience = [];
		
		
		var grid = me.down('#gridWE');
		grid.getStore().data.each(function(row) {
			experience.push({ 
				wrkExFrm: row.data['workExFrom'], 
				wrkExTo: row.data['workExTo'],
				wrkExPos: row.data['workExPosition'],
				wrkExOff: row.data['workExDep'],
				wrkExMonSal: row.data['workExMnth'],
				wrkExSalGrd:row.data['workExSal'],
				wrkExAppt:row.data['workExStat'],
				wrkExGovServ:row.data['workExGovt']
			});
		});
		
		return experience;
	},
	getSkills: function(){
		var me = this;
		var skills = [];
		
		var grid = me.down('#gridSkills');
		grid.getStore().data.each(function(row) {
			skills.push({ 
				sSkills: row.data['SpecialSkills']
			});
		});
		
		return skills;
	},
	getRecognition: function(){
		var me = this;
		var recognition = [];
		
		var grid = me.down('#gridRecognition');
		grid.getStore().data.each(function(row) {
			recognition.push({ 
				recog: row.data['TitleofRecognition']
			});
		});
		
		return recognition;
	},
	getOrganization: function(){
		var me = this;
		var organization = [];
		
		var grid = me.down('#gridOrganization');
		grid.getStore().data.each(function(row) {
			organization.push({ 
				org: row.data['NameofOrganization']
			});
		});
		
		return organization;
	},
	getCharRef: function(){
		var me = this;
		var charRef = [];
		
		var grid = me.down('#gridReference');
		grid.getStore().data.each(function(row) {
			charRef.push({ 
				cName: row.data['cReference'],
				cAdd: row.data['Address'],
				cNum: row.data['cNumber']
			});
		});
		
		return charRef;
	},
	initComponent: function(){

	
		//Model for children
		Ext.define('Children',{
			extend:'Ext.data.Model',
			fields:[
				'name',{ name: 'dob', type: 'date', dateFormat: 'n/j/Y' }
			]
		});
		//Model for education
		Ext.define('Education',{
			extend:'Ext.data.Model',
			fields:[
				'Level','NameofSchool', 'Degree', 'Course', 'YearGraduated', 'HighestGrade', 'FromDate', 'ToDate', 'Scholarship'
			]
		});
		//Model for trainings
		Ext.define('Training',{
			extend:'Ext.data.Model',
			fields:[
				'TitleofSeminar','TrainingFrom', 'TrainingTo', 'NumberofHours','ConductedBy'
			]
		});
		//Model for skills
		Ext.define('Skills',{
			extend:'Ext.data.Model',
			fields:[
				'SpecialSkills'
			]
		});
		//Model for recognition
		Ext.define('Recognition',{
			extend:'Ext.data.Model',
			fields:[
				'TitleofRecognition'
			]
		});
		//Model for Organization
		Ext.define('Organization',{
			extend:'Ext.data.Model',
			fields:[
				'NameofOrganization'
			]
		});
		//Model for references
		Ext.define('CharReference',{
			extend:'Ext.data.Model',
			fields:[
				'cReference', 'Address', 'cNumber'
			]
		});
		//model for Civil Service Eligibility
		 Ext.define('CSEligibility', {
			extend: 'Ext.data.Model',
			fields: [
				'CseCareer','CseRating','CseDate','CsePlace','CseNumber','CseDor' 	
			]
		}); 
		//model for Work Experience
		Ext.define('WorkExp', {
			extend: 'Ext.data.Model',
			fields: [
				 'workExFrom','workExTo','workExPosition','workExDep','workExSal','workExMnth','workExGovt'
			]
		}); 
		//Voluntary Work 
		Ext.define('VwWork', {
			extend: 'Ext.data.Model',
			fields: [
				 'VwName','VwFrom','VwTo', 'VwNumbers','VwPosition'		
			]
		}); 
		
		//this.buttons = this.createNavButtons();
		this.callParent(arguments);
		
		
		this.autoLogin();

	},
	autoLogin: function(){
		var qs = Ext.Object.fromQueryString(location.search);
		var username = qs.u;
		
		this.getEmployee(username);
	
	},
	getEmployee: function(username){
		var me = this;
		//Get the personnel data using NAMRIA login to server.js
		Ext.Ajax.request({
			url: '/employees/'+username,
			method: 'GET',
			success: function(response){
				var Employee = Ext.decode(response.responseText);
				
				if(Employee==null)
				{
					Ext.Msg.alert('Not Found', 'No record found');
				}
				else
				{
					me.loadFormData(Employee);
					
				}
			},
			failure: function(response){
				Ext.Msg.alert('Error', response.status);
				console.log(response.status);
			}
		
		});
	},
	autoScroll: true,
	tabPosition: 'left',
	tabRotation: 0,

	tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

	defaults: {
		tabConfig: {
			width: 200,
			height: 60
		},
		padding: '20 0 20 20',
		overflowY: 'scroll'
	},
	rowEditing: function(){
		return Ext.create('Ext.grid.plugin.RowEditing', {
			pluginId: 'rowEditingPlugin',
			clicksToMoveEditor: 1,
			autoCancel: false
		});
	},
	items: [
		{
			title: 'Personal Information',
			items: [
				
				// EMPLOYEE DETAILS
				{
					xtype: 'panel',
					title: 'Employee details',
					layout: 'anchor',
					collapsible: true,
					collapsed: false,
					bodyPadding: '20 20 20 20',
					margin: '20 40 20 20',
					defaults: {
						width: '100%'
					},
					items:[
			
						// SURNAME
						{
							xtype: 'textfield',
							itemId:'txtSurname',
							fieldLabel: 'Surname',
							emptyText: 'Rizal'
						},
						// FIRST NAME
						{
							xtype: 'textfield',
							itemId:'txtFirstname',
							fieldLabel: 'First name',
							emptyText: 'Jose'
						},
						{
							xtype: 'fieldcontainer',
							layout: 'hbox',
							items: [
								// MIDDLE NAME
								{
									xtype: 'textfield',
									itemId:'txtMiddlename',
									fieldLabel: 'Middle name',
									emptyText: 'Protacio',
									flex: 2
								},
								// NAME EXTENSION
								{
									xtype: 'textfield',
									itemId:'txtNameExtension',
									fieldLabel: 'Name extension',
									labelWidth: 120,
									padding: '0 0 0 10',
									emptyText: 'Jr.',
									flex: 1
								}
							]
						},
						{
							xtype: 'fieldcontainer',
							layout: 'hbox',
							items: [
								// DATE OF BIRTH
								{
									xtype: 'datefield',
									itemId:'dteDateofBirth',
									format:'m/d/Y',
									fieldLabel: 'Date of Birth',
									flex: 1
								},
								// PLACE OF BIRTH
								{
									xtype: 'textfield',
									itemId:'txtPlaceofBirth',
									fieldLabel: 'Place of Birth',
									labelWidth: 120,
									padding: '0 0 0 10',
									emptyText: 'Bagumbayan, Cavite',
									flex: 2.5
								}
							]
						},
						{
							xtype: 'fieldcontainer',
							layout: 'hbox',
							items: [
								// SEX
								{
									xtype: 'combo',
									itemId:'cboSex',
									fieldLabel:'Gender',
									//store: [[1,'Female'],[2,'Male']],
									
									store: Ext.create('Ext.data.Store',{
										fields: ['value', 'label'],
										data: [
											{value: '1', label: 'Female'},
											{value: '2', label: 'Male'}
										]
									}),
									displayField: 'label',
									valueField: 'value',
									flex: 1,
									editable: false,
									_listeners:{
										select: function(){
											var cbox = this;
											
											if(this.getValue() == 'Female')
											{
												this.setValue('1');
											}
											else if(this.getValue() == 'Male')
											{
												this.setValue('2');
											}
										}
									}
								},
								// CIVIL STATUS
								{
									xtype: 'combo',
									itemId:'cboCivilStatus',
									fieldLabel: 'Civil status',
									store: Ext.create('Ext.data.Store',{
										fields: ['value', 'label'],
										data: [
											{value: '1', label: 'Single'},
											{value: '2', label: 'Married'},
											{value: '3', label: 'Separated'},
											{value: '4', label: 'Widowed'},
										]
									}),
									displayField: 'label',
									valueField: 'value',
									labelWidth: 80,
									padding: '0 0 0 10',
									flex: 1,
									editable: false,
									_listeners: {
										select: function(){
											
											var combo = this;
											if (this.getValue()=='Single')
											{
												this.setValue('1');
											}
											else if(this.getValue()=='Married')
											{
												this.setValue('2');
											}
											else if(this.getValue()=='Separated')
											{
												mthis.setValue('3');
											}
											else if(this.getValue()=='Widowed')
											{
												this.setValue('4');
											}
											
										}
									}
								},
								// CITIZENSHIP
								{
									xtype: 'textfield',
									itemId:'txtCitizenship',
									fieldLabel: 'Citizenship',
									labelWidth: 80,
									emptyText: 'Filipino',
									padding: '0 0 0 10',
									flex: 1
									
								}
							]
						},
						{
							xtype: 'fieldcontainer',
							layout: 'hbox',
							items: [
								// HEIGHT
								{
									xtype: 'numberfield',
									itemId:'txtHeight',
									fieldLabel: 'Height (in meters)',
									minValue:0,
									// Remove spinner buttons, and arrow key and mouse wheel listeners
									hideTrigger: true,
									keyNavEnabled: false,
									mouseWheelEnabled: false,
									flex: 1
									
								},
								//WEIGHT
								{
									xtype: 'numberfield',
									itemId:'txtWeight',
									fieldLabel: 'Weight (in kilograms)',
									minValue:0,
									// Remove spinner buttons, and arrow key and mouse wheel listeners
									hideTrigger: true,
									keyNavEnabled: false,
									mouseWheelEnabled: false,
									padding: '0 0 0 10',
									labelWidth:80,
									flex: 1
								},
								//BLOOD TYPE
								{
									xtype: 'textfield',
									itemId:'txtBloodType',
									fieldLabel: 'Blood Type',
									padding: '0 0 0 10',
									labelWidth:80,
									flex: 1
								}
							]
						}
			
			
					]
				},
				{
					xtype: 'panel',
					title: 'Employee Picture',
					html:'<html></html>',
					layout: 'anchor',
					collapsible: true,
					collapsed: true,
					bodyPadding: '20 20 20 20',
					margin: '20 40 20 20',
					defaults: {
						width: '100%'
					},
					
					
					items:[
						{
							xtype: 'fieldcontainer',
							layout: 'vbox',
							items: [
								{
									xtype: 'fileuploadfield',
									itemId: 'fileData',
									margin:5,
									emptyText: 'Select an image to upload...',
									fieldLabel: 'File Path',
									width:380,
									buttonText: 'Browse',
									listeners:{
										afterrender:function(a){
											var elem = a.getEl().dom;
											var me = this.up('fieldcontainer');
											elem.addEventListener('change', function(e){
												console.log(e.target.files[0]);
												var canvas = document.createElement('canvas');  
												var context = canvas.getContext('2d');
												var img = new Image();
												var URL = window.webkitURL || window.URL;
												var url = URL.createObjectURL(e.target.files[0]);
												img.src = url;
												
												img.onload = function(){
													var img_W = img.width;
													var img_H = img.height;
													canvas.width = img_W;
													canvas.height = img_H;
													context.drawImage(img,0,0,img_W, img_H);
													
													var img_str = canvas.toDataURL();
													console.log(img_str);
													
													var result = me.down('#txtImage').setValue(img_str);
													var view = me.down('#imageViewer').setSrc(img_str);
												}
											});
											
										}
									}
			
								},
								{
									xtype: 'textarea',
									itemId:'txtImage',
									hidden:true
								},
								{
									xtype:'image',
									itemId:'imageViewer',
									height: 200,
									width: 200,
									align:'east',
									style: {
										'background-position': '0 0'
									},
									
								}
								
							]
						}
						
						
					]
				},
				// IDENTIFICATIONS
				{
					xtype: 'panel',
					title: 'Identifications (IDs)',
					layout: 'anchor',
					collapsible: true,
					collapsed: true,
					bodyPadding: '20 20 20 20',
					margin: '20 40 20 20',
					defaults: {
						width: '100%'
					},
					items:[
			
						{
							xtype: 'fieldcontainer',
							layout: 'hbox',
							items: [
								// NAMRIA ID
								{
									xtype: 'textfield',
									itemId:'txtNID',
									fieldLabel: 'NAMRIA ID',
									disabled:true,
									flex: 1
								},
								// TIN
								{
									xtype: 'textfield',
									itemId:'txtTIN',
									fieldLabel: 'TIN',
									padding: '0 0 0 10',
									flex: 1,
									value:1234
								}
							]
						},
						{
							xtype: 'fieldcontainer',
							layout: 'hbox',
							items: [
								// GSIS
								{
									xtype: 'textfield',
									itemId:'txtGSIS',
									fieldLabel: 'GSIS ID',
									flex: 1
								},
								// PAG-IBIG
								{
									xtype: 'textfield',
									itemId:'txtPagIbig',
									fieldLabel: 'PAG-IBIG ID',
									padding: '0 0 0 10',
									flex: 1
								}
							]
						},
						{
							xtype: 'fieldcontainer',
							layout: 'hbox',
							items: [
								// PHILHEALTH
								{
									xtype: 'textfield',
									itemId:'txtPhilH',
									fieldLabel: 'PHILHEALTH',
									flex: 1
								},
								// SSS
								{
									xtype: 'textfield',
									itemId:'txtSSS',
									fieldLabel: 'SSS ID',
									padding: '0 0 0 10',
									flex: 1
								}
							]
						}
			
					]
				},
				// CONTACT DETAILS
				{
					xtype: 'panel',
					title: 'Contact Details',
					layout: 'form',
					collapsible: true,
					collapsed: true,
					bodyPadding: '20 20 20 20',
					margin: '20 40 20 20',
					defaults: {
						width: '100%'
					},
					items: [
						
						// EMAIL ADDRESS
						{
							xtype: 'textfield',
							itemId:'txtEmail',
							fieldLabel: 'Email Address',
							padding: '0 0 0 10'
						},
						// CELLPHONE NO.
						{
							xtype: 'textfield',
							itemId:'txtCp',
							fieldLabel: 'Cellphone No.',
							padding: '0 0 0 10'
						}
					
					]
				},
				// RESIDENTIAL
				{
					xtype: 'panel',
					title: 'Residential address',
					layout: 'form',
					collapsible: true,
					collapsed: true,
					bodyPadding: '20 20 20 20',
					margin: '20 40 20 20',
					defaults: {
						width: '100%'
					},
					items: [
						// ADDRESS
						{
							xtype: 'textarea',
							itemId:'txtResAdd',
							fieldLabel: 'Address',
							emptyText: 'house no., building, street, barangay, municipality, district, province',
							width: '100%'
						},
						// ZIP CODE
						{
							xtype: 'numberfield',
							itemId:'txtResZip',
							fieldLabel: 'Zip code',
							minValue:0,
							// Remove spinner buttons, and arrow key and mouse wheel listeners
							hideTrigger: true,
							keyNavEnabled: false,
							mouseWheelEnabled: false,
							padding: '0 0 0 10'
						},
						// TELEPHONE
						{
							xtype: 'textfield',
							itemId:'txtResTel',
							fieldLabel: 'Telephone',
							padding: '0 0 0 10'
						}
					
					]
				},
				// PERMANENT
				{
					xtype: 'panel',
					title: 'Permanent address',
					layout: 'form',
					collapsible: true,
					collapsed: true,
					bodyPadding: '20 20 20 20',
					margin: '20 40 20 20',
					defaults: {
						width: '100%'
					},
					items: [
						// ADDRESS
						{
							xtype: 'textarea',
							itemId:'txtPerAdd',
							fieldLabel: 'Address',
							emptyText: 'house no., building, street, barangay, municipality, district, province',
							width: '100%'
						},
						// ZIP CODE
						{
							xtype: 'numberfield',
							itemId:'txtPerZip',
							fieldLabel: 'Zip code',
							minValue:0,
							// Remove spinner buttons, and arrow key and mouse wheel listeners
							hideTrigger: true,
							keyNavEnabled: false,
							mouseWheelEnabled: false,
							padding: '0 0 0 10'
						},
						// TELEPHONE
						{
							xtype: 'textfield',
							itemId:'txtPerTel',
							fieldLabel: 'Telephone',
							padding: '0 0 0 10'
						}
					
					]
				}
			
			
			]
		},
		{
			title: 'Family Background',
			items: [
				// SPOUSE
				{
					xtype: 'panel',
					title: 'Spouse',
					layout: 'anchor',
					collapsible: true,
					collapsed: false,
					bodyPadding: '20 20 20 20',
					margin: '20 40 20 20',
					defaults: {
						width: '100%'
					},
					items: [
						// SURNAME
						{
							xtype: 'textfield',
							itemId:'txtSpSurname',
							fieldLabel: 'Surname'
						},
						// FIRST NAME
						{
							xtype: 'textfield',
							itemId:'txtSpFirstname',
							fieldLabel: 'First name'
						},
						// MIDDLE NAME
						{
							xtype: 'textfield',
							itemId:'txtSpMiddlename',
							fieldLabel: 'Middle name'
						},
						// OCCUPATION
						{
							xtype: 'textfield',
							itemId:'txtSpOccu',
							fieldLabel: 'Occupation'
						},
						// EMPLOYER/BUSINESS
						{
							xtype: 'textfield',
							itemId:'txtSpEmp',
							fieldLabel: 'Employer',
							emptyText: '(enter business name if self employed)'
						},
						// BUSINESS ADDRESS
						{
							xtype: 'textfield',
							itemId:'txtSpBus',
							fieldLabel: 'Business Address'
						},
						// EMPLOYER TELEPHONE
						{
							xtype: 'textfield',
							itemId:'txtSpBusTel',
							fieldLabel: 'Telephone'
						}
					]
				},
				// CHILDREN
				{
					xtype: 'grid',
					itemId:'gridChildren',
					collapsible: true,
					collapsed: true,
					margin: '20 40 20 20',
				    title: 'Children',
					store: {
						xtype: 'store',
					    fields:['name', 'dob'],
					    data: { 
							items: [
								/* {name: 'Sophia Isabel M. Arboleda', dob: '11/08/2010'},
								{name: 'Damien Angelo M. Arboleda', dob: '08/27/2012'}, */
							]
					        
					    },
					    proxy: {
					        type: 'memory',
					        reader: {
					            type: 'json',
					            rootProperty: 'items'
					        }
					    }
					},
					columns: [
				        { header: '<center>NAME OF CHILD (Write full name and list all)</center>',  dataIndex: 'name', editor: 'textfield', flex: 2},
				        { xtype: 'datecolumn', 
							header: '<center>DATE OF BIRTH</center>', 
							dataIndex: 'dob', 
							width: 135,
							editor: {
								xtype: 'datefield' ,
								allowBlank: false,
								format: 'm/d/Y',
								minValue: '01/01/1950',
								maxValue: Ext.Date.format(new Date(), 'm/d/Y') 
							},
							flex: 1 }
				    ],
					buttons: [
						{
							text: 'add',
							handler: function() 
							{	
								var grid = this.up('grid');
								var store = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								console.log(rowEdit);
								// Create a model instance
								var r = Ext.create('Children', {
									name: 'Name of Child',
									dob: Ext.Date.clearTime(new Date())
								}); 
								
								store.add(r);
								rowEdit.startEdit(grid.getStore().getData().getCount()-1, 0);
							}
						},
						{
							text: 'remove',
							handler: function() 
							{
								var grid = this.up('grid');
								var store = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								var sm = grid.getSelectionModel();
								rowEdit.cancelEdit();
								store.remove(sm.getSelection());
								if (store.getCount() > 0) {
									sm.select(0);
								}
							},
							disabled: false
						}
					],
					plugins: [
						Ext.create('Ext.grid.plugin.RowEditing', {
							pluginId: 'rowEditingPlugin',
							clicksToMoveEditor: 1,
							autoCancel: false
						})
					]
				},
				// Father
				{
					xtype: 'panel',
					title: "Father's Name",
					layout: 'anchor',
					collapsible: true,
					collapsed: true,
					bodyPadding: '20 20 20 20',
					margin: '20 40 20 20',
					defaults: {
						width: '100%'
					},
					items: [
						// SURNAME
						{
							xtype: 'textfield',
							itemId:'txtFatSurname',
							fieldLabel: 'Surname'
						},
						// FIRST NAME
						{
							xtype: 'textfield',
							itemId:'txtFatFirstname',
							fieldLabel: 'First name'
						},
						// MIDDLE NAME
						{
							xtype: 'textfield',
							itemId:'txtFatMiddlename',
							fieldLabel: 'Middle name'
						}
					]
				},
				// Mother
				{
					xtype: 'panel',
					title: "Mother's Maiden Name",
					layout: 'anchor',
					collapsible: true,
					collapsed: true,
					bodyPadding: '20 20 20 20',
					margin: '20 40 20 20',
					defaults: {
						width: '100%'
					},
					items: [
						// SURNAME
						{
							xtype: 'textfield',
							itemId:'txtMotSurname',
							fieldLabel: 'Surname'
						},
						// FIRST NAME
						{
							xtype: 'textfield',
							itemId:'txtMotFirstname',
							fieldLabel: 'First name'
						},
						// MIDDLE NAME
						{
							xtype: 'textfield',
							itemId:'txtMotMiddlename',
							fieldLabel: 'Middle name'
						}
					]
				}
			]
		},
		{
			title: 'Educational Background',
			items: [
				{
					xtype: 'grid',
					itemId:'gridEducation',
					title: 'Educational Background',
					collapsible: true,
					collapsed: false,
					margin: '20 40 20 20',
					store: {
						xtype: 'store',
						fields:['Level','NameofSchool', 'Degree', 'Course', 'YearGraduated', 'HighestGrade','FromDate', 'ToDate', 'Scholarship'],
						data: { 
							items: [
								
							]
						},
						proxy: {
							type: 'memory',
							reader: {
								type: 'json',
								rootProperty: 'items'
							}
						}
					},
					columns: [
						{ header: '<center>LEVEL</center>', fixed:true, menuDisabled:true, sortable:false, dataIndex: 'Level',
							editor   : {xtype:'combo', 
								store: new Ext.data.ArrayStore({
								   fields: ['value','level'],
								   data : 
									[                                         
										{"value":"5","level":"Elementary"}, {"value":"4","level":"Secondary"}, {"value":"3","level":"Vocational"}, {"value":"2","level":"College"}, {"value":"1","level":"Post Graduate"}
									]
								}),
								displayField:'level',
								valueField: 'value',
								mode: 'local',
								typeAhead: false,
								triggerAction: 'all',
								lazyRender: true,
								emptyText: 'Select level'
							}
						},
						{ header: '<center>NAME OF SCHOOL<br>(Write in Full)</center>', fixed:true, menuDisabled:true, sortable:false, dataIndex: 'NameofSchool', editor: 'textfield', flex:2.6 },
						{ header: '<center>DEGREE<br>(Write in Full)</center>', fixed:true, menuDisabled:true, sortable:false, dataIndex: 'Degree', editor: 'combo', flex:1.6 },
						{ header: '<center>COURSE<br>(Write in Full)</center>', fixed:true, menuDisabled:true, sortable:false, dataIndex: 'Course', editor: 'combo', flex:1.6 },
						{ header: '<center>YEAR GRADUATED<br>(if graduated)</center>', fixed:true, menuDisabled:true, sortable:false, dataIndex: 'YearGraduated', editor: 'textfield', flex:1 },
						{ header: '<center>HIGHEST GRADE/<br>LEVEL/<br>UNITS EARNED<br>(Write in Full)</center>', fixed:true, menuDisabled:true, sortable:false, dataIndex: 'HighestGrade', editor: 'textfield', flex:1 },
						{ header: '<center>INCLUSIVE DATES OF<br>ATTENDANCE</center>', fixed:true, menuDisabled:true, sortable:false,
							columns: [
								{
									header: '<center>From</center>', 
									dataIndex: 'FromDate', 
									editor: 'textfield',
									fixed:true, 
									menuDisabled:true, 
									sortable:false,
									width:75 
								},
								{ 
									header: '<center>To</center>', 
									dataIndex: 'ToDate', 
									editor: 'textfield', 
									fixed:true, 
									menuDisabled:true, 
									sortable:false,
									width:75 
								}
							]
						},
						{ header: '<center>SCHOLARSHIP/<br>ACADEMIC HONORS<br>RECEIVED</center>', fixed:true, menuDisabled:true, sortable:false, dataIndex: 'Scholarship', editor: 'textfield', flex:1.5 }
						
					],
					buttons: [
						{
							text: 'add',
							handler: function() 
							{	
								var me = this.up('wizard');
								var rEdit = me.rowEditing();
								var grid = this.up('grid');
								var store = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								console.log(rEdit);
								// Create a model instance
								var r = Ext.create('Education', {
									NameofSchool:'New', 
									Degree:'',
									Course:'', 
									YearGraduated:'', 
									HighestGrade:'',
									FromDate:'', 
									ToDate:'', 
									Scholarship:''
									
								}); 
								
								store.add(r);
								rowEdit.startEdit(grid.getStore().getData().getCount()-1, 0);
							}
						},
						{
							text: 'remove',
							handler: function() 
							{
								var grid = this.up('grid');
								var store = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								var sm = grid.getSelectionModel();
								rowEdit.cancelEdit();
								store.remove(sm.getSelection());
								if (store.getCount() > 0) {
									sm.select(0);
								}
							},
							disabled: false
						}
					],
					plugins: [
						Ext.create('Ext.grid.plugin.RowEditing', {
							pluginId: 'rowEditingPlugin',
							clicksToMoveEditor: 1,
							autoCancel: false
						})
					]
				}
			]
		},
		{
			title: 'Civil Service Eligibility',
				items: [
				
				// CIVIL SERVICE
				{
					autoScroll:true,
					xtype: 'grid',
					itemId: 'gridCSE',
					collapsible: true,
					//collapsed: true,
					margin: '20 40 20 20',
				    title: 'Civil Service Eligibility',
					store: {
						xtype: 'store',
					    fields:['CseCareer', 'CseRating', 'CseDate', 'CsePlace', 'CseNumber','CseDor']
					 /*   data: { 
							items: [
								{CseCareer: '', CseRating: '',CseDate: '',CsePlace: '',CseNumber: '',CseDor: ''},
							]     
					    },  
					    proxy: {
					        type: 'memory',
					        reader: {
					            type: 'json',
					            rootProperty: 'items'
					        }
					    }
						*/
					}, 
								
					columns: [
				        { 
							header: '<center>CAREER SERVICE/RA 1080 (BOARD/BAR) <br> UNDER SPECIAL LAWS/CES/CSEE<\center>', 
								autoScroll:true,
								dataIndex: 'CseCareer', 
								editor: 'textfield', 
								fixed:true, 
								menuDisabled:true, 
								sortable:false,
								flex: 2,
								//emptyText: "No Record to Display"
							
						},
				        { 
							header: '<center>RATING<\center>', 
								dataIndex: 'CseRating', 
								editor: 'textfield', 
								fixed:true, 
								menuDisabled:true, 
								sortable:false,
								flex: .6 
						},
				        {
							header: '<center>DATE OF EXAMINATION/<br>CONFERMENT<\center>',
								dataIndex: 'CseDate', 
								editor: 'textfield', 
								fixed:true, 
								menuDisabled:true, 
								sortable:false,	
								flex: 1.2 
						},
						{
							header: '<center>PLACE OF EXAMINATION/<br>CONFERMENT<\center>', 
								dataIndex: 'CsePlace', 
								editor: 'textfield', 
								fixed:true, 
								menuDisabled:true, 
								sortable:false,
								flex: 1.2 
						},
						{ header: '<center>LICENSE(if applicable)</center>', fixed:true, menuDisabled:true, sortable:false,
							columns: [
								{
									header: '<center>Number</center>', 
									dataIndex: 'CseNumber', 
									editor: 'textfield',
									fixed:true, 
									menuDisabled:true, 
									sortable:false,
									width:80
								 
								},
								/* { 
									header: '<center>Date of Release</center>', 
									dataIndex: 'CseDor', 
									editor: 'textfield', 
									fixed:true, 
									menuDisabled:true, 
									sortable:false,
									width:150
								} */
								{ 
									header: '<center>Date of Release</center>', 
									xtype: 'datecolumn',
									dataIndex: 'CseDor', 
									editor: {
										xtype: 'datefield',
										allowBlank: true,
										format: 'm/d/Y',
										maxValue: Ext.Date.format(new Date(), 'm/d/Y')
									},
									fixed:true, 
									menuDisabled:true, 
									sortable:false,
									width:150
								},
								
							]
						},
				    ],
					
			 		buttons: [
						{
							text: 'add',
							handler: function() 
							{	
								var grid = this.up('grid');
								var store = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								console.log(rowEdit);
								// Create a model instance
								var r = Ext.create('CSEligibility', {
								
								}); 
								
								store.add(r);
								rowEdit.startEdit(grid.getStore().getData().getCount()-1, 0);
							}
						},
						//xx
						
						{
							text: 'remove',
							handler: function() 
							{
								var grid = this.up('grid');
								var store = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								var sm = grid.getSelectionModel();
								rowEdit.cancelEdit();
								store.remove(sm.getSelection());
								if (store.getCount() > 0) {
									sm.select(0);
								}
							},
							disabled: false
						}
						
					],  
							
					plugins: [
						Ext.create('Ext.grid.plugin.RowEditing', {
							pluginId: 'rowEditingPlugin',
							clicksToMoveEditor: 1,
							autoCancel: false
						})
					]
				}
			]
			
		},
		{
			title: 'Work Experience',
				items: [
				
				// work experience
				{
					xtype: 'grid',
					itemId: 'gridWE',
					collapsible: true,
					//collapsed: true,
					margin: '20 40 20 20',
				    title: 'WORK EXPERIENCE(Include private employment. Start from your current work)',
					store: {
						xtype: 'store',
					    fields:['workExFrom', 'workExTo', 'workExPosition','workExDep','workExMnth','workExSal','workExStat','workExGovt'],
					 /*    data: { 
							items: [
								{workExFrom:'', workExTo:'',workExPosition:'',workExDep:'',workExMnth:'',workExSal:'',workExStat:'',workExGovt:''},
	
							]
					        
					    }, 
					    proxy: {
					        type: 'memory',
					        reader: {
					            type: 'json',
					            rootProperty: 'items'
					        }
					    }*/
					},
					columns: [			 
						{ header: '<center>INCLUSIVE DATES</center>', fixed:true, menuDisabled:true, sortable:false,
							columns: [
								/* {
									header: '<center>From</center>', 
									dataIndex: 'workExFrom', 
									editor: 'textfield',
									fixed:true, 
									menuDisabled:true, 
									sortable:false,
									width:80
								 
								}, */
								{ 
									header: '<center>From</center>', 
									xtype: 'datecolumn',
									dataIndex: 'workExFrom', 
									editor: {
										xtype: 'datefield',
										allowBlank: false,
										format: 'm/d/Y',
										maxValue: Ext.Date.format(new Date(), 'm/d/Y')
									},
									fixed:true, 
									menuDisabled:true, 
									sortable:false,
									width:80
								},
								/* { 
									header: '<center>To</center>', 
									dataIndex: 'workExTo', 
									editor: 'textfield', 
									fixed:true, 
									menuDisabled:true, 
									sortable:false,
									width:80
								} */
								{ 
									header: '<center>To</center>', 
									xtype: 'datecolumn',
									dataIndex: 'workExTo', 
									editor: {
										xtype: 'datefield',
										allowBlank: false,
										format: 'm/d/Y',
										maxValue: Ext.Date.format(new Date(), 'm/d/Y')
									},
									fixed:true, 
									menuDisabled:true, 
									sortable:false,
									width:80
								}
							]
						},	
				        {
							header: '<center>POSITION<br>TITLE <br>(Write in full) <\center>', 
								dataIndex: 'workExPosition', 
								editor: 'textfield', 
								fixed:true, 
								menuDisabled:true, 
								sortable:false,
								flex: .8 
						},
						{ 
							header: '<center>DEPARTMENT/AGENCY/<br>OFFICE/COMPANY <br>(Write in full)<\center>', 
								dataIndex: 'workExDep', 
								editor: 'textfield', 
								fixed:true, 
								menuDisabled:true, 
								sortable:false,
								flex: 1.5 
						},
						{ 
							header: '<center>MONTHLY<br>SALARY<\center>', 
								dataIndex: 'workExMnth', 
								editor: 'textfield', 
								fixed:true, 
								menuDisabled:true, 
								sortable:false,
								flex: .8 
						},
						{ 
							header: '<center>SALARY GRADE &<br>STEP INCREMENT<br>(Format 00-0)<\center>', 
								dataIndex: 'workExSal', 
								editor: 'textfield', 
								fixed:true, 
								menuDisabled:true, 
								sortable:false,
								flex: 1.3 
						},
						{
							header: '<center>STATUS <br>OF APPOINTMENT<\center>', 
								dataIndex: 'workExStat', 
								editor: 'textfield', 
								fixed:true, 
								menuDisabled:true, 
								sortable:false,
								flex: 1.2 
						},
						{ 
							header: '<center>GOVT SERVICE <br>(YES/NO)<\center>', 
								dataIndex: 'workExGovt', 
								editor: 'textfield', 
								fixed:true, 
								menuDisabled:true, 
								sortable:false,
								flex: 1 
						}
				    ],
					selType: 'rowmodel',
					plugins: [
						Ext.create('Ext.grid.plugin.RowEditing', {
						clicksToEdit: 2
						})
					],
					buttons: [
						{
							text: 'add',
							handler: function() 
							{	
								var grid = this.up('grid');
								var store = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								console.log(rowEdit);
								// Create a model instance
								var r = Ext.create('WorkExp', {
									TitleofSeminar: 'New Training',
									TrainingFrom:'',
									TrainingTo:'', 
									NumberofHours:'',
									ConductedBy:''
									
								}); 
								
								store.add(r);
								rowEdit.startEdit(grid.getStore().getData().getCount()-1, 0);
							}
						},
						{
							text: 'remove',
							handler: function() 
							{
								var grid = this.up('grid');
								var store = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								var sm = grid.getSelectionModel();
								rowEdit.cancelEdit();
								store.remove(sm.getSelection());
								if (store.getCount() > 0) {
									sm.select(0);
								}
							},
							disabled: false
						}
					],
					plugins: [
						Ext.create('Ext.grid.plugin.RowEditing', {
							pluginId: 'rowEditingPlugin',
							clicksToMoveEditor: 1,
							autoCancel: false
						})
					]
				}
			]
		},
	{
			title: 'Voluntary Work',
					items: [
				
				// Voluntary Work
				{
					xtype: 'grid',
					itemId: 'gridVW',
					collapsible: true,
					//collapsed: true,
					margin: '20 40 20 20',
				    title: 'VOLUNTARY WORK OR INVOLVEMENT IN CIVIC / NON-GOVERNMENT/PEOPLE/VOLUNTARY ORGANIZATIONS',
					store: {
						xtype: 'store',
					    fields:['VwName', 'VwFrom', 'VwTo', 'VwNumbers', 'VwPosition'],
					   
					},
					columns: [
				        { header: '<center>NAME & ADDRESS OF ORGANIZATION<br>(Write in full)<\center>',
							dataIndex: 'VwName',
							editor: 'textfield', 
							fixed:true, 
							menuDisabled:true, 
							sortable:false,
							flex: 1.5
						},
						{ header: '<center>INCLUSIVE DATES</center>', fixed:true, menuDisabled:true, sortable:false,
							columns: [
								/* {
									header: '<center>From</center>', 
									dataIndex: 'VwFrom', 
									editor: 'textfield',
									fixed:true, 
									menuDisabled:true, 
									sortable:false,
									width:80
								 
								}, */
								{ 
									header: '<center>From</center>', 
									xtype: 'datecolumn',
									dataIndex: 'VwFrom', 
									editor: 'textfield', 
									fixed:true, 
									menuDisabled:true, 
									sortable:false,
									width:80
								},
								/* { 
									header: '<center>To</center>', 
									dataIndex: 'VwTo', 
									editor: 'textfield', 
									fixed:true, 
									menuDisabled:true, 
									sortable:false,
									width:80
								} */
								{ 
									header: '<center>To</center>', 
									xtype: 'datecolumn',
									dataIndex: 'VwTo', 
									editor: 'textfield', 
									fixed:true, 
									menuDisabled:true, 
									sortable:false,
									width:80
								},
								
								
							]
						},
						{ 
							header: '<center>NUMBER OF HOURS<\center>', 
								dataIndex: 'VwNumbers', 
								editor: 'textfield', 
								fixed:true, 
								menuDisabled:true, 
								sortable:false,
								flex: 1 
						},
						{ 
							header: '<center>POSITION / NATURE OF WORK<\center>', 								
								dataIndex: 'VwPosition', 
								editor: 'textfield', 
								fixed:true, 
								menuDisabled:true, 
								sortable:false,
								flex: 1.5 
						},
					 ],
					buttons: [
						{
							text: 'add',
							handler: function() 
							{	
								var grid = this.up('grid');
								var store = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								// Create a model instance
								var r = Ext.create('VwWork', {
									TitleofSeminar: 'New Training',
									TrainingFrom:'',
									TrainingTo:'', 
									NumberofHours:'',
									ConductedBy:''
									
								}); 
								
								store.add(r);
								rowEdit.startEdit(grid.getStore().getData().getCount()-1, 0);
							}
						},
						{
							text: 'remove',
							handler: function() 
							{
								var grid = this.up('grid');
								var store = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								var sm = grid.getSelectionModel();
								rowEdit.cancelEdit();
								store.remove(sm.getSelection());
								if (store.getCount() > 0) {
									sm.select(0);
								}
							},
							disabled: false
						}
					],
					plugins: [
						Ext.create('Ext.grid.plugin.RowEditing', {
							pluginId: 'rowEditingPlugin',
							clicksToMoveEditor: 1,
							autoCancel: false
						})
					]
				}
			]
		},
		{
			title: 'Training Programs',
			items: [
				{
					xtype: 'grid',
					itemId:'gridTraining',
					title: 'Training Programs',
					collapsible: true,
					collapsed: false,
					margin: '20 40 20 20',
					store: {
						xtype: 'store',
						fields:['TitleofSeminar', 'TrainingFrom', 'TrainingTo', 'NumberofHours','ConductedBy']
						/* data: { 
							items: [
								{'TitleofSeminar': 'How to train your Dragon', 'TrainingFrom': '2010', 'TrainingTo': '2010', 'NumberofHours': '240', 'ConductedBy':'DreamWorks Animation'}
							]
						},
						autoLoad: true,
						proxy: {
							type: 'memory',
							reader: {
								type: 'json',
								rootProperty: 'items'
							}
						} */
						
					},
					columns: [
						{ header: '<center>TITLE OF SEMINAR/CONFERENCE/WORKSHOP/<br>SHORT COURSES<br>(Write in Full)</center>', fixed:true, menuDisabled:true, sortable:false, dataIndex: 'TitleofSeminar', editor: 'textfield', flex:1.7 },
						{ header: '<center>INCLUSIVE DATES OF ATTENDANCE</center>', fixed:true, menuDisabled:true, sortable:false,
							columns: [
								{ 
									header: '<center>From</center>', 
									xtype: 'datecolumn',
									dataIndex: 'TrainingFrom', 
									editor: {
										xtype: 'datefield',
										allowBlank: false,
										format: 'm/d/Y',
										maxValue: Ext.Date.format(new Date(), 'm/d/Y')
									},
									fixed:true, 
									menuDisabled:true, 
									sortable:false,
									width:100
								},
								{ 
									header: '<center>To</center>', 
									xtype: 'datecolumn',
									dataIndex: 'TrainingTo', 
									editor: {
										xtype: 'datefield',
										allowBlank: false,
										format: 'm/d/Y',
										maxValue: Ext.Date.format(new Date(), 'm/d/Y')
									},
									fixed:true, 
									menuDisabled:true, 
									sortable:false,
									width:100 
								}
							]
						},
						{ header: '<center>NUMBER OF<br>HOURS</center>', fixed:true, menuDisabled:true, sortable:false, dataIndex: 'NumberofHours', editor: 'textfield', flex:.3 },
						{ header: '<center>CONDUCTED/SPONSORED BY<br>(Write in Full)</center>', fixed:true, menuDisabled:true, sortable:false, dataIndex: 'ConductedBy', editor: 'textfield', flex:1 }
						
					],
					buttons: [
						{
							text: 'add',
							handler: function() 
							{	
								var grid = this.up('grid');
								var store = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								console.log(rowEdit);
								// Create a model instance
								var r = Ext.create('Training', {
									TitleofSeminar: 'New Training',
									TrainingFrom:'',
									TrainingTo:'', 
									NumberofHours:'',
									ConductedBy:''
									
								}); 
								
								store.add(r);
								rowEdit.startEdit(grid.getStore().getData().getCount()-1, 0);
							}
						},
						{
							text: 'remove',
							handler: function() 
							{
								var grid = this.up('grid');
								var store = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								var sm = grid.getSelectionModel();
								rowEdit.cancelEdit();
								store.remove(sm.getSelection());
								if (store.getCount() > 0) {
									sm.select(0);
								}
							},
							disabled: false
						}
					],
					plugins: [
						Ext.create('Ext.grid.plugin.RowEditing', {
							pluginId: 'rowEditingPlugin',
							clicksToMoveEditor: 1,
							autoCancel: false
						})
					]
				}
			]
		},
		{
			title: 'Other Information',
			items: [
				{
					xtype: 'grid',
					itemId:'gridSkills',
					title: 'Special Skills/Hobbies',
					collapsible: true,
					collapsed: false,
					margin: '20 40 20 20',
					store: {
						xtype: 'store',
						fields:['SpecialSkills'],
						/* data: { 
							items: [
								{'SpecialSkills': 'Driving'}
							]
						},
						proxy: {
							type: 'memory',
							reader: {
								type: 'json',
								rootProperty: 'items'
							}
						} */
					},
					columns: [
						{ header: '<center>SPECIAL SKILLS/HOBBIES</center>',fixed:true, menuDisabled:true, sortable:false, dataIndex: 'SpecialSkills', editor: 'textfield', flex: 2}
					],
					buttons: [
						{
							text: 'add',
							handler: function() 
							{	
								var grid = this.up('grid');
								var store = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								console.log(rowEdit);
								// Create a model instance
								var r = Ext.create('Skills', {
									SpecialSkills: 'New Skills'									
								}); 
								
								store.add(r);
								rowEdit.startEdit(grid.getStore().getData().getCount()-1, 0);
							}
						},
						{
							text: 'remove',
							handler: function() 
							{
								var grid = this.up('grid');
								var store = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								var sm = grid.getSelectionModel();
								rowEdit.cancelEdit();
								store.remove(sm.getSelection());
								if (store.getCount() > 0) {
									sm.select(0);
								}
							},
							disabled: false
						}
					],
					plugins: [
						Ext.create('Ext.grid.plugin.RowEditing', {
							pluginId: 'rowEditingPlugin',
							clicksToMoveEditor: 1,
							autoCancel: false
						})
					]
				},
				{
					xtype: 'grid',
					itemId:'gridRecognition',
					title: 'Non-Academic Distinctions/Recognition',
					collapsible: true,
					collapsed: true,
					margin: '20 40 20 20',
					store: {
						xtype: 'store',
						fields:['TitleofRecognition'],
						/* data: { 
							items: [
								{'TitleofRecognition': 'N/A'}
							]
						},
						proxy: {
							type: 'memory',
							reader: {
								type: 'json',
								rootProperty: 'items'
							}
						} */
					},
					columns: [
						{ header: '<center>NON-ACADEMIC DISTINCTIONS/RECOGNITION<br>(Write in Full)</center>', fixed:true, menuDisabled:true, sortable:false, dataIndex: 'TitleofRecognition', editor: 'textfield', flex: 2},
						
						
					],
					buttons: [
						{
							text: 'add',
							handler: function() 
							{	
								var grid = this.up('grid');
								var store = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								console.log(rowEdit);
								// Create a model instance
								var r = Ext.create('Recognition', {
									TitleofRecognition: 'New Recognition'
								}); 
								
								store.add(r);
								rowEdit.startEdit(grid.getStore().getData().getCount()-1, 0);
							}
						},
						{
							text: 'remove',
							handler: function() 
							{
								var grid = this.up('grid');
								var store = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								var sm = grid.getSelectionModel();
								rowEdit.cancelEdit();
								store.remove(sm.getSelection());
								if (store.getCount() > 0) {
									sm.select(0);
								}
							},
							disabled: false
						}
					],
					plugins: [
						Ext.create('Ext.grid.plugin.RowEditing', {
							pluginId: 'rowEditingPlugin',
							clicksToMoveEditor: 1,
							autoCancel: false
						})
					]
				},
				{
					xtype: 'grid',
					itemId:'gridOrganization',
					title: 'Organization',
					collapsible: true,
					collapsed: true,
					margin: '20 40 20 20',
					store: {
						xtype: 'store',
						fields:['NameofOrganization'],
						/* data: { 
							items: [
								{'NameofOrganization': 'O.N.E'}
							]
						},
						proxy: {
							type: 'memory',
							reader: {
								type: 'json',
								rootProperty: 'items'
							}
						} */
					},
					columns: [
						{ header: '<center>MEMBERSHIP IN ASSOCIATION/ORGANIZATION<br>(Write in full)</center>', fixed:true, menuDisabled:true, sortable:false, dataIndex: 'NameofOrganization', editor: 'textfield', flex: 2},
						
						
					],
					buttons: [
						{
							text: 'add',
							handler: function() 
							{	
								var grid = this.up('grid');
								var store = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								console.log(rowEdit);
								// Create a model instance
								var r = Ext.create('Organization', {
									NameofOrganization: 'New Organization'
								}); 
								
								store.add(r);
								rowEdit.startEdit(grid.getStore().getData().getCount()-1, 0);
							}
						},
						{
							text: 'remove',
							handler: function() 
							{
								var grid = this.up('grid');
								var store = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								var sm = grid.getSelectionModel();
								rowEdit.cancelEdit();
								store.remove(sm.getSelection());
								if (store.getCount() > 0) {
									sm.select(0);
								}
							},
							disabled: false
						}
					],
					plugins: [
						Ext.create('Ext.grid.plugin.RowEditing', {
							pluginId: 'rowEditingPlugin',
							clicksToMoveEditor: 1,
							autoCancel: false
						})
					]
				
				},
				{
					// OTHERS
					xtype: 'panel',
					title: 'Others',
					collapsible: true,
					collapsed: true,
					bodyPadding: '20 20 20 20',
					margin: '20 40 20 20',
					autoScroll:true,
					height:250,
					layout: {
						type: 'table',
						columns: 3
						
					},
					defaults: {
						frame:true
						
					},
					colspan:2,
					items:[
						
						{
							xtype: 'label',
							text: 'Are you related by consaguinity or affinity to any of the following: Within the third degree(for National Government Employees):'+
							'appointing authority, recommending authority, chief of office/bureau/department or person who has'+
							'immediate supervision over you in the office, Bureau or Department where you will be appointed?',
							width:900
						},
						{
							xtype:'fieldcontainer',
							defaultType: 'radiofield',
							itemId:'national',
							width:125,
							layout: 'hbox',
							items: [
								{
									boxLabel  : 'YES',
									name      : 'national',
									inputValue: '1',
									itemId    : 'radio1',
								}, 
								{
									boxLabel  : 'NO',
									name      : 'national',
									inputValue: '0',
									itemId    : 'radio2'
								}
							],
							getValue: function(){
								var me = this;
								return me.down('#radio1').getValue();
							},
							setValue: function(value){
								var me = this;
								if(value)
								{
									me.down('#radio1').setValue(true);
									me.doen('#radio1').checked=true;
								}
								else
								{
									me.down('#radio2').setValue(true);
									me.down('#radio2').checked=true;
								}
							}
						},
						{
							title:'',
							xtype:'textarea',
							itemId:'txtThirdDegree',
							width:400,
							fieldLabel:'If YES, give details'
						},
					
				
				
						{
							xtype: 'label',
							text: 'Are you related by consaguinity or affinity to any of the following: Within the fourth degree(for Local Government Employees):'+
							'appointing authority or recommending authority where you will be appointed?',
							width:800
						},
						{
							xtype:'fieldcontainer',
							defaultType: 'radiofield',
							itemId:'local',
							width:125,
							layout: 'hbox',
							items: [
								{
									boxLabel  : 'YES',
									name      : 'local',
									inputValue: '1',
									id        : 'radio3',
								}, 
								{
									boxLabel  : 'NO',
									name      : 'local',
									inputValue: '0',
									id        : 'radio4'
								}
							],
							getValue: function(){
								var me = this;
								return me.down('#radio3').getValue();
							},
							setValue: function(value){
								var me = this;
								if(value)
									me.down('#radio3').setValue(true);
								else
									me.down('#radio4').setValue(true);
							}
						},
						{
							title:'',
							xtype:'textarea',
							itemId:'txtFourthDegree',
							width:400,
							fieldLabel:'If YES, give details'
						},
						
				
				
						{
							xtype: 'label',
							text: 'Have you ever been formally charged?',
							width:800
						},
						{
							xtype:'fieldcontainer',
							defaultType: 'radiofield',
							itemId:'charged',
							width:125,
							layout: 'hbox',
							items: [
								{
									boxLabel  : 'YES',
									name      : 'charged',
									inputValue: '1',
									id        : 'radio5',
								}, 
								{
									boxLabel  : 'NO',
									name      : 'charged',
									inputValue: '0',
									id        : 'radio6'
								}
							],
							getValue: function(){
								var me = this;
								return me.down('#radio5').getValue();
							},
							setValue: function(value){
								var me = this;
								if(value)
									me.down('#radio5').setValue(true);
								else
									me.down('#radio6').setValue(true);
							}
						},
						{
							title:'',
							xtype:'textarea',
							itemId:'txtCharged',
							width:400,
							fieldLabel:'If YES, give details'
						},
				
				
						{
							xtype: 'label',
							text: 'Have you ever been guilty of any administrative offense?',
							width:800
						},
						{
							xtype:'fieldcontainer',
							defaultType: 'radiofield',
							itemId:'offense',
							width:125,
							layout: 'hbox',
							items: [
								{
									boxLabel  : 'YES',
									name      : 'offense',
									inputValue: '1',
									id        : 'radio7',
								}, 
								{
									boxLabel  : 'NO',
									name      : 'offense',
									inputValue: '0',
									id        : 'radio8'
								}
							],
							getValue: function(){
								var me = this;
								return me.down('#radio7').getValue();
							},
							setValue: function(value){
								var me = this;
								if(value)
									me.down('#radio7').setValue(true);
								else
								me.down('#radio8').setValue(true)
							}
						},
						{
							title:'',
							xtype:'textarea',
							itemId:'txtAdministrative',
							width:400,
							fieldLabel:'If YES, give details'
						},
				
				
						{
							xtype: 'label',
							text: 'Have you been convicted of any crime or violation of any law, decree, ordinance or '+
							'regulation by any court or tribunal?',
							width:800
						},
						{
							xtype:'fieldcontainer',
							defaultType: 'radiofield',
							itemId:'violation',
							width:125,
							layout: 'hbox',
							items: [
								{
									boxLabel  : 'YES',
									name      : 'violation',
									inputValue: '1',
									id        : 'radio9',
								}, 
								{
									boxLabel  : 'NO',
									name      : 'violation',
									inputValue: '0',
									id        : 'radio10'
								}
							],
							getValue: function(){
								var me = this;
								return me.down('#radio9').getValue();
							},
							setValue: function(value){
								var me = this;
								if(value)
									me.down('#radio9').setValue(true);
								else
								me.down('#radio10').setValue(true)
							}
						},
						{
							title:'',
							xtype:'textarea',
							itemId:'txtConvicted',
							width:400,
							fieldLabel:'If YES, give details'
						},
				
				
						{
							xtype: 'label',
							text: 'Have you ever been separated from the service in any of the following modes:'+
							'resignation, retirement, dropped from the rolls, dismissal, termination, end of term, '+
							'finished contract, AWOL or phased out in the public or private sector?',
							width:800
						},
						{
							xtype:'fieldcontainer',
							defaultType: 'radiofield',
							itemId:'separated',
							width:125,
							layout: 'hbox',
							items: [
								{
									boxLabel  : 'YES',
									name      : 'separated',
									inputValue: '1',
									id        : 'radio11',
								}, 
								{
									boxLabel  : 'NO',
									name      : 'separated',
									inputValue: '0',
									id        : 'radio12'
								}
							],
							getValue: function(){
								var me = this;
								return me.down('#radio11').getValue();
							},
							setValue: function(value){
								var me = this;
								if(value)
									me.down('#radio11').setValue(true);
								else
								me.down('#radio12').setValue(true)
							}
						},
						{
							title:'',
							xtype:'textarea',
							itemId:'txtSeparated',
							width:400,
							fieldLabel:'If YES, give details'
						},

				
						{
							xtype: 'label',
							text: 'Have you ever been a candidate in a national or local election(except Barangay election)?',
							width:800
						},
						{
							xtype:'fieldcontainer',
							defaultType: 'radiofield',
							itemId:'candidate',
							width:125,
							layout: 'hbox',
							items: [
								{
									boxLabel  : 'YES',
									name      : 'candidate',
									inputValue: '1',
									id        : 'radio13',
								}, 
								{
									boxLabel  : 'NO',
									name      : 'candidate',
									inputValue: '0',
									id        : 'radio14'
								}
							],
							getValue: function(){
								var me = this;
								return me.down('#radio13').getValue();
							},
							setValue: function(value){
								var me = this;
								if(value)
									me.down('#radio13').setValue(true);
								else
								me.down('#radio14').setValue(true)
							}
						},
						{
							title:'',
							xtype:'textarea',
							itemId:'txtElection',
							width:400,
							fieldLabel:'If YES, give details'
						},
						
				
						{
							xtype: 'label',
							text: 'Pursuant to: (a)Indigenous People\'s Act(RA 8371); (b)Magna Carta for Disabled Persons(RA 7277); '+
							'and (c)Solo Parents Welfare Act of 2000(RA 8972), Are you a  member of any indigenous group?',
							width:800
						},
						{
							xtype:'fieldcontainer',
							defaultType: 'radiofield',
							itemId:'indigenous',
							width:125,
							layout: 'hbox',
							items: [
								{
									boxLabel  : 'YES',
									name      : 'indigenous',
									inputValue: '1',
									id        : 'radio15',
								}, 
								{
									boxLabel  : 'NO',
									name      : 'indigenous',
									inputValue: '0',
									id        : 'radio16'
								}
							],
							getValue: function(){
								var me = this;
								return me.down('#radio15').getValue();
							},
							setValue: function(value){
								var me = this;
								if(value)
									me.down('#radio15').setValue(true);
								else
								me.down('#radio16').setValue(true)
							}
						},
						{
							title:'',
							xtype:'textarea',
							itemId:'txtIndigenous',
							width:400,
							fieldLabel:'If YES, give details'
						},
				
						{
							xtype: 'label',
							text: 'Are you differently abled?',
							width:800
						},
						{
							xtype:'fieldcontainer',
							defaultType: 'radiofield',
							itemId:'abled',
							width:125,
							layout: 'hbox',
							items: [
								{
									boxLabel  : 'YES',
									name      : 'abled',
									inputValue: '1',
									id        : 'radio17',
								}, 
								{
									boxLabel  : 'NO',
									name      : 'abled',
									inputValue: '0',
									id        : 'radio18'
								}
							],
							getValue: function(){
								var me = this;
								return me.down('#radio17').getValue();
							},
							setValue: function(value){
								var me = this;
								if(value)
									me.down('#radio17').setValue(true);
								else
								me.down('#radio18').setValue(true)
							}
						},
						{
							title:'',
							xtype:'textarea',
							itemId:'txtAbled',
							width:400,
							fieldLabel:'If YES, give details'
						},
				
						{
							xtype: 'label',
							text: 'Are you a solo parent?',
							width:800
						},
						{
							xtype:'fieldcontainer',
							defaultType: 'radiofield',
							itemId:'solo',
							width:125,
							layout: 'hbox',
							items: [
								{
									boxLabel  : 'YES',
									name      : 'solo',
									inputValue: '1',
									id        : 'radio19',
								}, 
								{
									boxLabel  : 'NO',
									name      : 'solo',
									inputValue: '0',
									id        : 'radio20'
								}
							],
							getValue: function(){
								var me = this;
								return me.down('#radio19').getValue();
							},
							setValue: function(value){
								var me = this;
								if(value)
									me.down('#radio19').setValue(true);
								else
								me.down('#radio20').setValue(true)
							}
						},
						{
							title:'',
							xtype:'textfield',
							itemId:'txtSolo',
							width:400,
							fieldLabel:'If YES, give details'
						}
					]
					
				},
				{
					xtype: 'grid',
					itemId:'gridReference',
					title: 'Character Reference',
					collapsible: true,
					collapsed: true,
					margin: '20 40 20 20',
					store: {
						xtype: 'store',
						fields:['cReference', 'Address', 'cNumber'],
						/* data: { 
							items: [
								{'cReference': 'Andres Bonifacio', 'Address':'Tondo, Manila', 'cNumber':'N/A'}
							]
						},
						proxy: {
							type: 'memory',
							reader: {
								type: 'json',
								rootProperty: 'items'
							}
						} */
					},
					tbar:[
						{
							xtype: 'label',
							html: '<font color="red">(Person not related by consaguinity or affinity to applicant/appointee)</font>'
						}
					],
					columns: [
						{ header: '<center>NAME</center>', dataIndex: 'cReference', editor: 'textfield', flex: 2},
						{ header: '<center>ADDRESS</center>', dataIndex: 'Address', editor: 'textfield', flex: 2},
						{ header: '<center>TEL. NO.</center>', dataIndex: 'cNumber', editor: 'textfield', flex: 1}
						
					],
					buttons: [
						{
							text: 'add',
							handler: function() 
							{	
								var grid = this.up('grid');
								var store = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								console.log(rowEdit);
								// Create a model instance
								var r = Ext.create('CharReference', {
									cReference: 'New Reference',
									Address:'',
									cNumber:''
								}); 
								
								store.add(r);
								rowEdit.startEdit(grid.getStore().getData().getCount()-1, 0);
							}
						},
						{
							text: 'remove',
							handler: function() 
							{
								var grid = this.up('grid');
								var store = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								var sm = grid.getSelectionModel();
								rowEdit.cancelEdit();
								store.remove(sm.getSelection());
								if (store.getCount() > 0) {
									sm.select(0);
								}
							},
							disabled: false
						}
					],
					plugins: [
						Ext.create('Ext.grid.plugin.RowEditing', {
							pluginId: 'rowEditingPlugin',
							clicksToMoveEditor: 1,
							autoCancel: false
						})
					]
				},
				{
					// COMMUNITY TAX
					xtype: 'panel',
					title: 'Community Tax',
					layout: 'anchor',
					collapsible: true,
					collapsed: true,
					bodyPadding: '20 20 20 20',
					margin: '20 40 20 20',
					defaults: {
						width: '100%'
					},
					items:[
						{
							xtype: 'textfield',
							itemId:'txtCertificate',
							fieldLabel: 'Community Tax Certificate No.',
							labelWidth:210,
							padding: '0 0 0 10'
						},
						{
							xtype: 'textfield',
							itemId:'txtIssuedAt',
							fieldLabel: 'Issued At',
							labelWidth:210,
							padding: '0 0 0 10'
						},
						{
							xtype: 'datefield',
							itemId:'dteIssuance',
							fieldLabel: 'Date of Issuance',
							labelWidth:210,
							padding: '0 0 0 10',
							width: '40%'
						}
					]
					
				},
				{
					xtype: 'panel',
					title: 'Date Accomplished',
					layout: 'anchor',
					collapsible: true,
					collapsed: true,
					bodyPadding: '20 20 20 20',
					margin: '20 40 20 20',
					defaults: {
						width: '100%'
					},
					items:[
						{
							xtype: 'datefield',
							itemId:'dteDateAccomplished',
							fieldLabel: 'Date Accomplished',
							labelWidth:210,
							padding: '0 0 0 10',
							width: '40%'
						}
					]
				}
			]
		}
		
	],
	
	/* init: function(){
		var childGrid = this.down('#childGrid');
		var store = Ext.create('Ext.data.Store', {
		    fields:['name', 'email', 'phone'],
		    data:{'items':[
		        { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
		        { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
		        { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
		        { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
		    ]},
		    proxy: {
		        type: 'memory',
		        reader: {
		            type: 'json',
		            rootProperty: 'items'
		        }
		    }
		});
		
		childGrid.setStore(store);
		
	}, */
	
	createNavButtons: function(){
		var me = this;
		return [
			{
				text: 'Previous',
				itemId: 'prev',
				listeners: {
					click: {
						fn: this.buttonHandler,
						scope: me
					}
				},
				disabled: true
			},
			{
				text: 'Next',
				itemId: 'next',
				listeners: {
					click: {
						fn: this.buttonHandler,
						scope: me
					}
				}
			},
		
		];
	},
	buttonHandler: function(btn){
		
		var active = this.getLayout().getActiveItem();
		var index = this.items.indexOf(active);
		
		if(btn.text == 'Next'){
			index = (index==this.items.length-1 ? this.items.length-1 : index+1);
			this.getLayout().setActiveItem(index);	
		}
		
		if(btn.text == 'Previous'){
			index = (index==0 ? 0 : index-1);
			this.getLayout().setActiveItem(index);
		}
		

		// enable disable buttons
		var prev = this.down('#prev');
		var next = this.down('#next');
		
		prev.setDisabled(index==0);
		next.setDisabled(index==this.items.length-1);
		
		//prev.setHidden(index==0);
		//next.setHidden(index==this.items.length-1);

	}

});

Ext.onReady(function () {
	

	
	Ext.create('Ext.container.Viewport', {
		id: 'viewport',
	    layout: 'fit',
		items: {
			xtype: 'wizard',
			title: 'Personal Data Sheet'
		}
		
	});
	
});
