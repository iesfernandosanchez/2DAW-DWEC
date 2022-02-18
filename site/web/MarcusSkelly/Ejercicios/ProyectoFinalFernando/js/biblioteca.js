class Biblioteca{

    constructor(nombre){

        this.nombre = nombre;
        this.libros = []
    }

    addLibro(libro){
        this.libros.push(libro);
    } 

    getLibrosBiblioteca(bibliotecaTmp){

        var libros = [];
        if(this.libros.includes(bibliotecaTmp)){
            for (let index = 0; index < this.libros.length; index++) {
                const element = this.libros[index];
                if(element.nombre == bibliotecaTmp){
                    libros.push(element);
                }
                
            }
            return libros;
        }
        return [];
 
    }
}