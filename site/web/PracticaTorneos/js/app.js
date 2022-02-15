class App {

    constructor() {

        this.url = '../json/config.json'
        this.configJson;
        this.configDeportes = [];

        this.torneos = [];

    }

    init() {

        this.leerConfig();

    }

    leerConfig() {
        $.getJSON(this.url, function (data) {
            app.configJson = data;
            app.cargarDatosConfig();
        })
    }

    cargarDatosConfig() {

        for (var i in this.configJson["configDeportes"]) {
            this.configDeportes.push(this.configJson["configDeportes"][i]);
        }

        for (var i in this.configJson["datos"]) {

            var nombreTorneo = this.configJson["datos"][i]["nombreTorneo"];
            var deporte = this.configJson["datos"][i]["deporte"];
            var participantesRonda = this.configJson["datos"][i]["participantesRonda"];

            var torneo = new Torneo(nombreTorneo, deporte, participantesRonda);
    
            for (var j in this.configJson["datos"][i]["equipos"]) {
                torneo.addEquipo(this.configJson["datos"][i]["equipos"][j]);
            }
            torneo.crearRondas();
            this.torneos.push(torneo);
        }

        this.iniciarAplicacion();
    }

    iniciarAplicacion() {

    }

}