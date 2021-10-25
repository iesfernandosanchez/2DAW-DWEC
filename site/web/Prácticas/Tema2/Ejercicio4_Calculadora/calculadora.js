var calculadora = calculadora || {};

calculadora = function(){

    function init(){}

    function suma(a,b){
        return parseInt(a)+parseInt(b)
    }

    function resta(a,b){
        return parseInt(a)-parseInt(b)
    }

    function division(a,b){
        return parseInt(a)/parseInt(b)
    }

    function factorial(a,b){
        var totalA = 1; 
        for (i=1; i<=a; i++) {
            totalA = totalA * i; 
        }
        var totalB = 1; 
        for (i=1; i<=b; i++) {
            totalB = totalB * i; 
        }
        
	    return "Factorial del 1º número:" + totalA + " / Factorial del 2º número: " + totalB;
    }

    function printButtons(){
    	return '<button onclick="'+'document.getElementById(\'resultado\').innerHTML =	'+
    	'Calculadora.suma( document.getElementById(\'op1\').value '+', document.getElementById(\'op2\').value )'+
    	'">SUMA</button><button onclick="'+'document.getElementById(\'resultado\').innerHTML =	'+
    	'Calculadora.resta( document.getElementById(\'op1\').value '+', document.getElementById(\'op2\').value )'+
    	'">RESTA</button><button onclick="'+'document.getElementById(\'resultado\').innerHTML =	'+
    	'Calculadora.division( document.getElementById(\'op1\').value '+', document.getElementById(\'op2\').value )'+
    	'">DIVISION</button><button onclick="'+'document.getElementById(\'resultado\').innerHTML =	'+
    	'Calculadora.factorial( document.getElementById(\'op1\').value '+', document.getElementById(\'op2\').value )'+
    	'">FACTORIAL</button>';
    }

    /**
     * Ejecutable al cargar la página
     */

    init()

    return {
        version: function() {
            return version;
        } ,init: init,
        suma: suma,resta: resta,
        division: division,
        factorial: factorial,
        printButtons : printButtons  
    }
};