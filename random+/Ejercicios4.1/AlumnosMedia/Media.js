let alumnos = parseFloat(prompt("Introduce el numero de alumnos (menos de 20 y mas de 8)"));
let array = [];
let notas = [];
let nombres = [];
let total = 0;

function sumar(a){
    total += a;
}

for (let i = 0; i < alumnos; i++) {
    let nombre = prompt("introduce nombre del alumno");
    let nota = parseFloat(prompt("introduce la nota del alumno"));

    array.push(nombre, nota);
    notas.push(nota);
    nombres.push(nombre);
}

notas.forEach(sumar);

let media = total / alumnos;

document.getElementById("notas").innerHTML = array;

document.getElementById("media").innerHTML = "La media de las notas de los alumnos introducidas es de: " + media;




