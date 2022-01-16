<<<<<<< HEAD
class Jugador {

    constructor(nombre) {

        this.nombre = nombre;
        this.cartas = [];
        this.punteroCarta = 0;

    }

    asignarCarta(carta) {
        this.cartas.push(carta);
    }

    actualizarPunteroCarta() {
        this.punteroCarta ++;
        if (this.punteroCarta >= this.cartas.length) {
            this.punteroCarta = 0;
        }
=======
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
>>>>>>> master
    }
}