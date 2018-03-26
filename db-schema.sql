SET NAMES utf8;
SET time_zone = '-05:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `sensor_data`;
CREATE TABLE `sensor_data` (
  `record_id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `device` varchar(255) NOT NULL,
  `sensor` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL,
  PRIMARY KEY (`record_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `sensor_data` (`record_id`, `date`, `device`, `sensor`, `value`) VALUES
(1,	'2018-03-25 19:21:49',	'test',	'temp',	'98.5'),
(2,	'2018-03-25 19:30:38',	'test',	'light',	'3386'),
(3,	'2018-03-26 01:50:26',	'one',	'temp',	'98.8'),
(4,	'2018-03-26 01:58:00',	'one',	'temp',	'98.8');

-- 2018-03-26 02:46:30
