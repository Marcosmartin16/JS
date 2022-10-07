let btnSum = document.getElementById("btnSum");
let btnRes = document.getElementById("btnRes");
let btnMul = document.getElementById("btnMul");
let btnDiv = document.getElementById("btnDiv");
let btnIgu = document.getElementById("btnIgu");

let btn0 = document.getElementById("btn0");
let btn9 = document.getElementById("btn9");
let btn8 = document.getElementById("btn8");
let btn7 = document.getElementById("btn7");
let btn6 = document.getElementById("btn6");
let btn5 = document.getElementById("btn5");
let btn4 = document.getElementById("btn4");
let btn3 = document.getElementById("btn3");
let btn2 = document.getElementById("btn2");
let btn1 = document.getElementById("btn1");

let pantalla = document.getElementById("pantalla");

let operacion = " ";

function añadir (){
    
    switch(btnSum, btnRes, btnMul, btnDiv, btnIgu, btn0, btn9, btn8, btn7, btn6, btn5, btn4, btn3, btn2, btn1){
        case btnSum:
            if(operacion != " "){
                operacion += "+";
            }else{
                alert("introduce primero un numero");
            }
            break;
        case btnRes:
            if(operacion != " "){
                operacion += "-";
            }else{
                alert("introduce primero un numero");
            }
            break;
        case btnMul:
            if(operacion != " "){
                operacion += "*";
            }else{
                alert("introduce primero un numero");
            }
            break;
        case btnDiv:
            if(operacion != " "){
                operacion += "/";
            }else{
                alert("introduce primero un numero");
            }
            break;
        case btnIgu:
            if(operacion != " "){
                operacion += "=";
            }else{
                alert("introduce primero un numero");
            }
            break;
        case btn0:
            if(){

            }else{
                alert("introduce primero un numero");
            }
            break;
        case btn9:
            
            break;
        case btn8:
            console.log('suma');
            break;
        case btn7:
            console.log('suma');
            break;
        case btn6:
            console.log('suma');
            break;
        case btn5:
            console.log('suma');
            break;
        case btn4:
            console.log('suma');
            break;
        case btn3:
            console.log('suma');
            break;
        case btn2:
            console.log('suma');
            break;
        case btn1:
            console.log('suma');
            break;
    }
}



