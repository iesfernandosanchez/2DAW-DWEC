class Calendario {
    mesInicio
    mesFin
    calendario

    constructor(mesInicio, mesFin) {
        this.mesInicio = mesInicio;
        this.mesFin = mesFin;
        this.calendario = []
    }


    generarCalendario() {
        let fecha = 0
        let endGeneraorCalendar = false
        let day = 1
        let festivos = [new Date(2021, 8, 1), new Date(2021, 11, 11), new Date(2021, 8, 2)]
        let itemDay = []
        let added = false;

        while (!endGeneraorCalendar) {

            if (this.mesInicio === undefined) {
                this.mesInicio = 8
            }

            if (this.mesFin === undefined) {
                this.mesFin = 5
            }

            fecha = new Date(2021, this.mesInicio, day)
            if (this.mesFin === fecha.getMonth()) {
                endGeneraorCalendar = true;
            } else {
                itemDay = []
                itemDay["date"] = fecha
                added = false;
                festivos.forEach(value => {
                    if (fecha.getTime() === value.getTime()) {
                        itemDay["event"] = ["Event", "Festivo"]
                        this.calendario.push(itemDay)
                        added = true;
                    }
                })
                if (!added) {
                    this.calendario.push(itemDay)
                }
            }
            day++
        }
        console.log(this.calendario)
        return this.calendario
    }
}


//Imprimir calendario organizado
// let contador = 0
// for (let i = 0; i < meses.length; i++) {
//     stringOut += meses[i]
//     stringOut += "\n"
//     fechaFinal = new Date(2021, mesesNum[i] + 1, 1);
//     fechaFinal.setDate(fechaFinal.getDate() - 1)
//     fechaFinal = fechaFinal.getDate();
//     for (let j = 0; j < fechaFinal; j++) {
//         stringOut += " " + calendario[contador].getDate() + " "
//         contador++
//     }
//     stringOut += "\n"
// }
//console.log(stringOut)

// let fechaFinal = 0
// let stringOut = ""
//
// for (let i = 0; i < mesesNum.length; i++) {
//     if (mesesNum[i] === 0) {
//         year++
//     }
//     fechaFinal = new Date(year, mesesNum[i] + 1, 1);
//     fechaFinal.setDate(fechaFinal.getDate() - 1)
//     fechaFinal = fechaFinal.getDate();
//     for (let j = 1; j < fechaFinal + 1; j++) {
//         fecha = new Date(2021, mesesNum[i], j)
//         calendario.push(fecha)
//     }
// }