let lado1 = prompt("introduce la medida del lado");

let perimetro = parseFloat(lado1) * 4;

document.getElementById("perimetro").innerHTML = "El perimetro del cuadrado con lado " + lado1 + " es " + perimetro;