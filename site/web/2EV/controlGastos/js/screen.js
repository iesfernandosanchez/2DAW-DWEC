class Screen{
    constructor(){

    }

    renderProfiles(usuarios){

        var panelUsuarios = document.querySelector("#profiles");
        for (let index = 0; index < usuarios.length; index++) {
            const element = usuarios[index];
        
            var templateUsuario = document.querySelector("#profile-user");

            var cloneTemnplateUsuario = document.importNode(templateUsuario.content, true);
            var nombre = cloneTemnplateUsuario.querySelector("#nombre");
            nombre.innerHTML = element;
            panelUsuarios.prepend(cloneTemnplateUsuario);            
        }
    }

    renderDatatables(data){
        /**
             * Initiate Datatables
             */

         let myData = {
            "headings": [
                "nombre",
                "fecha",
                "importe",
                "concepto"
            ],
            "data": data
            
            
            };
          const datatables = document.querySelectorAll('.datatable')
          datatables.forEach(datatable => {
              new simpleDatatables.DataTable(datatable,{

                    columns: [
                        // Sort the second column in ascending order
                        { select: 1, sort: "desc" },
                    ],
                  'paging':false,
                  
                  'data': myData,
                  
                });
          })
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
              name: 'gastos',
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