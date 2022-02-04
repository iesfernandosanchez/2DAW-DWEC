//https://datos.madrid.es/egob/catalogo/201747-0-bibliobuses-bibliotecas.json
class App{

    
    constructor(){
        this.bibliotecas = [];
    }

    pintaDatos(){

    }

    hacerPeticion(url){
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var objectBiblio = app.JSONtransformToObject(request.responseText);
            var biblioCollection = objectBiblio['@graph'];

            biblioCollection.forEach(element => {
                app.bibliotecas.push(
                    [
                        element['title'],
                        element['address']['street-address']
                    ])
            })

            /*
            var datatableBibliotecas = select("#datatable-data");
            for (let index = 0; index < app.bibliotecas.length; index++) {
                const element = app.bibliotecas[index];
                console.log(element);

                var filaDatatable = '<tr><td>'+element['title']+'</td><td>'+element['address']+'</td></tr>';
                datatableBibliotecas.innerHTML += filaDatatable;

                
            }*/


            console.log(app.bibliotecas);

             /**
             * Initiate Datatables
             */

             let myData = {
                "headings": [
                    "Name",
                    "Address"
                ],
                "data": app.bibliotecas
                
                };
              const datatables = select('.datatable', true)
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


              


            console.log(app.bibliotecas);
            
            
        } else {
            // We reached our target server, but it returned an error
        }
        };

        request.onerror = function() {
        // There was a connection error of some sort
        };
        request.send();
    }

    transformJSON(){
        return JSON.stringify(Object.assign({}, this.courses));  // convert array to string
    }

    JSONtransformToObject(JSONString){
        return JSON.parse(JSONString);  // convert string to json object
    }
}