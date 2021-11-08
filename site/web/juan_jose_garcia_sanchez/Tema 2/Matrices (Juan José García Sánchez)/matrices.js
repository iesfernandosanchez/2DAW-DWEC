let matriz = []
let nombreProcesos = ['A', 'B', 'C', 'D', 'E', 'F']
let unidades = ['P', 'TC', 'TU']
let stringOut = "";

matriz.push(unidades)


for (let i = 0; i < nombreProcesos.length; i++) {
    matriz = crearProceso(nombreProcesos[i], numAleatorio(), numAleatorio(), matriz)
}

compareProcess(matriz)
imprimirMatriz(matriz)


function compareProcess(matriz) {

    matriz.sort(function (a, b) {
        if (a[1] < b[1]) {
            return -1
        } else if (a[1] > b [1]) {
            return 1
        } else {
            return 0
        }
    })
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            stringOut += "  " + matriz[i][j].toString() + "  "
        }
        stringOut += "\n";
    }
    console.log(stringOut);
}

function crearProceso(nombre, tiempoCreacion, tiempoUso, matriz) {
    matriz.push([nombre, tiempoCreacion, tiempoUso])
    return matriz
}

function numAleatorio() {
    return Math.floor(Math.random() * (9))
}
