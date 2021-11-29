
 var arrayPares = new Array();
 var arrayImpares = new Array();
 var totalPares = 0;
 var totalImpares = 0;
 
function meterNumeros(){

var numero = document.getElementById('numero').value;

if(numero % 2 == 0){

    document.getElementById('resultadoPar').innerHTML = "El numero es par";
    arrayPares.push(parseInt(numero));

    for (var i = 0; i < arrayPares.length; i++) {
        totalPares = arrayPares[i] + totalPares;
        
    }
    console.log(totalPares);

}else if(numero % 3 == 0){

    document.getElementById('resultadoImpar').innerHTML = "El numero es impar";
    arrayImpares.push(parseInt(numero));

    for (var i = 0; i < arrayImpares.length; i++) {
        totalImpares = arrayImpares[i] + totalImpares;
        
    }
    console.log(totalImpares);
}

document.getElementById('numero').value = ""; //limpia input

document.getElementById('resultadoPar').innerHTML = totalPares;
document.getElementById('resultadoImpar').innerHTML = totalImpares;

}