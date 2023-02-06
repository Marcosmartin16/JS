<?php
    $dbcon = new PDO('mysql:host=localhost;dbname=linkedin;charset=utf8mb4', "linkedin", "linkedin");
    if($_POST) {
      $nombre = $_POST['nombre'];

      //echo $nombre;
      //print_r($_POST);
      
      $stmt=$dbcon->prepare("SELECT nombre FROM usuarios WHERE nombre=:nombre");
      $stmt->execute(array(':nombre'=>$nombre));
      $count=$stmt->rowCount();
          
      if($count>0)
      {
        echo "EXISTE";
      }
      else
      {
        echo "NO EXISTE";
      }
    }  
?>