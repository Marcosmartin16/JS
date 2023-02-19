<?php
    $dbcon = new PDO('mysql:host=localhost;dbname=mysite;charset=utf8mb4', "mysite", "1234");
    if($_POST) {
      $dni = $_POST['dni'];
      
      $resultado = $dbcon->prepare('DELETE FROM usuarios WHERE dni = :dni');
  
      $resultado->bindValue(':dni', $dni);

      $resultado->execute();

      $resultado = null;
      $mdb = null;

      $respuesta = "USUARIO BORRADO CORRECTAMENTE";
          
      echo json_encode($respuesta);
    }  
?>