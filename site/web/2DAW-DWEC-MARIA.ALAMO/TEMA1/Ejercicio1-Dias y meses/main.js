var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
var diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

function printTable(arrayItems, idTable){
    var rowsTable = "";

    for(var i = 0; i < arrayItems.length ; i++){
        rowsTable += "<tr><td>" + arrayItems[i] + "</td></tr>"
    }
    
    document.getElementById(idTable).innerHTML = rowsTable;
}
