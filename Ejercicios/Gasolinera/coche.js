var coche = {
    matricula: null,
    gasolina: 50,
    dinero: 100,
    consumo: 7,
    historico: []
};

var gasolinera = {
    gasolina: 500,
    dinero: 0,
    precio: null,
    historico: []
};

function validarMatricula(matricula) {
    let regex = /(([A-Z]{1,2})(\d{4})([A-Z]{0,2}))|((E)(\d{4})([A-Z]{3}))/;
    return regex.test(matricula);
}

function init(){
    coche.matricula = prompt('Inserta la matricula:');
    while(!validarMatricula(coche.matricula)){
        alert('Matricula incorrecta.')
        coche.matricula = prompt('Inserta la matricula:');
    }
    gasolinera.precio = prompt('Inserta el precio de la gasolina:')
    //Coche
    document.getElementById('matricula').innerText = 'Matricula: ' + coche.matricula;
    document.getElementById('gasolinaC').innerText = 'Gasolina: ' + coche.gasolina + 'L';
    document.getElementById('dineroC').innerText = 'Dinero: ' + coche.dinero + '$';
    document.getElementById('consumo').innerText = 'Consumo: ' + coche.consumo + 'L / 100Km';
    document.getElementById('historicoC').innerText = 'Histórico: ' + coche.historico;
    //Gasolinera
    document.getElementById('gasolinaG').innerText = 'Gasolina: ' + gasolinera.gasolina;
    document.getElementById('dineroG').innerText = 'Dinero: ' + gasolinera.dinero + '$';
    document.getElementById('precio').innerText = 'Precio: ' + gasolinera.precio + '$/L';
    document.getElementById('historicoG').innerText = 'Histórico: ' + gasolinera.historico;
}

function Viajar() {
    let km = prompt('Kilometros viajados:');
    coche.gasolina = coche.gasolina - (coche.consumo * (km/100));
    if (coche.gasolina < 0) {
        alert('No se puede viajar esa distancia sin repostar.');
        coche.gasolina = coche.gasolina + (coche.consumo * (km/100));
    }
    document.getElementById('gasolinaC').innerText = 'Gasolina: ' + coche.gasolina + 'L';
    var d = new Date(Date.now());
    var fecha = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
    coche.historico.push([" Viaje: " + fecha])
    document.getElementById('historicoC').innerText = 'Histórico: ' + coche.historico;
}

function Repostar() {
    let litros = prompt('Litros a repostar: ')
    coche.gasolina = coche.gasolina + parseInt(litros);
    document.getElementById('gasolinaC').innerText = 'Gasolina: ' + coche.gasolina + 'L';
    coche.dinero = coche.dinero - (gasolinera.precio * litros);
    document.getElementById('dineroC').innerText = 'Dinero: ' + coche.dinero + '$';
    gasolinera.gasolina = gasolinera.gasolina - parseInt(litros);
    document.getElementById('gasolinaG').innerText = 'Gasolina: ' + gasolinera.gasolina;
    gasolinera.dinero = gasolinera.dinero + (gasolinera.precio * litros);
    document.getElementById('dineroG').innerText = 'Dinero: ' + gasolinera.dinero + '$';
    var d = new Date(Date.now());
    var fecha = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
    gasolinera.historico.push([fecha, " Matricula: " + coche.matricula, " Repostado: " + litros + " L"])
    coche.historico.push([fecha, " Repostado: " + litros + " L"])
    document.getElementById('historicoC').innerText = 'Histórico: ' + coche.historico;
    document.getElementById('historicoG').innerText = 'Histórico: ' + gasolinera.historico;
}