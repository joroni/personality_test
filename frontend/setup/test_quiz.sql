-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 18, 2020 at 12:10 PM
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
  `user_id` varchar(80) CHARACTER SET latin1 NOT NULL,
  `question_id` varchar(50) CHARACTER SET latin1 NOT NULL,
  `choice_id` varchar(50) CHARACTER SET latin1 NOT NULL,
  `time_answered` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `date_joined` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `is_active` int(11) NOT NULL DEFAULT 1,
  `acl` int(11) NOT NULL DEFAULT 2
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_name`, `user_password`, `email`, `first_name`, `last_name`, `date_joined`, `is_active`, `acl`) VALUES
(18, '', '', '', 'Mark', 'John', '2020-09-13 01:12:33', 1, 2),
(22, '', '', '', 'John', 'Doe', '2020-09-13 01:12:33', 1, 2),
(23, 'joroni', '', 'jraymund.niconi@gmail.com', 'John', 'Doe', '2020-09-13 01:12:33', 1, 2),
(24, 'janedoe', '', 'jane@gmailme.com', 'Jane', 'Doe', '2020-09-13 01:12:33', 1, 2),
(25, '', '', '', 'Susan', 'Chu', '2020-09-13 01:12:33', 1, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=136;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
