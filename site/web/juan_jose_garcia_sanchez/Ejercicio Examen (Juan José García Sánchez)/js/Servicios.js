class Servicios {
    biblioteca
    screen


    constructor() {
        this.biblioteca = new Biblioteca("Biblioteca Unica")
        this.screen = new Screen()
    }


    get biblioteca() {
        return this.biblioteca;
    }

    set biblioteca(value) {
        this.biblioteca = value;
    }

    findByIsbn(isbn) {
        return this.biblioteca.findByIsbn(isbn)
    }

    findByGenero(genero) {
        return this.biblioteca.findByGenero(genero)
    }

    findByTitulo(titulo) {
        return this.biblioteca.findByTitulo(titulo)
    }

    updatePublicacion(publicacion) {
        return this.biblioteca.updatePublicacion(publicacion)
    }

    deletePublicacion(publicacion) {
        return this.biblioteca.deletePublicacion(publicacion)
    }

    addPublicacion(publicacion) {
        return this.biblioteca.addPublicacion(publicacion)
    }


    addEjemplar(isbn, ejemplar) {
        let publicacion = this.findByIsbn(isbn)
        publicacion.addEjemplar(ejemplar)
        this.updatePublicacion(publicacion)
    }

    getEjemplar(isbn, ubicacion, estado) {
        let publicacion = this.findByIsbn(isbn)
        return publicacion.getEjemplarByUbicacionAndEstado(ubicacion, estado)
    }

    updateEjemplar(isbn, ejemplar) {
        let publicacion = this.findByIsbn(isbn)
        return publicacion.updateEjemplar(ejemplar)
    }

    deleteEjemplar(isbn, ejemplar) {
        let publicacion = this.findByIsbn(isbn)
        return publicacion.deleteEjemplar(ejemplar)
    }


    generarDatos(n) {
        for (let i = 0; i < n; i++) {
            let publicacion = new Publicacion(faker.name.title(), faker.image.image(), faker.name.gender(), faker.phone.phoneNumber())
            for (let j = 0; j < this.getRandomInt(1, 31); j++) {
                publicacion.addEjemplar(new Ejemplar(faker.address.cityName(), this.getUnEstado(this.getRandomInt(1, 5))))
            }
            this.addPublicacion(publicacion)
        }
    }

    getJson(div) {
        document.getElementById(div).innerHTML = JSON.stringify(this.biblioteca, null, 4)
    }

    getUnEstado(n) {
        switch (n) {
            case 1:
                return "Prestado"
            case 2:
                return "Disponible"
            case 3:
                return "Descatalogado"
            case 4:
                return "Extraviado"
        }
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    startScreenIndex() {
        this.screen.renderCarrousel(this.getPublicacionesRandom(3))
        this.screen.renderCards(this.getPublicacionesRandom(9))
    }

    startScreenDashboard() {
        //DataTable
        let dataPublicaciones = []
        let dataEjemplares = []
        let info
        this.biblioteca.inventario
            .forEach(publicacion => {
                dataPublicaciones.push([publicacion.titulo, publicacion.genero, publicacion.isbn, publicacion.ejemplares.length,
                    "<button type=\"button\" class=\"btn btn-primary\"><i class=\"bi bi-pencil\"></i></button><button type=\"button\" class=\"btn btn-danger\"><i class=\"bi bi-trash\"></i></button>"])

                publicacion.ejemplares.forEach(ejemplar => {
                    info = "'" + publicacion.isbn + "'" + ",'" + ejemplar.estado + "','" + ejemplar.ubicacion + "'"

                    dataEjemplares.push([publicacion.titulo, publicacion.genero, ejemplar.estado, ejemplar.ubicacion,
                        "<button type=\"button\" class=\"btn btn-primary\"><i class=\"bi bi-pencil\"></i></button><button type=\"button\" class=\"btn btn-danger\"><i class=\"bi bi-trash\"></i></button>",
                        "<button type=\"button\" onclick=\"servicios.comprarEjemplar(" + info + ")\" class=\"btn btn-dark\"><i class=\"bi bi-cart\"></i></button>"])
                })

            })
        this.screen.renderDatatablesPublicaciones(dataPublicaciones)
        this.screen.renderDatatablesEjemplares(dataEjemplares)

        //Graph
        let dataNumeroEjemplares = []
        this.biblioteca.inventario
            .forEach(publicacion => dataNumeroEjemplares.push({
                'value': publicacion.ejemplares.length,
                'name': publicacion.titulo
            }))

        this.screen.renderGraph(dataNumeroEjemplares)
    }

    comprarEjemplar(isbn, estado, ubicacion) {
        let publicacion = this.findByIsbn(isbn)
        let ejemplares = publicacion.getEjemplarByUbicacionAndEstado(ubicacion, estado)
        let ejemplar = ejemplares[0]
        let publicaciones
        let publicacionF

        let cookie = this.getCookie("carrito")

        if (cookie === "") {
            publicacionF = publicacion
            publicacionF.ejemplares = [ejemplar]
            publicaciones = [publicacionF]
            document.cookie = "carrito=" + JSON.stringify(publicaciones)
        } else {
            publicaciones = JSON.parse(cookie)
            publicacionF = publicacion
            publicacionF.ejemplares = [ejemplar]
            publicaciones.push(publicacionF)
            document.cookie = "carrito=" + JSON.stringify(publicaciones)
        }
    }


    getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    getPublicacionesRandom(n) {
        let randomPublicaciones = []

        for (let i = 0; i < n; i++) {
            randomPublicaciones.push(this.biblioteca.inventario[this.getRandomInt(0, this.biblioteca.inventario.length)])
        }

        return randomPublicaciones

    }
}