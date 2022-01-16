<<<<<<< HEAD
class Carta {

    constructor(nombre, caracteristicas) {
        this.nombre = nombre
        this.caracteristicas = [];
        for (var i in caracteristicas) {
            this.caracteristicas.push(new Caracteristica(i, caracteristicas[i]));
        }

    }

=======
class Carta{
    constructor(nombre, caracteristicas){
        this.nombre = nombre;
        this.caracteristicas = caracteristicas;

    }

    crearCarta(){

    }

    pintarCarta(){
        let textoHTML = "<h2>"+this.nombre+"</h2><br/>"+
        "<ul>";
        //this.caracteristicas.forEach(caracteristica => {
       // Object.keys(this.caracteristicas).forEach(function(key,index) {
        Object.keys(this.caracteristicas).forEach(key => {
            textoHTML += "<li>"+key+" : "+this.caracteristicas[key]+"</li>";
        });
        textoHTML += "</ul>";
        document.getElementById("cartaSeleccionada").innerHTML = textoHTML;
    }
>>>>>>> master
}