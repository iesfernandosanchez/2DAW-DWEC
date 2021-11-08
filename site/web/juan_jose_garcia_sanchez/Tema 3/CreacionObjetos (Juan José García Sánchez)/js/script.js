let coche
let gasolinera


function createGasolinera(precioGasolina) {
    gasolinera = new Gasolinera(precioGasolina)

    document.getElementById("formulario").innerHTML = ""

    document.getElementById("tituloCoche").innerHTML += "<h1>Info Coche</h1>"
    document.getElementById("matricula").innerHTML = "Matricula: " + coche.matricula
    document.getElementById("gasolina").innerHTML = "Gasolina: " + coche.gasolina
    document.getElementById("capacidad").innerHTML = "Capacidad: " + coche.capacidad
    document.getElementById("consumo").innerHTML = "Consumo: " + coche.consumo
    document.getElementById("dinero").innerHTML = "Dinero: " + coche.dinero

    document.getElementById("botoneraCoche").innerHTML = '<input id="distancia" type="number" placeholder="Distancia">' +
        '<input type="button" onclick="viajar(document.getElementById(\'distancia\').value)" value="Viajar">' +
        '<input type="number" id="litrosRepostar" placeholder="Litros Repostar">' +
        '<input type="button" onclick="repostar(document.getElementById(\'litrosRepostar\').value)" value="Repostar">'
    document.getElementById("tituloGasolinera").innerHTML += "<h1>Info Gasolinera</h1>"
    document.getElementById("gasolinaGasolinera").innerHTML = "Gasolina: " + gasolinera.gasolina
    document.getElementById("dineroGasolinera").innerHTML = "Dinero: " + gasolinera.dinero
    document.getElementById("precioGasolina").innerHTML = "Precio Gasolina: " + gasolinera.precioGasolina
}

function createCoche(matricula) {
    let regex = /^[0-9]{4}[a-zA-Z]{3}$/
    if (regex.test(matricula)) {
        coche = new Coche(matricula);
        document.getElementById("formulario").innerHTML = "<input id='precioGasolinaInput' type='number' placeholder='Precio Gasolina'>" +
            '<input type="button" onclick="createGasolinera(document.getElementById(\'precioGasolinaInput\').value)" value="Introducir">'
    }else {
        document.getElementById("resultadoMatricula").innerHTML = "Introduce una matricula valida"
    }
}


function viajar(km) {
    let consumo = parseInt(coche.consumo)
    let consumoRealizado = (parseInt(km)) * consumo / 100;

    let gasolinaRestante = parseInt(coche.gasolina) - consumoRealizado;

    if (gasolinaRestante > 7) {
        coche.gasolina = gasolinaRestante
        document.getElementById("resultado").innerHTML = "Viaje realizado"
        document.getElementById("gasolina").innerHTML = "Gasolina: " + coche.gasolina
        coche.historico.push([new Date(Date.now()), "Viajado: " + km + " KM"])
        document.getElementById("historicoCoche").innerHTML = coche.historico

    } else if (gasolinaRestante > 1 && gasolinaRestante < 7) {
        coche.gasolina = gasolinaRestante
        document.getElementById("resultado").innerHTML = "Te queda poca gasolina unicamente puedes recorrer " + gasolinaRestante * 7 / 100 + "KM"
        document.getElementById("gasolina").innerHTML = "Gasolina: " + coche.gasolina
    } else {
        document.getElementById("resultado").innerHTML = "No puedes hacer ese viaje de golpe no tienes suficiente gasolina"
    }
}

function repostar(litros) {
    let precioAPagar = gasolinera.precioGasolina * litros

    if (precioAPagar > coche.dinero) {
        document.getElementById("resultado").innerHTML = "No tienes dinero Suficiente"
    } else if ((parseInt(coche.gasolina) + parseInt(litros)) > parseInt(coche.capacidad)) {
        document.getElementById("resultado").innerHTML = "El coche no tiene tanta capacidad"
    } else {
        if (parseInt(gasolinera.gasolina) > litros) {
            coche.dinero -= parseInt(precioAPagar)
            coche.gasolina = parseInt(coche.gasolina) + parseInt(litros)
            gasolinera.dinero += precioAPagar
            gasolinera.gasolina -= litros
            gasolinera.historico.push([new Date(Date.now()), "Matricula: " + coche.matricula, "Repostado: " + litros + " L"])
            coche.historico.push([new Date(Date.now()), "Repostado: " + litros + " L"])
            document.getElementById("resultado").innerHTML = "Deposito repostado"
            document.getElementById("historicoGasolina").innerHTML = gasolinera.historico
            document.getElementById("dineroGasolinera").innerHTML = "Dinero: " + gasolinera.dinero
            document.getElementById("gasolinaGasolinera").innerHTML = "Gasolina: " + gasolinera.gasolina
            document.getElementById("gasolina").innerHTML = "Gasolina: " + coche.gasolina
            document.getElementById("dinero").innerHTML = "Dinero: " + coche.dinero
            document.getElementById("historicoCoche").innerHTML = coche.historico
        } else {
            document.getElementById("resultado").innerHTML = "La gasolinera no tiene gasolina suficiente"
        }
    }
}