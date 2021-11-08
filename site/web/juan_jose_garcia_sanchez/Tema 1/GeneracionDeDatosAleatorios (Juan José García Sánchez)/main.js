function randomNumbers() {
    let ramdonNumbers = []
    let intentos = document.getElementById('numeroIntentos').value
    let numeroMax = document.getElementById('numeroMax').value


    for (let i = 0; i < intentos; i++) {
        ramdonNumbers.push(Math.floor(Math.random() * (numeroMax)))
    }
    console.log(ramdonNumbers)
    let n = 0

    ramdonNumbers.sort(function (a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    })

    console.log(ramdonNumbers)
    let resultado = ""

    while (n !== ramdonNumbers.length) {
        let vecesRepetido = 0

        for (let i = 0; i < ramdonNumbers.lastIndexOf(ramdonNumbers[n]) + 1 - n; i++) {
            vecesRepetido++
        }

        resultado += 'El numero: ' + ramdonNumbers[n] + ' se ha repetido: ' + vecesRepetido + ' veces\n'

        n = ramdonNumbers.lastIndexOf(ramdonNumbers[n]) + 1
    }
    console.log(resultado)
}