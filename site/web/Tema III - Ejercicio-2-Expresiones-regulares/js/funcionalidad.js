
var regexMatricula = /[a-zA-Z]{1,2}-[0-9]{4}-[a-zA-Z]{1,2}|[0-9]{4}-[a-zA-Z]{3}/;
var regexFechaHora = /[0-3][0-9]-[0-1][0-2]-[1-2][0-9]{3} [0-2][[0-9]:[0-6][0-9]:[0-6][0-9]/;

function validar() {

    var matricula = document.getElementById("matricula");
    var fechaHora = document.getElementById("fechaHora");

    // Valida matrícula
    if (matricula.value.match(regexMatricula)) {
        matricula.style.backgroundColor = "green";
    } else {
        matricula.style.backgroundColor = "red";
    }

    // Valida fecha
    if (fechaHora.value.match(regexFechaHora)) {
        fechaHora.style.backgroundColor = "green";
    } else {
        fechaHora.style.backgroundColor = "red";
    }

}