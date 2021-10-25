function printTable(arraysItems, idTable){
			var rowsTable = "";
			for (var i =0; i < arraysItems.length; i++) {
				rowsTable += "<tr><td>" + arraysItems[i] + "</td></tr>"
			}
			document.getElementById(idTable).innerHTML= rowsTable;
		}
