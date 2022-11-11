let abrir;

function abrirVentana(){
    abrir = prompt("Desea abrir una ventana nueva Y/N");
    //En pantalla completa no funciona
    if(abrir == "Y"){
        let ventana = window.open("https://www.youtube.com/?hl=ES","YOUTUBE","height=300, width=200");
        ventana.moveTo(500,500);
        
        ventana.scrollTo(0,0);
    }else{
        alert("No quiso abrir la ventana");
    }
}

function random(){
    let numero = Math.floor(Math.random()*3);
    
    if(numero == 0){
        window.open("https://www.google.com/intl/es/gmail/about/");
    }

    if(numero == 1){
        window.open("https://correoweb.educa.madrid.org/");
    }

    if(numero == 2){
        window.open("https://es.yahoo.com/");
    }

    if(numero == 3){
        window.open("https://outlook.live.com/owa/");
    }
}

function simple(){
    let ventana = window.open('','height=50%, width=100%, resizable=no','status=yes,menubar=yes');
    if(navigator.cookieEnabled == true){
        ventana.alert("Cookies activadas en el navegador");
    }
}