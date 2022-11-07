let infoS = [];
let infoC = [];
let infoH = [];

let sueldosS = [];
let sueldosC = [];
let sueldosH = [];

function inflarSucursal(sucursal, sueldos, nombreS){
    
    for (let i = 1; i <= 100; i++) {
        let nombre = prompt("nombre empleado de la sucursal de " + nombreS);
        if(nombre != "0"){
            let salario = parseFloat(prompt("salario empleado de " + nombreS));

            sucursal.push(nombre,salario);
            sueldos.push(salario);
        }else{
            return alert("sucursal de " + nombreS + " terminada");
        }
    }
}

function medias(sucursal){
    let total = sucursal.reduce((a, b) => a + b, 0);
    return total/sucursal.length;
}

inflarSucursal(infoS, sueldosS, "Sevilla");
inflarSucursal(infoC, sueldosC, "Cadiz");
inflarSucursal(infoH, sueldosH, "Huelva");

document.getElementById("nS").innerHTML = infoS.length/2;
document.getElementById("nC").innerHTML = infoC.length/2;
document.getElementById("nH").innerHTML = infoH.length/2;

document.getElementById("mS").innerHTML = medias(sueldosS);
document.getElementById("mC").innerHTML = medias(sueldosC);
document.getElementById("mH").innerHTML = medias(sueldosH);

document.getElementById("sH").innerHTML = sueldosH.sort(function(a,b){return a - b}) + " Sueldos en Huelva";
document.getElementById("sS").innerHTML = sueldosS.sort(function(a,b){return b - a}) + " sueldos en Sevilla";
document.getElementById("sC").innerHTML = sueldosC.sort(function(a,b){return b - a}) + " sueldos en Cadiz";

let sueldos = sueldosS.concat(sueldosC);
sueldos = sueldos.concat(sueldosH);

document.getElementById("sMa").innerHTML = sueldos.sort(function(a,b){return a - b}).pop();
document.getElementById("sMe").innerHTML = sueldos.sort(function(a,b){return b - a}).pop();
