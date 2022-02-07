class Cartera{
    constructor(nombre){
        this.nombre = nombre
        this.gastos = [];
        this.usuarios = [];
    }

    addGasto(gasto){
        this.gastos.push(gasto);

        
        
        var usuarioTmp = gasto.nombre;
        
        if(!this.usuarios.includes(usuarioTmp)){
            this.addUsuario(usuarioTmp);
        }

    }

    addUsuario(usuario){
        this.usuarios.push(usuario);
    }

    getGastosUsuario(usuarioTmp){

        var gastos = [];
        if(this.usuarios.includes(usuarioTmp)){
            for (let index = 0; index < this.gastos.length; index++) {
                const element = this.gastos[index];
                if(element.nombre == usuarioTmp){
                    gastos.push(element);
                }
                
            }
            return gastos;
        }
        return [];
 
    }
}