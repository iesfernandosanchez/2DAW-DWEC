document.addEventListener("DMContentLoaded", function(){
var arrayN = new Array();

var contador = "";

do{
    var nombre = prompt("Escriba un nombre:");
    if(nombre != false){
        arrayN.push(nombre);
    }
}while(nombre != false);

for ( i = 0; i<arrayN.length;i++){
    contador = contador + arrayN[i] + "";
}

document.getElementById('nombre').innerHTML = contador;

});
