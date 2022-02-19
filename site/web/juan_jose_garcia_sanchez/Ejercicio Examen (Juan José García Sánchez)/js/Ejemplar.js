class Ejemplar{
    ubicacion
    estado


    constructor(ubicacion, estado) {
        this.ubicacion = ubicacion;
        this.estado = estado;
    }


    get ubicacion() {
        return this.ubicacion;
    }

    set ubicacion(value) {
        this.ubicacion = value;
    }

    get estado() {
        return this.estado;
    }

    set estado(value) {
        this.estado = value;
    }
}