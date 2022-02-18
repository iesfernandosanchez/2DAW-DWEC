class Screen{
  
    constructor(){
        
    }

    renderGraph(bibliotecas){
      
        echarts.init(document.querySelector("#graphSummaryBibliotecas")).setOption({
            tooltip: {
              trigger: 'item'
            },
            legend: {
              top: '5%',
              left: 'center'
            },
            series: [{
              name: 'reservas',
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
              data: bibliotecas
            }]
          });
    }

    renderSummaryBibliotecas(bibliotecas){

        var summaryBibliotecas = document.querySelector("#summaryBibliotecas")
        for (let index = 0; index < bibliotecas.length; index++) {
            const element = bibliotecas[index];

            var templateBiblioteca = document.querySelector("#bibliotecaTemplate");
            var cloneTemplateBiblioteca = document.importNode(templateBiblioteca.content,true);

            var nombreBiblioteca = cloneTemplateBiblioteca.querySelector("#nombre");
            nombreBiblioteca.innerHTML = element.nombre;

            summaryBibliotecas.appendChild(cloneTemplateBiblioteca);            
        }

    }

    renderDatatables(data){

            /*
             * Initiate Datatables
             */

         let myData = {
            "headings": [
                "biblioteca",
                "nombre",
                "estado",
                "ubicacion"
            ],
            "data": data           
            };
            console.log(myData)
          const datatables = document.querySelectorAll('#tablaLibros')
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