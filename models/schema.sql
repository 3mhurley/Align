DROP DATABASE IF EXISTS align_db;
CREATE DATABASE align_db


CREATE TABLE `calendars`
(
  `id` int PRIMARY KEY,
  `owner` varchar(255),
  `created_at` varchar(255),
  `timeperiod` varchar(255),
  `startdate` varchar(255),
  `status` boolean
);

CREATE TABLE `users`
(
  `id` int PRIMARY KEY,
  `full_name` varchar(255),
  `created_at` varchar(255),
  `status` boolean
);

CREATE TABLE `schedule`
(
  `id` int PRIMARY KEY,
  `cal_id` int,
  `use_id` int,
  `monday` int,
  `tuesday` int,
  `wednesday` int,
  `thursday` int,
  `friday` int,
  `saturdaty` int,
  `sunday` int
);

ALTER TABLE `calendars` ADD FOREIGN KEY (`owner`) REFERENCES `users` (`id`);

ALTER TABLE `schedule` ADD FOREIGN KEY (`cal_id`) REFERENCES `calendars` (`id`);

ALTER TABLE `schedule` ADD FOREIGN KEY (`use_id`) REFERENCES `users` (`id`);