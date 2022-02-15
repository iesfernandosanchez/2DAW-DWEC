class Partido{
    constructor(){
        this.participantes = [];
        this.ganador = null;
    }

    addParticipante(nombreEquipo){
        this.participantes.push(new Participante(nombreEquipo))
    }


}