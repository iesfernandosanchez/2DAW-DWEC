class Screen {
    
    constructor() {
        
    }
    
    mostrarDataTable(datos) {
        /**
        * Easy selector helper function
        */
        const select = (el, all = false) => {
            el = el.trim();
            if (all) {
                return [...document.querySelectorAll(el)]
            } else {
                return document.querySelector(el)
            }
        }
        
        const datatables = select('.datatable', true)
        const myData = {
            "heading": [
                "Tienda",
                "Fecha",
                "Importe"
            ],
            "data": datos
        }
        datatables.forEach(datatable => {
            new simpleDatatables.DataTable(datatable, {
                'data': myData
            });
        })
        
    }
    
    cargarTiendas(tiendas) {
        
        const $template = document.querySelector("#templateTienda");
        const $tiendas = document.querySelector("#tiendas");
        
        tiendas.forEach(tienda => {
            
            var recaudacion = 0;
            
            const $userTemplate = document.importNode($template.content, true);
            const $element = $userTemplate.querySelector(".col-8");
            
            var $cardTitle = $userTemplate.querySelector(".card-title");
            $cardTitle.innerText = tienda.nombre;
            
            var $cardText = $userTemplate.querySelector(".card-text");
            tienda.movimientos.forEach(movimiento => {
                var newDiv = document.createElement("div");
                var newContent = document.createTextNode("Fecha: " + movimiento.fecha + " Importe: " + movimiento.importe + " Concepto: " + movimiento.concepto);
                newDiv.appendChild(newContent);
                $cardText.appendChild(newDiv);
                
                if (movimiento.concepto == 'compra' || movimiento.concepto == 'gasto') {
                    recaudacion -= parseInt(movimiento.importe);
                } else {
                    recaudacion += parseInt(movimiento.importe);
                }
                
            })
            $tiendas.appendChild($element)
            
            const $recaudacion = $userTemplate.querySelector(".col-4");
            const $importe = $userTemplate.querySelector("#recaudacion");
            $importe.innerText = "Recaudacion: " + recaudacion;
            $tiendas.appendChild($recaudacion)
            
        })
    }
    
    cargarChart(datos) {
        
        var datosSeries = [];
        var datosXaxis = [];
        datos.forEach(tienda => {
            var movimientos = [];
            tienda.movimientos.forEach(movimiento => {
                movimientos.push(movimiento.importe);
                datosXaxis.push(movimiento.fecha);
            })
            datosSeries.push({'name': tienda.nombre, 'data': movimientos});
        })
        console.log(datosSeries);

        var options = {
            series: 
                datosSeries,
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'Movimientos',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: datosXaxis,
            }
        };
        
        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
    }
    
}