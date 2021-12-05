
class Producto {

	static staticId = 0;

    constructor(nombre, precio, imagen, cantidad) {
		Producto.staticId ++;
		this.id = Producto.staticId;
		this.nombre = nombre;
		this.precio = precio;
		if (imagen) {
			this.imagen = imagen;
		}
		if (cantidad) {
			this.cantidad = cantidad;
		}
	}
	    
}