function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;

}

function llenarMatrices(){

var matriz = new Array();

var procesoA = ['A'];

var procesoB = ['B'];

var procesoC = ['C'];

var procesoD = ['D'];

var procesoE = ['E'];

var procesoF = ['F'];




    for(var i = 0; i <6; i++){
        procesoA.push(getRandomInt(0,10));
        procesoB.push(getRandomInt(0,10));
        procesoC.push(getRandomInt(0,10));
        procesoD.push(getRandomInt(0,10));
        procesoE.push(getRandomInt(0,10));
        procesoF.push(getRandomInt(0,10));
    }

    matriz.push(procesoA);
    matriz.push(procesoB);
    matriz.push(procesoC);
    matriz.push(procesoD);
    matriz.push(procesoE);
    matriz.push(procesoF);
  

    matriz.sort(sortFunction);


    console.log(matriz);
    
}


function sortFunction(a, b) {
    if (a[1] > b[1]) {
        return 1;
    }
    else if (a[1] < b[1]){
        return -1;
    }else{
        return 0;
    }
}