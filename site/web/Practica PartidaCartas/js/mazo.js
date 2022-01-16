class Mazo {

    constructor() {

        this.cartas = [];

    }

    aniadirCarta(carta) {
        this.cartas.push(new Carta(carta.nombre, carta.caracteristicas));
    }

    barajar() {
        for(var i =this.cartas.length-1 ; i>0 ;i--){
            var j = Math.floor( Math.random() * (i + 1) ); //random index
            [this.cartas[i],this.cartas[j]]=[this.cartas[j],this.cartas[i]]; // swap
        }
    }
}