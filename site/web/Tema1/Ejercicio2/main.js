function calcularFactorial(valor, idResultado){
    factorial = valor;
    resultado = 1;
    while(factorial>1){
        resultado *= factorial;
        factorial--;
    }

    document.getElementById(idResultado).innerHTML = resultado;
    document.getElementById("numero").value = "";
    document.getElementById("numero").focus();
}
