function calcularbisiesto(año) {
    var calcularaño = parseInt(año) 

    if (calcularaño%4 == 0 && calcularaño%100 != 0) {
        return "El año es bisiesto";
    }
    if (calcularaño%100 == 0) {
        if (calcularaño%400 == 0) {
            return "El año es bisiesto";
        } else {
            return "El año no es bisiesto"
        }
    }
}
