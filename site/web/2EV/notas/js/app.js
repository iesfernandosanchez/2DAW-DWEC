class App{
    constructor(){
        this.coursesConfig = []
        this.courses = []
    }

    loadCoursesConfigJSON(url){
        var request = new XMLHttpRequest();
			request.open('GET', url, true);
			request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				// Success!
				app.coursesConfig = app.JSONtransformToObject(request.responseText);
                app.generateData();
                // app.coursesConfig = JSON.parse(request.responseText);
                
				

                console.log(app.courses)
			
//				coursesConfig = JSON.parse(request.responseText);
			} else {
				// We reached our target server, but it returned an error

			}
			};

			request.onerror = function() {
			// There was a connection error of some sort
			};

			

			request.send();
        
            

    }

    setCoursesConfig(coursesConfig){
        this.coursesConfig = coursesConfig
    }

    generateQualification(){
        return faker.datatype.number({
            'min': 0,
            'max': 10
        });
    }

    setEvaluation(evaluation,itemCourse){
        for (let x = 0; x < itemCourse['students'].length; x++) {
            let itemQualification = {
                'alumno':itemCourse['students'][x],
                'nota':this.generateQualification(),
            }
            evaluation.push(itemQualification);
        }
        return evaluation;
    }

    generateData(){
        let courseArray = []

        console.log(this.coursesConfig.length);
        for (let i = this.coursesConfig.length - 1; i >= 0; i--) {
            
            let itemCourse = {
                'name' : this.coursesConfig[i].name
            };
            itemCourse['students'] = [];

            for (let x = 0; x < this.coursesConfig[i].capacity; x++) {
                var randomName = faker.name.findName();
                itemCourse['students'].push(randomName)
            }

            itemCourse['qualifications'] = [];
            for (let index = 0; index < this.coursesConfig[i].evaluations.length; index++) {
                const element = this.coursesConfig[i].evaluations[index];
                itemCourse['qualifications'][element] = [];
            }
            
            Object.keys(itemCourse['qualifications']).forEach(key => {
                itemCourse['qualifications'][key] = this.setEvaluation(itemCourse['qualifications'][key],itemCourse)
            });
            courseArray.push(itemCourse);				
        }  
        console.log(courseArray);

        this.courses = courseArray;
    }

    getQualifications(evaluation){
        let qualifications = []
        for (let index = 0; index < evaluation.length; index++) {
            qualifications.push(evaluation[index]['nota']) 
        }
        return qualifications;
    }

    getStudentsCourse(course){
        return course['students']
    }

    getCourse(name){
        for (let index = 0; index < this.courses.length; index++) {
            if(this.courses[index].name == name){
                return this.courses[index];
            }            
        }
        return null;
    }

    generateGraphDIV(name){

        var itemGraphs = document.querySelector("#graphs");
        itemGraphs.innerHTML += '<div id="'+name+'"></div>';

    }

    generateGraph(name,notas,students){

        var graph =
        new ApexCharts(document.querySelector("#"+name+""), {
            series: [{
                name: name,
                data: notas
            }],
            chart: {
                type: 'bar',
                
            },
            plotOptions: {
                bar: {
                borderRadius: 4,
                horizontal: true,
                }
            },
            dataLabels: {
                enabled: true
            },
            xaxis: {
                categories: students,
            }
        });
        graph.render();
    }

    getEvaluations(course){
        return course['qualifications'];
    }

    transformJSON(){
        return JSON.stringify(Object.assign({}, this.courses));  // convert array to string
    }

    JSONtransformToObject(JSONString){
        return JSON.parse(JSONString);  // convert string to json object
    }

}