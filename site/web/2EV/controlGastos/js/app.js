class App{
    constructor(){
        this.cartera = null
        this.screen = new Screen();
    }

    loadData(data){
        this.createCartera("carteraPruebas")
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            this.addGasto(element);
            
        }
    }

    createCartera(nombre){
        this.cartera = new Cartera(nombre);
    }

    addGasto(gasto){
        this.cartera.addGasto(gasto)
    }

    refreshScreen(){
        this.screen.renderProfiles(this.cartera.usuarios);

        var data = [];

        /*[{
                  value: 2,
                  name: 'juan'
                },
                {
                  value: 1,
                  name: 'pepe'
                },
                {
                  value: 2,
                  name: 'maria'
                },
                
              ]*/

        var usuarios = this.cartera.usuarios;
        for (let index = 0; index < usuarios.length; index++) {
            const element = usuarios[index];
            data.push(
                {
                    'value': this.cartera.getGastosUsuario(element).length,
                    'name': element
                }
            )
            
        }


        var dataGastos = []
        for (let index = 0; index < this.cartera.gastos.length; index++) {
            const element = this.cartera.gastos[index];
            dataGastos.push([element.nombre,element.fecha, element.importe, element.concepto])
            
        }
        this.screen.renderDatatables(dataGastos);


        this.screen.renderGraph(data);
    }
}