var matriz = [];

function creaProceso(nombre, t_creacion, t_uso){
    var parametros = [nombre, t_creacion, t_uso];
     
    matriz.push(parametros);
}

creaProceso('A', 0, 3);
creaProceso('B', 2, 4);
creaProceso('C', 1, 1);




function compararProcesos(a, b){
    if(a[1] < b[1]){
        return -1
    }else if(a[1] > b[1]){
        return 1
    }else{
        return 0
    }

}

console.log(matriz);
