
var Coche = {
		matricula : "",
		gasolina : 0,
		dinero : 0,
		consumo : 0,
		historico : [],


		init: function(matricula){
			this.matricula = matricula;
			this.gasolina = 50;
			this.dinero = 100;
			this.consumo = 7;

			this.print();
		},

		print: function() {
			infoCoche = '<h3>Matrícula</h3>' + this.matricula + '<br/>';
			infoCoche += '<h3>Gasolina</h3>' + this.gasolina + '<br/>';
			document.getElementById("coche").innerHTML = infoCoche;

			this.historico.forEach(function(elemento, indice) {
			console.log(elemento, indice+1 + 'º viaje');
			})


		},

		validarMatricula: function(matricula) {
			var regex = /([0-9]{4}-[a-zA-Z]{3})|([a-zA-Z]{1}-[0-9]{4}-[a-zA-Z]{2})/;
			return (regex.test(matricula));
		},

		viajar: function() {
			var distancia = prompt("¿Cuántos km recorrerás?");
			consumido = (distancia*this.consumo/100);
			this.gasolina -= consumido;
			if(distancia != null){
			var hoy = new Date();
			var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
			var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
			this.historico.push('Día '+ fecha +' a las ' + hora);
			this.print();
			}
		}

}

var Gasolinera = {
		gasolinaTotal : 0,
		dinero : 0,
		precio : null,
		historia : [],
	
		init: function(precio){
			this.gasolinaTotal = 500;
			this.dinero = 100;
			this.precio = precio;
	
			this.print();

		},

		validarNegativos: function(precio) {
			while(precio < 0){
				alert("No puede ser un número negativo");
			}
			return true;
		},

		print: function() {
			infoGasolinera = '<h3>Gasolina</h3>'+ this.gasolinaTotal +'<br/>';
			infoGasolinera += '<h3>Precio</h3>'+ this.precio +'<br/>';	
			document.getElementById("gasolinera").innerHTML = infoGasolinera;

			this.historia.forEach(function(elemento, indice) {
				console.log(elemento, indice+1 + 'º recarga gasolina');
				})
		},

		repostar: function(){
			var reposta = prompt("¿Cuántos litros repostarás?");
			this.gasolinaTotal -= reposta;
			if(reposta != null){
			var hoy = new Date();
			var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
			var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
			this.historia.push('Día '+ fecha +' a las ' + hora);
			this.print();
			}
			}
		}


