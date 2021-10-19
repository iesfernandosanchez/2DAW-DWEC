//alert("adios");

document.getElementById('titulo').innerHTML = "Este es un titulo";

function pintaTituloRojo(id) {
	document.getElementById(id).setAtribute("class","tituloRojo");
}


function pintaTituloAzul(id) {
	document.getElementById(id).setAtribute("class","tituloAzul");
}

function muetraClase(id) {
	document.getElementById(id).getAttribute("class");
	console.log(clase);
}