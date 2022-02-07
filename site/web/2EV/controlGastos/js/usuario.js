class Usuario{
    constructor( nombre, descripcion){
        this.nombre = nombre
        this.descripcion = descripcion
        this.gastos = []
    }

    addGasto(gasto){
        this.gastos.push(gasto);
    }


}