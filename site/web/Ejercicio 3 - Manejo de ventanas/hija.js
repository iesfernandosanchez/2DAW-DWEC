<<<<<<< HEAD
const $btnBuscar = document.querySelector("#btnBuscar"),
	$error = document.querySelector("#error"),
	$tabla = document.querySelector("#principal"),
	$textFruta = document.querySelector("#textFruta");

var frutas;

window.tenerFrutas = function(p_frutas) {
	frutas = p_frutas;
}

/*
$btnBuscar.addEventListener("click", () => {

	$error.innerHTML = "";

	var salida = "";
	var swEncontrados = false;

	var eventos;
	var nodo;
	
	if (!$textFruta.value) {
		$error.innerHTML = "Teclee un nombre de fruta";
		return;
	};

	var regexp = new RegExp($textFruta.value, "i");

	for (var i in frutas) {
		if (frutas[i][0].match(regexp)) {
			swEncontrados = true;
			salida += '<tr><td><input type="checkbox" onclick="clickFruta(this)" name="fruta" id="'+frutas[i][0]+'"></td><td>'+frutas[i][0]+'</td><td>'+frutas[i][1]+'</td></tr>';
		}
	}
	if (swEncontrados) {
		$tabla.innerHTML = salida;
	} else {
		$error.innerHTML = "No se localizan registros";
		$tabla.innerHTML = "";
=======
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
>>>>>>> master
	}

});

<<<<<<< HEAD
function clickFruta(checkbox) {
	window.opener.marcarCheckbox(checkbox.getAttribute("id"));
}
*/

$btnBuscar.addEventListener("click", () => {
=======
$btnClear.addEventListener("click",() => {
	if (window.opener) {
		window.opener.limpiarSeleccion();
	}
})

>>>>>>> master

	$error.innerHTML = "";

	var salida = "";
	var swEncontrados = false;

	var eventos;
	
	if (!$textFruta.value) {
		$error.innerHTML = "Teclee un nombre de fruta";
		return;
	};

	var regexp = new RegExp($textFruta.value, "i");

	for (var i in frutas) {
		if (frutas[i][0].match(regexp)) {
			swEncontrados = true;
			salida += '<tr><td><input type="checkbox" name="fruta" id="'+frutas[i][0]+'"></td><td>'+frutas[i][0]+'</td><td>'+frutas[i][1]+'</td></tr>';
		}
	}
	if (swEncontrados) {
		$tabla.innerHTML = salida;

		eventos = document.getElementsByName("fruta");
		for (var i = 0; i < eventos.length; i++) {
			var nodo = eventos[i];
			console.log('1: ' + nodo.getAttribute("id"));
			nodo.addEventListener ("click", (event) => {
				console.log('2: ' + event.target.getAttribute("id"));
				window.opener.marcarCheckbox(event.target.getAttribute("id"));
			});
		}

	} else {
		$error.innerHTML = "No se localizan registros";
		$tabla.innerHTML = "";
	}

});
