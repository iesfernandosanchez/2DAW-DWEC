class Metro{
	constructor(configMetro){
		this.lineas = [];

		for (var i = 0; i < configMetro.length; i++) {
			let lineaObj = new Linea(configMetro[i]['nombre'], configMetro[i]['estaciones']);
			this.lineas.push(lineaObj);
		}
	}

	getEstacion(nombre){
		let estacionObj = null
		for (var i = 0; i < this.lineas.length; i++) {
			let estacionTmp = this.lineas[i].getEstacion(nombre);
			if(estacionTmp != null){
				if(estacionObj == null){
					estacionObj = new Estacion(nombre);
				}
				for (var j = 0; j < estacionTmp.caminos.length; j++) {
					estacionObj.addCamino(estacionTmp.caminos[j]);
				}
			}
		}
		return estacionObj
	}

	loadStationInModal(estacion){
		let stationObj = this.getEstacion(estacion);
		for (var j = 0; j < stationObj.caminos.length; j++) {
			document.getElementById("modalBody").innerHTML+= stationObj.caminos[j].destino+" - "+stationObj.caminos[j].linea+" - "+stationObj.caminos[j].distancia+"<br/>";
		}	
		document.getElementById("exampleModalLabel").innerHTML= stationObj.nombre;
	}

	paintLine(nombre){	
		for (var i = 0; i < this.lineas.length; i++) {		
			if(nombre == this.lineas[i].nombre){
				
				var itemMetro = document.querySelector('#metro');
				var itemLinea = document.querySelector('#linea');
				var itemStation = document.querySelector('#estacion');

				var listadoEstaciones = itemLinea.content.querySelector("#listadoEstaciones");
				var nameLine = itemLinea.content.querySelector("#nameLine");

				nameLine.textContent = this.lineas[i].nombre;
				for (var j = 0; j < this.lineas[i].estaciones.length; j++) {

					var cloneStation = document.importNode(itemStation.content, true);
					
					var nameStation = cloneStation.querySelector("#nameStation");
					nameStation.textContent = this.lineas[i].estaciones[j].nombre;

					var btnStationInfo = cloneStation.querySelector("#btnStationInfo");
					/*btnStationInfo.click(function(){
						metro.loadStationInModal("\""+this.lineas[i].estaciones[j].nombre+"\"");
					//	alert("hola");
					});
					*/
					

					btnStationInfo.setAttribute('onclick','metro.loadStationInModal(\''+this.lineas[i].estaciones[j].nombre+'\')');
					//btnStationInfo.textContent = "ver mas";
					
					listadoEstaciones.appendChild(cloneStation)
				}

				var cloneLine = document.importNode(itemLinea.content, true);
				itemMetro.appendChild(cloneLine);

				listadoEstaciones.textContent = "";
				

				
				/*
				let lineaView = "<div class='card'><div class='card-body'><div class='hori-timeline' dir='ltr'><ul class='list-inline events'>";
				for (var j = 0; j < this.lineas[i].estaciones.length; j++) {
					let estacionView = "<li class='list-inline-item event-list'><div class='px-4'><div class='event-date bg-soft-primary text-primary'>"
					estacionView += this.lineas[i].estaciones[j].nombre+"</div>";
					estacionView += "<div><a href='#' onclick='metro.loadStationInModal(\""+this.lineas[i].estaciones[j].nombre+"\")' data-bs-toggle='modal' data-bs-target='#exampleModal' class='btn btn-primary btn-sm'>View Station</a></div></div></li>";
					lineaView += estacionView;
				}

				lineaView += "</ul></div></div></div>";
				document.getElementById("metro").innerHTML += lineaView;
				*/
				
			}
		}
	}
}