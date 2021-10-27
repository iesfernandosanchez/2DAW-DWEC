
function calcularFactorial(valor, id_resultado) {

    var r = 1;

    if (isNaN(valor)) {
        r = "No es un número!"
    } else {
        for(var i = valor; i > 1; i--){
            r *= i;
        }
    }
    document.getElementById(id_resultado).innerHTML = r;
};