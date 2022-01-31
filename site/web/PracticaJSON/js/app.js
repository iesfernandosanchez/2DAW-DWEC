class App {
    
    constructor() {
        
        this.courseArray = [];
        this.evaluaciones = ['1EV', '2EV', '3EV'];
        
        this.init();
    }
    
    init() {

        courses.forEach(course => {
            
            let itemCourse = {'curso' : course.nombre};
            itemCourse['alumnos'] = [];
            itemCourse['notas'] = [];

            this.evaluaciones.forEach(evaluacion => {
                itemCourse['notas'][evaluacion] = [];
            });
            
            for (let x = 0; x < course.capacidad; x++) {
                var randomName = faker.name.findName();
                
                itemCourse['alumnos'].push(randomName);
                
                for (var e = 0; e < 3; e++) {
                    var randomNota = this.randomNum(0, 10);
                    let itemEstudiante = {'nombre' : randomName, 'nota': randomNota};
                    itemCourse['notas'][this.evaluaciones[e]].push(itemEstudiante);
                }
                
            }
            this.courseArray.push(itemCourse);
        });
        console.log(this.courseArray);
    }
            
    randomNum(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    cargarCharts() {
            
        const $template = document.querySelector("template");
        const $charts = document.querySelector("#charts")
        
        this.evaluaciones.forEach(evaluacion => {
            
            const $userTemplate = document.importNode($template.content, true);
            
            const $element = $userTemplate.querySelector(".col-lg-6");
            
            const $cardTitle = $userTemplate.querySelector(".card-title");
            $cardTitle.innerText = "Evaluación: " + evaluacion.slice(0,1) + "ª";
            
            const $barChart = $userTemplate.querySelector(".barChart");
            $barChart.id = "eval"+evaluacion;
            
            $charts.appendChild($element)
            
            // Carga un ApexChart por cada evaluación
            this.cargarApexChart(evaluacion);
        });
    }

    cargarApexChart(evaluacion) {
            
        const $idCharts = '#eval'+evaluacion;

        // Solo carga en charts el primer curso
        var JSONnotas = JSON.stringify(this.courseArray[0].notas[evaluacion]);
        var xaxis = [];
        var datos = [];
        
        var as = JSON.parse(JSONnotas);
        
        for (var i in as) {
            xaxis.push(as[i].nombre)
            datos.push(as[i].nota)
        }
        
        new ApexCharts(document.querySelector($idCharts), {
            series: [{
                data: datos
            }],
            chart: {
                type: 'bar',
                height: 700
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: xaxis,
            }
        }).render();
    }  

}