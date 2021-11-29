var calculadora  = calculadora || {};

var resultados;

calculadora = function(){
    
    /**
     * Private
     */


    function suma(a,b){

        var suma= parseInt(a) + parseInt(b);

        resultados.push(suma);
        resultados = document.getElementById('arrayResultados').value;
        return suma;
    }

    function resta(a,b){
        var resta= parseInt(a) - parseInt(b);

        resultados.push(resta);
        resultados = document.getElementById('arrayResultados').value;
        return resta;
    }


    function factorial(a){

        var res = 1;

        for(i=1;i<=a;i++){
            res = res*i;
            var factorial = res;
        }

        resultados.push(factorial);
        resultados = document.getElementById('arrayResultados').value;
        
    }

    function print(){
        return inicio + " - " + fin
    }

    /*
    *public
    */

    return{
        version: function(){
            return version;
        }
        ,suma: suma
        ,resta: resta
        ,factorial: factorial
        ,print: print
    }
};