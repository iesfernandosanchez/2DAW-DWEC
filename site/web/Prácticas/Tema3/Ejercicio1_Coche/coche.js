var Coche = {
    matricula : "",
    gasolina : 0,
    dinero : 0,
    consumo : 0,
    viajes : [],
    repostaje : [],

    init: function(matricula){
        this.matricula = matricula;
        this.gasolina = 50;
        this.dinero = 100;
        this.consumo = 7;
        this.viajes = [];
        this.repostaje = [];

        this.print();
    },

    print: function(){
        var infoCoche = '<p><b>Matricula:</b> ' + this.matricula +'<br/><b>Gasolina:</b> ' + this.gasolina + '<br/><b>Dinero:</b> ' + this.dinero + '</br><b>Consumo:</b> ' + this.consumo + '</p>';
        infoCoche += '<h5>Historial de viajes: </h5>' + this.viajes;
        infoCoche += '<h5>Historial de repostaje: </h5>' + this.repostaje;
        document.getElementById("coche").innerHTML = infoCoche;
    },

    validarMatricula: function(matricula){
        var regex = /([0-9]{4}-[a-zA-Z]{3})|([a-zA-Z]{1,2}-[0-9]{4}-[a-zA-Z]{2})/;
        return (regex.test(matricula));
    },

    viajar: function(){
        var distancia = prompt("Que distancia quieres recorrer:");
        if (this.gasolina >= 7){
            var consumido = (distancia*this.consumo)/100;
            this.gasolina -= consumido;

            let fecha = new Date();
            this.viajes.push(fecha.getDate() + "/" + (parseInt(fecha.getMonth())+1) + "/" + fecha.getFullYear() + "-" + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds() + " -> Se ha realizado un viaje de "+ distancia +"km. <br>");

        }else{
            alert("No tienes gasolina para viajar!");
        }

    
        this.print();
    },

    repostar: function(cantidad, precio){
        if (this.dinero >= precio){
            var c = parseInt(cantidad);
            this.gasolina += c;
            this.dinero -= parseInt(precio)*cantidad;

            let fecha = new Date();
            this.repostaje.push(fecha.getDate() + "/" + (parseInt(fecha.getMonth())+1) + "/" + fecha.getFullYear() + "-" + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds() + " -> Se ha un realizado un repostaje. <br>");    

        }else{
            alert("No tienes dinero para repostar!");
        }
    
        this.print();
    }

}

var Gasolinera = {
    gasolina : 0,
    dinero : 0,
    precio : 0,
    ventas : [],

    init: function(precio){
        this.gasolina = 500;
        this.dinero = 100;
        this.precio = precio;
        this.ventas = [];

        this.print();
    },

    print: function(){
        infoGasolinera = '<p><b>Gasolina:</b> ' + this.gasolina +'<br/><b>Dinero:</b> ' + this.dinero +'<br/><b>Precio:</b> ' + this.precio;
        infoGasolinera += '<h5>Historial: </h5>' + this.ventas;
        document.getElementById("gasolinera").innerHTML = infoGasolinera;
    },

    repostar: function(cantidad, Coche){
        if((this.gasolina >= cantidad)&&(Coche.dinero >= this.precio)){
            var c = parseInt(cantidad);
            this.gasolina -= c;
            this.dinero += parseInt(this.precio)*cantidad;

            document.getElementById("cantidad").value = "";

            let fecha = new Date();
            this.ventas.push(fecha.getDate() + "/" + (parseInt(fecha.getMonth())+1) + "/" + fecha.getFullYear() + "-" + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds() + " -> Se ha realizado una venta a la matrícula " + Coche.matricula + " por una cantidad de " + cantidad + " litros de gasolina por " + ((this.precio)*cantidad) + "€. <br>");
        }else{
            alert("No nos queda gasolina");
        }
    
        this.print();
    }
    
}