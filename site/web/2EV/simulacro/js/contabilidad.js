class Contabilidad {

    constructor() {

        this.tiendas = [];

    }

    addTienda(tienda) {
        this.tiendas.push(tienda);
        return tienda;
    }

    existeTienda(nombre) {

        for (var i in this.tiendas) {
            if (this.tiendas[i].nombre == nombre) {
                return this.tiendas[i];
            }
        }

        return false;
    }

    obtenerDatosTipo(tipo) {

        var datos = [];

        this.tiendas.forEach(tienda => {

            tienda.getMovimientos().forEach(movimiento => {
                if (movimiento.concepto == tipo) {
                    let registro = [];
                    registro.push(tienda['nombre']);
                    registro.push(movimiento['fecha']);
                    registro.push(movimiento['importe']);
                    datos.push(registro);
                }
            })

        })
        return datos;
    }
}