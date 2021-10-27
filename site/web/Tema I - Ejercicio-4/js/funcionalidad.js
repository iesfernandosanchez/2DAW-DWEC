function calcular(dato) {

    var dato = document.getElementById("texto").value;
    var numeros = new Array();
    var numero = 0;
    var suma = 0;
    var numeroMayor = 0;
    var numeroMenor = 0;
    var media = 0;
    var error = false;

    numeros = dato.split(";")

    for (i in numeros) {
        if (isNaN(numeros[i]) || numeros[i] == '' || numeros[i] == undefined) {
            error = true;
            break;
        };

        numero = parseInt(numeros[i]);

        suma += numero;
        if (numero > numeroMayor) {
            numeroMayor = numero;
        };

        if (i == 0 || numero < numeroMenor) {
            numeroMenor = numero;
        };

    }

    if (numeros.length == 0) {
        error = true;
    }

    if (!error) {
        document.getElementById("error").style.display = 'none';
        media = (suma / numeros.length).toFixed(2);

        document.getElementById("resultadoSuma").innerHTML = suma;
        document.getElementById("resultadoMayor").innerHTML = numeroMayor;
        document.getElementById("resultadoMenor").innerHTML = numeroMenor;
        document.getElementById("resultadoMedia").innerHTML = media;
    } else {
        document.getElementById("error").style.display = "inline";
    }

}

function reiniciar() {
    document.getElementById("error").style.display = 'none';
    document.getElementById("texto").value = "";
    document.getElementById("resultadoSuma").innerHTML = "";
    document.getElementById("resultadoMayor").innerHTML = "";
    document.getElementById("resultadoMenor").innerHTML = "";
    document.getElementById("resultadoMedia").innerHTML = "";
}