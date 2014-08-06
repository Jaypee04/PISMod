Ext.define('Wizard', {
	
	alias: 'widget.wizard',
	extend: 'Ext.tab.Panel',
	requires:['Ext.util.*'],
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
				'NameofSchool', 'DegreeCourse', 'YearGraduated', 'HighestGrade', 'FromDate', 'ToDate', 'Scholarship'
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
        clicksToMoveEditor: 1,
        autoCancel: false
		});
	},
	items: [
		{
			title: 'Personal Information',
			items: [
				{
					xtype: 'panel',
					title: 'Employee Picture',
					layout: 'anchor',
					collapsible: true,
					collapsed: false,
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
				// EMPLOYEE DETAILS
				{
					xtype: 'panel',
					title: 'Employee details',
					layout: 'anchor',
					collapsible: true,
					collapsed: true,
					bodyPadding: '20 20 20 20',
					margin: '20 40 20 20',
					defaults: {
						width: '100%'
					},
					items:[
			
						// SURNAME
						{
							xtype: 'textfield',
							fieldLabel: 'Surname',
							emptyText: 'Rizal'
						},
						// FIRST NAME
						{
							xtype: 'textfield',
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
									fieldLabel: 'Middle name',
									emptyText: 'Protacio',
									flex: 2
								},
								// NAME EXTENSION
								{
									xtype: 'textfield',
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
									fieldLabel: 'Date of Birth',
									flex: 1
								},
								// PLACE OF BIRTH
								{
									xtype: 'textfield',
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
									store: ['F', 'M'],
									fieldLabel: 'Sex',
									flex: 1,
									editable: false
								},
								// CIVIL STATUS
								{
									xtype: 'combo',
									fieldLabel: 'Civil status',
									store: ['Single','Married','Annulled','Widowed','Separated','Others'],
									labelWidth: 120,
									padding: '0 0 0 10',
									flex: 2.5,
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
									fieldLabel: 'NAMRIA ID',
									flex: 1
								},
								// TIN
								{
									xtype: 'textfield',
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
									fieldLabel: 'GSIS ID',
									flex: 1
								},
								// PAG-IBIG
								{
									xtype: 'textfield',
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
									fieldLabel: 'PHILHEALTH',
									flex: 1
								},
								// SSS
								{
									xtype: 'textfield',
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
							fieldLabel: 'Email Address',
							padding: '0 0 0 10'
						},
						// CELLPHONE NO.
						{
							xtype: 'textfield',
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
							fieldLabel: 'Address',
							emptyText: 'house no., building, street, barangay, municipality, district, province',
							width: '100%'
						},
						// ZIP CODE
						{
							xtype: 'textfield',
							fieldLabel: 'Zip code',
							padding: '0 0 0 10'
						},
						// TELEPHONE
						{
							xtype: 'textfield',
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
							fieldLabel: 'Address',
							emptyText: 'house no., building, street, barangay, municipality, district, province',
							width: '100%'
						},
						// ZIP CODE
						{
							xtype: 'textfield',
							fieldLabel: 'Zip code',
							padding: '0 0 0 10'
						},
						// TELEPHONE
						{
							xtype: 'textfield',
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
							fieldLabel: 'Surname'
						},
						// FIRST NAME
						{
							xtype: 'textfield',
							fieldLabel: 'First name'
						},
						// MIDDLE NAME
						{
							xtype: 'textfield',
							fieldLabel: 'Middle name'
						},
						// OCCUPATION
						{
							xtype: 'textfield',
							fieldLabel: 'Occupation'
						},
						// EMPLOYER/BUSINESS
						{
							xtype: 'textfield',
							fieldLabel: 'Employer',
							emptyText: '(enter business name if self employed)'
						},
						// BUSINESS ADDRESS
						{
							xtype: 'textfield',
							fieldLabel: 'Business Address'
						},
						// EMPLOYER/BUSINESS
						{
							xtype: 'textfield',
							fieldLabel: 'Telephone'
						}
					]
				},
				// CHILDREN
				{
					xtype: 'grid',
					collapsible: true,
					collapsed: true,
					margin: '20 40 20 20',
				    title: 'Children',
					store: {
						xtype: 'store',
					    fields:['name', 'dob'],
					    data: { 
							items: [
								{name: 'Sophia Isabel M. Arboleda', dob: '11/08/2010'},
								{name: 'Damien Angelo M. Arboleda', dob: '08/27/2012'},
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
				        { header: '<center>NAME OF CHILD</center>',  dataIndex: 'name', editor: 'textfield', flex: 2},
				        { xtype: 'datecolumn', 
							header: '<center>DATE OF BIRTH</center>', 
							dataIndex: 'dob', 
							width: 135,
							editor: {
								xtype: 'datefield',
								allowBlank: false,
								format: 'm/d/Y',
								minValue: '01/01/1950',
								minText: 'Cannot have a start date before the company existed!',
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
								var storeKo = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								console.log(rowEdit);
								// Create a model instance
								var r = Ext.create('Children', {
									name: 'Name of Child',
									dob: Ext.Date.clearTime(new Date())
								}); 
								
								storeKo.add(r);
								rowEdit.startEdit(grid.getStore().getData().getCount()-1, 0);
							}
						},
						{
							text: 'remove',
							handler: function() 
							{
								var grid = this.up('grid');
								var storeKo = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								var sm = grid.getSelectionModel();
								rowEdit.cancelEdit();
								storeKo.remove(sm.getSelection());
								if (storeKo.getCount() > 0) {
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
							fieldLabel: 'Surname'
						},
						// FIRST NAME
						{
							xtype: 'textfield',
							fieldLabel: 'First name'
						},
						// MIDDLE NAME
						{
							xtype: 'textfield',
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
							fieldLabel: 'Surname'
						},
						// FIRST NAME
						{
							xtype: 'textfield',
							fieldLabel: 'First name'
						},
						// MIDDLE NAME
						{
							xtype: 'textfield',
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
					title: 'Educational Background',
					collapsible: true,
					collapsed: false,
					margin: '20 40 20 20',
					store: {
						xtype: 'store',
						fields:['NameofSchool', 'DegreeCourse', 'YearGraduated', 'HighestGrade','FromDate', 'ToDate', 'Scholarship'],
						data: { 
							items: [
								{NameofSchool: 'Elementary School', DegreeCourse: 'Elementary', YearGraduated: '', HighestGrade: '', FromDate:'', ToDate:'', Scholarship:''},
								{NameofSchool: 'High School', DegreeCourse: 'Secondary', YearGraduated: '', HighestGrade: '', FromDate:'', ToDate:'', Scholarship:''},
								{NameofSchool: 'College', DegreeCourse: 'B.S.I.T', YearGraduated: '', HighestGrade: '', FromDate:'', ToDate:'', Scholarship:''}
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
						{ header: '<center>NAME OF SCHOOL<br>(Write in Full)</center>', dataIndex: 'NameofSchool', editor: 'textfield', flex:2 },
						{ header: '<center>DEGREE/COURSE<br>(Write in Full)</center>', dataIndex: 'DegreeCourse', editor: 'textfield', flex:1.3 },
						{ header: '<center>YEAR GRADUATED<br>(if graduated)</center>', dataIndex: 'YearGraduated', editor: 'textfield', flex:1.3 },
						{ header: '<center>HIGHEST GRADE/<br>LEVEL/<br>UNITS EARNED<br>(Write in Full)</center>', dataIndex: 'HighestGrade', editor: 'textfield', flex:1.3 },
						{ header: '<center>FROM</center>', dataIndex: 'FromDate', editor: 'textfield',flex:.5 },
						{ header: '<center>TO</center>', dataIndex: 'ToDate', editor: 'textfield', flex:.5 },
						{ header: '<center>SCHOLARSHIP/<br>ACADEMIC HONORS<br>RECEIVED</center>', dataIndex: 'Scholarship', editor: 'textfield', flex:1.5 }
						
					],
					buttons: [
						{
							text: 'add',
							handler: function() 
							{	
								var grid = this.up('grid');
								var storeKo = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								console.log(rowEdit);
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
								
								storeKo.add(r);
								rowEdit.startEdit(grid.getStore().getData().getCount()-1, 0);
							}
						},
						{
							text: 'remove',
							handler: function() 
							{
								var grid = this.up('grid');
								var storeKo = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								var sm = grid.getSelectionModel();
								rowEdit.cancelEdit();
								storeKo.remove(sm.getSelection());
								if (storeKo.getCount() > 0) {
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
			title: 'Civil Service Eligibility'
		},
		{
			title: 'Work Experience'
		},
		{
			title: 'Voluntary Work'
		},
		{
			title: 'Training Programs',
			items: [
				{
					xtype: 'grid',
					title: 'Training Programs',
					collapsible: true,
					collapsed: false,
					margin: '20 40 20 20',
					store: {
						xtype: 'store',
						fields:['TitleofSeminar', 'TrainingFrom', 'TrainingTo', 'NumberofHours','ConductedBy'],
						data: { 
							items: [
								{'TitleofSeminar': 'How to train your Dragon', 'TrainingFrom': '2010', 'TrainingTo': '2010', 'NumberofHours': '240', 'ConductedBy':'DreamWorks Animation'}
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
						{ header: '<center>TITLE OF SEMINAR/CONFERENCE/WORKSHOP/SHORT COURSES<br>(Write in Full)</center>', dataIndex: 'TitleofSeminar', editor: 'textfield', flex:1.7 },
						{ header: '<center>From</center>', dataIndex: 'TrainingFrom', editor: 'textfield', flex:.3 },
						{ header: '<center>To</center>', dataIndex: 'TrainingTo', editor: 'textfield', flex:.3 },
						{ header: '<center>NUMBER OF<br>HOURS</center>', dataIndex: 'NumberofHours', editor: 'textfield', flex:.4 },
						{ header: '<center>CONDUCTED/SPONSORED BY<br>(Write in Full)</center>', dataIndex: 'ConductedBy', editor: 'textfield', flex:1 }
						
					],
					buttons: [
						{
							text: 'add',
							handler: function() 
							{	
								var grid = this.up('grid');
								var storeKo = grid.getStore();
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
								
								storeKo.add(r);
								rowEdit.startEdit(grid.getStore().getData().getCount()-1, 0);
							}
						},
						{
							text: 'remove',
							handler: function() 
							{
								var grid = this.up('grid');
								var storeKo = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								var sm = grid.getSelectionModel();
								rowEdit.cancelEdit();
								storeKo.remove(sm.getSelection());
								if (storeKo.getCount() > 0) {
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
						{ header: '<center>SPECIAL SKILLS/HOBBIES</center>', dataIndex: 'SpecialSkills', editor: 'textfield', flex: 2}
					],
					buttons: [
						{
							text: 'add',
							handler: function() 
							{	
								var grid = this.up('grid');
								var storeKo = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								console.log(rowEdit);
								// Create a model instance
								var r = Ext.create('Skills', {
									SpecialSkills: 'New Skills'									
								}); 
								
								storeKo.add(r);
								rowEdit.startEdit(grid.getStore().getData().getCount()-1, 0);
							}
						},
						{
							text: 'remove',
							handler: function() 
							{
								var grid = this.up('grid');
								var storeKo = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								var sm = grid.getSelectionModel();
								rowEdit.cancelEdit();
								storeKo.remove(sm.getSelection());
								if (storeKo.getCount() > 0) {
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
						{ header: '<center>NON-ACADEMIC DISTINCTIONS/RECOGNITION<br>(Write in Full)</center>', dataIndex: 'TitleofRecognition', editor: 'textfield', flex: 2},
						
						
					],
					buttons: [
						{
							text: 'add',
							handler: function() 
							{	
								var grid = this.up('grid');
								var storeKo = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								console.log(rowEdit);
								// Create a model instance
								var r = Ext.create('Recognition', {
									TitleofRecognition: 'New Recognition'
								}); 
								
								storeKo.add(r);
								rowEdit.startEdit(grid.getStore().getData().getCount()-1, 0);
							}
						},
						{
							text: 'remove',
							handler: function() 
							{
								var grid = this.up('grid');
								var storeKo = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								var sm = grid.getSelectionModel();
								rowEdit.cancelEdit();
								storeKo.remove(sm.getSelection());
								if (storeKo.getCount() > 0) {
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
						{ header: '<center>MEMBERSHIP IN<br>ASSOCIATION/ORGANIZATION<br>(Write in full)</center>', dataIndex: 'NameofOrganization', editor: 'textfield', flex: 2},
						
						
					],
					buttons: [
						{
							text: 'add',
							handler: function() 
							{	
								var grid = this.up('grid');
								var storeKo = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								console.log(rowEdit);
								// Create a model instance
								var r = Ext.create('Organization', {
									NameofOrganization: 'New Organization'
								}); 
								
								storeKo.add(r);
								rowEdit.startEdit(grid.getStore().getData().getCount()-1, 0);
							}
						},
						{
							text: 'remove',
							handler: function() 
							{
								var grid = this.up('grid');
								var storeKo = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								var sm = grid.getSelectionModel();
								rowEdit.cancelEdit();
								storeKo.remove(sm.getSelection());
								if (storeKo.getCount() > 0) {
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
					title: 'Are you related by consaguinity or affinity to any of the following:',
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
									xtype: 'label',
									text: 'Within the third degree(for National Government Employees):'+
									'appointing authority, recommending authority, chief of office/bureau/department or person who has'+
									'immediate supervision over you in the office, Bureau or Department where you will be appointed?',
									width:800
								},
								{
									xtype:'fieldcontainer',
									defaultType: 'radiofield',
									layout: 'hbox',
									items: [
										{
											boxLabel  : 'YES',
											name      : 'national',
											inputValue: '1',
											id        : 'radio1',
										}, 
										{
											boxLabel  : 'NO',
											name      : 'national',
											inputValue: '2',
											id        : 'radio2'
										}
									]
								}
							]
						},
						{
							xtype: 'fieldcontainer',
							layout: 'hbox',
							items: [
								{
									xtype: 'label',
									text: 'Within the fourth degree(for Local Government Employees):'+
									'appointing authority or recommending authority where you will be appointed?',
									width:800
								},
								{
									xtype:'fieldcontainer',
									defaultType: 'radiofield',
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
								}
								
							]
						}
					]
					
				},
				{
					// OTHERS
					xtype: 'panel',
					title: 'Continuation....',
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
									xtype: 'label',
									text: 'Have you ever been formally charged?',
									width:800
								},
								{
									xtype:'fieldcontainer',
									defaultType: 'radiofield',
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
								}
							]
						},
						{
							xtype: 'fieldcontainer',
							layout: 'hbox',
							items: [
								{
									xtype: 'label',
									text: 'Have you ever been guilty of any administrative offense?',
									width:800
								},
								{
									xtype:'fieldcontainer',
									defaultType: 'radiofield',
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
								}
								
							]
						},
						{
							xtype: 'fieldcontainer',
							layout: 'hbox',
							items: [
								{
									xtype: 'label',
									text: 'Have you been convicted of any crime or violation of any law, decree, ordinance or '+
									'regulation by any court or tribunal?',
									width:800
								},
								{
									xtype:'fieldcontainer',
									defaultType: 'radiofield',
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
								}
								
							]
						},
						{
							xtype: 'fieldcontainer',
							layout: 'hbox',
							items: [
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
								}
								
							]
						},
						{
							xtype: 'fieldcontainer',
							layout: 'hbox',
							items: [
								{
									xtype: 'label',
									text: 'Have you ever been a candidate in a national or local election(except Barangay election)?',
									width:800
								},
								{
									xtype:'fieldcontainer',
									defaultType: 'radiofield',
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
								}
								
							]
						},
						{
							xtype: 'fieldcontainer',
							layout: 'hbox',
							items: [
								{
									xtype: 'label',
									text: 'Pursuant to: (a)Indigenous People\'s Act(RA 8371); (b)Magna Carta for Disabled Persons(RA 7277); '+
									'and (c)Solo Parents Welfare Act of 2000(RA 8972), Are you a  member of any indigenous group?',
									width:800
								},
								{
									xtype:'fieldcontainer',
									defaultType: 'radiofield',
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
								}
								
							]
						},
						{
							xtype: 'fieldcontainer',
							layout: 'hbox',
							items: [
								{
									xtype: 'label',
									text: 'Are you differently abled?',
									width:800
								},
								{
									xtype:'fieldcontainer',
									defaultType: 'radiofield',
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
								}
								
							]
						},
						{
							xtype: 'fieldcontainer',
							layout: 'hbox',
							items: [
								{
									xtype: 'label',
									text: 'Are you a solo parent?',
									width:800
								},
								{
									xtype:'fieldcontainer',
									defaultType: 'radiofield',
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
								}
								
							]
						}
					]
					
				},
				{
					xtype: 'grid',
					title: 'Character Reference <font color="red">(Person not related by consaguinity or affinity to applicant/appointee)</font>',
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
								var storeKo = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								console.log(rowEdit);
								// Create a model instance
								var r = Ext.create('CharReference', {
									cReference: 'New Reference',
									Address:'',
									cNumber:''
								}); 
								
								storeKo.add(r);
								rowEdit.startEdit(grid.getStore().getData().getCount()-1, 0);
							}
						},
						{
							text: 'remove',
							handler: function() 
							{
								var grid = this.up('grid');
								var storeKo = grid.getStore();
								var rowEdit = grid.getPlugin('rowEditingPlugin');
								var sm = grid.getSelectionModel();
								rowEdit.cancelEdit();
								storeKo.remove(sm.getSelection());
								if (storeKo.getCount() > 0) {
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
							fieldLabel: 'Community Tax Certificate No.',
							padding: '0 0 0 10'
						},
						{
							xtype: 'textfield',
							fieldLabel: 'Issued At',
							padding: '0 0 0 10'
						},
						{
							xtype: 'datefield',
							fieldLabel: 'Date of Issuance',
							padding: '0 0 0 10',
							width: '35%'
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
							fieldLabel: 'Date Accomplished',
							padding: '0 0 0 10',
							width: '35%'
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
