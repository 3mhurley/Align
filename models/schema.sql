DROP DATABASE IF EXISTS align_db;
CREATE DATABASE align_db

USE align_db;
CREATE TABLE `calendar`
(
  `id` int PRIMARY KEY
);

CREATE TABLE `schedule`
(
  `id` int PRIMARY KEY,
  `cal_id` int,
  `username` int,
  `start` int,
  `end` int
);


ALTER TABLE `schedule` ADD FOREIGN KEY (`cal_id`) REFERENCES `calendars` (`id`);

