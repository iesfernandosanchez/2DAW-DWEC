function calculo(string) {
    let numeros = string.split(";")
    let resultado = 0

    numeros.forEach(value => resultado += parseInt(value))

    numeros.sort(function (a, b) {
        if (a > b) {
            return -1
        } else if (a < b) {
            return 1
        } else {
            return 0
        }
    })

    let numeroMenor = numeros[numeros.length - 1]
    let numeroMayor = numeros[0]
    let media = resultado / numeros.length

    document.getElementById("resultadoSuma").innerHTML = resultado
    document.getElementById("resultadoMedia").innerHTML = media
    document.getElementById("resultadoMayor").innerHTML = numeroMayor
    document.getElementById("resultadoMenor").innerHTML = numeroMenor
}

function limpiar() {
    document.getElementById("texto").value = ""
    document.getElementById("resultadoSuma").innerHTML = ""
    document.getElementById("resultadoMedia").innerHTML = ""
    document.getElementById("resultadoMayor").innerHTML = ""
    document.getElementById("resultadoMenor").innerHTML = ""
}