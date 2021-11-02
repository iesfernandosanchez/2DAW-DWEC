var Coche = {
    matricula : "",

    init: function(matricula){
        this.matricula = matricula;
    },

    validarMatricula: function(matricula){
        var regex = /([0-9]{4}-[a-zA-Z]{3})|([a-zA-Z]{1,2}-[0-9]{4}-[a-zA-Z]{2})/;
        return (regex.test(matricula));
    }

}