const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  
class App{

    
    constructor(){
        this.coursesConfig = []
        this.courses = []
    }

    loadSummaryStudents(students){

        var itemSummaryStudents = document.querySelector('#summaryStudents');
        var cloneSymmarStudents = document.importNode(itemSummaryStudents.content, true);

        var itemSummaryCourse = document.querySelector('#summaryCourse');
        itemSummaryCourse.appendChild(cloneSymmarStudents);

        
        /*for (let index = 0; index < students.length; index++) {
            const element = students[index];   
        }*/
    }

    loadSummaryEvaluation(evaluationName, cardPromoteNumberValue, cardPercentPromoteValue){
        var itemSummaryCourse = document.querySelector('#summaryCourse');
        var itemSummaryCard = document.querySelector('#summaryCard');
        var cloneSummaryCard = document.importNode(itemSummaryCard.content, true);

        var cardName = cloneSummaryCard.querySelector("#cardName");
        cardName.classList.add("promote-card");
        
        

        var cardTitle = cloneSummaryCard.querySelector("#cardTitle");
        cardTitle.innerHTML = 'Promote <span>| '+evaluationName+'</span>';

        var cardPromoteNumber = cloneSummaryCard.querySelector("#cardPromoteNumber");
        cardPromoteNumber.innerHTML = ''+cardPromoteNumberValue+'';


        var cardPercentPromote = cloneSummaryCard.querySelector("#cardPercentPromote");
        cardPercentPromote.innerHTML = ''+cardPercentPromoteValue+'';

        var cardPromoteIcon = cloneSummaryCard.querySelector("#cardPromoteIcon");

        if(cardPercentPromoteValue >= 70){
            cardPromoteIcon.classList.add('bi-emoji-laughing');
            cardName.classList.add("bg-success");
        }else if(cardPercentPromoteValue < 50){
            cardPromoteIcon.classList.add('bi-emoji-angry-fill');
            cardName.classList.add("bg-danger");
        }else{
            cardPromoteIcon.classList.add('bi-emoji-expressionless');
            cardName.classList.add("bg-info");
        }
        
        
        itemSummaryCourse.appendChild(cloneSummaryCard);
        
    }

    loadButtonCourses(){
        var coursesButton = document.querySelector("#coursesButton");
        var buttons = '<a class="nav-link" data-bs-target="#cursos-nav" data-bs-toggle="collapse" href="#" aria-expanded="true">'+
        '<i class="bi bi-bar-chart"></i><span>Cursos</span>'+
        '<i class="bi bi-chevron-down ms-auto"></i></a>'+
        '<ul id="cursos-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav" style="">';

        for (let i = this.coursesConfig.length - 1; i >= 0; i--) {
            buttons += '<li><a class="dropdown-item" href="#" onClick="app.showGraphsCourse(\''+this.coursesConfig[i].name+'\')"><i class="bi bi-circle"></i><span>'+this.coursesConfig[i].name+'</span></a></li>';
        }
        buttons += '</ul>';
        coursesButton.innerHTML = buttons;
    }

    loadCoursesConfigJSON(url){
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            app.coursesConfig = app.JSONtransformToObject(request.responseText);
            app.loadButtonCourses()
            app.generateData();
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

    emptyGraphs(){
        var itemGraphs = document.querySelector("#graphs");
        itemGraphs.innerHTML = '';
    }

    emptySummary(){
        var itemsummaryCourse = document.querySelector("#summaryCourse");
        itemsummaryCourse.innerHTML = '';
    }

    showGraphsCourse(course){

        this.emptyGraphs()
        this.emptySummary()

        var evaluations = app.getEvaluations(app.getCourse(course));
        var students = app.getStudentsCourse(app.getCourse(course));   
        
        Object.keys(evaluations).forEach(key => {
            app.generateGraphDIV(key);
            		
        });

        Object.keys(evaluations).forEach(key => {
            var notas = app.getQualifications(evaluations[key])
            app.loadSummaryEvaluation(key, app.calculatePromote(notas), ((app.calculatePromote(notas)/notas.length)*100));	
            app.generateGraph(key,notas, students)				
        });

        app.loadSummaryStudents(students);

        
        const datatables = select('.datatable', true)
        datatables.forEach(datatable => {
            new simpleDatatables.DataTable(datatable);
        })

    }

    calculatePromote(notas){
        var promoteNumber = 0;
        for (let index = 0; index < notas.length; index++) {
            const element = notas[index];
            if(element >= 5){
                promoteNumber += 1;
            }
            
        }
        return promoteNumber;
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
        itemGraphs.innerHTML += '<div class="card"><div class="card-body"><div id="'+name+'"><h5 class="card-title">Reports /<span>'+name+'</span></h5></div></div></div>';
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
                min: 0,
                max: 10,
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