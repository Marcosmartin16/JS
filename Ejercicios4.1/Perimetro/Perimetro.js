let base = parseFloat(prompt("introduce la base del rectangulo"));
let altura = parseFloat(prompt("introduce la altura del rectangulo"));

function perimetroRectangulo(b, a){

    let perimetro = (b * 2) + (a * 2);
    
    return perimetro;
}


document.getElementById("perimetro").innerHTML = "El perimetro del rectangulo con base " + base + " y altura " + altura + " es " + perimetroRectangulo(base,altura);