class App {
    
    constructor() {

        this.urlJSON = 'json/contabilidad.json';
        this.datosJSON;
        this.contabilidad;

        this.screen = new Screen();

    }

    init() {
        this.obtenerJSON(this.urlJSON);
    }

    obtenerJSON(url) {
        
        // Enviando y recibiendo datos en formato JSON utilizando el metodo GET
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function () { 
            if (xhr.readyState == 4 && xhr.status == 200) {
                app.datosJSON = JSON.parse(xhr.responseText);
                app.tratarDatos();

                app.screen.cargarTiendas(app.contabilidad.tiendas);

                var ventas = app.contabilidad.obtenerDatosTipo('venta');
                app.screen.mostrarDataTable(ventas);

                app.screen.cargarChart(app.contabilidad.tiendas);

                //Convierte el JSON a cookie
                var data = JSON.stringify(app.datosJSON)
                document.cookie = "cookieContabilidad="+data;
            }
        }
        xhr.send();
    }

    tratarDatos() {

        this.contabilidad = new Contabilidad();

        this.datosJSON.forEach(element => {

            var tiendaSel = this.contabilidad.existeTienda(element['tienda']);
            
            if (!tiendaSel) {
                tiendaSel = this.contabilidad.addTienda(new Tienda(element['tienda']))
            }

            tiendaSel.addMovimiento(new Movimiento(element['fecha'], element['importe'], element['concepto']));
            
        });
        
        console.log(this.contabilidad);
    }
}