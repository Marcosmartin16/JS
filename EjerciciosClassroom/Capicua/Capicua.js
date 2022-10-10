let numero = prompt("Introduce un numero entre el 0 y 9999");

function reverseNumber(numero){

    var str = numero.toString();

    var dividir = str.split("");

    var rever = dividir.reverse();

    var unir = rever.join("");

    return (unir);
}

if(numero == reverseNumber(numero)){
    document.getElementById("respuesta").innerHTML = "El numero " + numero + " es capicua";
}else{
    document.getElementById("respuesta").innerHTML = "El numero " + numero + " no es capicua";
}