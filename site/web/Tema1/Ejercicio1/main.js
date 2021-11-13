function prinTable(arrayItems, idTable){
    var rowsTable = "";
    for(var i = 0; i< arrayItems.length; i++){
        rowsTable += "<tr><td>" + arrayItems[i] + "</td></tr>"
    }

    document.getElementById(idTable).innerHTML= rowsTable;

}
