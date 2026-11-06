// ============================================================
// EJERCICIO 2 - SUMAR 3 VALORES E IMPRIME EL RESULTADO
// Leer 3 valores, sumarlos y mostrar el resultado.
// ============================================================

// Buscamos en HTML los 3 inputs y la caja del resultado (por su id).
const inputPrimero = document.getElementById("primerValor");
const inputSegundo = document.getElementById("segundoValor");
const inputTercero = document.getElementById("tercerValor");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    // Si falta algun valor no se calcula
    if (inputPrimero.value === "" || inputSegundo.value === "" || inputTercero.value === "" ){
        cajaResultado.textContent = "Escribe los 3 valores";
        return;
    }

    // Lo que se escribe en un input es texto: Number() lo convierte en numero.
    const primerValor = Number(inputPrimero.value);
    const segundoValor = Number(inputSegundo.value);
    const tercerValor = Number(inputTercero.value);

    // Sumar los 3 valores.
    const sumaValores = primerValor + segundoValor + tercerValor;

    // Mostrar los resultados en la pagina.
    cajaResultado.innerHTML =
    "Suma de los 3 valores: <b>" + sumaValores + "</b><br>" 
}
// Cada vez que se escribe en cualquiera de los inputs, se vuelve a calcular
inputPrimero.addEventListener("input", calcular);
inputSegundo.addEventListener("input", calcular);
inputTercero.addEventListener("input", calcular);