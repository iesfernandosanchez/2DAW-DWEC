
function printTable(tipo, id) {

    var cabecera = '';
    var datos = '';

    if (tipo == 'dias') {
        cabecera = "<tr><th>Días de la semana</th></tr>";
        datos = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    } else if (tipo == 'meses') {
        cabecera = "<tr><th>Meses del año</th></tr>";
        datos = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    }

    var pintarTabla = cabecera;
    for (i in datos) {
        pintarTabla += "<tr><td>" + datos[i] + "</td></tr>"
    };

    document.getElementById(id).innerHTML = pintarTabla;
};