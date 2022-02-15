class Screen{
    constructor(){

    }

    printRonda(ronda){
        var rondaPanel = document.querySelector("#rondaPanel");

        var templatePartido = document.querySelector("#partidoTemplate")
        

        for (let index = 0; index < ronda.partidos.length; index++) {
            var clonePartido = document.importNode(templatePartido.content, true);

            const element = ronda.partidos[index];
            for (let index = 0; index < element.participantes.length; index++) {
                const participante = element.participantes[index];

                var templateParticipante = document.querySelector("#participante")
                var cloneParticipante = document.importNode(templateParticipante.content, true);

                // cloneParticipante.querySelector("#rowParticipante")
                //     .attr(
                //         'id',
                //         cloneParticipante.querySelector("#rowParticipante").attr('id')+""
                var equipo = cloneParticipante.querySelector("#equipo")
                equipo.innerHTML = participante.nombreEquipo

                var marcador = cloneParticipante.querySelector("#marcador")
                marcador.innerHTML = participante.marcador
                
                clonePartido.querySelector("#participantes").appendChild(cloneParticipante)
                
            }

            if(element.ganador != null){
                var templateGanador = document.querySelector("#ganador")
                var cloneGanador = document.importNode(templateGanador.content, true);

                cloneGanador.querySelector("#equipoGanador").innerHTML = element.ganador

                clonePartido.querySelector("#rowParticipante").appendChild(cloneGanador);

            }
            rondaPanel.appendChild(clonePartido)    
        }

        


        
        

    }
}