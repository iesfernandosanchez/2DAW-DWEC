class App{
    constructor(){
        
        this.torneo = null
        this.screen = new Screen()
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    

    createTorneo(nombre, deporte, numeroParticipantes){
        this.torneo = new Torneo(nombre, deporte, numeroParticipantes)
    }

    generarResultados(){

        document.querySelector("#rondaPanel").innerHTML = "";
        var ronda = this.torneo.rondas[this.torneo.rondas.length-1]

        for (let index = 0; index < ronda.partidos.length; index++) {
            const elementPartido = ronda.partidos[index];
            for (let index = 0; index < elementPartido.participantes.length; index++) {
                const element = elementPartido.participantes[index];
                if(element.nombreEquipo != null){
                    element.marcador = this.getRandomInt(0,10)
                }else{
                    element.marcador = '-';
                }               
            }
        }
        this.generarGanadoresRonda(ronda);
        app.screen.printRonda(app.torneo.createRonda("R"+this.torneo.rondas.length));         
    }

    generarGanadoresRonda(ronda){
        for (let index = 0; index < ronda.partidos.length; index++) {
            const elementPartido = ronda.partidos[index];
            
            var puntuacionMaxima = 0
            var ganador = null;

            console.log(elementPartido);

            for (let index = 0; index < elementPartido.participantes.length; index++) {
                let element = elementPartido.participantes[index];
                if(element.nombreEquipo != null){
                    if(puntuacionMaxima<element.marcador){
                        puntuacionMaxima = element.marcador
                        ganador = element.nombreEquipo
                    }
                }
                elementPartido.ganador = ganador;            
            }
            console.log(ganador)
            console.log(elementPartido)
        }
        app.screen.printRonda(ronda)
        
    }

}