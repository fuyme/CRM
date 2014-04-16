var company_store = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'name', 'info', 'site', 'phones', 'emails', 'skypes', 
	{name: 'City', mapping: 'City.id'}, 
	{name: 'Segment', mapping: 'Segment.id'}, 
	{name: 'BusinessScale', mapping: 'BusinessScale.id'}, 
	{name: 'CompanyStatus', mapping: 'CompanyStatus.id'}, 
	{name: 'CompanyStatus', mapping: 'CompanyStatus.id'}, 
	{name: 'Employee', mapping: 'Employee.id'}, 
	{name: 'Tags', mapping: 'Tags.id'}, 
	{name: 'City_name', mapping: 'City.name'}, 
	{name: 'Segment_name', mapping: 'Segment.name'}, 
	{name: 'BusinessScale_name', mapping: 'BusinessScale.name'}, 
	{name: 'CompanyStatus_name', mapping: 'CompanyStatus.name'}, 
	{name: 'CompanyStatus_name', mapping: 'CompanyStatus.name'}, 
	{name: 'Employee_name', mapping: 'Employee.last_name'}, 
	{name: 'Tags_name', mapping: 'Tags.name'},
],
    
  autoLoad: true,
  proxy:{
    type:'ajax',
    url:domen+'crm/companies',
    reader:{
         root:'data',					
			
        }
    }
	
});

var company_grid = Ext.create('Ext.grid.Panel', {
				
		store: company_store,
		listeners: {
itemclick: function(dv, record, item, index, e) {
leftPanel.getLayout().setActiveItem(2);
var row = company_grid.getSelectionModel().getSelection()[0];
companyForm.getForm().setValues({
	name:row.get('name'),
	info:row.get('info'),
	site:row.get('site'),
	phones:row.get('phones'),
	emails:row.get('emails'),
	skypes:row.get('skypes'),
	City:row.get('City_name'),
	BusinessScale:row.get('BusinessScale_name'),
	CompanyStatus:row.get('CompanyStatus_name'),
	Employee:row.get('Employee_name'),
	Tags:row.get('Tags_name'),
})
}},
		
		columns: [
    
   
	{
      text: "Название",
      dataIndex: 'name',      
    },
	{
      text: "Город",       
	  dataIndex: 'City_name'
    },
	{
      text: "Статус",
      dataIndex: 'CompanyStatus_name',      
    },
	{
      text: "Сегмент",
      dataIndex: 'Segment_name',      
    },
	{
      text: "Размер бизнеса",
      dataIndex: 'BusinessScale_name',      
    }
	
	]
});