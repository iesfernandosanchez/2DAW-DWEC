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

<<<<<<< HEAD
	document.getElementById("principal").innerHTML = salida;

});
=======
// Llamada desde la hija
function establecerMensaje(mensaje) {
	$mensajeRecibido.textContent = mensaje;
}


function buscarProducto(nombreProducto) {
	var search = nombreProducto;
    var productos = document.getElementsByName("fruta");
    for (var i = 0; i < productos.length; i++) {
    	if(productos[i].getAttribute('product') == search.toLowerCase()){
    		productos[i].checked = true;

    		if(ventana){
    			ventana.establecerMensaje(productos[i].getAttribute('price'));
    		}
    	}


    }
}

function limpiarSeleccion(){
	var productos = document.getElementsByName("fruta");
	for (var i = 0; i < productos.length; i++) {
		productos[i].checked = false;
    }
}

function inicializarListado(){
	console.log(productos);

    var listado = document.getElementById("listadoProductos");
	 for (var i = 0; i < productos.length; i++) {
	 	var producto = productos[i];
	 	listado.innerHTML += '<tr><td><input type="checkbox" '+
	 						 'name="fruta" product="'+producto.name.toLowerCase()+
	 						 '" price="'+producto.price+'">'+
	 						 producto.name.toUpperCase()+'</td>'+
	 						 '<td>'+producto.price+'</td></tr>';
               
    }

}

function findElements(name)
    {
        var elArray = [];
        var tmp = document.getElementsByTagName("input");
        

        var regex = new RegExp("" + name + "");
        console.log(name);
        console.log(regex);
        for ( var i = 0; i < tmp.length; i++ ) {
        	console.log(tmp[i].getAttribute('product'));
            if ( regex.test(tmp[i].getAttribute('product')) ) {
                elArray.push(tmp[i]);
            }
        }

        return elArray;

    }

window.onload = function()
{
	inicializarListado();

	var productos = findElements("tom");
	console.log(productos);
}
>>>>>>> master
