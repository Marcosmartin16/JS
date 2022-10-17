let alumnos = parseFloat(prompt("Introduce el numero de alumnos menos de 20 y mas de 8"));
let array = [];
let notas = [];
let nombre = [];

for (let i = 0; i < alumnos; i++) {
    let nombre = prompt("introduce nombre del alumno");
    let nota = prompt("introduce la nota del alumno");

    array.push(nombre, nota);
}

/*for (let j = 0; j < array.length; j++){

    if(i % 2 != 0){
        notas.push[array[j]];
    }else{
        nombre.push[array[j]];
    }
}*/

document.getElementById("media").innerHTML = array + array.length;




