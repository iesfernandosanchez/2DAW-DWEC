class Biblioteca {
    constructor(nombre) {
        this.nombre = nombre;
        this.inventario = [];
    }

    addPublicacion(titulo, imagen, genero, descripcion, ISBN){
        this.inventario.push(new Publicacion(titulo, imagen, genero, descripcion, ISBN));
    }

    getInventario(){
        return this.inventario;
    }

    getLibroPorNombre(nombre){
        for (let i = 0; i < this.inventario.length; i++) {
            if (this.inventario[i].titulo === nombre){
                return this.inventario[i];
            }
        }
    }

    getEjemplares(){
        let ejemplares = [];
        for (let i = 0; i < this.inventario.length; i++) {
            for (let j = 0; j < this.inventario[i].getEjemplares().length; j++) {
                let ejemplar = new Object(this.inventario[i].getEjemplares()[j]);
                ejemplar.titulo = this.inventario[i].titulo;
                ejemplar.genero = this.inventario[i].genero;
                ejemplares.push(this.inventario[i].getEjemplares()[j]);
            }
        }
        return ejemplares;
    }

}