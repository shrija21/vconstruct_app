$(document).ready(function(){
    $('#product1').click(function(e){
  		$.ajax({
       		url: "https://reqres.in/api/unknown",
       		type: "GET",
       		async: false,
       		success: function (data) {
       			// debugger;
       			createProductTable(data.data)
       		},
       		error: function(xhr, ajaxOptions, thrownError){
          		// debugger;
       		}
  		});
	});

	$('#product2').click(function(e){
  		$.ajax({
       		url: "https://reqres.in/api/products/",
       		type: "GET",
       		async: false,
       		success: function (data) {
       			// debugger;
       			createProductTable(data.data)
       		},
       		error: function(xhr, ajaxOptions, thrownError){
          		// debugger;
       		}
  		});
	});


	function createProductTable(response) {
		var body 				= document.getElementById('product_data_table');
		var tbl 				= document.createElement('product_data_table');

		tbl.setAttribute("id", "table_body");
		tbl.setAttribute("class", "table table-responsive table-fixed");
		var thead 				= document.createElement('thead');
		var tbody 				= document.createElement('tbody');

		var tr 					= document.createElement('tr');
		var title_header 		= "";
		
		var th 					= document.createElement("th");
  		th.appendChild(document.createTextNode(title_header));
  		th.setAttribute("style","vertical-align: middle;");
  		tr.appendChild(th);
  		thead.appendChild(tr);
  		tbl.appendChild(thead);
  		var input_data = [];
  		data_length = response.length
  		for(var i = 0; i < data_length; i++) {
  			input_data[i] = [];
  			for(var j =0; j < 5; j++) {
  				if(j == 0)
					input_data[i][j] 	= response[i].id;
				else if(j == 1)
					input_data[i][j] 	= response[i].name;
				else if(j == 2)
					input_data[i][j] 	= response[i].year;
				else if(j == 3)
					input_data[i][j] 	= response[i].color;
				else if(j == 4)
					input_data[i][j] 	= response[i].pantone_value;
  			}
  		}
  		
  		var input_data_lenght 	= input_data.length;
  		var len = input_data[0].length

  		for(var i=0; i < input_data_lenght; i++){
			tr 						= document.createElement('tr');
			for(var j=0; j < len; j++){
				var td 			= document.createElement('td');
				td.setAttribute("style","text-align: left;font-weight: bold;font-size: 10px;");
				td.style.width 	= "1%";
				if(input_data[i][j] == undefined)
					td.appendChild(document.createTextNode(""));
				else	
					td.appendChild(document.createTextNode(input_data[i][j]));
				tr.appendChild(td);
			}
			tbody.appendChild(tr);
		}
  		tbody.appendChild(tr);
		tbl.appendChild(tbody);
		if(body.hasChildNodes())
    		body.removeChild(body.childNodes[0]);
		body.appendChild(tbl);
	}
});