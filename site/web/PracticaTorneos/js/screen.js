class Screen {

    constructor(app) {

        this.app = app;

    }

    init() {
        this.pintarPartidos();
    }

    pintarPartidos() {

        console.log(this.app["torneos"]);

        for (var i in this.app.torneos) {
            console.log(i);
        }

        const torneo = this.app.torneos[0];
        console.log(torneo);

        const $template = document.querySelector("#templatePartidos");
        const $partidos = document.querySelector("#partidos");

        const $cardTemplate = document.importNode($template.content, true);


    }
}