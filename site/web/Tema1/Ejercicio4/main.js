function main(){
    var num = document.getElementById("recogida").value;
    var split = num.split(";")

    suma(split);
    mayor(split);
    menor(split);
    calculoMedia(split);
}






function funcion_reset(){
    document.getElementById("recogida").value = " ";

    document.getElementById("resultadoSuma").innerText = " ";
    document.getElementById("resultadoMayor").innerText = " ";
    document.getElementById("resultadoMenor").innerText = " ";
    document.getElementById("resultadoMedia").innerText = " ";
}



function suma(array){
    var suma = 0;
    for (let index = 0; index < array.length; index++) {
            suma = parseInt(array[index]) + suma;
    } 
    document.getElementById("resultadoSuma").innerHTML = suma;
}

function mayor(array){
    var a = array[0];
    for (let index = 0; index < array.length; index++) {
        if (a < parseInt(array[index])){
            a = array[index];
        }
    }
    document.getElementById("resultadoMayor").innerHTML = a;
}

function menor(array){
    var b = array[0];
    for (let index = 0; index < array.length; index++) {
        if (b > parseInt(array[index])){
            b = array[index];
        }
    }
    document.getElementById("resultadoMenor").innerHTML = b;
}

function calculoMedia(array){
    var media = 0;
    for (let index = 0; index < array.length; index++) {
        media = media + parseInt(array[index]);
    }
    media = media / array.length;
    document.getElementById("resultadoMedia").innerHTML = media;
}
