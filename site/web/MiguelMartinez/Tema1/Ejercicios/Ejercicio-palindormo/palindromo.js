function verificarPalindromo(palindromo) {
    var texto = palindromo; //hal lat
    texto = texto.replace(/ /g, ""); //hallat

    var textoletras = texto.split(""); //h a l l a t
    var textoinverso = textoletras.reverse(); //t a l l a h
    var inverso = textoinverso.join(""); //tallah

    console.log("texto original" + texto + " // texto inverso" + inverso)

    if(texto == inverso) {
        document.getElementById('palindromo').setAttribute('style','background: green')
        return "Es un palíndormo"
    } else {
        document.getElementById('palindromo').setAttribute('style','background: red')
        return "No es un palíndromo"
    }
}