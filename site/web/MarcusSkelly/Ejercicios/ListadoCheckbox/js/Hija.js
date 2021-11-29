
const $btnEnviar = document.querySelector("#btnEnviar"),
$input = document.querySelector("#input"),
$mensajeRecibido = document.querySelector("#mensajeRecibido");


$btnEnviar.addEventListener("click", () => {
const input = $input.value;
if(window.opener){
window.opener.marcar(input)}
});


// Definición de función desde la que nos llama el padre
window.establecerMensaje = function (mensaje) {
$mensajeRecibido.textContent = mensaje;
}

