SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `MEAN Node.js Project`
--

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`id` int(10) unsigned NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`id`), ADD KEY `id` (`id`);

-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=1;