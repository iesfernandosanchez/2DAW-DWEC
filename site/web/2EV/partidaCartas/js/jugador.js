class Jugador{
    constructor(nombre, mazo){
        this.name = nombre;
        this.puntos = 0;
        this.mazo = mazo;
    }

    asignarMazo(mazo){
        this.mazo = mazo;
    }

    cartaRemove( carta) { 
    
        this.mazo = this.mazo.filter(function(ele){ 
            return ele != carta; 
        });
    }
}