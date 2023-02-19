let cadena1 = prompt("introduzca la cadena a comparar");
let cadena2 = prompt("introduzca la cadena a comparar");

let cadenas = [cadena1,cadena2];

function comprobar(arrayCadenas){
    if(arrayCadenas[1].includes(arrayCadenas[0])){
        document.getElementById("comprobar").innerHTML = "true";
    }else{
        document.getElementById("comprobar").innerHTML = "false";
    }
}

comprobar(cadenas);