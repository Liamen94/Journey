<!DOCTYPE html>
<html lang="it">
<head>
    <title>Journey of the Praire King</title>
    <link rel="stylesheet" href="../css/general.css">
    <link rel="stylesheet" href="../css/menu.css">
    <link rel="icon" href="../pictures/fav.png">
</head>
<body>
    <?php 
        include("session_check.php");
    ?>
    <div id="main">
            <nav><?php include("logout_button.php");?></nav>
            <img src="../pictures/ui/title.png" alt="Journey of the Praire King" id="title">
            <ul id="main_menu">
                <li><a href="../php/game.php">Gioca</a></li>
                <li><a href="../php/guide.php">Istruzioni</a></li>
                <li><a href="../php/leaderboard.php">Classifica</a></li>
            </ul>
    </div>
</body>
</html>
