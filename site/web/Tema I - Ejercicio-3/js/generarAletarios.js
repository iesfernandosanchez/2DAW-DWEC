

var numeroMax = 50;
var numIntentos = 32;

var numeroObtenido;

var arrayNumeros = [];

var resultado = "";

var numeros = new Array(numeroMax).fill(0);
var mayor = 0;
var masRepetido = 0;

document.addEventListener("DOMContentLoaded", function(event) {

    for (var i = 0; i < numIntentos; i++) {

        numeroObtenido = obtenerNumsAleatorios(0, numeroMax);
        arrayNumeros.push(numeroObtenido);

        numeros[numeroObtenido] = numeros[numeroObtenido] + 1;
    }
    
    for (i in arrayNumeros) {
        resultado = resultado.concat(arrayNumeros[i]).concat(" ");
    }

    for (i in numeros) {

        if (numeros[i] > mayor) {
            mayor = numeros[i];
            masRepetido = i;
        }
    }
    
    console.log(resultado);
    document.getElementById("resultado").innerHTML = resultado;

    console.log("El número más repetido es el: " + masRepetido);
    document.getElementById("masRepetido").innerHTML = "El número más repetido es el: " + masRepetido;
});

function obtenerNumsAleatorios(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;

}