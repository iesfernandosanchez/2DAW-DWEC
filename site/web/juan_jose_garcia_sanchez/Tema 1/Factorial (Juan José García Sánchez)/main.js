
document.addEventListener("DOMContentLoaded",function (){
    document.getElementById("numeroFactorial").focus()
})


function factorial(numero, id) {
    let resultado = 1;
    let numeroCopy = numero

    while (numero > 1){
        resultado *= numero
        numero--
    }

    document.getElementById("numeroFactorial").value = null
    document.getElementById("numeroFactorial").focus()
    document.getElementById(id).innerHTML = "El resultado del factorial de " + numeroCopy + " es: " + resultado
}
