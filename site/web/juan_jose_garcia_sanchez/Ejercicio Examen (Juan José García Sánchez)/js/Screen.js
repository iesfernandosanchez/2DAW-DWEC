class Screen {
    constructor() {
    }


    renderCarrousel(publicaciones) {
        let count = 0
        let divCarrousel = document.querySelector("#divCarrouselImages")

        publicaciones.forEach(publicacion => {
            let templateCarrousel = document.querySelector("#carrouselTemplate")
            let cloneTemplateCarrousel = document.importNode(templateCarrousel.content, true)

            let img = cloneTemplateCarrousel.querySelector("#imageCarrousel")

            if (count === 0) {
                cloneTemplateCarrousel.firstElementChild.classList.add("active")
                count++
            }

            img.src = publicacion.imagen

            divCarrousel.prepend(cloneTemplateCarrousel)
        })
    }


    renderCards(publicaciones) {
        let divCard = document.querySelector("#cards")

        publicaciones.forEach(publicacion =>{
            let templateCard = document.querySelector("#cardPublicacion")
            let cloneTemaplateCard = document.importNode(templateCard.content,true)

            let img = cloneTemaplateCard.querySelector("#imagenCard")
            let titulo = cloneTemaplateCard.querySelector("#tituloCard")
            let genero = cloneTemaplateCard.querySelector("#generoCard")
            let isbn = cloneTemaplateCard.querySelector("#isbnCard")
            let ejemplares = cloneTemaplateCard.querySelector("#numeroEjemplaresCard")

            img.src = publicacion.imagen
            titulo.innerHTML = publicacion.titulo
            genero.innerHTML += publicacion.genero
            isbn.innerHTML += publicacion.isbn
            ejemplares.innerHTML += publicacion.ejemplares.length

            divCard.prepend(cloneTemaplateCard)
        })
    }


    renderDatatablesPublicaciones(data) {
        /**
         * Initiate Datatables
         */

        let myData = {
            "headings": [
                "Titulo",
                "Género",
                "ISBN",
                "Número Ejemplares",
                "Edición"
            ],
            "data": data


        };
        const datatable = document.querySelector('#tablaPublicaciones')

        new simpleDatatables.DataTable(datatable, {
            columns: [
                // Sort the second column in ascending order
                {select: 1, sort: "desc"},
            ],
            'paging': false,

            'data': myData,
        });
    }
    renderDatatablesEjemplares(data) {
        /**
         * Initiate Datatables
         */

        let myData = {
            "headings": [
                "Titulo",
                "Género",
                "Estado",
                "Ubicacion",
                "Edición",
                "Comprar"
            ],
            "data": data


        };
        const datatable = document.querySelector('#tablaEjemplares')

        new simpleDatatables.DataTable(datatable, {
            columns: [
                // Sort the second column in ascending order
                {select: 1, sort: "desc"},
            ],
            'paging': false,

            'data': myData,
        });
    }

    renderGraph(data){
        echarts.init(document.querySelector("#trafficChart")).setOption({
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [{
                name: 'Numero de Ejemplares',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '18',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: data
            }]
        });
    }

}