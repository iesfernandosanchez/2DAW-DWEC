class App {
    
    constructor() {
        
        this.url = 'json/gastos.json';
        this.datosJSON;
        
        this.cartera;
    }
    
    init() {
        this.crearCartera();
        this.obtenerJSON(this.url);
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
            }
        }
        xhr.send();
    }
    
    tratarDatos() {
        
        this.cartera = new Cartera(this.datosJSON['nombreCartera']);
        this.datosJSON['gastos'].forEach(element => {
            
            this.cartera.addGasto(new Gasto(element['usuario'], element['fecha'], element['importe'], element['concepto']));
            
            if (this.cartera.existeUsuario(element['usuario'])) {
                
                this.cartera.usuarios.forEach(element2 => {
                    if (element2.codigo == element.usuario) {
                        element2.addGasto(new Gasto(element['usuario'], element['fecha'], element['importe'], element['concepto']))
                    }
                });
                
            } else {
                
                var nuevoUsuario = new Usuario(element['usuario'], element['nombre']);
                nuevoUsuario.addGasto(new Gasto(element['usuario'], element['fecha'], element['importe'], element['concepto']));
                this.cartera.addUsuario(nuevoUsuario);
                
            }
        });
        
        console.log(this.cartera);
        this.montarDatatable();
        
    }
    
    crearCartera(nombre) {
        this.cartera = new Cartera(nombre);
    }
    
    montarDatatable() {
        /**
        * Easy selector helper function
        */
        const select = (el, all = false) => {
            el = el.trim()
            if (all) {
                return [...document.querySelectorAll(el)]
            } else {
                return document.querySelector(el)
            }
        }
        
        /**
        * Initiate Datatables
        */
        var misDatos = [];
        app.cartera.gastos.forEach(element => {
            let registro = [];
            registro.push(element['usuario']);
            registro.push(element['fecha']);
            registro.push(element['importe']);
            registro.push(element['concepto']);
            console.log(registro)
            misDatos.push(registro);
        })
        console.log(misDatos)
        const datatables = select('.datatable', true)
        const myData = {
            "heading": [
                "Usuario",
                "Fecha",
                "Importe",
                "Concepto"
            ],
            "data": misDatos
        }
        datatables.forEach(datatable => {
            new simpleDatatables.DataTable(datatable, {
                'data': myData
            });
        })
    }
}