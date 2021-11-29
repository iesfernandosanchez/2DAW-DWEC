 
var personaje1 = [];

var personaje2 = [];

var vidaPersonaje1;

var vidaPersonaje2;

var fuerzaPersonaje1;

var fuerzaPersonaje2;

var defensaPersonaje1;

var defensaPersonaje2;


function crearPersonajes(){

    var inputText = document.getElementById('personaje1').value;

    personaje1.push(inputText);

    var inputText2 = document.getElementById('personaje2').value;

    personaje2.push(inputText2);

    vidaPersonaje1 = getRandomInt(0,100).value;

    personaje1.push(vidaPersonaje1);

    vidaPersonaje2 = getRandomInt(0,100).value;

    personaje2.push(vidaPersonaje2);

    fuerzaPersonaje1 = getRandomInt(0,100).value;

    personaje1.push(fuerzaPersonaje1);

    fuerzaPersonaje2 = getRandomInt(0,100).value;

    personaje2.push(fuerzaPersonaje2);

    defensaPersonaje1 = getRandomInt(0,100).value;

    personaje1.push(defensaPersonaje1);

    defensaPersonaje2 = getRandomInt(0,100).value;

    personaje2.push(defensaPersonaje2);

}

function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;

}


function lucha(){

    if(personaje1[2] > personaje2[3]){

        personaje2[3] == 0;

    }else if(personaje2[2] > personaje1[3]){

        personaje1[3] == 0;

    }else if(personaje2[3] == 0 & personaje1[2] > personaje2[1]){

        personaje2[1] == 0;

        if(personaje2[1] == 0){

            document.getElementById("mostrarGanador").innerHTML = personaje1 + "es el ganador";
        }

    }else if(personaje1[3] == 0 & personaje2[2] > personaje1[1]){

        personaje1[1] == 0;

        if(personaje1[1] == 0){

            document.getElementById("mostrarGanador").innerHTML = personaje2 + "es el ganador";
        }

    }

}
