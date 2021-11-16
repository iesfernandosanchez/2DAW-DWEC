var validarMatricula = /^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}/;
var validarFechaHora = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})(\s)([0-1][0-9]|2[0-3])(:)([0-5][0-9])(:)([0-5][0-9])$/;


function validar(){
    document.getElementById("matricula");
    document.getElementById("FechaHora");

    if (matricula.value.match(validarMatricula)){
        matricula.style.backgroundColor = "green"
    }else{
        matricula.style.backgroundColor = "red"
    }

    if (FechaHora.value.match(validarFechaHora)){
        FechaHora.style.backgroundColor = "green"
    }else{
        FechaHora.style.backgroundColor = "red"
    }
}
