document.addEventListener("mousemove",function(e){
     let caja = document.getElementById("caja");
         caja.style.top=e.clientY-50+"px";
         caja.style.left=e.clientX-50+"px";
 })
