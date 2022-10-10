window.onload = () => {
    
}
function capturar(){
    let spinner = document.getElementById("spinner");

    let indice = document.spinner.selectedIndex;

    let valor = document.spinner.options[indice].value;

    if(valor == "Celsius"){
        let numero = document.getElementById("numero").value;
        let numero_final = (numero - 32) * 5/9;
        document.write(numero_final); 
    }else{
        let numero = document.getElementById("numero").value;
        let numero_final = (numero * 9/5) + 32;
        document.write(numero_final);
    }
}

