function printTable(ArrayItems, idTabla){
    var rowTable = "";
    for (var i = 0; i < ArrayItems.length; i++){
        rowTable += "<tr><td>" + ArrayItems[i] + "</td></tr>"
    }
    document.getElementById(idTabla).innerHTML = rowTable;
}