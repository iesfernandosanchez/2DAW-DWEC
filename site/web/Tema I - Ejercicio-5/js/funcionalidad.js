
document.addEventListener("DOMContentLoaded", function(event) {

    var nombre = "";
    var array = [];

    do {
        nombre = prompt("Introduce nombres:");
        if (nombre != null) {
            nombre = nombre.trim();
        }
        if (nombre) {
            array.push(nombre);
        }
    } while (nombre);

    for (var i in array) {
        console.log(array[i]);
    }
    
});