<!DOCTYPE html>
<html lang="it">
<head>
    <title>Journey of the Praire King</title>
    <link rel="stylesheet" href="../css/general.css">
    <link rel="stylesheet" href="../css/game.css">
    <link rel="icon" href="../pictures/fav.png">
</head>
<body>
    <?php 
        include("session_check.php");
    ?>
    <div id="main">
        <nav>
            <?php
                include("home_button.php");
                include("logout_button.php");
            ?>
        </nav>
        <div id="game">
            <div id="dialog">Premi i tasti direzionali!</div>
            <div id="hud">
                <div id="lives">
                    <img src="../pictures/pickups/life.png" alt="Vite">
                    <p class="ui">x<span id="count">0</span></p>
                </div>
                <div id="active">
                    <img src="../pictures/ui/blank.png" alt="oggetto attivo" id="item">
                </div>
                <div id="score">
                    <p class="ui">000000</p>
                </div>
            </div>
            <div id="stage">
                <div id="blinker"><div id="player"></div></div>
                <div id="prompt">
                    <p id="prompt_text"> Registrare il punteggio?</p>
                    <form class="board_form" action="javascript:;" onsubmit="ajax_request()" >
                        <input class ="user_input" type="submit" value="Si">
                    </form>
                    <form class="board_form" action="menu.php">
                        <input class ="user_input" type="submit" value="No">
                    </form>
                </div>
            </div>
        </div>
    </div>
    <script src="../javascript/ui.js"></script>
    <script src="../javascript/controller.js"></script>
    <script src="../javascript/player.js"></script>
    <script src="../javascript/monster.js"></script>
    <script src="../javascript/pickup.js"></script>
    <script src="../javascript/bullet.js"></script>
    <script src="../javascript/game.js"></script>
    <script src="../javascript/ajax.js"></script>
</body>
</html>