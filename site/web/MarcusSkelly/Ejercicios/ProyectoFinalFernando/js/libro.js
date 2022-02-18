class Libro{

    constructor(biblioteca,nombre,estado,ubicacion){

        this.biblioteca = biblioteca;
        this.nombre = nombre;
        this.estado = estado;
        this.ubicacion = ubicacion;
    }

    getBiblioteca(){
        return this.biblioteca;
    }
}