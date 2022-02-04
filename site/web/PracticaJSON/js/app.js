class App {
    
    constructor() {
        
        this.courses = "";
        this.url = "data/data-courses.json"
        this.courseArray = [];
        this.evaluaciones = ['1EV', '2EV', '3EV'];
        
        this.obtenerJSON(this.url);

    }
    
    obtenerJSON(url) {

        // Enviando y recibiendo datos en formato JSON utilizando el metodo GET
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function () { 
            if (xhr.readyState == 4 && xhr.status == 200) {
                app.courses = JSON.parse(xhr.responseText);
                console.log(app.courses);
                app.init();
            }
        }
        xhr.send();
    }
    
    init() {
        
        this.courses.forEach(course => {

            //Carga los cursos en el ul
            console.log(course);
            var $ulCursos = document.querySelector("#components-nav");
            var $li = document.createElement("li");
            var $a = document.createElement("a");
            var $i = document.createElement("i");
            var $span = document.createElement("span");
            $a.href = "#";
            $i.className = "bi bi-circle";
            $span.textContent = course.nombre;

            $a.appendChild($i);
            $a.appendChild($span);
            
            $li.appendChild($a);
            $ulCursos.appendChild($li);
            
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
//        this.cargarCurso(0);
    }
    
    randomNum(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    cargarCurso(cursoSel) {
        console.log(cursoSel);
        //this.cargarCharts(cursoSel)
    }
    
    cargarCharts(curso) {
        
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
            this.cargarApexChart(curso, evaluacion);
        });
    }
    
    cargarApexChart(cursoSel, evaluacion) {
        
        const $idCharts = '#eval'+evaluacion;
        
        var JSONnotas = JSON.stringify(this.courseArray[cursoSel].notas[evaluacion]);
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
                min: 0,
                max: 10,
                categories: xaxis,
            }
        }).render();
    }  
    
}