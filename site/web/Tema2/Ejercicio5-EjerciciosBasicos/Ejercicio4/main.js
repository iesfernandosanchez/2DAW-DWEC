 function cantidadVocales(frase) {
        let cant = 0;
        for (let f = 0; f < frase.length; f++) {
            if (frase.charAt(f) == 'a' ||
                frase.charAt(f) == 'e' ||
                frase.charAt(f) == 'i' ||
                frase.charAt(f) == 'o' ||
                frase.charAt(f) == 'u' ||
                frase.charAt(f) == 'A' ||
                frase.charAt(f) == 'E' ||
                frase.charAt(f) == 'I' ||
                frase.charAt(f) == 'O' ||
                frase.charAt(f) == 'U') {
                cant++;
            }
        }
        document.write('Cantidad de vocales:' + cant);
    }
