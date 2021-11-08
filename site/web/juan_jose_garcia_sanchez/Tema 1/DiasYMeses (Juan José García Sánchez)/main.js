
// document.addEventListener("DOMContentLoaded", function () {
//     getTableMeses()
// })

function getTable(array,id) {
    let tabla = "<table id ='meses' border='1'>"
    array.forEach(value => {
        tabla += "<tr><td>" + value + "</td></tr>"
    });
    tabla += "</table>"
    document.getElementById(id).innerHTML = tabla
}