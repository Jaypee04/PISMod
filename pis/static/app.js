var personnelData = {
  "surName": "Del Mundo",
  "firstName": "Jaypee",
  "middleName": "Catague",
  "nameExtension": "N\/A",
  "dateOfBirth": "1989-09-21",
  "placeOfBirth": "Quezon City",
  "sex": "M",
  "civilStatus": "Single",
  "NID": "12-0008",
  "TIN": "282 196 168",
  "GSIS": "2003397303",
  "PAGIBIG": "1210-8678-3213",
  "PHILHEALTH": "0000",
  "SSS": "34-2463527-8",
  "eMail": "jcdelmundo@namria.gov.ph",
  "cellphone": "+639334551979",
  "resAdd": "B5 L9 Ph3 Peace Village, San Luis, Antipolo City",
  "resZip": "1870",
  "resTel": "N\/A",
  "perAdd": "B5 L9 Ph3 Peace Village, San Luis, Antipolo City",
  "perZip": "1870",
  "perTel": "N\/A",
  "spSurname": "N\/A",
  "spFirstname": "N\/A",
  "spMiddlename": "N\/A",
  "spOccu": "N\/A",
  "spEmployer": "N\/A",
  "spBusAdd": "N\/A",
  "spBusTel": "N\/A",
  "children": [
    
  ],
  "fatSurname": "Del Mundo",
  "fatFirstname": "Petronilo",
  "fatMiddlename": "Caguimbal",
  "motSurname": "Catague",
  "motFirstname": "Joycelynn",
  "motMiddlename": "Trinidad",
  "education": [
    {
      "schoolName": "Marian School of Antipolo, Inc.",
      "degree": "Elementary",
      "yearGraduated": "2002",
      "highestGrade": "",
      "fromDate": "1997",
      "toDate": "2002",
      "scholarship": ""
    },
    {
      "schoolName": "Don Antonio de Zuzuarregui, Sr. Memorial Academy",
      "degree": "High School",
      "yearGraduated": "2006",
      "highestGrade": "",
      "fromDate": "2002",
      "toDate": "2006",
      "scholarship": ""
    }
  ],
  "training": [
    {
      "titleOfSeminar": "Training on Advanced GIS",
      "trainingFrom": "03\/04\/2013",
      "trainingTo": "03\/08\/2013",
      "numberOfHours": "40",
      "conductedBy": "NAMRIA-GTC"
    }
  ],
  "skills": [
    {
      "sSkills": "Driving"
    }
  ],
  "recognition": [
    {
      "recog": "N\/A"
    }
  ],
  "organization": [
    {
      "org": "O.N.E"
    }
  ],
  "charReference": [
    {
      "cName": "John SF Fabic",
      "cAdd": "NAMRIA-GISMB",
      "cNum": "884-2851"
    }
  ],
  "tax": {
    "taxNo": "Sample",
    "issuedAt": "Taguig City",
    "issuedDate": "2014-08-18T16:00:00.000Z"
  },
  "dateAccomplished": "2014-08-26T16:00:00.000Z"
};

Ext.define('Wizard', {
	
	alias: 'widget.wizard',
	extend: 'Ext.tab.Panel',
	requires:['Ext.util.*'],
	tbar: [
		{
			xtype: 'button',
			text: 'Save',
			handler: function(){
				var me = this.up('wizard');
				me.getFormData();
				//me.getChildren();
			}
		},
		{
			xtype: 'button',
			text: 'Load',
			handler: function(){
				var me = this.up('wizard');
				me.loadFormData(personnelData);
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
		
		var grid1 = me.down('#gridEducation');
		grid1.getStore().removeAll();
		// load education
		for(item in p.education){
			var educ = p.education[item];
			grid1.getStore().add({
				NameofSchool: educ.schoolName,
				DegreeCourse: educ.degree,
				YearGraduated: educ.yearGraduated,
				HighestGrade: educ.highestGrade,
				FromDate: educ.fromDate,
				ToDate: educ.toDate,
				Scholarship: educ.scholarship
			});
		}
		
		var grid2 = me.down('#gridTraining');
		grid2.getStore().removeAll();
		// load training
		for(item in p.training){
			var train = p.training[item];
			grid2.getStore().add({
				TitleofSeminar: train.titleOfSeminar,
				TrainingFrom: new Date(train.trainingFrom),
				TrainingTo: new Date(train.trainingTo),
				NumberofHours: train.numberOfHours,
				ConductedBy: train.conductedBy
			});
		}
		
		var grid3 = me.down('#gridSkills');
		grid3.getStore().removeAll();
		// load skills
		for(item in p.skills){
			var s = p.skills[item];
			grid3.getStore().add({
				SpecialSkills: s.sSkills
			});
		}
		
		var grid4 = me.down('#gridRecognition');
		grid4.getStore().removeAll();
		// load recognition
		for(item in p.recognition){
			var r = p.recognition[item];
			grid4.getStore().add({
				TitleofRecognition: r.recog
			});
		}
		
		var grid5 = me.down('#gridOrganization');
		grid5.getStore().removeAll();
		// load organization
		for(item in p.organization){
			var o = p.organization[item];
			grid5.getStore().add({
				NameofOrganization: o.org
			});
		}
		
		var grid6 = me.down('#gridReference');
		grid6.getStore().removeAll();
		// load reference
		for(item in p.charReference){
			var c = p.charReference[item];
			grid6.getStore().add({
				cReference: c.cName, 
				Address: c.cAdd, 
				cNumber: c.cNum
				
			});
		}
		me.down('#txtCertificate').setValue(p.tax.taxNo);
		me.down('#txtIssuedAt').setValue(p.tax.issuedAt);
		me.down('#dteIssuance').setValue(new Date(p.tax.issuedDate));
		me.down('#dteDateAccomplished').setValue(new Date(p.dateAccomplished));
		
	},
	getFormData: function(){
		var me = this;
		
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
			training: me.getTraining(),
			skills: me.getSkills(),
			recognition: me.getRecognition(),
			organization: me.getOrganization(),
			national: me.down('#national').getValue(),
			charReference: me.getCharRef(),
			tax: {
				taxNo:	me.down('#txtCertificate').getValue(),
				issuedAt: me.down('#txtIssuedAt').getValue(),
				issuedDate: me.down('#dteIssuance').getValue()
			},
			dateAccomplished: me.down('#dteDateAccomplished').getValue()
		};

		console.log(JSON.stringify(personnel));
	
		
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
				schoolName: row.data['NameofSchool'], 
				degree: row.data['DegreeCourse'],
				yearGraduated: row.data['YearGraduated'],
				highestGrade: row.data['HighestGrade'],
				fromDate: row.data['FromDate'],
				toDate: row.data['ToDate'],
				scholarship: row.data['Scholarship']
			});
		});
		
		return education;
		
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
				'Level','NameofSchool', 'DegreeCourse', 'YearGraduated', 'HighestGrade', 'FromDate', 'ToDate', 'Scholarship'
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
				{ header: 'CseCareer'},
				{ header: 'CseRating'},
				{ header: 'CseDate'},
				{ header: 'CsePlace'},
				{ header: 'CseNumber' },
				{ header: 'CseDor' }
			]
		}); 
		//model for Work Experience
		Ext.define('WorkExp', {
			extend: 'Ext.data.Model',
			fields: [
				{ header: 'workExFrom' },
				{ header: 'workExTo' },
				{ header: 'workExPosition'},
				{ header: 'workExDep' },
				{ header: 'workExMnth'},
				{ header: 'workExSal' },
				{ header: 'workExMnth' },
				{ header: 'workExGovt'} 
	
			]
		}); 
		//Voluntary Work 
		Ext.define('VwWork', {
			extend: 'Ext.data.Model',
			fields: [
				{ header: 'VwName' },
				{ header: 'VwFrom' },
				{ header: 'VwTo'},
				{ header: 'VwNumbers' },
				{ header: 'VwPosition'}
				
			]
		}); 
		
		//this.buttons = this.createNavButtons();
		this.callParent(arguments);

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
									store: ['F', 'M'],
									fieldLabel: 'Sex',
									flex: 1,
									editable: false
								},
								// CIVIL STATUS
								{
									xtype: 'combo',
									itemId:'cboCivilStatus',
									fieldLabel: 'Civil status',
									store: ['Single','Married','Annulled','Widowed','Separated','Others'],
									labelWidth: 80,
									padding: '0 0 0 10',
									flex: 1,
									editable: false,
									listeners: {
										select: function(){
											
											var combo = this;
											
											if(this.getValue() === 'Others'){
												var text = Ext.create('Ext.form.field.Text',{
													emptyText: 'enter a more specific civil status (e.g. It\'s complicated)',
													focusOnToFront: true
										   	 	});
												var win = Ext.create('Ext.window.Window', {
												    title: 'Civil status - Others',
												    height: 130,
												    width: 400,
												    layout: 'fit',
													modal: true,
												    items: text,
													buttons: [
														{
															text: 'Ok',
															handler: function(){
																win.close();
															}
														}
													],
													listeners: {
														close: function(){
															if(text.getValue() != '')
																combo.setValue('Others - ' + text.getValue());
														}
													}
												});
												win.show();
												
												text.focus(false, 100);
												
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
									xtype: 'textfield',
									itemId:'txtHeight',
									fieldLabel: 'Height',
									flex: 1
									
								},
								//WEIGHT
								{
									xtype: 'textfield',
									itemId:'txtWeight',
									fieldLabel: 'Weight',
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
								{
									xtype: 'fileuploadfield',
									id: 'filedata',
									margin:5,
									emptyText: 'Select an image to upload...',
									fieldLabel: 'File Path',
									width:380,
									buttonText: 'Browse'
								},
								{
									xtype:"image",
									height: 200,
									width: 200,
									style: {
										"background-position": "0 0"
									},
									src: 'http://placehold.it/200x200'
								}
								
							]
						},
						{
							xtype:'button',
							text:'Upload',
							width:385
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
									flex: 1
								},
								// TIN
								{
									xtype: 'textfield',
									itemId:'txtTIN',
									fieldLabel: 'TIN',
									padding: '0 0 0 10',
									flex: 1
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
						fields:['Level','NameofSchool', 'DegreeCourse', 'YearGraduated', 'HighestGrade','FromDate', 'ToDate', 'Scholarship'],
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
						{header: '<center>LEVEL</center>', fixed:true, menuDisabled:true, sortable:false, dataIndex: 'Level', },
						{ header: '<center>NAME OF SCHOOL<br>(Write in Full)</center>', fixed:true, menuDisabled:true, sortable:false, dataIndex: 'NameofSchool', editor: 'textfield', flex:2.6 },
						{ header: '<center>DEGREE/COURSE<br>(Write in Full)</center>', fixed:true, menuDisabled:true, sortable:false, dataIndex: 'DegreeCourse', editor: 'textfield', flex:1.6 },
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
									DegreeCourse:'', 
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
					//layout: 'fit',
					collapsible: true,
					//collapsed: true,
					margin: '20 40 20 20',
				    title: 'Civil Service Eligibility',
					 store: {
						xtype: 'store',
					    fields:['CseCareer', 'CseRating', 'CseDate', 'CsePlace', 'CseNumber','CseDor'],
					    data: { 
							items: [
								{'CseCareer': '', 'CseRating': '','CseDate': '','CsePlace': '','CseNumber': '','CseDor': ''},
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
				        { 
							header: '<center>CAREER SERVICE/RA 1080 (BOARD/BAR) <br> UNDER SPECIAL LAWS/CES/CSEE<\center>', 
								autoScroll:true,
								dataIndex: 'CseCareer', 
								editor:'textfield',
									flex: 2
						},
				        { 
							header: '<center>RATING<\center>', 
								dataIndex: 'CseRating', 
								editor:'textfield',
									flex: .6 
						},
				        {
							header: '<center>DATE OF EXAMINATION<br>/CONFERMENT<\center>',
								dataIndex: 'CseDate', 
								editor:'textfield',	
									flex: 1.2 
										},
						{
							header: '<center>PLACE OF EXAMINATION<br>/CONFERMENT<\center>', 
								dataIndex: 'CsePlace', 
								editor:'textfield',
									flex: 1.2 
						},
						{
							header: '<center>NUMBER<\center>', 
								dataIndex: 'CseNumber', 
								editor:'textfield',	
									flex: .5
						},
						{
							header: '<center>DATE OF RELEASE<\center> ', 
								dataIndex: 'CseDor', 
								editor:'textfield',	
									flex: 1 
									//width: 60
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
			title: 'Work Experience',
				items: [
				
				// work experience
				{
					xtype: 'grid',
					collapsible: true,
					//collapsed: true,
					margin: '20 40 20 20',
				    title: 'WORK EXPERIENCE(Include private employment. Start from your current work)',
					store: {
						xtype: 'store',
					    fields:['workExFrom', 'workExTo', 'workExPosition','workExDep','workExMnth','workExSal','workExStat','workExGovt'],
					    data: { 
							items: [
								{'workExFrom':'', 'workExTo':'', 'workExPosition':'','workExDep':'','workExMnth':'','workExSal':'','workExStat':'','workExGovt':''},
								
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
				        { 
							text: '<center>From<br>(mm/dd/yyyy)<\center>', 
								dataIndex: 'workExFrom', 
								editor:'textfield',	
									flex: .8
						},
				        { 
							text: '<center>To<br>(mm/dd/yyyy)<\center>',
								dataIndex: 'workExTo', 
								editor:'textfield',	
									flex: .8 
						},
				        {
							text: '<center>POSITION<br>TITLE <br>(Write in full) <\center>', 
								dataIndex: 'workExPosition', 
								editor:'textfield',	
									flex: .8 
						},
						{ 
							text: '<center>DEPARTMENT/AGENCY<br>/OFFICE/COMPANY<\center>', 
								dataIndex: 'workExDep', 
								editor:'textfield',	
									flex: 1.5 
						},
						{ 
							text: '<center>MONTHLY<br>SALARY<\center>', 
								dataIndex: 'workExMnth', 
								editor:'textfield',	
									flex: .8 
						},
						{ 
							text: '<center>SALARY GRADE &<br>STEP INCREMENT<br>(Format 00-0)<\center>', 
								dataIndex: 'workExSal', 
								editor:'textfield',	
									flex: 1.3 
						},
						{
							text: '<center>STATUS <br>OF APPOINTMENT<\center>', 
								dataIndex: 'workExStat', 
								editor:'textfield',	
									flex: 1.2 
						},
						{ 
							text: '<center>GOVT SERVICE <br>(YES/NO)<\center>', 
								dataIndex: 'workExGovt', 
								editor:'textfield',	
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
					collapsible: true,
					//collapsed: true,
					margin: '20 40 20 20',
				    title: 'VOLUNTARY WORK OR INVOLVEMENT IN CIVIC / NON-GOVERNMENT/PEOPLE/VOLUNTARY ORGANIZATIONS',
					store: {
						xtype: 'store',
					    fields:['VwName', 'VwFrom', 'VwTo', 'VwNumbers', 'VwPosition'],
					    data: { 
							items: [
								{'VwName': '', 'VwFrom': '', 'VwTo': '', 'VwNumbers': '', 'VwPosition':' '}
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
				        { text: '<center>NAME & ADDRESS OF ORGANIZATION<br>(Write in full)<\center>',
							editor:'textfield',
								dataIndex: 'VwName', 
								flex: 1.5
						},
						{ 
							text: '<center>From<br>(mm/dd/yyyy)<\center>', 
								editor:'textfield',
								dataIndex: 'VwFrom', 
									flex: .7 
									
						},
						{ 
							text: '<center>To<br>(mm/dd/yyyy)<\center>', 
								editor:'textfield',
								dataIndex: 'VwTo', 
									flex: .7 
						},
						{ 
							text: '<center>NUMBERS OF HOURS<\center>', 
								editor:'textfield',
								dataIndex: 'VwNumbers', 
									flex: 1 
						},
						{ 
							text: '<center>POSITION / NATURE OF WORK<\center>', 
								editor:'textfield',
								dataIndex: 'VwPosition', 
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
								console.log(rowEdit);
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
						fields:['TitleofSeminar', 'TrainingFrom', 'TrainingTo', 'NumberofHours','ConductedBy'],
						/* data: { 
							items: [
								{'TitleofSeminar': 'How to train your Dragon', 'TrainingFrom': '2010', 'TrainingTo': '2010', 'NumberofHours': '240', 'ConductedBy':'DreamWorks Animation'}
							]
						}, */
						autoLoad: true,
						proxy: {
							type: 'memory',
							reader: {
								type: 'json',
								rootProperty: 'items'
							}
						}
						
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
						data: { 
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
						}
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
						data: { 
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
						}
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
						data: { 
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
						}
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
							width:125,
							itemId:'national',
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
									inputValue: '2',
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
									me.down('#radio1').setValue(true);
								else
								me.down('#radio2').setValue(true)
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
									inputValue: '2',
									id        : 'radio4'
								}
							]
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
									inputValue: '2',
									id        : 'radio6'
								}
							]
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
									inputValue: '2',
									id        : 'radio8'
								}
							]
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
									inputValue: '2',
									id        : 'radio10'
								}
							]
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
									inputValue: '2',
									id        : 'radio12'
								}
							]
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
									inputValue: '2',
									id        : 'radio14'
								}
							]
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
									inputValue: '2',
									id        : 'radio16'
								}
							]
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
									inputValue: '2',
									id        : 'radio18'
								}
							]
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
									inputValue: '2',
									id        : 'radio20'
								}
							]
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
						data: { 
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
						}
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
