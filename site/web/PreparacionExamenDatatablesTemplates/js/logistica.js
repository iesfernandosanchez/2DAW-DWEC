class Logistica {

    constructor() {
        this.datosJSON;
        this.url = "json/logistica.json";
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
                console.log(app.datosJSON);
                app.tratarDatos();
            }
        }
        xhr.send();
    }

    tratarDatos() {

        const $envio = document.querySelector("#envio");
        $envio.innerHTML = this.datosJSON["numEnvio"];

        const $referencia = document.querySelector("#referencia");
        $referencia.innerHTML = this.datosJSON["referencia"];

        const $estado = document.querySelector("#estado");
        $estado.innerHTML = this.datosJSON["estado"];

        const $template = document.querySelector("#trackingTemplate");
        const $tracking = document.querySelector("#tracking")

        this.datosJSON["traking"].forEach(dias => {

            const $cardTemplate = document.importNode($template.content, true);
            const $cardTitle =  $cardTemplate.querySelector(".card-title");
            $cardTitle.innerText = dias["dia"];

            $tracking.appendChild($cardTemplate);

            /*
            this.bibliotecas.push({
                'title': element['title'],
                'address': element['address']['street-address']
            })
            */
            
            //this.bibliotecas.push([element['title'],element['address']['street-address']])

            console.log(dias);
        });
    }
}