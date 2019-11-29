CREATE DATABASE IF NOT EXISTS `webapp`;
USE `webapp`;

DROP TABLE IF EXISTS `record`;
CREATE TABLE `record`(
    `s_no` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(128) NOT NULL,
    `math` char(4) DEFAULT NULL,
    `physics` char(4) DEFAULT NULL,
    `chem` char(4) DEFAULT NULL,
    PRIMARY KEY (`s_no`),
    UNIQUE KEY `s_no_UNIQUE` (`s_no`)
);

INSERT INTO record (name, math, physics, chem)
VALUES ("John Doe", "B", "A", "F"), ("Cam Smith", "C", "C", "B"), ("Jane Se", "C", "F", "A"), ("Tam Tom", "A", "C", "A"), ("Fran May", "A", "B", "D"), ("Sofia Ab", "A", "C", "A"), ("Mark Lowen", "B", "D", "A");

