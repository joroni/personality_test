-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 15, 2020 at 09:51 PM
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
-- Database: `quiz2`
--

-- --------------------------------------------------------

--
-- Table structure for table `insert_emp_info`
--

CREATE TABLE `insert_emp_info` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `age` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `insert_emp_info`
--

INSERT INTO `insert_emp_info` (`id`, `name`, `email`, `age`) VALUES
(2, 'Mohan', 'mohanraj8212@gmail.com', '21');

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `question_id` int(11) NOT NULL,
  `qp_id` int(11) NOT NULL,
  `question` text NOT NULL,
  `is_active` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`question_id`, `qp_id`, `question`, `is_active`) VALUES
(1, 0, 'Choose according to your strength, as 4 is the highest and 1 is the lowest.', 0),
(2, 0, 'Choose according to your strength, as 4 is the highest and 1 is the lowest', 0),
(3, 0, 'Choose according to your strength, as 4 is the highest and 1 is the lowest', 0),
(4, 0, 'Choose according to your strength, as 4 is the highest and 1 is the lowest', 0),
(5, 0, 'Choose according to your strength, as 4 is the highest and 1 is the lowest', 0),
(6, 1, 'Decisive', 1),
(7, 1, 'Orderly', 1),
(10, 1, 'Considerate', 1),
(11, 1, 'Spontaneous', 1),
(12, 2, 'Results', 0),
(13, 2, 'Systems', 0),
(14, 2, 'Support', 0),
(15, 2, 'Inspiration', 0);

-- --------------------------------------------------------

--
-- Table structure for table `question_choices`
--

CREATE TABLE `question_choices` (
  `q_choices_id` int(11) NOT NULL,
  `choice_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `is_right_choice` int(11) NOT NULL,
  `choice` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `question_choices`
--

INSERT INTO `question_choices` (`q_choices_id`, `choice_id`, `question_id`, `is_right_choice`, `choice`) VALUES
(1, 1, 1, 1, '1'),
(2, 2, 1, 0, '2'),
(3, 3, 1, 0, '3'),
(4, 4, 1, 0, '4'),
(5, 1, 2, 1, '1'),
(6, 2, 2, 0, '2'),
(7, 3, 2, 0, '3'),
(8, 4, 2, 0, '4'),
(9, 1, 3, 0, '1'),
(10, 2, 3, 0, '2'),
(11, 3, 3, 0, '3'),
(12, 4, 3, 1, '4'),
(13, 1, 4, 1, '1'),
(14, 2, 4, 0, '2'),
(15, 3, 4, 0, '3'),
(16, 4, 4, 0, '4'),
(17, 1, 5, 0, '1'),
(18, 2, 5, 1, '2'),
(19, 3, 5, 0, '3'),
(20, 4, 5, 0, '4'),
(23, 1, 6, 1, '1'),
(24, 2, 6, 1, '2'),
(25, 3, 6, 1, '3'),
(26, 4, 6, 1, '4');

-- --------------------------------------------------------

--
-- Table structure for table `quest_parent`
--

CREATE TABLE `quest_parent` (
  `qp_id` int(11) NOT NULL,
  `qp_header` text NOT NULL,
  `is_active` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quest_parent`
--

INSERT INTO `quest_parent` (`qp_id`, `qp_header`, `is_active`) VALUES
(1, 'QP1', 1),
(2, 'QP2', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id` int(11) NOT NULL,
  `user_name` varchar(200) NOT NULL,
  `user_password` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `first_name` varchar(200) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `date_joined` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `is_active` int(11) NOT NULL DEFAULT 1
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id`, `user_name`, `user_password`, `email`, `first_name`, `last_name`, `date_joined`, `is_active`) VALUES
(18, '', '', '', 'Mark', 'John', '2020-09-13 01:12:33', 1),
(22, '', '', '', 'John', 'Doe', '2020-09-13 01:12:33', 1),
(23, '', '', '', 'John Raymund', 'Niconi2', '2020-09-13 01:12:33', 1),
(24, '', '', '', 'Jane', 'Hello', '2020-09-13 01:12:33', 1),
(25, '', '', '', 'Susan', 'Chu', '2020-09-13 01:12:33', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(80) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `fname`, `lname`) VALUES
(1, 'yssyogesh', 'Yogesh', 'singh'),
(2, 'bsonarika', 'Sonarika', 'Bhadoria'),
(3, 'vishal', 'Vishal', 'sahu'),
(4, 'jiten', 'jitendra', 'singh'),
(6, 'rerrr', 't3rtrr', 'er'),
(7, 'jdoe', 'John', 'Doe'),
(11, 'qwqwee', 'John', 'ss'),
(12, '5000', 'Mobile Phone', '1'),
(13, '500', 'Power Bank', '1'),
(14, '250', 'Selfi Stick', '1');

-- --------------------------------------------------------

--
-- Table structure for table `user_question_answer`
--

CREATE TABLE `user_question_answer` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `choice_id` int(11) NOT NULL,
  `answer_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_question_answer`
--

INSERT INTO `user_question_answer` (`id`, `user_id`, `question_id`, `choice_id`, `answer_time`) VALUES
(1, 1, 6, 1, '2020-09-13 00:58:41'),
(2, 23, 0, 0, '2020-09-13 12:18:23'),
(3, 23, 0, 0, '2020-09-14 09:23:19'),
(4, 23, 10, 3, '2020-09-14 12:13:22'),
(8, 23, 10, 3, '2020-09-14 12:19:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`question_id`);

--
-- Indexes for table `question_choices`
--
ALTER TABLE `question_choices`
  ADD PRIMARY KEY (`q_choices_id`);

--
-- Indexes for table `quest_parent`
--
ALTER TABLE `quest_parent`
  ADD PRIMARY KEY (`qp_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_question_answer`
--
ALTER TABLE `user_question_answer`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `question_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `question_choices`
--
ALTER TABLE `question_choices`
  MODIFY `q_choices_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `user_question_answer`
--
ALTER TABLE `user_question_answer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
