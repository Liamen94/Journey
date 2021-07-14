<?php
    $host = "localhost";
    $user = "root";
    $password = "";
    $database = "board";
    $sqlDB =  new mysqli($host, $user, $password, $database);
    if (mysqli_connect_errno()) {
        die('Errore di connessione (' . $sqlDB->connect_errno . ') '
        . $sqlDB->connect_error);
    }
?>
    