var Coche = {

			matricula : "",
			gasolina : 0,
			dinero : 0,
			consumo : 0,

			init: function(matricula){
				this.matricula = matricula,
				this.gasolina = 50;
				this.dinero = 100
				this.consumo = 7;

				this.print();
			},

			print: function(){

				infoCoche = '<h1>Matricula</h1>'+ this.matricula+'<br/>';
				infoCoche += '<h2>Gasolina</h2>'+ this.gasolina+'<br/>';
				document.getElementById("coche").innerHTML = infoCoche;
			},

			validarMatricula: function(matricula){
				var regex = /([0-9]{4}-[a-zA-Z]{3})|([a-zA-Z]{1,2}-[0-9]{4}-[a-zA-Z]{2})/;
				var regexOld = new RegExp("^[A-z]{1,2}\-\\d{4}\-([A-z]){2,3}$");
				var regexNew = new RegExp("^[0-9]{4}\-[A-z]{3}$");
				console.log(regexOld);
				console.log(regexNew);
				//var regex = new RegExp("([\D\w]{1,2}-\d{4}-[\D\w]{2})");
				return (regex.test(matricula));
			},

			viajar: function(distancia){
				consumido = (distancia*this.consumo)/100;
				this.gasolina -= consumido;
				this.print();
			},
		}