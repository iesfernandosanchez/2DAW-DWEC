class App {

    constructor() {

        this.metro = new Metro();

        this.modal = new bootstrap.Modal(document.getElementById("caminosModal"), {keyboard: false});

    }

    iniciar() {

        var lineas = [{"nombre": "Línea 5"}, {"nombre": "Línea 2"}];
        var estaciones = [
            {"codigo": "#1", "nombre": "El Carmen"},
            {"codigo": "#2", "nombre": "Ventas"},
            {"codigo": "#3", "nombre": "Nuñez de Balboa"},
            {"codigo": "#4", "nombre": "Manuel Becerra"}
        ]
        
        this.metro.lineas.push(new Linea(lineas[0].nombre));
        this.metro.lineas.push(new Linea(lineas[1].nombre));

        this.metro.estaciones.push(new Estacion(estaciones[0].codigo, estaciones[0].nombre));
        this.metro.estaciones.push(new Estacion(estaciones[1].codigo, estaciones[1].nombre));
        this.metro.estaciones.push(new Estacion(estaciones[2].codigo, estaciones[2].nombre));
        this.metro.estaciones.push(new Estacion(estaciones[3].codigo, estaciones[3].nombre));
        
        this.metro.lineas[0].estaciones.push(new Estacion(estaciones[0].codigo, estaciones[0].nombre));
        this.metro.lineas[0].estaciones.push(new Estacion(estaciones[1].codigo, estaciones[1].nombre));
        this.metro.lineas[0].estaciones.push(new Estacion(estaciones[2].codigo, estaciones[2].nombre));
        this.metro.lineas[1].estaciones.push(new Estacion(estaciones[1].codigo, estaciones[1].nombre));
        this.metro.lineas[1].estaciones.push(new Estacion(estaciones[3].codigo, estaciones[3].nombre));
        
        this.metro.lineas[0].estaciones[0].caminos.push(new Camino(1, "#1", "#2"));
        
        this.metro.lineas[0].estaciones[1].caminos.push(new Camino(1, "#2", "#1"));
        this.metro.lineas[0].estaciones[1].caminos.push(new Camino(1, "#2", "#3"));
        this.metro.lineas[0].estaciones[1].caminos.push(new Camino(1, "#2", "#4"));

        this.metro.lineas[0].estaciones[2].caminos.push(new Camino(1, "#3", "#2"));
        
        this.metro.lineas[1].estaciones[0].caminos.push(new Camino(1, "#2", "#1"));
        this.metro.lineas[1].estaciones[0].caminos.push(new Camino(1, "#2", "#3"));
        this.metro.lineas[1].estaciones[0].caminos.push(new Camino(1, "#2", "#4"));
        this.metro.lineas[1].estaciones[1].caminos.push(new Camino(1, "#4", "#2"));
    
        console.log(this.metro)
    }

    imprimirMetro() {
        this.metro.lineas.forEach(linea => {

            var $t1 = document.querySelector('#lineaTemplate');
            var $card = $t1.content.querySelector('.card-body');
            $card.querySelector('#caminosH4').textContent = linea.nombre;

            var $clone1 = document.importNode($t1.content, true);

            linea.estaciones.forEach(estacion => {

                var $t2 = document.querySelector('#estacionTemplate');
                var $codigo = $t2.content.querySelector('#codigoEstacion');
                $codigo.textContent = estacion.codigo;

                var $nombre = $t2.content.querySelector('#nombreEstacion');
                $nombre.textContent = estacion.nombre;

                var $a = $t2.content.querySelector('#a');
                $a.setAttribute('onClick', 'app.abrirModal("'+estacion.codigo+'")');

                var $clone2 = document.importNode($t2.content, true);
                
                $clone1.querySelector('#estacion').appendChild($clone2);
            });

            document.querySelector('#lineas').appendChild($clone1)
        });
    }
    
    abrirModal(numLinea) {

        var estacion = this.metro.getEstacion(numLinea);

        var $t = document.querySelector('#caminosTemplate');
        var $td = $t.content.querySelectorAll('td')
        var $tb = document.getElementById('tbCaminos');

        while ($tb.firstChild) {
            $tb.removeChild($tb.firstChild);
        }

        estacion.caminos.forEach(camino => {
            $td[0].textContent = estacion.nombre;
            $td[1].textContent = camino.distancia;
            $td[2].textContent = this.metro.getEstacion(camino.puntoB).nombre;
            var $clone = document.importNode($t.content, true);
            $tb.appendChild($clone)
        });

        this.modal.toggle();
    }
}