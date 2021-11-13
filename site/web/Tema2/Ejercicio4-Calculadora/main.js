var calculadora = calculadora || {};

calculadora = function()
{
    var version = '1.0';

    function init()
    {

    }
    
        function suma(a,b)
        {
            return  parseInt(a) + parseInt(b);
        }

        function resta(a,b)
        {
            return  parseInt(a) - parseInt(b);
        }

        function factorial(a)
        {
           return parseInt(calcularFactorial(parseInt(a)));
        }

        function calcularFactorial(valor){
            factorial = valor;
            resultado = 1;
            while(factorial>1){
                resultado *= factorial;
                factorial--;
            }
            return resultado;
        }

        function mayor(a,b){
            if(a>b){
                return a
            }else {
                return b 
            }
        }

        function menor(a,b){
            if(a<b){
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

        /* 
        function printButtons(resultado, operacion, operador1, operador2)
        {
           var button = '<button onclick= "'+
           'document.getElementById(\''+resultado+'\').innerHTML = '+
           'Calculadora.'+operacion+'( document.getElementById(\''+operador1+'\').value ';
           if(operador2 != undefined){
               button += ', document.getElementById(\''+operador2+'\').value)';
           }
           button += '">'+operacion+'</button>';
           return button;
        }
        */
        

        init()

        return{
            version: function() {
                return version;
            }
            ,init: init
            ,suma: suma 
            ,resta: resta
            ,factorial: factorial
            ,mayor: mayor
            ,menor: menor
            ,printButtons: printButtons
            ,toString: function(){
                return "calculadora"
            }
           }

           
};


