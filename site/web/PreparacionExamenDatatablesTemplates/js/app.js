class App {
    
    constructor() {
        this.url = 'json/bibliotecas.json';
        this.datosJSON;
        this.bibliotecas = [];
    }
    
    init() {
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
                //console.log(app.datosJSON);
                app.tratarDatos();
            }
        }
        xhr.send();
    }
    
    tratarDatos() {
        //console.log(this.datosJSON['@graph']);
        this.datosJSON['@graph'].forEach(element => {
            //console.log(element['title']);
            //console.log(element['address']['street-address']);
            
            this.bibliotecas.push({
                'title': element['title'],
                'address': element['address']['street-address']
            })
        });

        console.log(this.bibliotecas);
    }
}