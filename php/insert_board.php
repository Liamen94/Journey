<?php
    include("mysql.php");
    if(isset($_GET['name'])){
	    $name= $_GET['name'];
    }
    if(isset($_GET['score'])){
	    $score= $_GET['score'];
    }
    $query = "CREATE TABLE IF NOT EXISTS `board`.`leaderboard` (
        `id` INT NOT NULL AUTO_INCREMENT ,
         `player` varchar(10) NOT NULL DEFAULT 'AAA', 
         `score` INT UNSIGNED NOT NULL,
         PRIMARY KEY (`id`)
       ) ENGINE=InnoDB DEFAULT CHARSET=latin1;";
    $result = $sqlDB->query($query);
	if(!$result){
	    echo "errore nella creazione della tabella";
    }
	$query="INSERT INTO `leaderboard` (`player`, `score`) VALUES ('{$name}','{$score}');";
    $result = $sqlDB->query($query);
    print_r($result); 
	if(!$result) {
	    echo "errore nell\' inserimento causa: ".mysql_error();
	}
?>