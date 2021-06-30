DROP DATABASE if exists board;
CREATE DATABASE board;
USE board;

CREATE TABLE  `board`.`leaderboard` (
 `id` INT NOT NULL AUTO_INCREMENT ,
  `player` varchar(10) NOT NULL DEFAULT 'AAA', 
  `score` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `board`.`leaderboard` (`player`, `score`) VALUES ('DEV', '1000');
INSERT INTO `board`.`leaderboard` (`player`, `score`) VALUES ('ELO', '750');
INSERT INTO `board`.`leaderboard` (`player`, `score`) VALUES ('PER', '500');
