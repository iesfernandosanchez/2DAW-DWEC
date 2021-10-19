document.addEventListener("DOMContentLoaded", function event(){
    var nombres = new Array();
    do{        
        var result = prompt("Introduzca un nombre", '');
        if (result === null)
        result = false;
        if(result != false)
        nombres.push(result);
    }while(result != false);
    
    document.getElementById("nombres").innerHTML = nombres;
    console.log(nombres);
});