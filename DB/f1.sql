-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema eventdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `eventdb` ;

-- -----------------------------------------------------
-- Schema eventdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eventdb` DEFAULT CHARACTER SET utf8 ;
USE `eventdb` ;

-- -----------------------------------------------------
-- Table `f1`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `f1` ;

CREATE TABLE IF NOT EXISTS `f1` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `year` VARCHAR(4) NULL,
  `grandprix` VARCHAR(45) NULL,
  `driver` VARCHAR(45) NULL,
  `team` VARCHAR(45) NULL,
  `laps` INT NULL,
  `starting_position` INT NULL,
  `time` VARCHAR(15) NULL,
  `points` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS eventuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'eventuser'@'localhost' IDENTIFIED BY 'eventuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'eventuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `f1`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventdb`;
INSERT INTO `f1` (`id`, `year`, `grandprix`, `driver`, `team`, `laps`, `starting_position`, `time`, `points`) VALUES (1, '2019', 'Australian Grand Prix', 'Valtteri Bottas', 'Mercedes', 58, 2, '1:25:27.325', '26');
INSERT INTO `f1` (`id`, `year`, `grandprix`, `driver`, `team`, `laps`, `starting_position`, `time`, `points`) VALUES (2, '2019', 'Bahrain Grand Prix', 'Lewis Hamilton', 'Mercedes', 57, 3, '1:34:21.295', '25');
INSERT INTO `f1` (`id`, `year`, `grandprix`, `driver`, `team`, `laps`, `starting_position`, `time`, `points`) VALUES (3, '2019', 'Chinese Grand Prix', 'Lewis Hamilton', 'Mercedes', 56, 2, '1:32:06.350', '25');
INSERT INTO `f1` (`id`, `year`, `grandprix`, `driver`, `team`, `laps`, `starting_position`, `time`, `points`) VALUES (4, '2019', 'Azerbaijan Grand Prix', 'Valtteri Bottas', 'Mercedes', 51, 1, '1:31:52.942', '25');
INSERT INTO `f1` (`id`, `year`, `grandprix`, `driver`, `team`, `laps`, `starting_position`, `time`, `points`) VALUES (5, '2019', 'Spanish Grand Prix', 'Lewis Hamilton', 'Mercedes', 66, 2, '1:35:50.443', '26');
INSERT INTO `f1` (`id`, `year`, `grandprix`, `driver`, `team`, `laps`, `starting_position`, `time`, `points`) VALUES (6, '2019', 'Monaco Grand Prix', 'Lewis Hamilton', 'Mercedes', 78, 1, '1:43:28.437', '25');
INSERT INTO `f1` (`id`, `year`, `grandprix`, `driver`, `team`, `laps`, `starting_position`, `time`, `points`) VALUES (7, '2019', 'Canadian Grand Prix', 'Lewis Hamilton', 'Mercedes', 70, 2, '1:29:07.084', '25');
INSERT INTO `f1` (`id`, `year`, `grandprix`, `driver`, `team`, `laps`, `starting_position`, `time`, `points`) VALUES (8, '2019', 'French Grand Prix', 'Lewis Hamilton', 'Mercedes', 53, 1, '1:24:31.198', '25');
INSERT INTO `f1` (`id`, `year`, `grandprix`, `driver`, `team`, `laps`, `starting_position`, `time`, `points`) VALUES (9, '2019', 'Austrian Grand Prix', 'Max Verstappen', 'Red Bull', 71, 2, '1:22:01.822', '26');

COMMIT;

