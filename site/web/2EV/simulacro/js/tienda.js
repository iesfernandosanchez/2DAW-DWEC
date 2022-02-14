class Tienda{
    constructor(nombre){
        this.nombre = nombre
        this.gastos = [];
        this.caja = 0;
    }

    addGasto(gasto){
        this.gastos.push(gasto);
        if(gasto.concepto == 'venta'){
            this.caja += parseInt(gasto.importe);
        }else{
            this.caja -= parseInt(gasto.importe);
        }
    }    
}