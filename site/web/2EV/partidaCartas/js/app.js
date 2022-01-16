<<<<<<< HEAD
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
=======
class App{
    constructor(){
        this.jugadores = [];
        this.baraja = [];
        this.partidaAcabada = false;
    }

    crearBaraja(configBaraja){
        for (let index = 0; index < configBaraja.length; index++) {
            let carta = new Carta(configBaraja[index].nombre,configBaraja[index].caracteristicas);
            this.baraja.push(carta);
        }
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    seleccionarCarta(jugador){
        let posicionCartaMazo = this.getRandomInt(0,jugador.mazo.length-1);
        return posicionCartaMazo;
    }

    recuperarCarta(jugador, posicionCartaMazo){
        return jugador.mazo[posicionCartaMazo];
    }

    crearJugadores( nombresJugadores){
        let barajados = []
        let jugador = 0;
        let baraja = [];

        baraja = Array.from(this.baraja);

        for (let index = 0; index < nombresJugadores.length; index++) {
            this.jugadores.push(new Jugador(nombresJugadores[index] ,[]));
        }

        while(baraja.length > 0){

            let posicionCartaMazo = this.getRandomInt(0,baraja.length-1);
            let carta = new Carta(baraja[posicionCartaMazo].nombre,baraja[posicionCartaMazo].caracteristicas);
            this.jugadores[jugador].mazo.push(carta);
            baraja.splice(posicionCartaMazo, 1);
            jugador++;
            if(jugador >= this.jugadores.length){
                jugador = 0;
            }
        }
    }

    crearJugador(nombre){


        let jugador = new Jugador(nombre)
    }

    jugarPartida(posicionCarta,feature){
        let jugador = 0;

            while(this.partidaAcabada === false){
                let caracteristica = feature;

                const jugada = [];
                jugada.push(this.recuperarCarta(this.jugadores[jugador], posicionCarta ));

                for (let index = 1; index < this.jugadores.length; index++) {
                    jugador = this.jugadores[index];
                    if(jugador.mazo.length > 0){
                        jugada.push(this.recuperarCarta(jugador, this.seleccionarCarta(jugador)));       
                    }  
                }

                let max = 0;
                let ganador = null;
                for (let index = 0; index < jugada.length; index++) {
                    const element = jugada[index].caracteristicas[caracteristica];
                    if(element > max){
                        ganador = index;
                        max = element;
                    }
                }
                console.log(jugada);
                console.log(ganador);

                const $resumenJugada = document.querySelector("#resumenJugada");
                $resumenJugada.innerHTML = "";
                for (let index = 0; index < jugada.length; index++) {
                    if(ganador != index){
                        $resumenJugada.innerHTML += this.jugadores[ganador].name+" gana la carta "+jugada[index].nombre+" al jugador "+this.jugadores[index].name+"<br/>";
                        this.jugadores[ganador].mazo.push(jugada[index]);
                        this.jugadores[index].cartaRemove(jugada[index]);
                    }                   
                }
                
                if(this.checkEnd()){
                    this.endGame();
                }else{
                    this.pintarBotones();
                }
                return
            }
    }

    checkEnd(){
        let numPlayers = 0;
        for (let index = 0; index < this.jugadores.length; index++) {
            let jugador = this.jugadores[index];
            if(jugador.mazo.length > 0){
                numPlayers++;      
            }
        }
        return (numPlayers == 1);
    }

    endGame(){
        this.pintaResumen();
        const $btnsCaracteristicas = document.querySelector("#botonesCaracteristicas");
        $btnsCaracteristicas.innerHTML = "La partida ha finalizado";
    }


    pintarBotones(){
        this.pintaResumen();
        let jugador = 0;
        let carta = this.seleccionarCarta(this.jugadores[jugador]);

        let cartaObj = this.recuperarCarta(this.jugadores[jugador],carta);
        cartaObj.pintarCarta();
        const $btnsCaracteristicas = document.querySelector("#botonesCaracteristicas");
        $btnsCaracteristicas.innerHTML = "";

        Object.keys(this.baraja[0].caracteristicas).forEach(function (feature) {
            $btnsCaracteristicas.innerHTML += "<button onclick='app.jugarPartida("+carta+",\""+feature+"\")'>"+feature+"</button>"    ;
         });
        
    }

    pintaResumen(){
        const $resumen = document.querySelector("#resumen");
        $resumen.innerHTML = "";
        this.jugadores.forEach(function(jugador){
            $resumen.innerHTML += jugador.name+":"+jugador.mazo.length+"<br/>";
        })
>>>>>>> master
    }
}