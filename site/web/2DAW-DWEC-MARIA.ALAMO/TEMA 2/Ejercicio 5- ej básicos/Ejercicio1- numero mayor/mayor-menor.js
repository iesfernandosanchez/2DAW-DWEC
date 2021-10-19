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
    function mayor(a, b)
    {
        if (a>b){
            return "Mayor: " + a;
        } else{
            return "Mayor: " + b;
        }
    }
    function menor(a, b)
    {
        if (a<b){
            return "Menor: " + a;
        } else{
            return "Menor: " + b;
        }    
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
        ,mayor: mayor
        ,menor: menor
        ,toString : function(){
            return "calculadora"
        }
    }
};