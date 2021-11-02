document.addEventListener("DOMContentLoaded",function(){

// GOOGLE drive ocamlfuse
function nombres() {
    var nombres = [];
    var cont = '';
    var x;

    do{
        x = prompt("Ingresa tu nombre:", "");

        if(x == false){

            x = false;

        }else{

        nombres.push(x);

        }

    }while(x != false);

    for (i = 0; i <= nombres.length; i++) {
        cont += nombres[i] + " ";
    }

    document.getElementById("nombres").innerHTML = cont;
}


});

