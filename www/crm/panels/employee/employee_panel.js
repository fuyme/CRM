function create_add_mng_window(){

	mng_window = create_mng_window();	

mng_window.title = 'Добавить сотрудника';	
mng_window.items.items[0].getForm().setValues({
action: 'new'
});		
	mng_window.show();
	

}

function create_edit_mng_window(){
if(employee_grid.getSelectionModel().getSelection()!=""){
	mng_window = create_mng_window();mng_window.title = 'Изменить сотрудника';	
	var row = employee_grid.getSelectionModel().getSelection()[0];
	mng_window.items.items[0].getForm().setValues({
login: row.get('login'),
last_name: row.get('last_name'),
first_name: row.get('first_name'),
middle_name: row.get('middle_name'),
role: row.get('role'),
email: row.get('email')
   
})
	mng_window.show();}


}

function create_del_mng_window(){

	var selectedRecord = employee_grid.getSelectionModel().getSelection()[0];
	
	Ext.Ajax.request({
        method: 'POST',
        url: domen+'crm/employees',
        params: { id: selectedRecord.data.id, action: 'delete'},
        success: function( result, request ){
           refresh_mng(); 
        }
    });

}

function refresh_mng(){
	employee_store.load();
	employee_grid.getView().refresh();

}

var employee_panel = Ext.create('Ext.panel.Panel', {
	
	title: 'Сотрудники',	
	
	items: [employee_grid],
	
	tbar: [
		{
		text: 'Добавить',
		handler: create_add_mng_window
		},
		{
		text: 'Изменить',
		handler: create_edit_mng_window
		},
		{		
		text: 'Удалить',
		handler: create_del_mng_window
		},
		'-',
		{
		text: 'Обновить',
		handler: refresh_mng
		}
	],
	
});