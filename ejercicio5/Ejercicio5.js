let unidades = prompt("introduce el numero de unidades que quieres comprar");
let precio = prompt("introduce el precio del producto que quieres comprar");

let total = parseFloat(unidades) * parseFloat(precio);

document.getElementById("total").innerHTML = "El total por comprar " + unidades + " unidades por " + precio + " es de " + total; 

