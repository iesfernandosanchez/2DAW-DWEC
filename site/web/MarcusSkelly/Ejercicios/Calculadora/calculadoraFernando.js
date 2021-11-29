var calculadora = calculadora || {};

calculadora = function()
{
    /**
     * Private
     */
    var version = '1.0';
    

    function init()
    {
        
    }

    function suma(a,b)
    {
        return parseInt(a)+parseInt(b)
    }

    function resta(a,b)
    {
        return parseInt(a)-parseInt(b)
    }

    function factorial(valor)
    {
		if(isNaN(valor)){
			document.getElementById(idResultado).innerHTML = "el valor no es un numero valido";
			return
		}

		factorial = valor;
		resultado = 1;
		while(factorial>1){
			resultado *= factorial;
			factorial--;
		}
		return resultado;
    }

    function printButtons(resultado, operaciones,operador1, operador2)
    {
    	var buttonsBar = "";
    	for (var i = 0; i < operaciones.length; i++) {
    		buttonsBar += printButton(resultado, operaciones[i], operador1, operador2)
    	}
    	return buttonsBar;
    	
    }

    function printButton(resultado, operacion, operador1, operador2)
    {
    	var button = `<button onclick="
    	document.getElementById(\'`+resultado+'\').innerHTML =	'+
    	'Calculadora.'+operacion+'( document.getElementById(\''+operador1+'\').value ';
    	if(operador2 != undefined){
    		button += ', document.getElementById(\''+operador2+'\').value )';
    	}
    	
    	button +='">'+operacion+'</button>';
    	return button;
    }

    function type() {
	  return "calculadora";
	}

    /**
     * Ejecutable al cargar la página
     */

     init()
    

    /**
     * Public
     */
     return {
        version: function() {
            return version;
        }
        ,init: init
        ,suma: suma
        ,resta: resta
        ,factorial: factorial
        ,printButtons : printButtons
        ,type : type
        
    }
};