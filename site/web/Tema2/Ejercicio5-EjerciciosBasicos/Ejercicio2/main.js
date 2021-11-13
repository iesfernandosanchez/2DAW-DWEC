var bisiesto = bisiesto || {};

bisiesto = function()
{
    var version = '1.0';

function init()
{

}

function calcula(a){
    if(a%4==0 || a%100!=0 || a%400 == 100 ){
        return alert('Si es bisiesto')
    }else{
        return alert('No es bisiesto')
    }
 
}
init()

    return{
        version: function() {
        return version;
    }
    ,init: init
    ,calcula: calcula
}
};
