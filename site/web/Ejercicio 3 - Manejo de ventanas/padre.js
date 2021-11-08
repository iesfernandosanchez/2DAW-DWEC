const frutas = ['Naranja', 'Pera', 'Cereza', 'Tomate', 'Manzana', 'Fresa', 'Mandarina'];

const $btnAbrir = document.querySelector("#btnAbrir");

let ventana;


$btnAbrir.addEventListener("click", () => {
	ventana = window.open("ventana.html","","height=400,width=800");;
});

// Llamada desde la hija
function marcarCheckbox(fruta) {
	for (var i in frutas) {
		if (frutas[i] == fruta) {
			document.getElementById(fruta).checked = true;
		}
	}
}

// Al terminar de cargar la página se generan los checkbox
document.addEventListener("DOMContentLoaded", function(){

	var salida = '';

	for (var i in frutas) {
		var divCheck = '<div><input type="checkbox" id="'+frutas[i]+'" disabled/>'+frutas[i]+'</div>';
		salida += divCheck;
	}

	document.getElementById("principal").innerHTML = salida;

});
