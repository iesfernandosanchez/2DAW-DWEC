function printTable(arrayItems, idTable){
    var rowTable = "";

    for(var i = 0; i < arrayItems.length; i++) {
        rowTable += "<tr><td>" + arrayItems[i] + "</td></tr>"
        document.getElementById(idTable).innerHTML
        = rowTable;
    } 
}