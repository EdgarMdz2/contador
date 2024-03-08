let btnMenos = document.getElementById('btnMenos');
let btnReset = document.getElementById('btnReset');
let btnMas = document.getElementById('btnMas');
let numero = document.getElementById('num');

btnMenos.onclick = resta;
btnMas.onclick = suma;
btnReset.onclick = reset;

function reset () {
    numero.textContent = 0; 
}

reset();

function resta () {
    const resta = parseInt(numero.textContent) - 1;
    numero.textContent = resta;
}

function suma () {
    const suma = parseInt(numero.textContent) + 1;
    numero.textContent = suma;
}