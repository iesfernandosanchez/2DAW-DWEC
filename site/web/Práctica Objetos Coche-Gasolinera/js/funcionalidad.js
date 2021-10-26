var modal;
var modalViaje;
var modalRepostaje;
var matricula;
var precioGasolina;

var hoy = new Date();

//var regexMatricula = [/[0-9]{4}[A-Z]{3}/],[/[A-Z]{1,2}[0-9]{4}[A-Z]{1,2}/]
var regexMatriculaAnt = /[A-Z]{1,2}[0-9]{4}[A-Z]{1,2}/;
var regexMatriculaNue = /[0-9]{4}[A-Z]{3}/;

var coche;
var gasolinera;

var Coche = {

    matricula: "",
    gasolina: 0,
    dinero: 0,
    consumo: 0,
    histoViajes: [],
    histoRepostajes: [],

    init: function(matricula) {
        this.matricula = matricula;
        this.gasolina = 50;
        this.dinero = 100;
        this.consumo = 7;
        this.histoViajes = new Array();
        this.histoRepostajes = new Array();
    },

    viajar: function(kilometros) {

        var registro = new Array();

        var gastado = 0;

        registro['kilometros'] = kilometros;
        registro['dia'] = String(hoy.getDate()).padStart(2, '0') + '-' + String((hoy.getMonth() + 1)).padStart(2, '0') + '-' + hoy.getFullYear();
        registro['hora'] = String(hoy.getHours()).padStart(2, '0') + ':' + String(hoy.getMinutes()).padStart(2, '0') + ':' + String(hoy.getSeconds()).padStart(2, '0');

        this.histoViajes.push(registro);

        gastado = kilometros * this.consumo / 100;
        this.gasolina -= gastado;
    },

    repostar: function(gasolina) {
        var registro = new Array();
        registro['gasolina'] = gasolina;
        registro['dia'] = String(hoy.getDate()).padStart(2, '0') + '-' + String((hoy.getMonth() + 1)).padStart(2, '0') + '-' + hoy.getFullYear();
        registro['hora'] = String(hoy.getHours()).padStart(2, '0') + ':' + String(hoy.getMinutes()).padStart(2, '0') + ':' + String(hoy.getSeconds()).padStart(2, '0');

        this.histoRepostajes.push(registro);

        this.gasolina += gasolina;
        this.dinero -= gasolina * gasolinera.precioGasolina;

        gasolinera.vender(this.matricula, gasolina);
    },

};

var Gasolinera = {

    gasolina: 0,
    dinero: 0,
    precioGasolina: 0,
    histoVentas: [],

    init: function(precioGasolina) {
        this.gasolina = 500;
        this.dinero = 0;
        this.precioGasolina = precioGasolina;
        this.histoVentas = new Array();
    },

    vender: function(matricula, cantidad) {

        var registro = new Array();
        registro['matricula'] = matricula;
        registro['cantidad'] = cantidad;
        registro['dia'] = String(hoy.getDate()).padStart(2, '0') + '-' + String((hoy.getMonth() + 1)).padStart(2, '0') + '-' + hoy.getFullYear();
        registro['hora'] = String(hoy.getHours()).padStart(2, '0') + ':' + String(hoy.getMinutes()).padStart(2, '0') + ':' + String(hoy.getSeconds()).padStart(2, '0');

        this.histoVentas.push(registro);

        this.gasolina -= cantidad;
        this.dinero += cantidad * this.precioGasolina;
    }

};

function inicializar() {
    coche = Object.create(Coche);
    coche.init(matricula)

    gasolinera = Object.create(Gasolinera);
    gasolinera.init(precioGasolina)

    recargarDatos();
};

function recargarDatos() {

    document.getElementById("cocheMatricula").innerHTML = coche.matricula;
    document.getElementById("cocheGasolina").innerHTML = coche.gasolina + ' litros';
    document.getElementById("cocheDinero").innerHTML = coche.dinero + ' €';
    document.getElementById("cocheConsumo").innerHTML = coche.consumo + ' l/100km';

    document.getElementById("gasolineraGasolina").innerHTML = gasolinera.gasolina + ' litros';
    document.getElementById("gasolineraDinero").innerHTML = gasolinera.dinero + ' €';
    document.getElementById("gasolineraPrecio").innerHTML = gasolinera.precioGasolina + ' €/litro';

    document.getElementById("tbodyViajes").innerHTML = "";
    for (var i = 0; i < coche.histoViajes.length; i++) {
        registro = coche.histoViajes[i];
        document.getElementById("tbodyViajes").appendChild(crearFila(registro['kilometros'], registro['dia'], registro['hora']));
    }

    document.getElementById("tbodyRepostajes").innerHTML = "";
    for (var i = 0; i < coche.histoRepostajes.length; i++) {
        registro = coche.histoRepostajes[i];
        document.getElementById("tbodyRepostajes").appendChild(crearFila(registro['gasolina'], registro['dia'], registro['hora']));
    }

    document.getElementById("tbodyVentas").innerHTML = "";
    for (var i = 0; i < gasolinera.histoVentas.length; i++) {
        registro = gasolinera.histoVentas[i];
        document.getElementById("tbodyVentas").appendChild(crearFila(registro['matricula'], registro['cantidad'], registro['dia'], registro['hora']));
    }
}

// Petición de datos al cargar el documento
document.addEventListener("DOMContentLoaded", function() {

    modal = new bootstrap.Modal(document.getElementById('modalInicio'));

    modal.show();

});

function validarDatos() {

    matricula = document.getElementById("modalMatricula").value;
    precioGasolina = document.getElementById("modalPrecioGasolina").value;
    document.getElementById("modalError").innerHTML = "";

    if (!matricula) {
        document.getElementById("modalError").innerHTML = "Introduzca matrícula";
        return;
    } else if (!regexMatriculaAnt.test(matricula) && !regexMatriculaNue.test(matricula)) {
        document.getElementById("modalError").innerHTML = "Introduzca matrícula válida (nnnnABC o AZnnnnAZ)";
        return;
    }

    if (!precioGasolina) {
        document.getElementById("modalError").innerHTML = "Introduzca el precio de la gasolina";
        return;
    } else {
        if (isNaN(precioGasolina)) {
            document.getElementById("modalError").innerHTML = "Campo precio de la gasolina debe ser numérico";
            return;
        }
    }

    modal.hide();

    inicializar();

}

function crearFila(celda1, celda2, celda3, celda4) {
    var fila = document.createElement("tr");

    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(celda1);
    celda.appendChild(textoCelda);
    fila.appendChild(celda)
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(celda2);
    celda.appendChild(textoCelda);
    fila.appendChild(celda)
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(celda3);
    celda.appendChild(textoCelda);
    fila.appendChild(celda)

    if (celda4) {
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(celda4);
        celda.appendChild(textoCelda);
        fila.appendChild(celda)
    }

    return fila;
}

function crearViaje() {

    modalViaje = new bootstrap.Modal(document.getElementById('modalViaje'));

    modalViaje.show();

}

function validarDatosViaje() {

    var kms = parseInt(document.getElementById("modalKms").value);
    var kmsMax = (coche.gasolina / coche.consumo) * 100;

    document.getElementById("modalKmsError").innerHTML = "";

    if (!kms) {
        document.getElementById("modalKmsError").innerHTML = "Introduzca el número de kilómetros";
        return;
    } else if (isNaN(kms)) {
        document.getElementById("modalKmsError").innerHTML = "Número de kilómetros debe ser numérico";
        return;
    } else if (kms <= 0) {
        document.getElementById("modalKmsError").innerHTML = "Número de kilómetros debe ser mayor de 0";
        return;
    } else if (kms > kmsMax) {
        document.getElementById("modalKmsError").innerHTML = "No tiene gasolina para hacer esos kilómetros";
        return;
    }

    coche.viajar(kms);
    recargarDatos();
    document.getElementById("modalKms").value = "";

    modalViaje.hide();

}

function crearRepostaje() {

    modalRepostaje = new bootstrap.Modal(document.getElementById('modalRepostaje'));

    modalRepostaje.show();

}

function validarDatosRepostaje() {

    var litros = parseInt(document.getElementById("modalLitros").value);
    var litrosMax = coche.dinero / gasolinera.precioGasolina;

    document.getElementById("modalLitrosError").innerHTML = "";

    if (!litros) {
        document.getElementById("modalLitrosError").innerHTML = "Introduzca la cantidad de litros repostados";
        return;
    } else if (isNaN(litros)) {
        document.getElementById("modalLitrosError").innerHTML = "Cantidad de litros debe ser numérico";
        return;
    } else if (litros <= 0) {
        document.getElementById("modalLitrosError").innerHTML = "Cantidad de litros debe ser mayor de 0";
        return;
    } else if (litros > gasolinera.gasolina) {
        document.getElementById("modalLitrosError").innerHTML = "La gasolinera no tiene tantos litros de combustible";
        return;
    } else if (litros > litrosMax) {
        document.getElementById("modalLitrosError").innerHTML = "No tiene dinero para cargar tanto combustible";
        return;
    }

    coche.repostar(litros);
    recargarDatos();
    document.getElementById("modalLitros").value = "";

    modalRepostaje.hide();

}