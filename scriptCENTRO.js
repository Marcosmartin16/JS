//conectar codigo js con una etiqueta html con id = contenido
const contenido = document.getElementById("contenido");

//variables normalaes
let nombre = "Marcos";
let apellido = "Martin";
let edad = 17;
let array = [1,2,3,4,5,6,7,8,9];

//variable contante recomendable usar en mayusculas
const COLOR_ROJO = "#FF0000";
const COLOR_AZUL = "#6BC3FA";


//poner algo en algun sitio html con un id
contenido.innerHTML = "HOLLIWIS";
contenido.innerHTML += "<h1>"+edad+"</h1>";

//concatenar variables
let resultado = nombre + apellido;

//condicion de toda la vida mostrado en un alertBox el resultado
if(edad > 18){
    alert("entrar");
}else{
    alert("pa ksa");
}

//muestra por consola 5 i
/*for(let i = 0; i < 5; i++){
    console.log(i);
}*/

//lo mismo pero mostrado en html
/*for(let i = 0; i < 5; i++){
    contenido.innerHTML += "<h3>" + i + "</h3>";
}*/

//Funcion que permite crear nue vos contetns
function addContent(newContent){
    contenido.innerHTML += newContent;
    
    /* te muestra un mensaje por consola cada vez 
    que se genera un nuevo content*/
    console.log("new content gen")
}

//Content creado por la funcion addContent
addContent("hola");

/*forma de crear Contents desde js no html pero 
lo muestra en html of course es necesario el uso de la 
funcion addContent*/
addContent("<h2>" + nombre + "</h2>");

//mostrar solamente los numeros pares
for(let i = 0; i <= 10; i++){
    if(i%2 == 0){
        addContent("<h1 style=color:" + COLOR_ROJO + ">" + i + " es par </h1>");
    }else{
        addContent("<h1 style=color:" + COLOR_AZUL + ">" + i + "es impar </h1>");
    }
}

addContent("<h5>" + array + "</h5>");

//mostrarlo en un alertBox
//alert(resultado);