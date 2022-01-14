class App {

    constructor() {

        this.mazo = new Mazo();
        this.jugadores = [];

    }

    crearBaraja(configBaraja) {

        for (var i in configBaraja) {
            this.mazo.aniadirCarta(configBaraja[i]);
        }
        this.mazo.barajar();
    }

    crearJugadores(numJugadores) {

        var nombre;
        var j = 0;

        //Pide un nombre para cada jugador de la partida
        for (var i = 1; i <= numJugadores; i++) {
            // Pide nombre hasta que se introduzca un valor válido
            do {
                nombre = prompt("Introduce el nombre del jugador " + i + ": ");
            } while (!nombre)
            this.jugadores.push(new Jugador(nombre));
        }

        for (var i = 0; i < this.mazo.cartas.length; i++ ) {
            this.jugadores[j].asignarCarta(this.mazo.cartas[i])
            j ++;
            if (j == this.jugadores.length) {
                j = 0;
            }
        }
        console.log(this.jugadores);
    }

    jugarPartida(){

        var numJugadorEmpieza = this.random(0, this.jugadores.length - 1);
        var caractEscogida;

        // Comienza la partida: pide características hasta que un jugador 
        // se queda sin cartas y termina la partida
        do {        
            // Pide característica para jugar hasta que se introduzca una correcta
            do {
                caractEscogida = prompt(this.jugadores[numJugadorEmpieza].nombre + ", elige característica para luchar:");
            } while (!this.comprobarCaracteristicas(caractEscogida ,this.jugadores[numJugadorEmpieza].cartas[0].caracteristicas));

            var valores = [];

            //Recorre los jugadores y obtiene la puntuacion de la característica escogida
            for (var i in this.jugadores) {
                var punteroCarta = this.jugadores[i].punteroCarta;
                for (var j in this.jugadores[i].cartas[punteroCarta].caracteristicas) {
                    if (this.jugadores[i].cartas[punteroCarta].caracteristicas[j].clave == caractEscogida) {
                        valores.push(this.jugadores[i].cartas[punteroCarta].caracteristicas[j].valor)
                    }
                }
            }

            // Obtiene el indice del jugador que ha ganado
            var indGanador;
            const valorMasAlto= Math.max(...valores);
            const valorMasAltoIndex = valores.findIndex((v) => v === valorMasAlto);
            console.log(valorMasAltoIndex);

            // Quita la carta a los perdedores y se las da al ganador
            for (var i in this.jugadores) {
                if (i != valorMasAltoIndex) {
                    this.jugadores[valorMasAltoIndex].cartas.push(this.jugadores[i].cartas[this.jugadores[i].punteroCarta]);
                    //this.jugadores[i].cartas.splice[this.jugadores[i].punteroCarta, 1];
                    this.jugadores[i].cartas.splice(this.jugadores[i].punteroCarta, 1);
                    this.jugadores[i].actualizarPunteroCarta();
                }

                if (this.jugadores[i].cartas.length == 0) {
                    this.jugadores.splice(i, 1);
                }
            }

            console.log(this.jugadores);

        } while (this.jugadores.length > 1);

        document.getElementById('cartaSeleccionada').innerHTML = "Ganador! " + this.jugadores[0].nombre;
    }

    random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    comprobarCaracteristicas(caractEscogida, caracteristicas) {
        for (var i in caracteristicas) {
            if (caracteristicas[i].clave == caractEscogida) {
                return true;
            }
        }
        return false;
    }
}