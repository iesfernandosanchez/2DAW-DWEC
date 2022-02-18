class App{

    constructor(){
        this.bibliotecas = [];
        this.screen = new Screen();
    }

    addBiblioteca(nombre){
        var biblioteca = new Biblioteca(nombre);
        this.bibliotecas.push(biblioteca);
    }

    getBiblioteca(nombre){
        for (let index = 0; index < this.bibliotecas.length; index++) {
            const elementBiblioteca = this.bibliotecas[index];
            if(elementBiblioteca.nombre == nombre){
                return elementBiblioteca;
            }
        }
        return null;
    }
    generateRandomData(){

        this.bibliotecas = [];

        var numBibliotecas = faker.datatype.number({
            'min': 5,
            'max': 15
        });
        for (let index = 0; index < numBibliotecas; index++) {
            var nombreBiblioteca = faker.name.findName();
            this.addBiblioteca(nombreBiblioteca);
            var elementBiblioteca = this.getBiblioteca(nombreBiblioteca);

            var numLibrosBiblioteca = faker.datatype.number({
                'min': 0,
                'max': 25
            });

            for (let index = 0; index < numLibrosBiblioteca; index++) {

                var ubicacionInt = faker.datatype.number({
                    'min': 0,
                    'max': 3
                });

                var ubicacionString ='';
                if(ubicacionInt == 0 ){
                    ubicacionString ='pasillo central';
                }else if(ubicacionInt == 1){
                    ubicacionString ='pasillo izquierdo';
                }else if(ubicacionInt == 2){
                    ubicacionString ='pasillo derecho';
                }else{
                    ubicacionString ='sala central';
                }

                var estadoInt = faker.datatype.number({
                    'min': 0,
                    'max': 1
                });

                var estadoString ='';
                if(estadoInt == 0){
                    estadoString ='Prestado';
                }else{
                    estadoString ='Libre';
                }

                var nombreLibro = faker.name.findName();
                var libroTmp = new Libro(nombreBiblioteca,nombreLibro,estadoString,ubicacionString)
                elementBiblioteca.addLibro(libroTmp);
                console.log(elementBiblioteca);
            }
            
        }
        app.setCookie("libros",app.transformJSON(app.generateLibrosJSON()),10);        
    }

    loadDataFromJSON(url){
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            //console.log(request.responseText);
            app.loadData(app.JSONtransformToObject(request.responseText));
            app.setCookie("libros",app.transformJSON(app.generateLibrosJSON()),10);
            
        } else {
            // We reached our target server, but it returned an error
        }
        };

        request.onerror = function() {
        // There was a connection error of some sort
        };
        request.send();
    }



    generateLibrosJSON(){
        var libros = [];
        for (let index = 0; index < this.bibliotecas.length; index++) {
            const elementBiblioteca = this.bibliotecas[index];
            for (let index = 0; index < elementBiblioteca.libros.length; index++) {
                const elementLibro = elementBiblioteca.libros[index];
                libros.push(
                    {
                        'biblioteca': elementBiblioteca.nombre,
                        'nombre': elementLibro.nombre,
                        'estado': elementLibro.estado,
                        'ubicacion': elementLibro.ubicacion,
                    }
                )
                
            }
            
        }
        return libros;
    }

    generateArrayLibros(){
        var libros = [];
        for (let index = 0; index < this.bibliotecas.length; index++) {
            const elementBiblioteca = this.bibliotecas[index];
            for (let index = 0; index < elementBiblioteca.libros.length; index++) {
                const elementLibro = elementBiblioteca.libros[index];
                libros.push(
                    [
                        elementBiblioteca.nombre,
                        elementLibro.nombre,
                        elementLibro.estado,
                        elementLibro.ubicacion,
                    ]
                )
                
            }
            
        }
        return libros;
    }

    loadData(data){
        for (let index = 0; index < data.length; index++) {
            const elementLibro = data[index];
            if(this.getBiblioteca(elementLibro.biblioteca) == null){
                this.addBiblioteca(elementLibro.biblioteca)
            }
            var biblioteca = this.getBiblioteca(elementLibro.biblioteca);
            var libro = new Libro(elementLibro.nombre,elementLibro.estado,elementLibro.ubicacion)
            biblioteca.addLibro(libro)
            
        }
    }

    createBiblioteca(nombre){
        this.biblioteca = new Biblioteca(nombre);
    }

    addLibro(libro){
        this.biblioteca.addLibro(libro)
    }

    renderScreen(){

        app.screen.renderDatatables(app.generateArrayLibros());
        app.screen.renderSummaryBibliotecas(app.bibliotecas)

        var data = [];
        var bibliotecas = this.bibliotecas;
        for (let index = 0; index < bibliotecas.length; index++) {
            const element = bibliotecas[index];
            data.push(
                {
                    'value': element.libros.length,
                    'name': element.nombre
                }
            )
            
        }

        //console.log(data);
        //app.screen.renderGraph(data)
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