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
    }
}