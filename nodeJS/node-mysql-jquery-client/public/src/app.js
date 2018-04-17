var log = console.log;

$( document ).ready(function() {

    $('#send-col').click(function(event){
    	event.preventDefault();

    	var columnsForDB = {};

    	columnsForDB.col1 = $( "input[name='col1']" ).val();
    	columnsForDB.col2 = $( "input[name='col2']" ).val();
    	columnsForDB.col3 = $( "input[name='col3']" ).val();
    	columnsForDB.col4 = $( "input[name='col4']" ).val();

    	$.ajax({
    	  type: "POST",
    	  url: "/",
    	  dataType: 'json', // 'json'
    	  data: JSON.stringify(columnsForDB),
    	  contentType : 'application/json'

    	});
    }); 	
});
