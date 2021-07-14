<!DOCTYPE html>
<html lang="it">
<head>
    <title>Manuale</title>
    <link rel="stylesheet" href="../css/guide.css">
    <link rel="stylesheet" href="../css/general.css">
    <link rel="icon" href="../pictures/fav.png">
</head>
<body>
    <?php 
        include("session_check.php");
    ?>
    <div id="main">
        <nav>
            <?php include("home_button.php"); ?>
            <form id="guide_page" action="guide.php">
                <input id="prev" class="navbutton" type="submit" value="">
            </form>
            <?php include("logout_button.php"); ?>
        </nav>
        <h1>Istruzioni <em>1</em>/2</h1>
        <section id="manual">
            <h2>Obiettivi</h2>
            <div class="info"  id="goals">
                <p>Cowboy! Sopravvivi il pi&uacute; a lungo possibile nella prateria!<br>Difenditi dai mostri con la tua pistola e sfrutta i potenziamenti che ti lasceranno!</p>
            </div>
            <h2>Mostri</h2>
            <div id="enemies">
                <section>
                    <h3>GOBLIN</h3>
                    <p class="life"> 1 HP</p>
                    <div id="goblin"></div>
                    <p class="points">3 PUNTI</p>
                </section>
                <section>
                    <h3>MUMMIA</h3>
                    <p class="life"> 2 HP</p>
                    <div id="mummy"></div>
                    <p class="points">7 PUNTI</p>
                </section>
                <section>
                    <h3>DRAGONE</h3>
                    <p class="life"> 3 HP</p>
                    <div id="dragon"></div>
                    <p class="points">15 PUNTI</p>
                </section>
            </div>
        </section>
    </div>
</body>
</html>