class App {
    constructor() {
        this.cursos = [];
    }


    sacarDatos() {
        let datos;
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/data-courses.json");
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    app.rellenarCursos(JSON.parse(req.responseText));
                } else {
                    datos = "Error loading page\n";
                }

            }
        };
        req.send();
    }



    rellenarCursos(datos) {
        for (let i = 0; i < datos.length; i++) {
            for (let j = 0; j < datos[i].capacidad; j++) {
                datos[i].estudiantes.push(faker.name.findName());
            }
            for (let j = 0; j < Object.keys(datos[i].calificaciones).length - 1; j++) {
                for (let k = 0; k < datos[i].capacidad; k++) {
                    let notaEstudiante = {nombre: datos[i].estudiantes[k], nota: app.notaAleatoria()}
                    // datos[i].calificaciones[j].push(notaEstudiante);
                    Object.values(datos[i].calificaciones)[j].push(notaEstudiante);
                }
            }
            for (let k = 0; k < datos[i].capacidad; k++) {
                let notaFinal = Math.round((Object.values(datos[i].calificaciones)[2][k].nota + Object.values(datos[i].calificaciones)[1][k].nota + Object.values(datos[i].calificaciones)[0][k].nota) / 3);
                let notaEstudiante = {nombre: datos[i].estudiantes[k], nota: notaFinal}
                Object.values(datos[i].calificaciones)[3].push(notaEstudiante);
            }
        }
        this.cursos = datos;
    }



    pintarGraficas() {
        for (let i = 0; i < this.cursos.length; i++) {
            const divNotas = app.generarDivCanvas();
            //const divNotasMedias = app.generarDivCanvas();
            divNotas.querySelector('.card-title').childNodes[0].before(this.cursos[i].curso);

            let tablaAlumnosNota = document.createElement("canvas");
            //let tablaMediaNotas = document.createElement("canvas");
            tablaAlumnosNota.id = this.cursos[i].curso;
            //tablaMediaNotas.id = this.cursos[i].curso + '-media';

            divNotas.querySelector('.chart-container').appendChild(tablaAlumnosNota);
            //divNotasMedias.querySelector('.chart-container').appendChild(tablaMediaNotas);

            document.getElementById('graficos').appendChild(divNotas);
            //document.getElementById('graficos').appendChild(divNotasMedias);

            const datosNota = [];
            const datosAlumnos = [];
            for (let j = 0; j < this.cursos[i].capacidad; j++) {
                datosNota.push(Object.values(this.cursos[i].calificaciones)[3][j].nota);
                datosAlumnos.push(Object.values(this.cursos[i].calificaciones)[3][j].nombre);
            }
            const ctx1 = document.getElementById(this.cursos[i].curso);
            app.graficaNotaAlumno(ctx1, datosAlumnos, datosNota);

/*
            let suspensos = 0;
            let aprobados = 0;
            let sobresalientes = 0;

            for (let i = 0; i < datosNota.length; i++) {
                if (datosNota[i] < 5) {
                    suspensos++;
                } else if (datosNota[i] >= 5 && datosNota[i] < 8) {
                    aprobados++;
                } else if (datosNota[i] >= 8) {
                    sobresalientes++;
                }
            }
                const ctx2 = document.getElementById(this.cursos[i].curso + '-media');
                app.graficaNotaMedia(ctx2, suspensos, aprobados, sobresalientes);
    */
        }
    }

    graficaNotaAlumno(ctx, datosAlumnos, datosNota){
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: datosAlumnos,
                datasets: [{
                    label: ' - Nota Final',
                    data: datosNota,
                    backgroundColor: function (context) {
                        var index = context.dataIndex;
                        var value = context.dataset.data[index];
                        return value < 5 ? 'rgba(239,101,101,0.93)' :
                            value >= 5 && value < 8 ? 'rgba(166,180,238,0.88)' :
                                'rgba(187,245,175,0.78)';
                    },
                    borderColor: function (context) {
                        var index = context.dataIndex;
                        var value = context.dataset.data[index];
                        return value < 5 ? 'rgb(182,0,0)' :
                            value >= 5 && value < 8 ? 'rgb(0,19,159)' :
                                'rgb(42,194,1)';
                    },
                    borderWidth: 2
                }]
            },
            options: {
                title: {
                    display: true,
                    position: 'top',
                    text: this.cursos[0].curso
                },
                scales: {
                    y: {
                        max: 10,
                        beginAtZero: true
                    }
                }
            }
        });

    }
    graficaNotaMedia(ctx, suspensos, aprobados, sobresalientes){
        const myChart1 = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Suspensos', 'Aprobados', 'Sobresalientes'],
                datasets: [{
                    label: ' - Nota Media',
                    data: [suspensos, aprobados, sobresalientes],
                    backgroundColor: [
                        'rgba(239,101,101,0.93)',
                        'rgba(166,180,238,0.88)',
                        'rgba(187,245,175,0.78)'
                    ],
                    borderColor: [
                        'rgb(182,0,0)',
                        'rgb(0,19,159)',
                        'rgb(42,194,1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                title: {
                    display: true,
                    position: 'top',
                    text: 'Aprobados'
                }
            }
        });
    }



    generarDivCanvas(){
        const template = document.querySelector('#div-canvas').content;
        const divCanvas = new DocumentFragment();
        divCanvas.appendChild(document.importNode(template, true));
        return divCanvas;
    }

    notaAleatoria(){
        return faker.datatype.float({min: 1, max: 10, precision: .1});
    }

    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

}