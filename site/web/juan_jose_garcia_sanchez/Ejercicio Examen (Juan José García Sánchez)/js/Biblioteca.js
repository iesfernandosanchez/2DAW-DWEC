class Biblioteca{
    nombre
    //Publicaciones
    inventario


    constructor(nombre) {
        this.inventario = [];
        this.nombre = nombre;
    }


    get nombre() {
        return this.nombre;
    }

    set nombre(value) {
        this.nombre = value;
    }

    get inventario() {
        return this.inventario;
    }

    set inventario(value) {
        this.inventario = value;
    }


    //CRUD PUBLICACIONES
    findByIsbn(isbn){
        let publicacionF
        this.inventario.forEach(publicacion =>{
            if(publicacion.isbn === isbn){
                publicacionF = publicacion
            }
        })

        return publicacionF
    }

    findByGenero(genero){
        let publicaciones = []
        this.inventario.forEach(publicacion =>{
            if(publicacion.genero === genero){
                publicaciones.push(publicacion)
            }
        })
        return publicaciones
    }

    findByTitulo(titulo){
        let publicacionF
        this.inventario.forEach(publicacion =>{
            if(publicacion.titulo === titulo){
                publicacionF = publicacion;
            }
        })
        return publicacionF
    }

    addPublicacion(publicacion){
        this.inventario.push(publicacion)
    }

    deletePublicacion(publicacion){
        this.inventario = this.inventario.filter(function (publicacionF){
            return publicacionF.isbn !== publicacion.isbn
        })
    }

    updatePublicacion(publicacion){
        this.inventario = this.inventario.filter(function (publicacionF){
            return publicacionF.isbn !== publicacion.isbn
        })
        this.inventario.push(publicacion)
    }

}