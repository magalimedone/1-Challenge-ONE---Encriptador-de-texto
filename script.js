//Me creo todas las variables / El querySelector nos devuelve los elementos escritos en la casilla ( lo trae del html al JS).
//Le pongo el # porque estoy cambiando el texto del elemento con id="..."

const inputTexto = document.querySelector("#frase");
const inputFrase = document.querySelector("#frase2");
var botonEncriptar = document.querySelector("#encriptar");
var botonDesencriptar = document.querySelector("#desencriptar");
var botonCopiar = document.querySelector("#copy");


//Creo las funciones

function encriptar() {
    var frase = inputTexto.value;
    var fraseEncriptada = frase

        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    inputFrase.value = fraseEncriptada;
    inputTexto.value = ""; //vacio el casillero de la izquierda
    inputTexto.focus(); //hago que el cursor vuelva a ese casillero
}

function desencriptar() {
    var frase = inputTexto.value;
    var fraseDesencriptada = frase

        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    inputFrase.value = fraseDesencriptada;
    inputTexto.value = ""; //vacio el casillero de la izquierda
    inputTexto.focus(); //hago que el cursor vuelva a ese casillero
}

function copy() {
    var copiarTexto = document.getElementById("frase2");
    copiarTexto.select();
    document.execCommand("copy");
}

//Escribo las ordenes para los botones:

var frase = document.querySelector("frase");

botonEncriptar.addEventListener("click", function(event) {
    event.preventDefault();
    encriptar();
});

botonDesencriptar.addEventListener("click", function(event) {
    event.preventDefault();
    desencriptar();
});

botonCopiar.addEventListener("click", copy);