let numero = prompt("Introduce un numero entre 0 y 9999");

function reverseNumber(str) {

    var convert = str.toString();
    
    var dividirStr = convert.split("");

    var girarArray = dividirStr.reverse();
   
    var unirArray = girarArray.join("");

    return unirArray;
}

document.getElementById("respuesta").innerHTML = "El numero " + numero + " dado la vuelta es " + reverseNumber(numero);
