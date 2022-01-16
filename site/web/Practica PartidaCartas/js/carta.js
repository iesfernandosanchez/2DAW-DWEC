class Carta {

    constructor(nombre, caracteristicas) {
        this.nombre = nombre
        this.caracteristicas = [];
        for (var i in caracteristicas) {
            this.caracteristicas.push(new Caracteristica(i, caracteristicas[i]));
        }

    }
}