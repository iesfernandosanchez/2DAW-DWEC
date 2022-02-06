class Estacion{
	constructor(nombre){
		this.nombre = nombre;
		this.caminos = [];
	}

	addCamino(camino){
		this.caminos.push(camino);
	}
}
