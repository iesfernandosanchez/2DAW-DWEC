class Screen{
    constructor(){
        
    }

    renderGraph(tiendas){
      
        echarts.init(document.querySelector("#graphSummaryTiendas")).setOption({
            tooltip: {
              trigger: 'item'
            },
            legend: {
              top: '5%',
              left: 'center'
            },
            series: [{
              name: 'movimientos',
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
              data: tiendas
            }]
          });
    }

    renderSummaryTiendas(tiendas){

        var summaryTiendas = document.querySelector("#summaryTiendas")
        for (let index = 0; index < tiendas.length; index++) {
            const element = tiendas[index];

            var templateTienda = document.querySelector("#tiendaTemplate");
            var cloneTemplateTienda = document.importNode(templateTienda.content,true);

            var nombreTienda = cloneTemplateTienda.querySelector("#nombre");
            nombreTienda.innerHTML = element.nombre;

            var cajaTienda = cloneTemplateTienda.querySelector("#caja");
            cajaTienda.innerHTML = element.caja;

            summaryTiendas.appendChild(cloneTemplateTienda);            
        }

    }

    renderDatatables(data){
        /**
             * Initiate Datatables
             */

         let myData = {
            "headings": [
                "tienda",
                "fecha",
                "importe",
                "concepto"
            ],
            "data": data           
            };
            console.log(myData)
          const datatables = document.querySelectorAll('#tablaGastos')
          datatables.forEach(datatable => {
              new simpleDatatables.DataTable(datatable,{

                    columns: [
                        // Sort the second column in ascending order
                        { select: 1, sort: "desc" },
                    ],
                  'paging':true,
                  
                  'data': myData,
                  
                });
          })
    }
}