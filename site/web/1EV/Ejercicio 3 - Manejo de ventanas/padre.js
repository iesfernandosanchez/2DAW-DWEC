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