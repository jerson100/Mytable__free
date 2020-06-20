import { DataTable } from "./table.js";

((window,document,undefinied)=>{
	document.addEventListener('DOMContentLoaded',evt=>{
		let tblContents = new DataTable({
            table: '.my-table',
            columns : [
                {
                    name: 'Contenido',
                    var: 'descContenido',
                    type: 'text'
                },
                {
                    name: 'Link',
                    var: 'link',
                    type: 'link'
                }
            ],
            rowsCount : 5,
            navigator : true,
			actions: {
				options: 'edit remove',
				edit: function(data){
					console.log(data);
				},
				remove: function(data){
					
				},
				view: function(data){
					
				}
			}
        });
        console.log(tblContents);
        fetch('data.json')
            .then((response)=>{
                return response.json();
            })
            .then(data=>{
                console.log(data);
                tblContents.updateData(data.contenidos);
            })
            .catch(e=>{
                console.log(e);
            });

        
	});
})(window,document);