class Cartera {

    constructor(nombre) {
        this.nombre = nombre;
        this.usuarios = [];
        this.gastos = [];
    }

    addGasto(gasto) {
        this.gastos.push(gasto);
    }

    getGasto(gasto) {
        return gasto;
    }

    addUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    getUsuario(usuario) {
        return usuario;
    }

    existeUsuario(usuario) {

        var swSalida = false;
        this.usuarios.forEach(element => {
            if (element.codigo == usuario) {
                swSalida = true;
                return;
            }
        })
        return swSalida;
    }

}