var calendar  = calendar || {};

calendar = function(){
    
    /**
     * Private
     */


    var version = '1.0';
    var inicio = 9;
    var fin = 11;

    function init(inicio,fin){
        var mesInicio = inicio;
        var mesFin = fin;
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
        ,init: init
        ,print: print
    }
};