-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 25, 2020 at 02:10 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_quiz`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `question_id` varchar(50) CHARACTER SET latin1 NOT NULL,
  `choice_id` varchar(50) CHARACTER SET latin1 NOT NULL,
  `group_id` int(11) NOT NULL,
  `time_answered` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `user_id`, `question_id`, `choice_id`, `group_id`, `time_answered`) VALUES
(230, 12, '16', '1234', 1, '2020-09-24 13:10:04'),
(231, 24, '1', '3214', 2, '2020-09-24 15:09:32'),
(232, 24, '2', '3241', 2, '2020-09-24 15:10:12'),
(233, 24, '3', '4312', 2, '2020-09-24 15:10:17'),
(234, 24, '4', '3421', 2, '2020-09-24 15:10:26'),
(235, 24, '5', '3412', 2, '2020-09-24 15:10:32'),
(236, 24, '6', '1432', 2, '2020-09-24 15:10:37'),
(237, 24, '7', '4312', 2, '2020-09-24 15:10:43'),
(238, 24, '8', '3412', 2, '2020-09-24 15:10:49'),
(239, 24, '9', '4231', 2, '2020-09-24 15:10:55'),
(240, 24, '10', '1342', 2, '2020-09-24 15:11:07'),
(281, 25, '1', '3214', 1, '2020-09-25 01:47:04'),
(282, 25, '2', '3412', 1, '2020-09-25 01:47:17'),
(283, 25, '3', '3421', 1, '2020-09-25 01:47:45'),
(284, 25, '4', '3421', 1, '2020-09-25 01:48:21'),
(285, 25, '5', '3412', 1, '2020-09-25 01:48:37'),
(286, 25, '6', '4231', 1, '2020-09-25 01:48:56'),
(287, 25, '7', '4312', 1, '2020-09-25 01:49:14'),
(288, 25, '8', '3421', 1, '2020-09-25 01:49:46'),
(289, 25, '9', '4312', 1, '2020-09-25 01:50:35'),
(290, 25, '10', '4321', 1, '2020-09-25 01:50:49'),
(291, 23, '1', '3142', 1, '2020-09-25 01:51:48'),
(292, 23, '2', '3412', 1, '2020-09-25 01:51:54'),
(293, 23, '3', '3412', 1, '2020-09-25 01:52:02'),
(294, 23, '4', '3412', 1, '2020-09-25 01:52:16'),
(295, 23, '5', '3412', 1, '2020-09-25 01:52:27'),
(296, 23, '6', '4312', 1, '2020-09-25 01:52:45'),
(297, 23, '7', '4312', 1, '2020-09-25 01:52:56'),
(298, 23, '8', '3241', 1, '2020-09-25 01:53:30'),
(299, 23, '9', '4321', 1, '2020-09-25 01:53:36'),
(300, 23, '10', '3412', 1, '2020-09-25 01:53:49');

-- --------------------------------------------------------

--
-- Table structure for table `customers_auth`
--

CREATE TABLE `customers_auth` (
  `uid` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `address` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers_auth`
--

INSERT INTO `customers_auth` (`uid`, `name`, `email`, `phone`, `password`, `address`, `city`, `created`) VALUES
(169, 'Swadesh Behera', 'swadesh@gmail.com', '1234567890', '$2a$10$251b3c3d020155f7553c1ugKfEH04BD6nbCbo78AIDVOqS3GVYQ46', '4092 Furth Circle', 'Singapore', '2014-08-31 10:21:20'),
(170, 'Ipsita Sahoo', 'ipsita@gmail.com', '1111111111', '$2a$10$d84ffcf46967db4e1718buENHT7GVpcC7FfbSqCLUJDkKPg4RcgV2', '2, rue du Commerce', 'NYC', '2014-08-31 10:30:58'),
(171, 'Trisha Tamanna Priyadarsini', 'trisha@gmail.com', '2222222222', '$2a$10$c9b32f5baa3315554bffcuWfjiXNhO1Rn4hVxMXyJHJaesNHL9U/O', 'C/ Moralzarzal, 86', 'Burlingame', '2014-08-31 10:32:03'),
(172, 'Sai Rimsha', 'rimsha@gmail.com', '3333333333', '$2a$10$477f7567571278c17ebdees5xCunwKISQaG8zkKhvfE5dYem5sTey', '897 Long Airport Avenue', 'Madrid', '2014-08-31 12:34:21'),
(173, 'Satwik Mohanty', 'satwik@gmail.com', '4444444444', '$2a$10$2b957be577db7727fed13O2QmHMd9LoEUjioYe.zkXP5lqBumI6Dy', 'Lyonerstr. 34', 'San Francisco\n', '2014-08-31 12:36:02'),
(174, 'Tapaswini Sahoo', 'linky@gmail.com', '5555555555', '$2a$10$b2f3694f56fdb5b5c9ebeulMJTSx2Iv6ayQR0GUAcDsn0Jdn4c1we', 'ul. Filtrowa 68', 'Warszawa', '2014-08-31 12:44:54'),
(175, 'Manas Ranjan Subudhi', 'manas@gmail.com', '6666666666', '$2a$10$03ab40438bbddb67d4f13Odrzs6Rwr92xKEYDbOO7IXO8YvBaOmlq', '5677 Strong St.', 'Stavern\n', '2014-08-31 12:45:08'),
(178, 'AngularCode Administrator', 'admin@angularcode.com', '0000000000', '$2a$10$72442f3d7ad44bcf1432cuAAZAURj9dtXhEMBQXMn9C8SpnZjmK1S', 'C/1052, Bangalore', '', '2014-08-31 13:00:26');

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `group_id` int(11) NOT NULL,
  `group_name` varchar(200) NOT NULL,
  `is_active` int(11) NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`group_id`, `group_name`, `is_active`, `created`) VALUES
(1, 'Team A', 1, '2020-09-23 22:42:54'),
(2, 'Team B', 1, '2020-09-23 22:42:54');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `question_id` int(11) NOT NULL,
  `question` varchar(200) CHARACTER SET latin1 NOT NULL,
  `type` varchar(50) NOT NULL DEFAULT 'multiple',
  `is_active` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`question_id`, `question`, `type`, `is_active`) VALUES
(1, 'Decisive\",\"Orderly\",\"Considerate\",\"Spontaneous', 'multiple', 1),
(2, 'Results\",\"Systems\",\"Support\",\"Inspiration', 'multiple', 1),
(3, 'Destination\",\"Schedule\",\"Journey\",\"Dream', 'multiple', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_customer`
--

CREATE TABLE `tbl_customer` (
  `CustomerID` int(11) NOT NULL,
  `CustomerName` varchar(250) NOT NULL,
  `Address` text NOT NULL,
  `City` varchar(250) NOT NULL,
  `PostalCode` varchar(30) NOT NULL,
  `Country` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_customer`
--

INSERT INTO `tbl_customer` (`CustomerID`, `CustomerName`, `Address`, `City`, `PostalCode`, `Country`) VALUES
(1, 'Willie Whited', '2524 White River Way', 'Salt Lake City', '84106', 'USA'),
(2, 'Lisa Squires', 'Fehringer Strasse 27', 'MARIA BUCH', '8750', 'Austria'),
(3, 'Sean Patterson', 'Rue des Ecoles 426', 'Vlierzele', '9520', 'Belgium'),
(4, 'Anna Scott', 'Rua C 66, 1384', 'Goiania-GO', '74305-450', 'Brazil'),
(5, 'Desmond Peterson', '1414 Grey Rd', 'Feversham', 'ON N0C 1C0', 'Canada'),
(6, 'Samuel Hogan', '13, Avenue De Marlioz', 'ARGENTEUIL', '95100', 'France'),
(7, 'John Miller', 'Pappelallee 21', 'Arnsdorf', '09661', 'Germany'),
(8, 'Rose Joyce', 'Via Galileo Ferraris, 38', 'Malavicina MN', '46040', 'Italy'),
(9, 'Phillip Tilton', 'Huibertplaat 120', 'DH  Zwolle', '8032', 'Netherland'),
(10, 'Anita McGurk', '128 St Pauls Court Cloverlea', 'Palmerston North', '4412', 'New Zealand'),
(11, 'John Morgan', '286 Stanza Bopape St', 'Louis Trichardt', '0923', 'South Africa'),
(12, 'Margaret Teets', 'Grossmatt 62', 'Betschwanden', '8777', 'Switzerland'),
(13, 'Dara Adams', '21 Fraserburgh Rd', 'LINNELS', 'NE46 8YB', 'United Kingdom'),
(14, 'Bennie J. Martin', '34 Masthead Drive', 'PARK AVENUE QLD', '4701', 'Australia'),
(15, 'Gladys Ashford', 'Holzstrasse 14', 'SALCHENDORF', '9064', 'Austria'),
(16, 'William Lavallie', 'Heirstraat 31', 'Marchin', '4570', 'Belgium'),
(17, 'Antonio Wayman', '2331 Carlson Road', 'Prince George', 'BC V2L 5E5', 'Canada'),
(18, 'Carol Selders', 'Ysitie 44', 'TAMPERE', '33240', 'Finland'),
(19, 'David Sato', '30, Rue de la Pompe', 'MANOSQUE', '04100', 'France'),
(20, 'Amy Vanmatre', 'Friedrichstrasse 4', 'Dusseldorf Flehe', '40223', 'Germany'),
(21, 'Kenny Todd', 'Corso Porta Nuova, 10', 'Quara RE', '42010', 'Italy'),
(22, 'Marla Alvarez', 'Tielstraat 17', 'Amsterdam-Zuidoost', '1107 RC', 'Netherland'),
(23, 'George Stanley', '95 Belle Verde Drive Rothesay Bay', 'North Shore', '0630', 'New Zealand'),
(24, 'David Bennett', 'Torvbakkgata 219', 'OSLO', '0550', 'Norway'),
(25, 'Donald Garrett', '86 St Denys Road', 'POYS STREET', 'IP17 9TF', 'United Kingdom'),
(26, 'Horace Morgan', '3435 Jarvis Street', 'Buffalo', '14202', 'United States');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_name` varchar(200) NOT NULL,
  `user_password` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `first_name` varchar(200) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `group_id` int(11) NOT NULL,
  `date_joined` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `is_active` int(11) NOT NULL DEFAULT 1,
  `acl` int(11) NOT NULL DEFAULT 2
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_name`, `user_password`, `email`, `first_name`, `last_name`, `group_id`, `date_joined`, `is_active`, `acl`) VALUES
(18, '', '', '', 'Mark', 'John', 0, '2020-09-13 01:12:33', 1, 2),
(22, '', '', '', 'John', 'Doe', 0, '2020-09-13 01:12:33', 1, 2),
(23, 'joroni', '', 'jraymund.niconi@gmail.com', 'John', 'Doe', 1, '2020-09-13 01:12:33', 1, 1),
(24, 'janedoe', '', 'jane@gmailme.com', 'Jane', 'Doe', 2, '2020-09-13 01:12:33', 1, 2),
(25, 'susan', '', 'susan@gmailme.com', 'Susan', 'Chu', 1, '2020-09-13 01:12:33', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `user_data`
--

CREATE TABLE `user_data` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `first_name` varchar(200) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `user_phone` varchar(15) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_address` varchar(255) NOT NULL,
  `user_acl` int(11) NOT NULL DEFAULT 2,
  `created` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_data`
--

INSERT INTO `user_data` (`user_id`, `user_name`, `user_email`, `first_name`, `last_name`, `user_phone`, `user_password`, `user_address`, `user_acl`, `created`) VALUES
(1, 'Mohan', 'mohan@gmail.com', '', '', '1234567890', '$2a$10$06bc80287803a04453653uzK14oX.p9YNy6VrJb7DTjczdo6S73nC', 'zzz, xxxx', 2, '2017-04-24 18:43:36'),
(23, 'joroni', 'jraymund.niconi@gmail.com', 'John Raymund', 'Niconi', '09954731232', '$2a$10$139ba8c62e3a80047f931u4Ns0.f2ihXLFBdJzOLaHKMp4oO4/VD2', '9378 Calantas Street, San Antonio Village', 1, '2020-09-22 19:55:23'),
(24, 'janedoe', 'jane.doe@gmailme.com', 'Jane', 'Doe', '11112222', '', 'test', 2, '2020-09-23 07:58:51'),
(25, 'susanroces', 'susan.roces@gmailme.com', 'Susan', 'Roces', '22222222', '$2a$10$63b6fecbc72c2fd4cee2duBlZpiW.EdlPsPkF0fqIbEQ/ZYU1ZbEi', 'N/A', 2, '2020-09-23 08:11:01');

-- --------------------------------------------------------

--
-- Table structure for table `user_scores`
--

CREATE TABLE `user_scores` (
  `id` int(100) NOT NULL,
  `user_id` varchar(120) NOT NULL,
  `user_earth` int(11) NOT NULL,
  `user_air` int(11) NOT NULL,
  `user_water` int(11) NOT NULL,
  `user_fire` int(11) NOT NULL,
  `group_id` varchar(120) NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_scores`
--

INSERT INTO `user_scores` (`id`, `user_id`, `user_earth`, `user_air`, `user_water`, `user_fire`, `group_id`, `created`) VALUES
(1, '12', 25, 25, 25, 25, '', '2020-09-24 17:38:05'),
(3, '25', 36, 20, 24, 20, '1', '2020-09-24 18:48:44'),
(4, '23', 33, 32, 17, 18, '1', '2020-09-25 01:53:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers_auth`
--
ALTER TABLE `customers_auth`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`group_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`question_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_data`
--
ALTER TABLE `user_data`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `user_scores`
--
ALTER TABLE `user_scores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=301;

--
-- AUTO_INCREMENT for table `customers_auth`
--
ALTER TABLE `customers_auth`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=187;

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `group_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `question_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user_data`
--
ALTER TABLE `user_data`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `user_scores`
--
ALTER TABLE `user_scores`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
