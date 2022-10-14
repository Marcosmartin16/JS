let numero1 = prompt("Introduce primer numero");
let numero2 = prompt("Introduce segundo numero");
let numero3 = prompt("Introduce tercero numero");

let array = [numero1, numero2, numero3];

let array_ordenado = array.sort(function(a,b){return b - a});

document.getElementById("ordenado").innerHTML = array_ordenado;
