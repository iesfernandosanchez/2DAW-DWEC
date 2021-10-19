var calculadora = calculadora || {}; //si no hay una creada, la crea vacia

calculadora = function()
{
    /**
     * Privada
     */
    var version = "1.0"

    function init()
    {

    }

    function suma(a, b)
    {
        return parseInt(a) + parseInt(b);
    }
    function resta(a, b)
    {
        return parseInt(a) - parseInt(b);
    }    
    function factorial(a)
    {
        factorial = parseInt(a);
        resultado = 1;
        while(factorial>1){
            resultado *= factorial;
            factorial--;
        }
        return resultado;
    }
    function printButton(resul, operacion, operador1, operador2)
    {
        var button = "<button onclick="
            +"\"document.getElementById('" + resul + "').innerHTML = "
            + "Calculadora." + operacion + "(document.getElementById('" + operador1 
            + "').value, document.getElementById('" + operador2 
            + "').value )\">" + operacion + "</button>";
            /*if( operador2 != undefined){
                button += ', document.getElementById(\''+oper
            }*/
            return button;
    }

    function printButtons(resul, operaciones, operador1, operador2)
    {
        var buttonsBar = "";
        for (var i = 0; i < operaciones.length; i++) {
            buttonsBar += printButton(resul, operaciones[i], 
                operador1, operador2);            
        }
        return buttonsBar;
    }

    /**
     * Ejecutable al cargar la página
     */
    init()

    /**
     * Public
     */
    return {
        version: function(){
            return version;
        }
        ,init: init
        ,printButtons: printButtons
        ,printButton: printButton
        ,suma: suma
        ,resta: resta
        ,factorial: factorial
        ,toString : function(){
            return "calculadora"
        }
    }
};