<?php
    if(!session_id())
    {
        session_start();
    }
    if(!isset($_SESSION["name"])){
        header("Location: ../index.php");
        exit;
    }
?>