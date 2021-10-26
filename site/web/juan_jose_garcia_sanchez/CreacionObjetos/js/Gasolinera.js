class Gasolinera {
    gasolina
    dinero
    precioGasolina
    historico = []


    constructor(precioGasolina) {
        this.gasolina = 500;
        this.dinero = 0;
        this.precioGasolina = precioGasolina;
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

    get precioGasolina() {
        return this.precioGasolina;
    }

    set precioGasolina(value) {
        this.precioGasolina = value;
    }

    get historico() {
        return this.historico;
    }

    set historico(value) {
        this.historico = value;
    }
}