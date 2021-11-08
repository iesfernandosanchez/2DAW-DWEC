class Coche {
    matricula
    gasolina
    capacidad
    dinero
    consumo
    historico = []

    constructor(matricula) {
        this.matricula = matricula;
        this.gasolina = 50;
        this.capacidad = 50;
        this.dinero = 100;
        this.consumo = 7;
    }


    get matricula() {
        return this.matricula;
    }

    set matricula(value) {
        this.matricula = value;
    }

    get gasolina() {
        return this.gasolina;
    }

    set gasolina(value) {
        this.gasolina = value;
    }

    get dinero() {
        return this.dinero;
    }

    set dinero(value) {
        this.dinero = value;
    }

    get consumo() {
        return this.consumo;
    }

    set consumo(value) {
        this.consumo = value;
    }


    get historico() {
        return this.historico;
    }

    set historico(value) {
        this.historico = value;
    }

    get capacidad() {
        return this.capacidad;
    }

    set capacidad(value) {
        this.capacidad = value;
    }
}