var Coche = {
    matricula : "",
    gasolina : 0,
    dinero: 0,
    consumo : 0,
    historicoViajes : [],
    historicoRepostaje : [],



init: function(matricula) {
    this.matricula = matricula;
    this.gasolina = 50;
    this.dinero = 100;
    this.consumo = 7;
    this.historicoViajes = [];
    this.historicoRepostaje = [];

    this.print();
},

print : function() {
    var infoCoche = '<h1>Matricula: </h1>' + this.matricula + '<br/>';
    infoCoche += '<h1>Gasolina: </h1>' + this.gasolina + '<br/>';
    infoCoche += '<h1>Dinero: </h1>' + this.dinero + '<br/>';
    infoCoche += '<h1>Consumo: </h1>' + this.consumo + '<br/>';

    infoCoche += '<h2>Historial de viajes: </h2>' + this.viajes;
    infoCoche += '<h2>Historial de repostaje: </h2>' + this.repostaje;


    document.getElementById("coche").innerHTML = infoCoche;
},

validarMatricula: function(matricula){

    var regex = /^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}/;
    return(regex.test(matricula));

},

viajar : function() {
    var distancia = prompt("¿Cuantos Kilometros deseas viajar?");

    if (this.gasolina >= 10){
        var consumido = (distancia*this.consumo)/100;
        this.gasolina -= consumido;
        
        alert('Has realizado un viaje de ' + distancia + ' km');
    }else{
        alert('No hay suficiente gasolina para el viaje');
    }

    this.print();
    
},

repostar : function(repostaje, precio){
    var repostaje = prompt("Introduce la cantidad de repostaje");
    if (this.precio > precio){
        var cant = parseInt(repostaje);
        this.gasolina = this.gasolina + cant;
        this.dinero -= parseInt(precio)* repostaje;

        alert('Has realizado un repostaje');
    }else{
        alert('No puedes repostar');
    }

    this.print();
},
}


var Gasolinera = {
    gasolina : 0,
    dinero : 0,
    precio : 0,

    init : function(){
        this.gasolina = 500;
        this.dinero = 0;
        this.precio = precio;

        this.print();
    },

    print: function(){
        var infoGasolinera = '<h1>Gasolina: </h1>' + this.gasolina + '<br/>';
        infoGasolinera += '<h1>Dinero: </h1>' + this.dinero + '<br/>';
        infoGasolinera += '<h1>Precio: </h1>' + this.precio + '<br/>';

        document.getElementById("gasolinera").innerHTML = infoGasolinera;
    },


    repostar : function(repostaje, Coche){
        if (this.gasolina > this.repostaje && Coche.dinero > this.precio){
            var cant = parseInt(repostaje);
            this.gasolina -= cant;
            this.dinero  += parseInt(precio)* repostaje;
        }

        this.print
    }



}
