let palabras = ["ALURA","ONE","ORACLE","HTML","JAVASCRIPT"];
let tablero = document.getElementById("forca").getContext("2D");
let palabraSecreta = "";

/* Iniciar Juego */
function iniciarJuego() {
    document.getElementById("iniciar-juego").style.display = "none";
    escogerPalabraSecreta()
    dibujarCanvas()
    dibujarLinea()
}

function escogerPalabraSecreta() {
    let palabra = palabras[Math.floor(Math.random()*palabras.length)]
    palabraSecreta = palabra 
    console.log(palabraSecreta)
}
