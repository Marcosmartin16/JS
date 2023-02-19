<?php
    $dbcon = new PDO('mysql:host=localhost;dbname=mysite;charset=utf8mb4', "mysite", "1234");
    if($_POST) {
      $nombre = $_POST['nombre'];
      $apellido = $_POST['apellido'];
      $dni = $_POST['dni'];
      $estudios = $_POST['estudios'];
      
      $resultado = $dbcon->prepare('INSERT INTO usuarios(nombre,apellido,dni,estudios) VALUES (:nombre,:apellido,:dni,:estudios)');
  
      $resultado->bindValue(':nombre',$nombre);
      $resultado->bindValue(':apellido', $apellido);
      $resultado->bindValue(':dni', $dni);
      $resultado->bindValue(':estudios', $estudios);

      $resultado->execute();

      $resultado = null;
      $mdb = null;

      $respuesta = "USUARIO REGISTRADO CORRECTAMENTE";
          
      echo json_encode($respuesta);
    }  
?>