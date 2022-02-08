class Tienda {

    constructor(nombre) {

        this.nombre = nombre;
        this.movimientos = [];

    }

    addMovimiento(movimiento) {
        this.movimientos.push(movimiento);
    }


    getMovimientos() {
        return this.movimientos;
    }

}