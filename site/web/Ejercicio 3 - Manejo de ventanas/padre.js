const frutas = [['Naranja', '1,25'], ['Mandarina', '1,69'], ['Pera', '1,59'], ['Cereza', '4,39'], ['Tomate', '0,99'], ['Manzana', '1,49'], ['Fresa', '6,58']];

const $btnAbrir = document.querySelector("#btnAbrir");

let ventana;

$btnAbrir.addEventListener("click", () => {
	ventana = window.open("ventana.html","","left=350,top=150,height=200,width=400");;
	ventana.addEventListener("DOMContentLoaded", function () {
		ventana.tenerFrutas(frutas);
	});
});

// Llamada desde la hija
function marcarCheckbox(fruta) {
	for (var i in frutas) {
		if (frutas[i][0] == fruta) {
			if (document.getElementById(fruta).checked) {
				document.getElementById(fruta).checked =false
				document.getElementById("precio").innerHTML = "";
			} else {
				document.getElementById(fruta).checked = true;
				document.getElementById("precio").innerHTML = frutas[i][1];
			}
		}
	}
}

// Al terminar de cargar la página se generan los checkbox
document.addEventListener("DOMContentLoaded", function(){

	var salida = '<tr><th></th><th>Fruta</th><th>Precio</th></tr>';

	for (var i in frutas) {
		var divCheck = '<tr><td><input type="checkbox" disabled id="'+frutas[i][0]+'"></td><td>'+frutas[i][0]+'</td><td>'+frutas[i][1]+'</td></tr>';
		salida += divCheck;
	}

	document.getElementById("principal").innerHTML = salida;

});
