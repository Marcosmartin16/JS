let parametro;

function w3(){
    parametro = window.open("https://www.w3schools.com/");
    setTimeout(function(){
        parametro.close();
    },10000);
}

function cerrar(){
    parametro.close();
}