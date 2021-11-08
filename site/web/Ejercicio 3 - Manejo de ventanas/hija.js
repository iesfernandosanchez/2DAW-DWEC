const $btnEnviar = document.querySelector("#btnEnviar"),
    $btnClear = document.querySelector("#btnClear"),
	$mensaje = document.querySelector("#mensaje"),
	$mensajeRecibido = document.querySelector("#mensajeRecibido");
$btnEnviar.addEventListener("click", () => {
	const mensaje = $mensaje.value;
	if (!mensaje) return alert("Escribe un mensaje");
	if (window.opener) {
		window.opener.buscarProducto(mensaje);
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