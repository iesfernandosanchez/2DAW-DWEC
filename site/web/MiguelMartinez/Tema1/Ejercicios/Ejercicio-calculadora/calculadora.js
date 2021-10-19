var calculadora = calculadora || {};

calculadora = function ()
{
    /**
     * Private
     */
    var version = '1.0';

    /**
     * Ejecutable al cargar la página
     */

    function init() {

    }

    function suma(a, b) {
        return "El resultado es: " + (parseInt(a) + parseInt(b));
    }

    function resta(a, b) {
        return "El resultado es: " + (parseInt(a) - parseInt(b));
    }

    function multiplicacion(a, b) {
        return "El resultado es: " + (parseInt(a) * parseInt(b));
    }

    function division(a, b) {
        return "El resultado es: " + (parseInt(a) / parseInt(b)) + ", y el resto :" + (parseInt(a) % parseInt(b));
    }

    function factorial(a, b) {
        var factoriala = parseInt(a)
        var factorialb = parseInt(b)
        var resultadoa = 1;
        var resultadob = 1;
        while(factoriala>1){
            resultadoa *= factoriala;
            factoriala--;
        }
        while(factorialb>1){
            resultadob *= factorialb;
            factorialb--;
        }
        return "El factorial de " + a + " es: " + resultadoa + ", y el factorial de " + b + " es: " + resultadob;
    }

    function orden(a, b) {
        if(a==b) {
            return "Los números introducidos son iguales";
        }else {
            var array = [];
            array.push(parseInt(a));
            array.push(parseInt(b));
            array.sort();
            return "El orden de menor a mayor es: " + array[0] + " .Y en segundo lugar " + array[1];
        }
    }
    /*
    function printButtons(resultado, operaciones, operador1, operador2) {
        var buttonsBar = "";
        for (var i = 0; i <operaciones.length; i++) {
            buttonsBar += printButton(resultado, operaciones, operador1, operador2);
        }
        return buttonsBar
    }

    function printButton(resultado, operacion, operador1, operador2) {
        var button = "<button onclick='>" + "document.getElementById(\'" + resultado 
        + "\').innerHTML = Calculadora." + operacion + "[document.getElementById("
        if(operador2 != undefined) {
            button+= ", document.getElementById(\'" + operador1
        }

        button += '">' + operacion + '</button>';
        return button;
    }
    */

    init();

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
        ,multiplicacion: multiplicacion
        ,division: division
        ,factorial: factorial
        ,orden: orden
    }
}