
class Shop {

  constructor() {
    this.productos = [];
    this.productos.push(new Producto('Cereza', '1.98', 'cereza.jpeg'));
    this.productos.push(new Producto('Manzana', '0.87', 'manzana.jpeg'));
    this.productos.push(new Producto('Naranja', '0.64', 'naranja.jpeg'));
    this.productos.push(new Producto('Platano', '1.22', 'platano.jpeg'));
    this.productos.push(new Producto('Fresa', '2.01'));
  }

  printProductos() {
    console.log(this.productos);
  }

  printProducto(indice) {
    console.log(this.productos[indice]);
  }

  getProductos() {
    return this.productos;
  }

  anadirProducto(nombre, precio, foto) {
    var producto = new Producto(nombre, precio, foto);
    this.productos.push(producto);
  }

  actualizarCantidad(id, cantidad) {
    const elemento = this.productos.find(producto => producto.id == id);
    elemento.cantidad = cantidad;
  }

  prepararPresupuesto() {
    return this.productos.filter(producto => producto.cantidad > 0);
  }
    
}