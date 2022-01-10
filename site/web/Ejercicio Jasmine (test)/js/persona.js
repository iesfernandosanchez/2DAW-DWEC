class Persona {

    constructor(nombre, fnac) {

        this.nombre = nombre;
        this.fnac = new String(fnac);

    }

    get Edad() {

        let hoy = new Date();
        let edad = null;

        let anyo = this.fnac.substring(0,4);
        let mes = this.fnac.substring(4,6);
        let dia = this.fnac.substring(6,8);

        edad=hoy.getFullYear()- anyo - 1;

        if (hoy.getMonth() + 1 - mes < 0) { //+ 1 porque los meses empiezan en 0
            return edad;
        } 
            
        if (hoy.getMonth() + 1 - mes > 0) {
            return edad+1;
        }

        if (hoy.getUTCDate() - dia >= 0) {
            return edad + 1;
        }
        
        return edad;
    }

}