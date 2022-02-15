class Torneo {

    constructor(nombre, deporte, participantesRonda) {

        this.nombre = nombre;
        this.deporte = deporte;
        this.participantesRonda = participantesRonda;

        this.equipos = [];
        this.rondas = [];

        this.numRonda = 0;

    }

    init() {

    }

    addEquipo(equipo) {
        this.equipos.push(equipo);
    }

    crearRondas(ronda) {
        
        var ronda;
        var r = 0;

        this.equipos.forEach(equipo => {
            
            if (r == 0) {
                ronda = new Ronda();
            }
            ronda.addParticipante(equipo);
            r += 1;

            if (r > 1) {
                this.rondas.push(ronda);
                r = 0;
            }

        })
    }
}