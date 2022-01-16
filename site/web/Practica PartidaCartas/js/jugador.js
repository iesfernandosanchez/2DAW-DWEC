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
    }
}