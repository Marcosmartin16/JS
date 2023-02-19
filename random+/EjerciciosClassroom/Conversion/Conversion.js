let factor = ""

 while(factor != "salir"){
    factor = prompt("C para Celsisus o F para Fahrenheit. Escriba salir para parar");
    let numeros = [];
    let conversor = [];

    if(factor.ignoreCase != "salir"){
        for(let i = 1; i <= 10; i++){
            let numero = prompt("introduce el numero " + i);
            numeros.push(numero);
        }
    
        if(factor == "C"){
            document.getElementById("respuesta1").innerHTML = "valores de entrada en " + factor + " " + numeros;
            for(let i = 1; i<= 10; i++){
                factor = "F";
                let numero_final = (numeros[i-1] - 32) * 5/9;
                conversor.push(numero_final);
            }
            document.getElementById("respuesta2").innerHTML = "valores de salida en " + factor + " " + conversor;
        }else{
            document.getElementById("respuesta1").innerHTML = "valores de entrada en " + factor + " " + numeros;
            for(let i = 1; i<= 10; i++){
                factor = "C";
                let numero_final = (numero * 9/5) + 32;
                conversor.push(numero_final);
            }
            document.getElementById("respuesta2").innerHTML = "valores de salida en " + factor + " " + conversor;
        }
    }else{
        document.getElementById("respuesta1").innerHTML = "Usted eligio salir";
    }
 }


    


