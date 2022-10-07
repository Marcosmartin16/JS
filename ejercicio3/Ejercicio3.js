let edad1 = prompt("Edad primera persona");
let edad2 = prompt("Edad segunda persona");
let edad3 = prompt("Edad tercera persona");
let edad4 = prompt("Edad cuarta persona");

let array = [edad1,edad2,edad3,edad4];

/*fumadon de funcion para ordenar.
    entran los 2 primeros valores si a = 75 y b = 100 
    como resultado da -25 como es menor que 0 entiende
     que b es mayor y vuelve a empezar con el siguiente 
*/
let orden = array.sort(function(a, b){return a - b});

//parseo de string de los arrays que lo recoge el prompt lo paso a float
let suma = parseFloat(orden[0]) + parseFloat(orden[3]);
let multi = parseFloat(orden[1]) * parseFloat(orden[2]);


document.getElementById("suma").innerHTML = "La suma de: " + orden[0] + " + " + orden[3] + " = " + suma;
document.getElementById("multiplicacion").innerHTML = "La multiplicacion de: " + orden[1] + " * " + orden[2] + " = " + multi;

