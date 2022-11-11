class Mascotas{
    
    constructor(nombre, cantidad){
        this.nombre = nombre;
        this.cantidad = cantidad;
    }

    imprimir(){
        return this.nombre + " puede comer " + this.cantidad + " al dia";
    }
}
class MascotasComidas extends Mascotas{

    constructor(nombre, cantidad){
        super(nombre, cantidad);
        this.bolsa = 3000;
    }

    mascotasDias(){
        let dias = this.bolsa/this.cantidad;
        return this.nombre + " puede comer " + dias + " dias";
    }
}

const mascota1 = new MascotasComidas('Juan',750);
document.getElementById("info").innerHTML = mascota1.imprimir();
document.getElementById("dias").innerHTML = mascota1.mascotasDias();

const mascota2 = new MascotasComidas('Antonio',1100);
document.getElementById("info2").innerHTML = mascota2.imprimir();
document.getElementById("dias2").innerHTML = mascota2.mascotasDias();

const mascota3 = new MascotasComidas('Periquito',500);
document.getElementById("info3").innerHTML = mascota3.imprimir();
document.getElementById("dias3").innerHTML = mascota3.mascotasDias();