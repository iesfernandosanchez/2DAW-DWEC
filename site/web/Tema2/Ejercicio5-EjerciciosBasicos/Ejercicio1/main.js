var calculadora = calculadora || {};

calculadora = function()
{
    var version = '1.0';

    function init()
    {

    }
    

    function mayor(a,b){
        if(a>b){
            return a
        }else {
            return b 
        }
    }

        function printButtons(resultado, operaciones, operador1, operador2)
        {
            var buttonsBar = "";
            for(var i = 0; i<operaciones.length;i++){
                buttonsBar += printButtons(resultado, operaciones[i], operador1, operador2)
            }
            return buttonsBar;

        }

        init()

        return{
            version: function() {
                return version;
            }
            ,mayor: mayor
            ,printButtons: printButtons
            ,toString: function(){
                return "calculadora"
            }
           }

           
};


