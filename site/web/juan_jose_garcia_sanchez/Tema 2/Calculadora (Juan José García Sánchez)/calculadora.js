var Calculadora = Calculadora || {}

Calculadora = function () {



    function init() {

    }

    function factorial(numero) {
        let resultado = 1;
        numero = parseInt(numero)

        while (numero > 1) {
            resultado *= numero
            numero--
        }
        return resultado
    }

    function suma(n1, n2) {
        return parseInt(n1) + parseInt(n2)
    }

    function resta(n1, n2) {
        return parseInt(n1) - parseInt(n2)
    }

    function multiplicar(n1, n2) {
        return parseInt(n1) * parseInt(n2)
    }

    function dividir(n1, n2) {
        return parseInt(n1) / parseInt(n2)
    }

    function printBotonera() {
        return '<button onclick= \"document.getElementById(\'resultado\').innerHTML = calculadora.suma(document.getElementById(\'n1\').value,document.getElementById(\'n2\').value)\"> SUMA </button>' +
            '<button onclick= \"document.getElementById(\'resultado\').innerHTML = calculadora.resta(document.getElementById(\'n1\').value,document.getElementById(\'n2\').value)\"> RESTA </button>' +
            '<button onclick= \"document.getElementById(\'resultado\').innerHTML = calculadora.multiplicar(document.getElementById(\'n1\').value,document.getElementById(\'n2\').value)\"> MULTIPLICAR </button>' +
            '<button onclick= \"document.getElementById(\'resultado\').innerHTML = calculadora.dividir(document.getElementById(\'n1\').value,document.getElementById(\'n2\').value)\"> DIVIDIR </button>' +
            '<button onclick= \"document.getElementById(\'resultado\').innerHTML = calculadora.factorial(document.getElementById(\'n1\').value)\"> FACTORIAL </button>'
    }


    init()

    return {
        factorial: factorial
        , suma: suma
        , resta: resta
        , multiplicar: multiplicar
        , dividir: dividir
        , printBotonera: printBotonera
    }
}