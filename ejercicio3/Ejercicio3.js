let edad1 = prompt("Edad primera persona");
let edad2 = prompt("Edad segunda persona");
let edad3 = prompt("Edad tercera persona");
let edad4 = prompt("Edad cuarta persona");

let array = [edad1,edad2,edad3,edad4];

let orden = array.sort(function(a, b){return a - b});

let suma = parseFloat(orden[0]) + parseFloat(orden[3]);
let multi = parseFloat(orden[1]) * parseFloat(orden[2]);

document.getElementById("suma").innerHTML = "La suma de: " + orden[0] + " + " + orden[3] + " = " + suma;
document.getElementById("multiplicacion").innerHTML = "La multiplicacion de: " + orden[1] + " * " + orden[2] + " = " + multi;

