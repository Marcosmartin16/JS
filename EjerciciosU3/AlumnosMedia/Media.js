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

    notas.push(nota);
    nombres.push(nombre);
}

var body = document.getElementById("body");
var tabla = document.getElementById("tabla");
var tbody = document.getElementById("tbody");

for (var i = 0; i < 2; i++){
    var hilera = document.createElement("tr");

    for (var j = 0; j < 2; j++){
        var celda = document.createElement("td");
        var texto = document.createTextNode("celda " + i + " columna " + j);
        celda.appendChild(texto);
        hilera.appendChild(celda);
    }

    tbody.appendChild(hilera);
}

tabla.appendChild(tbody);
body.appendChild(tabla);
tabla.setAttribute("border","2");

notas.forEach(sumar);

let media = total / alumnos;

document.getElementById("media").innerHTML = "La media de las notas de los alumnos introducidas es de: " + media;




