class Linea{
	constructor(nombre, estaciones){
		this.nombre = nombre;
		this.estaciones = [];

		for (var i = 0; i < estaciones.length; i++) {
			let estacionObj = new Estacion(estaciones[i]);

			if(i > 0){
				let caminoObj = new Camino(estaciones[i-1],1,this.nombre);
				estacionObj.addCamino(caminoObj);
			}

			if(i < estaciones.length-1){
				let caminoObj = new Camino(estaciones[i+1],1,this.nombre);
				estacionObj.addCamino(caminoObj);
			}
			
			this.estaciones.push(estacionObj);
		}
		
	}

	getEstacion(nombre){

		let estacionObj = new Estacion(nombre)
		for (var i = 0; i < this.estaciones.length; i++) {
			if(this.estaciones[i].nombre == nombre){
				return this.estaciones[i];
			}
		}
		return null;
	}
}