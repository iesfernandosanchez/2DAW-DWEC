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
	}

});

function clickFruta(checkbox) {
	window.opener.marcarCheckbox(checkbox.getAttribute("id"));
}
*/

$btnBuscar.addEventListener("click", () => {

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
