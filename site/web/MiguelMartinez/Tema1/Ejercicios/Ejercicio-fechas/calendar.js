var calendar = calendar || {};

calendar = function (i, f, festivosTmp)
{
    /**
     * Private
     */
    var version = '1.0';
    var inicio = i;
    var fin = f;
    var festivos = festivosTmp;

    /**
     * Ejecutable al cargar la página
     */

    function inicializa() {
        if(inicio == undefined){
            inicio = 9
        }
        if (fin == undefined){
            fin = 11
        }
        var festives = festivos;
        var mesInicio = inicio;
        var mesFin = fin;
    }

    function print() {
        return festivos;
    }

    inicializa();

    /**
     * Public
     */
    return {
        varsion: function() {
            return version;
        }
        ,init: inicializa
        ,print: print
    }
}