const $btnEnviar = document.querySelector("#btnEnviar"),
    $btnClear = document.querySelector("#btnClear"),
	$mensaje = document.querySelector("#mensaje"),
	$mensajeRecibido = document.querySelector("#mensajeRecibido");
$btnEnviar.addEventListener("click", () => {
	const mensaje = $mensaje.value;
	if (!mensaje) return alert("Escribe un mensaje");
	if (window.opener) {
		//window.opener.buscarProducto(mensaje);
		var productos = window.opener.findElements(mensaje.toLowerCase());
		var listado = document.getElementById("listadoProductos");
		listado.innerHTML = '';
		for (var i = 0; i < productos.length; i++) {
			var producto = productos[i];
			listado.innerHTML += '<tr><td><input type="checkbox" onclick="window.opener.buscarProducto(\''+producto.getAttribute('product').toLowerCase()+'\')"'+
	 						 'name="fruta" product="'+producto.getAttribute('product').toLowerCase()+
	 						 '" price="'+producto.getAttribute('price')+'">'+
	 						 producto.getAttribute('product').toUpperCase()+'</td>'+
	 						 '<td>'+producto.getAttribute('price')+'</td></tr>';
		}
		//console.log(productos);
	}
});

$btnClear.addEventListener("click",() => {
	if (window.opener) {
		window.opener.limpiarSeleccion();
	}
})


// Definición de función desde la que nos llama el padre
window.establecerMensaje = function (mensaje) {
	$mensajeRecibido.textContent = mensaje;
}