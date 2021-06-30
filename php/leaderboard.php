<!DOCTYPE html>
<html lang="it">
<head>
    <title>Classifica</title>
    <link rel="stylesheet" href="../css/general.css">
    <link rel="stylesheet" href="../css/leaderboard.css">
    <link rel="icon" href="../pictures/fav.png">
</head>
<body>
    <div id="main">
    <nav>
        <form action="../index.html">
            <input id="back" type="submit" value="">
        </form>       
    </nav>
        <h1>Classifica</h1>
        <div id="board">
            <table>
                <thead>
                    <tr>
                        <th>GIOCATORE</th>
                        <th>PUNTEGGIO</th>
                    </tr>
                </thead>
                <tbody>
        <?php
            include("mysql.php");
            $query = "CREATE TABLE  `board`.`leaderboard` (
                `id` INT NOT NULL AUTO_INCREMENT ,
                 `player` varchar(10) NOT NULL DEFAULT 'AAA', 
                 `score` INT UNSIGNED NOT NULL,
                 PRIMARY KEY (`id`)
               ) ENGINE=InnoDB DEFAULT CHARSET=latin1;";
            $result = $sqlDB->query($query);
            $query = "SELECT player, score FROM leaderboard ORDER BY score DESC LIMIT 10";
            $result = $sqlDB->query($query);
            checkResult($result, $query);
			showResult($result);
            function checkResult($result, $query)
                {if (!$result) {
                $message = 'Invalid query: ' . $mysqli->error . "\n";
                $message .= 'Whole query: ' . $query;
                die($message);
            }
}
            function showResult($result){ 
                while ($row = $result->fetch_assoc()) {
                    echo "<tr>\n";
                    echo "<td>" . $row['player'] . "</td>\n";
                    echo "<td>" . $row['score'] . "</td>\n";
                    echo "</tr>\n";
                }
            };?>
                </tbody>	
            </table>
        </div>
    </div>
</body>