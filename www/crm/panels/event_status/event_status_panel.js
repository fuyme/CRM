function create_add_es_window(){

	es_window = create_es_window();	
	es_window.title = 'rest';	
	es_window.items.items[0].getForm().setValues({
action: 'new'
});	
	es_window.show();
	

}

function create_edit_es_window(){

	es_window = create_es_window();
	var row = event_status_grid.getSelectionModel().getSelection()[0];
	es_window.items.items[0].getForm().setValues({
id: row.get('id'),
name: row.get('name'),
info: row.get('info'),
action: 'edit'
});
	es_window.show();


}

function create_del_es_window(){

	var selectedRecord = event_status_grid.getSelectionModel().getSelection()[0];
	
	Ext.Ajax.request({
        method: 'POST',
        url: domen+'crm/Employee',
        params: { id: selectedRecord.data.id, action: 'delete'},
        success: function( result, request ){
            refresh_es();
        }
    });

}

function refresh_es(){
	event_status_store.load();
	event_status_grid.getView().refresh();

}

var event_status_panel = Ext.create('Ext.panel.Panel', {
	
	title: 'евентстатус',
	
	items: [event_status_grid],
	
	tbar: [
		{
		text: 'Добавить',
		handler: create_add_es_window
		},
		{
		text: 'Изменить',
		handler: create_edit_es_window
		},
		{		
		text: 'Удалить',
		handler: create_del_es_window
		},
		'-',
		{
		text: 'Обновить',
		handler: refresh_es
		}
	],
	
});