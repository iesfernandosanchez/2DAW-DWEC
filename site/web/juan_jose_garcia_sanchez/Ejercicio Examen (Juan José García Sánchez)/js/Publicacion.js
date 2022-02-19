class Publicacion {
    titulo
    imagen
    genero
    isbn
    ejemplares


    constructor(titulo, imagen, genero, isbn) {
        this.ejemplares = [];
        this.titulo = titulo;
        this.imagen = imagen;
        this.genero = genero;
        this.isbn = isbn;
    }


    get titulo() {
        return this.titulo;
    }

    set titulo(value) {
        this.titulo = value;
    }

    get imagen() {
        return this.imagen;
    }

    set imagen(value) {
        this.imagen = value;
    }

    get genero() {
        return this.genero;
    }

    set genero(value) {
        this.genero = value;
    }

    get isbn() {
        return this.isbn;
    }

    set isbn(value) {
        this.isbn = value;
    }

    get ejemplares() {
        return this.ejemplares;
    }

    set ejemplares(value) {
        this.ejemplares = value;
    }

    //CRUD EJEMPLARES

    getEjemplarByUbicacion(ubicacion) {
        let ejemplares = []
        this.ejemplares.forEach(ejemplar => {
            if (ejemplar.ubicacion === ubicacion) {
                ejemplares.push(ejemplar)
            }
        })
        return ejemplares
    }

    getEjemplarByEstado(estado) {
        let ejemplares = []
        this.ejemplares.forEach(ejemplar => {
            if (ejemplar.estado === estado) {
                ejemplares.push(ejemplar)
            }
        })
        return ejemplares
    }

    getEjemplarByUbicacionAndEstado(ubicacion, estado) {
        let ejemplares = []
        this.ejemplares.forEach(ejemplar => {
            if (ejemplar.ubicacion === ubicacion &&
                ejemplar.estado === estado) {
                ejemplares.push(ejemplar)
            }
        })
        return ejemplares
    }

    addEjemplar(ejemplar) {
        this.ejemplares.push(ejemplar)
    }

    deleteEjemplar(ejemplar) {
        this.ejemplares = this.ejemplares.filter(function (ejemplarF) {
            return ejemplarF.estado !== ejemplar.estado
            && ejemplarF.ubicacion !== ejemplar.ubicacion
        })
    }

    updateEjemplar(ejemplar){
        this.ejemplares = this.ejemplares.filter(function (ejemplarF) {
            return ejemplarF.ubicacion !== ejemplar.ubicacion
                && ejemplarF.estado !== ejemplar.estado
        })
        this.ejemplares.push(ejemplar)
    }
}