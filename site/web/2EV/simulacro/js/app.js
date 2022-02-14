class App{
    constructor(){
        this.screen = new Screen();
        this.tiendas = [];
    }

    generateRandomData(){

        this.tiendas = [];

        var numTiendas = faker.datatype.number({
            'min': 5,
            'max': 50
        });
        for (let index = 0; index < numTiendas; index++) {
            var nombreTienda = faker.name.findName();
            this.addTienda(nombreTienda);
            var elementTienda = this.getTienda(nombreTienda);

            var numGastosTienda = faker.datatype.number({
                'min': 0,
                'max': 100
            });

            for (let index = 0; index < numGastosTienda; index++) {

                const createdAt = faker.date.past(200);
                const lastActive = faker.date.between(createdAt, faker.date.recent());
                const lastSeen = faker.date.between(createdAt, new Date());

                var importeOperacionTienda = faker.datatype.number({
                    'min': 1,
                    'max': 1000
                });

                var conceptoInt = faker.datatype.number({
                    'min': 0,
                    'max': 3
                });

                var conceptoString ='';
                if(conceptoInt == 0 || conceptoInt == 2){
                    conceptoString ='venta';
                }else if(conceptoInt == 1){
                    conceptoString ='compra';
                }else{
                    conceptoString ='gasto';
                }

                var fechaRandom = lastSeen;
                var gastoTmp = new Gasto(fechaRandom,importeOperacionTienda,conceptoString)
                elementTienda.addGasto(gastoTmp);
            }
            
        }
        app.setCookie("gastos",app.transformJSON(app.generateGastosJSON()),10);        
    }

    renderScreen(){
        app.screen.renderDatatables(app.generateArrayGastos());
        app.screen.renderSummaryTiendas(app.tiendas)

        var data = [];
        var tiendas = this.tiendas;
        for (let index = 0; index < tiendas.length; index++) {
            const element = tiendas[index];
            data.push(
                {
                    'value': element.gastos.length,
                    'name': element.nombre
                }
            )
            
        }

        //console.log(data);
        app.screen.renderGraph(data)
    }

    generateGastosJSON(){
        var gastos = [];
        for (let index = 0; index < this.tiendas.length; index++) {
            const elementTienda = this.tiendas[index];
            for (let index = 0; index < elementTienda.gastos.length; index++) {
                const elementGasto = elementTienda.gastos[index];
                gastos.push(
                    {
                        'tienda': elementTienda.nombre,
                        'fecha': elementGasto.fecha,
                        'importe': elementGasto.importe,
                        'concepto': elementGasto.concepto,
                    }
                )
                
            }
            
        }
        return gastos;
    }

    generateArrayGastos(){
        var gastos = [];
        for (let index = 0; index < this.tiendas.length; index++) {
            const elementTienda = this.tiendas[index];
            for (let index = 0; index < elementTienda.gastos.length; index++) {
                const elementGasto = elementTienda.gastos[index];
                gastos.push(
                    [
                        elementTienda.nombre,
                        elementGasto.fecha,
                        elementGasto.importe,
                        elementGasto.concepto,
                    ]
                )
                
            }
            
        }
        return gastos;
    }

    loadData(data){
        for (let index = 0; index < data.length; index++) {
            const elementGasto = data[index];
            if(this.getTienda(elementGasto.tienda) == null){
                this.addTienda(elementGasto.tienda);
            }
            var tienda = this.getTienda(elementGasto.tienda);
            var gasto = new Gasto(elementGasto.fecha,parseInt(elementGasto.importe), elementGasto.concepto)
            tienda.addGasto(gasto)
            
        }
    }

    loadDataFromJSON(url){
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            //console.log(request.responseText);
            app.loadData(app.JSONtransformToObject(request.responseText));
            app.setCookie("gastos",app.transformJSON(app.generateGastosJSON()),10);
            
        } else {
            // We reached our target server, but it returned an error
        }
        };

        request.onerror = function() {
        // There was a connection error of some sort
        };
        request.send();
    }

    addTienda(nombre){
        var tienda = new Tienda(nombre);
        this.tiendas.push(tienda);
    }

    getTienda(nombre){
        for (let index = 0; index < this.tiendas.length; index++) {
            const elementTienda = this.tiendas[index];
            if(elementTienda.nombre == nombre){
                return elementTienda;
            }
        }
        return null;
    }


    setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }

    getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

    transformJSON(data){
        return JSON.stringify(Object.assign([], data));  // convert array to string
    }

    JSONtransformToObject(JSONString){
        return JSON.parse(JSONString);  // convert string to json object
    }
}