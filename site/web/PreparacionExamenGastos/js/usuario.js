class Usuario {

    constructor(codigo, nombre) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.gastos = []
    }

    addGasto(gasto) {
        this.gastos.push(gasto);
    }
}