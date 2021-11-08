const $btnAbrir = document.querySelector("#btnAbrir"),
	$mensaje = document.querySelector("#mensaje"),
	$btnEnviarMensaje = document.querySelector("#btnEnviarMensaje"),
	$mensajeRecibido = document.querySelector("#mensajeRecibido");

let ventana;
$btnAbrir.addEventListener("click", () => {
	ventana = window.open("ventana.html","","height=400,width=800");;
});

$btnEnviarMensaje.addEventListener("click", () => {
	let mensaje = $mensaje.value;
	if (!mensaje) {
		return;
	}
	if (ventana) {
		ventana.establecerMensaje(mensaje);
	}
});

// Llamada desde la hija
function establecerMensaje(mensaje) {
	$mensajeRecibido.textContent = mensaje;
}


function buscarProducto(nombreProducto) {
	var search = nombreProducto;
    var productos = document.getElementsByName("fruta");
    for (var i = 0; i <= productos.length; i++) {
    	if(productos[i].getAttribute('product') == search){
    		productos[i].checked = true;
    	}


    }
}

window.onload = function()
{
	
}