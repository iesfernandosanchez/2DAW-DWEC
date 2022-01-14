class Metro {

    constructor() {

        this.lineas = [];

        this.estaciones = [];

    }

    getEstacion(codigoEstacion) {

        var estacionSelect;

        this.lineas.forEach(linea => {
            linea.estaciones.forEach(estacion => {
                if (estacion.codigo == codigoEstacion) {
                    estacionSelect = estacion;
                    return;
                }
            })
        });

        return estacionSelect;
    }

}