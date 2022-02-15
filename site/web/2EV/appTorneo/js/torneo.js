class Torneo{
    constructor(nombre, nombreDeporte, numeroParticipantes){
        this.nombre = nombre;
        this.deporte = new Deporte(nombreDeporte, numeroParticipantes);
        this.equipos = []
        this.rondas = []
    }

    addEquipo(equipo){
        this.equipos.push(equipo)
    }

    createRondaInicial(nombre){
        var ronda = new Ronda(nombre);

        for (let index = 0; index < this.equipos.length; index++) {
            let equipo = this.equipos[index];
            let rival = null;
            if(this.equipos[index+1]){
                rival = this.equipos[index+1];
                index++;
            }
            let partido = new Partido()
            partido.addParticipante(equipo)
            partido.addParticipante(rival)
            ronda.addPartido(partido);           
        }
        this.rondas.push(ronda)
        return ronda;
    }


    createRonda(nombre){
        var ronda = new Ronda(nombre);

        for (let index = 0; index < this.rondas[this.rondas.length-1]; index++) {
            let ronda = this.ronda[index];
            for (let index = 0; index < ronda.partidos.length; index++) {
                const element = ronda.partidos[index];
                equipo = element.ganador;

                let rival = null;
                if(ronda.partidos[index+1]){
                    rival = ronda.partidos[index+1].ganador;
                    index++;
                }

                let partido = new Partido()
                partido.addParticipante(equipo)
                partido.addParticipante(rival)
                ronda.addPartido(partido);  
                
            }
            
                     
        }
        this.rondas.push(ronda)
        return ronda;
    }
}