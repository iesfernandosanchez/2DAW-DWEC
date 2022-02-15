class Ronda {

    constructor() {
        
        this.participantes = [];

    }

    addParticipante(nombreEquipo){
        this.participantes.push(new Participante(nombreEquipo));
    }

}