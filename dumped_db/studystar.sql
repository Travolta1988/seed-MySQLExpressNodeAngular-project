-- phpMyAdmin SQL Dump
-- version 4.2.6deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 15, 2015 at 08:11 AM
-- Server version: 5.5.43-0ubuntu0.14.10.1
-- PHP Version: 5.5.12-2ubuntu4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `studystar`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE IF NOT EXISTS `answers` (
`answer_id` int(11) NOT NULL,
  `answer_for_question_id` int(11) NOT NULL,
  `user_who_answered_id` int(11) NOT NULL,
  `answer_text` varchar(500) NOT NULL,
  `date_answered` date NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=78 ;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`answer_id`, `answer_for_question_id`, `user_who_answered_id`, `answer_text`, `date_answered`) VALUES
(1, 24, 43, 'hklhjkhjkjhkhjkhjk', '2015-06-12'),
(2, 25, 43, 'hklhjkhjkjhkhjkhjkkkkkkkkkk', '2015-06-12'),
(3, 25, 42, 'тестовый ответ', '2015-06-12'),
(4, 0, 42, '38', '2015-06-13'),
(5, 0, 42, '38', '2015-06-13'),
(6, 0, 42, '38', '2015-06-13'),
(7, 0, 42, '38', '2015-06-13'),
(8, 0, 42, '26', '2015-06-13'),
(9, 26, 42, 'undefined', '2015-06-13'),
(10, 26, 42, 'undefined', '2015-06-13'),
(11, 26, 42, 'undefined', '2015-06-13'),
(12, 26, 42, 'undefined', '2015-06-13'),
(13, 21, 42, 'undefined', '2015-06-13'),
(14, 21, 42, 'undefined', '2015-06-13'),
(15, 37, 42, 'ответик', '2015-06-13'),
(16, 37, 42, 'йо', '2015-06-13'),
(17, 39, 42, 'Ответ', '2015-06-13'),
(18, 39, 42, 'Ответ2', '2015-06-13'),
(19, 39, 41, 'привет хоттабыч)))))))))', '2015-06-13'),
(20, 39, 43, 'аппап', '2015-06-13'),
(21, 39, 43, 'аппапапр', '2015-06-13'),
(22, 39, 41, 'привет хоттабыч)))))))))', '2015-06-13'),
(23, 39, 41, 'realtime', '2015-06-13'),
(24, 39, 43, 'bcvb', '2015-06-13'),
(25, 39, 43, 'bcvb', '2015-06-13'),
(26, 39, 43, 'bcvbghghgh', '2015-06-13'),
(27, 39, 43, 'пиздец', '2015-06-13'),
(28, 39, 41, 'vse OK!!!!!!1', '2015-06-13'),
(29, 24, 43, 'dfgfdg', '2015-06-13'),
(30, 42, 43, 'fgfg', '2015-06-13'),
(31, 26, 43, 'iooip', '2015-06-13'),
(32, 26, 41, 'ghghghgh', '2015-06-13'),
(33, 26, 41, 'ghghghghgggggg', '2015-06-13'),
(34, 26, 41, 'ghghghghgggggggggggggggggggggggggggggggggg', '2015-06-13'),
(35, 42, 43, 'ghhhhhhhhhh', '2015-06-13'),
(36, 42, 43, 'ghhhhhhhhhhkkk', '2015-06-13'),
(37, 42, 43, '333', '2015-06-13'),
(38, 42, 43, '67788', '2015-06-13'),
(39, 41, 43, 'jlghukhgfuhgu', '2015-06-13'),
(40, 41, 43, 'jlghukhgfuhgugff', '2015-06-13'),
(41, 41, 43, 'jlghukhgfuhgugfffggffg', '2015-06-13'),
(42, 41, 43, 'jlghukhgfuhgugfffggffgghgghhhh', '2015-06-13'),
(43, 41, 43, 'jlghukhgfuhgugfffggffgghgghhhhfgffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', '2015-06-13'),
(44, 41, 43, 'jlghukhgfuhgugfffggffgghgghhhhfgfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', '2015-06-13'),
(45, 43, 43, 'ggggggggg', '2015-06-13'),
(46, 43, 43, 'fffffffffffff', '2015-06-13'),
(47, 44, 43, 'cvbvbvb', '2015-06-13'),
(48, 44, 43, 'cvbvbvbbbbb', '2015-06-13'),
(49, 26, 43, 'dfgfgg', '2015-06-13'),
(50, 45, 43, 'fgfg', '2015-06-13'),
(51, 47, 43, 'ghhhhhhhhhhhhh', '2015-06-13'),
(52, 39, 43, 'kkkkk', '2015-06-13'),
(53, 39, 41, 'tyrtytryr', '2015-06-13'),
(54, 48, 43, 'tytryry', '2015-06-13'),
(55, 48, 41, 'tytytyyyyyyyy', '2015-06-13'),
(56, 50, 43, 'jkjkjkjk', '2015-06-13'),
(57, 51, 41, 'jjjjjjjj', '2015-06-13'),
(58, 51, 41, 'jjjjjjjj', '2015-06-13'),
(59, 51, 43, 'jjjjj', '2015-06-13'),
(60, 53, 41, 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh', '2015-06-13'),
(61, 53, 43, 'hhhhh', '2015-06-13'),
(62, 54, 41, 'jjjjjjjjj', '2015-06-13'),
(63, 54, 43, 'kjkjkjkj', '2015-06-13'),
(64, 56, 43, 'hjghj', '2015-06-13'),
(65, 56, 43, 'nnnnn', '2015-06-13'),
(66, 54, 43, 'ghhhhhhh', '2015-06-13'),
(67, 60, 43, 'tytyty', '2015-06-13'),
(68, 58, 43, 'tyjghjghj', '2015-06-13'),
(69, 58, 43, 'uiuiuiui', '2015-06-13'),
(70, 65, 43, 'uuuuuuuuuuuuuuuuuuuuuuuuuuuu', '2015-06-13'),
(71, 67, 43, 'hjghjhj', '2015-06-13'),
(72, 68, 42, 'jkjkjk', '2015-06-13'),
(73, 67, 42, 'jkjkjkjk', '2015-06-13'),
(74, 67, 42, 'hfjgjhgjghj', '2015-06-13'),
(75, 68, 42, 'yuuuuuuuuuuuuuuuuu', '2015-06-13'),
(76, 68, 42, 'yuuuuuuuuuuuuuuuuu', '2015-06-13'),
(77, 62, 42, 'jjjjjjjjj', '2015-06-13');

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE IF NOT EXISTS `groups` (
  `group_id` varchar(255) NOT NULL,
  `group_name` varchar(255) NOT NULL,
  `group_info` varchar(255) NOT NULL,
  `group_members` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`group_id`, `group_name`, `group_info`, `group_members`) VALUES
('biology', 'Биология', 'В группе Биология вы можете задавать вопросы по Алгебре, Геометрии, Логике, Аналитике', '222'),
('main', 'Общая', 'Вэтой группе Вы можете задавать любые вопросы касательно образования, мероприятий.', '12212'),
('math', 'Математика', 'В группе Математика вы можете задавать вопросы по Алгебре, Геометрии, Логике, Аналитике', '222'),
('programming', 'Информатика/Программирование', 'В группе Математика вы можете задавать вопросы по Алгебре, Геометрии, Логике, Аналитике', '222');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE IF NOT EXISTS `questions` (
`question_id` int(255) NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `date_asked` datetime NOT NULL,
  `question_status` varchar(100) NOT NULL DEFAULT 'opened',
  `question_text` varchar(1000) NOT NULL,
  `question_group` varchar(255) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=70 ;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`question_id`, `user_id`, `date_asked`, `question_status`, `question_text`, `question_group`) VALUES
(1, 43, '2015-06-10 00:00:00', 'opened', '2+2', 'main'),
(2, 43, '2015-06-10 00:00:00', 'opened', '2+2', 'main'),
(3, 43, '2015-06-10 00:00:00', 'opened', '2+2', 'main'),
(5, 43, '0000-00-00 00:00:00', 'opened', 'fgdfgdfgfdgd', 'math'),
(6, 43, '2015-06-11 14:26:59', 'opened', 'tyutyutyuytutyuytu', 'math'),
(7, 43, '2015-06-11 14:30:46', 'opened', 'Привет! Первый вопрос: 2+2??????????', 'biology'),
(8, 43, '2015-06-11 14:42:41', 'opened', 'Сколько метров в километре?', 'main'),
(9, 43, '2015-06-11 15:49:33', 'opened', 'Тест с дому', 'main'),
(10, 43, '2015-06-11 17:25:26', 'opened', 'Вопрос в математику', 'math'),
(11, 43, '2015-06-11 17:25:39', 'opened', 'Вопрос по Биологии', 'biology'),
(12, 43, '2015-06-11 17:25:52', 'opened', 'Общая группа', 'main'),
(13, 43, '2015-06-11 17:38:37', 'opened', '2*2', 'math'),
(14, 42, '2015-06-11 17:40:41', 'opened', 'fffffffff', 'main'),
(15, 43, '2015-06-12 17:56:45', 'opened', 'ffffffffff', 'math'),
(16, 43, '2015-06-12 17:57:13', 'opened', 'ffffffffffyoyouio', 'math'),
(17, 43, '2015-06-13 09:36:57', 'opened', 'fgdfgfdg', 'biology'),
(18, 43, '2015-06-13 09:54:29', 'opened', 'lllllll', 'main'),
(19, 43, '2015-06-13 09:55:38', 'opened', 'fghfghg', 'biology'),
(20, 43, '2015-06-13 09:56:19', 'opened', 'fghfghgfdgfgdg', 'biology'),
(21, 43, '2015-06-13 10:43:00', 'opened', 'yuiyiyuiyuiyuiyuiuyi', 'math'),
(22, 43, '2015-06-13 10:46:03', 'opened', 'uiluoiul', 'main'),
(23, 42, '2015-06-13 11:07:20', 'opened', 'fdgdfgdfgdfg', 'main'),
(24, 43, '2015-06-13 11:12:14', 'opened', 'tyfghfghhhhh hgghgh', 'biology'),
(25, 41, '2015-06-13 11:39:44', 'opened', 'sdfsdfsdfdsf', 'main'),
(26, 42, '2015-06-13 12:51:21', 'opened', 'fdgfgdfg', 'math'),
(27, 42, '2015-06-13 15:49:22', 'opened', 'sdfsdfsdfsfghggh ggggggggggggg', 'main'),
(28, 42, '2015-06-13 15:49:25', 'opened', 'sdfsdfsdfsfghggh ggggggggggggg', 'main'),
(29, 42, '2015-06-13 15:49:26', 'opened', 'sdfsdfsdfsfghggh ggggggggggggg', 'main'),
(30, 42, '2015-06-13 15:54:11', 'opened', '231', 'main'),
(31, 42, '2015-06-13 15:54:19', 'opened', '166', 'main'),
(32, 42, '2015-06-13 15:54:33', 'opened', 'вопросик1', 'main'),
(33, 41, '2015-06-13 15:59:03', 'opened', 'realtime', 'main'),
(34, 41, '2015-06-13 16:00:44', 'opened', 'dsfsdfsdf', 'main'),
(35, 42, '2015-06-13 16:02:43', 'opened', 'вопросик1', 'main'),
(36, 41, '2015-06-13 16:03:59', 'opened', 'dfgdfgfgfffff 232323', 'main'),
(37, 42, '2015-06-13 16:04:24', 'opened', 'вопросик1dfdfdfd', 'main'),
(38, 42, '2015-06-13 16:04:49', 'opened', 'some q', 'main'),
(39, 42, '2015-06-13 16:04:57', 'opened', 'some qsdfsdf', 'main'),
(40, 42, '2015-06-13 16:05:13', 'opened', 'hello', 'biology'),
(41, 42, '2015-06-13 19:40:37', 'opened', 'hello', 'biology'),
(42, 42, '2015-06-13 19:41:06', 'opened', 'hellobiology', 'biology'),
(43, 43, '2015-06-13 21:07:48', 'opened', 'fhghghh', 'biology'),
(44, 43, '2015-06-13 21:12:24', 'opened', 'sdfsdfdfgdg', 'math'),
(45, 43, '2015-06-13 21:12:52', 'opened', 'gffdgf', 'math'),
(46, 41, '2015-06-13 21:13:08', 'opened', 'm', 'a'),
(47, 41, '2015-06-13 21:13:16', 'opened', 'hghty', 'math'),
(48, 41, '2015-06-13 21:16:35', 'opened', 'tttttt', 'math'),
(49, 43, '2015-06-13 21:17:55', 'opened', 'dfgfggggg', 'math'),
(50, 43, '2015-06-13 21:20:36', 'opened', 'dfgfgggggjjj', 'math'),
(51, 41, '2015-06-13 21:22:33', 'opened', 'hhhh', 'main'),
(52, 43, '2015-06-13 21:22:39', 'opened', 'hhhhh', 'main'),
(53, 41, '2015-06-13 21:23:41', 'opened', 'jkjk', 'main'),
(54, 41, '2015-06-13 21:27:21', 'opened', 'jjjjjjj', 'main'),
(55, 43, '2015-06-13 21:28:49', 'opened', 'jkjhk', 'main'),
(56, 43, '2015-06-13 22:04:40', 'opened', 'jkjhkfghgh', 'main'),
(57, 43, '2015-06-13 22:36:30', 'opened', 'jkjhkfghgh', 'main'),
(58, 43, '2015-06-13 22:48:06', 'opened', 'klllllllllllllllllll', 'main'),
(59, 43, '2015-06-13 23:11:34', 'opened', 'klllllllllllllllllll', 'main'),
(60, 43, '2015-06-13 23:11:40', 'opened', 'rtttt', 'main'),
(61, 43, '2015-06-13 23:12:30', 'opened', 'rttttggggggggggggg', 'main'),
(62, 43, '2015-06-13 23:12:52', 'opened', 'rttttggggggggggggghhhhhhhhhh', 'main'),
(63, 43, '2015-06-13 23:14:11', 'opened', 'fghfghgfh', 'biology'),
(64, 43, '2015-06-13 23:16:57', 'opened', 'hhhh', 'main'),
(65, 43, '2015-06-13 23:17:37', 'opened', 'hhhhyyyyyy', 'main'),
(66, 43, '2015-06-13 23:18:06', 'opened', 'hhhhyyyyyy jkyky', 'main'),
(67, 43, '2015-06-13 23:21:25', 'opened', 'hhhhhhhhhhhhhhhhhhhhhhhhhh', 'programming'),
(68, 42, '2015-06-13 23:22:52', 'opened', 'jjjjjjjjjj', 'programming'),
(69, 42, '2015-06-13 23:58:29', 'opened', 'qqqqqqqqqqqq', 'main');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`id` int(10) unsigned NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `user_avatar` varchar(255) DEFAULT NULL,
  `user_info` varchar(1000) DEFAULT NULL,
  `user_status` int(11) NOT NULL DEFAULT '0',
  `last_activity` timestamp NULL DEFAULT NULL,
  `engagement_points` int(99) DEFAULT NULL,
  `teamwork_points` int(99) DEFAULT NULL,
  `activity_points` int(99) DEFAULT NULL,
  `date_of_registration` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `email_verified` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=44 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `user_avatar`, `user_info`, `user_status`, `last_activity`, `engagement_points`, `teamwork_points`, `activity_points`, `date_of_registration`, `email_verified`) VALUES
(41, 'dimad', '$2a$10$t05ezEB.LSAVHQ.YfkCVo.4/9S7GIPbGpCwXoMCJrV9IAGtzah46K', 'griffin2006@bigmir.net', 'http://cs9523.vk.me/v9523950/2544/stMF-D7eYyQ.jpg', NULL, 0, '0000-00-00 00:00:00', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(42, 'dima', '$2a$10$yJyHuHbfQUsIhy.b4FETj.HOsE5s09zHh3Dnv4Hhi.mkeLf4dhuaS', 'griffin2007@bigmir.net', 'http://cs622825.vk.me/v622825161/285cf/rnAlRRycFEE.jpg', NULL, 3, '2015-06-10 09:13:11', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(43, 'dimas', '$2a$10$vYZXDR3AyD95HyoCTtlmUOPId3fyc7fG9D2IL/o8p822GdUzItdGy', 'griffin2003@bigmir.net', 'http://cs616031.vk.me/v616031475/1dc4c/6IRc-m_fIqs.jpg', NULL, 5, NULL, 12, 33, 2, '2015-06-10 09:23:41', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_status`
--

CREATE TABLE IF NOT EXISTS `user_status` (
  `status_id` int(11) NOT NULL,
  `status_name` varchar(255) NOT NULL,
  `status_class` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_status`
--

INSERT INTO `user_status` (`status_id`, `status_name`, `status_class`) VALUES
(0, 'Новичок', 'person-0'),
(1, 'Ученик', 'person-1'),
(2, 'Рука помощи', 'person-2'),
(3, 'Ментор', 'person-3'),
(4, 'Профессор', 'person-4'),
(5, 'Магистр наук', 'person-5');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
 ADD PRIMARY KEY (`answer_id`);

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
 ADD PRIMARY KEY (`group_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
 ADD PRIMARY KEY (`question_id`), ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`id`), ADD KEY `id` (`id`);

--
-- Indexes for table `user_status`
--
ALTER TABLE `user_status`
 ADD PRIMARY KEY (`status_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
MODIFY `answer_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=78;
--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
MODIFY `question_id` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=70;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=44;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
