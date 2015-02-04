-- phpMyAdmin SQL Dump
-- version 3.5.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 31, 2015 at 07:59 AM
-- Server version: 5.1.50-community
-- PHP Version: 5.5.16

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `petsadmin`
--

-- --------------------------------------------------------

--
-- Table structure for table `cat_breeds`
--

CREATE TABLE IF NOT EXISTS `cat_breeds` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `value` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `cat_breeds`
--

INSERT INTO `cat_breeds` (`id`, `label`, `value`, `created_at`, `updated_at`) VALUES
(5, 'מעורב', 'Involved', '2015-01-30 12:31:34', '2015-01-31 07:52:32'),
(6, 'אבסיני (חבשי)', 'Absinthe (Abyssinian)', '2015-01-31 02:22:55', '2015-01-31 07:52:55'),
(7, 'אוסטרלי מיסט', 'Australian Mist', '2015-01-31 02:23:20', '2015-01-31 07:53:20'),
(8, 'אוסיקט', 'Aosikt', '2015-01-31 02:23:56', '2015-01-31 07:53:56'),
(9, 'אוריינטלי ארוך שער', 'Long Oriental Gate', '2015-01-31 02:24:08', '2015-01-31 07:54:08'),
(10, 'אוריינטלי קצר שער', 'Short Oriental Gate', '2015-01-31 02:24:22', '2015-01-31 07:54:22');

-- --------------------------------------------------------

--
-- Table structure for table `cat_price_factor`
--

CREATE TABLE IF NOT EXISTS `cat_price_factor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `price` decimal(19,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=48 ;

--
-- Dumping data for table `cat_price_factor`
--

INSERT INTO `cat_price_factor` (`id`, `label`, `price`, `created_at`, `updated_at`) VALUES
(43, 'basic', '0.00', '2015-01-30 12:26:15', '2015-01-30 12:26:15'),
(44, 'premium', '40.00', '2015-01-30 12:26:24', '2015-01-30 12:26:24'),
(45, 'premium+', '52.00', '2015-01-30 12:26:36', '2015-01-30 12:26:36'),
(47, 'askjaskj', '11212.00', '2015-01-30 10:32:30', '2015-01-30 16:02:30');

-- --------------------------------------------------------

--
-- Table structure for table `cat_questions`
--

CREATE TABLE IF NOT EXISTS `cat_questions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `value` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `cat_questions`
--

INSERT INTO `cat_questions` (`id`, `label`, `value`, `created_at`, `updated_at`) VALUES
(1, 'Hyperthyroidism (פעילות יתר של בלוטת התריס?)', 'no', '2015-01-31 01:59:13', '2015-01-31 07:29:13'),
(2, 'איידס חתולים', 'no', '2015-01-31 01:59:36', '2015-01-31 07:29:36'),
(3, 'רשרוש בלב', 'no', '2015-01-31 01:59:45', '2015-01-31 07:29:45'),
(4, 'ATE – aortic thrombo embolism', 'no', '2015-01-31 01:59:55', '2015-01-31 07:29:55');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE IF NOT EXISTS `customers` (
  `customer_id` int(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `city_code` int(11) NOT NULL,
  `country_code` int(11) NOT NULL,
  `post_code` int(11) NOT NULL,
  `primary_phone` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `secondary_phone` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `gender` varchar(1) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint(4) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  PRIMARY KEY (`customer_id`),
  KEY `customer_ibfk_1` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=100003 ;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customer_id`, `user_id`, `first_name`, `last_name`, `address`, `city_code`, `country_code`, `post_code`, `primary_phone`, `secondary_phone`, `email`, `gender`, `active`, `created_at`, `updated_at`) VALUES
(100000, 187, 'Ashutosh', 'Verma', 'h 25 sector 63', 12, 1, 201301, '9540203938', '120408601', 'ashutosh@newgenray.com', 'm', 1, '2015-01-29', '2015-01-29'),
(100001, 178, 'Pankaj', 'kumar', 'h 25 sector 63', 12, 1, 201301, '9540203938', '120408601', 'pankaj@newgenray.com', 'm', 1, '2015-01-29', '2015-01-29'),
(100002, 175, 'Charul', 'tyagi', 'h 25 sector 63', 12, 1, 201301, '9540203938', '120408601', 'charul@newgenray.com', 'm', 1, '2015-01-29', '2015-01-29');

-- --------------------------------------------------------

--
-- Table structure for table `dog_breeds`
--

CREATE TABLE IF NOT EXISTS `dog_breeds` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `value` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `dog_breeds`
--

INSERT INTO `dog_breeds` (`id`, `label`, `value`, `created_at`, `updated_at`) VALUES
(6, 'Biewer', 'Biewer', '2015-01-30 13:49:04', '2015-01-30 13:49:04'),
(7, 'צ''יוואווה', 'Chihuahua', '2015-01-31 02:24:45', '2015-01-31 07:54:45'),
(8, 'מלטזית', 'Maltese', '2015-01-31 02:24:58', '2015-01-31 07:54:58'),
(9, 'הפומרני', 'Pomeranian', '2015-01-31 02:25:11', '2015-01-31 07:55:11'),
(10, 'טרייר רוסי', 'Russian Toy Terrier', '2015-01-31 02:25:22', '2015-01-31 07:55:22');

-- --------------------------------------------------------

--
-- Table structure for table `dog_price_factor`
--

CREATE TABLE IF NOT EXISTS `dog_price_factor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `price` decimal(19,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=42 ;

--
-- Dumping data for table `dog_price_factor`
--

INSERT INTO `dog_price_factor` (`id`, `label`, `price`, `created_at`, `updated_at`) VALUES
(39, 'basic', '0.00', '2015-01-30 11:58:01', '2015-01-30 11:59:56'),
(40, 'premium', '37.00', '2015-01-30 11:58:14', '2015-01-30 12:00:02'),
(41, 'premium+', '42.00', '2015-01-30 11:58:50', '2015-01-30 11:58:50');

-- --------------------------------------------------------

--
-- Table structure for table `general_questions`
--

CREATE TABLE IF NOT EXISTS `general_questions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `value` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `general_questions`
--

INSERT INTO `general_questions` (`id`, `label`, `value`, `created_at`, `updated_at`) VALUES
(4, 'האם חיית המחמד שלך נוטלת תרופות כעת או בעבר(פרט לתילוע)?', 'medication', '2015-01-31 01:36:42', '2015-01-31 07:06:42'),
(5, 'האם לחיית המחמד שלך יש מצב רפואי אחר שלא צוין כאן?', 'isother', '2015-01-31 01:36:56', '2015-01-31 07:06:56'),
(6, 'האם אתה יודע על טיפול או ניתוח עתידי שחיית המחמד שלך צריכה?', 'isfursthersurgery', '2015-01-31 01:37:11', '2015-01-31 07:07:11');

-- --------------------------------------------------------

--
-- Table structure for table `health_questions`
--

CREATE TABLE IF NOT EXISTS `health_questions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `value` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=30 ;

--
-- Dumping data for table `health_questions`
--

INSERT INTO `health_questions` (`id`, `label`, `value`, `created_at`, `updated_at`) VALUES
(10, 'מחלות סרטן מכל סוג שהוא /גידולים סרטניים', NULL, '2015-01-31 02:19:22', '2015-01-31 07:49:22'),
(11, 'מחלות לב / כשל לב/ לב מוגדל', NULL, '2015-01-31 02:19:37', '2015-01-31 07:49:37'),
(12, 'מחלות/בעיות במסתמי הלב (מחלות כרוניות, ניוון ועוד)', NULL, '2015-01-31 02:19:45', '2015-01-31 07:49:45'),
(13, 'מחלות/בעיות בשריר הלב', NULL, '2015-01-31 02:19:53', '2015-01-31 07:49:53'),
(14, 'מחלות/ניתוחים/בעיות בדיסק עמוד השדרה (פריצת דיסק/ניוון דיסק, מחלת דיסק חולייתית ועוד)', NULL, '2015-01-31 02:20:00', '2015-01-31 07:50:00'),
(15, 'מחלות/בעיות נוירולוגיות', NULL, '2015-01-31 02:20:08', '2015-01-31 07:50:08'),
(16, 'מחלות בכבד / כשל כבד/כבד שומני*', NULL, '2015-01-31 02:20:15', '2015-01-31 07:50:15'),
(17, 'מחלת כליות / כשל כליות/אי ספיקת כליות', NULL, '2015-01-31 02:20:26', '2015-01-31 07:50:26'),
(18, 'מחלות בטחול/ גידול בטחול / *', NULL, '2015-01-31 02:20:33', '2015-01-31 07:50:33'),
(19, 'מחלה/בעיות במערכת החיסון (מיאסטניה גראביס ועוד)', NULL, '2015-01-31 02:20:41', '2015-01-31 07:50:41'),
(20, 'מחלות ובעיות במוח/ דלקת מוח/ דלקת קרום המוח', NULL, '2015-01-31 02:20:50', '2015-01-31 07:50:50'),
(21, 'מחלת אדיסון – זה חוסר בהורמונים', NULL, '2015-01-31 02:20:57', '2015-01-31 07:50:57'),
(22, 'סוכרת', NULL, '2015-01-31 02:21:03', '2015-01-31 07:51:03'),
(23, 'היפוגליקמיה (מיעוט סוכר בדם)- לא מחלה בפני עצמה. סוג של תסמין.', NULL, '2015-01-31 02:21:11', '2015-01-31 07:51:11'),
(24, 'אפילפסיה', NULL, '2015-01-31 02:21:19', '2015-01-31 07:51:19'),
(25, 'שבץ', NULL, '2015-01-31 02:21:31', '2015-01-31 07:51:31'),
(26, 'הפרעות דימום', NULL, '2015-01-31 02:21:38', '2015-01-31 07:51:38'),
(27, 'מחלת דיסק צוואר הרחם', NULL, '2015-01-31 02:21:44', '2015-01-31 07:51:44'),
(28, 'מחלה זיהומית (כגון דלקת הצפק ועוד)', NULL, '2015-01-31 02:21:51', '2015-01-31 07:51:51'),
(29, 'וירוס הרפס', NULL, '2015-01-31 02:21:59', '2015-01-31 07:51:59');

-- --------------------------------------------------------

--
-- Table structure for table `illness_questions`
--

CREATE TABLE IF NOT EXISTS `illness_questions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `value` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `illness_questions`
--

INSERT INTO `illness_questions` (`id`, `label`, `value`, `created_at`, `updated_at`) VALUES
(1, 'האם זה ניתוח? פרט', 'surgery', '2015-01-30 23:44:25', '2015-01-31 07:07:37'),
(3, 'האם זה אשפוז? מה היו הסיבות לאשפוז?', 'hospitlised', '2015-01-31 01:37:49', '2015-01-31 07:07:49'),
(4, 'גידולים או גושים? פרט', 'tumor', '2015-01-31 01:38:04', '2015-01-31 07:08:04'),
(5, 'אלרגיות? פרט', 'allergies', '2015-01-31 01:38:15', '2015-01-31 07:08:15'),
(6, 'מחלה? פרט', 'illness', '2015-01-31 01:38:27', '2015-01-31 07:08:27'),
(7, 'אחר? פרט', 'other', '2015-01-31 01:38:39', '2015-01-31 07:08:39');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `value` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `label`, `value`, `created_at`, `updated_at`) VALUES
(5, 'תודה יא אח', '1', '2015-01-31 01:35:37', '2015-01-31 07:05:37'),
(6, 'תודה על הצטרפותך<BR>הרשמתך התקבלה, אנחנו נחזור אלייך בהקדם לאישור השירות', '2', '2015-01-31 01:35:50', '2015-01-31 07:05:50'),
(7, 'תודה על הצטרפותך.', '3', '2015-01-31 01:35:59', '2015-01-31 07:05:59');

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE IF NOT EXISTS `permissions` (
  `perm_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `perm_desc` varchar(50) NOT NULL,
  PRIMARY KEY (`perm_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `pets`
--

CREATE TABLE IF NOT EXISTS `pets` (
  `pet_id` int(11) NOT NULL AUTO_INCREMENT,
  `magentic_code` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `chip` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `customer_id` int(11) NOT NULL,
  `pet_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `birthdate` date DEFAULT NULL,
  `gender` varchar(1) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `castrated` tinyint(4) NOT NULL,
  `exclusion` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  PRIMARY KEY (`pet_id`),
  KEY `customer_id` (`customer_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1003 ;

--
-- Dumping data for table `pets`
--

INSERT INTO `pets` (`pet_id`, `magentic_code`, `chip`, `created_at`, `updated_at`, `customer_id`, `pet_name`, `birthdate`, `gender`, `castrated`, `exclusion`) VALUES
(1000, '182761', '10012', '2015-01-28 18:30:00', '2015-01-28 18:30:00', 100001, 'Bruno', '2014-11-04', 'm', 1, NULL),
(1001, '182762', '10013', '2015-01-28 18:30:00', '2015-01-28 18:30:00', 100001, 'jerry', '2014-11-04', 'm', 1, NULL),
(1002, '182763', '10014', '2015-01-28 18:30:00', '2015-01-28 18:30:00', 100001, 'caesar', '2014-11-04', 'm', 2, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE IF NOT EXISTS `roles` (
  `role_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `role_name` varchar(50) NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `role_perm`
--

CREATE TABLE IF NOT EXISTS `role_perm` (
  `role_id` int(10) unsigned NOT NULL,
  `perm_id` int(10) unsigned NOT NULL,
  KEY `role_id` (`role_id`),
  KEY `perm_id` (`perm_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users_auth`
--

CREATE TABLE IF NOT EXISTS `users_auth` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET latin1 NOT NULL,
  `email` varchar(50) CHARACTER SET latin1 NOT NULL,
  `password` varchar(200) CHARACTER SET latin1 NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=188 ;

--
-- Dumping data for table `users_auth`
--

INSERT INTO `users_auth` (`uid`, `name`, `email`, `password`, `created`) VALUES
(175, 'test', 'test@gmail.com', '$2a$10$03ab40438bbddb67d4f13Odrzs6Rwr92xKEYDbOO7IXO8YvBaOmlq', '2014-08-31 15:15:08'),
(178, 'test', 'admin@test.com', '$2a$10$72442f3d7ad44bcf1432cuAAZAURj9dtXhEMBQXMn9C8SpnZjmK1S', '2014-08-31 15:30:26'),
(187, 'ashutosh', 'ashutosh@newgenray.com', '$2a$10$a4244ce959a7b978a5b10udyBQwUeDbf9Yte1rOpYO3qQdRUMJpje', '2015-01-27 17:26:20');

-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

CREATE TABLE IF NOT EXISTS `user_role` (
  `user_id` int(11) NOT NULL,
  `role_id` int(10) unsigned NOT NULL,
  KEY `user_id` (`user_id`),
  KEY `role_id` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users_auth` (`uid`);

--
-- Constraints for table `pets`
--
ALTER TABLE `pets`
  ADD CONSTRAINT `pets_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`);

--
-- Constraints for table `role_perm`
--
ALTER TABLE `role_perm`
  ADD CONSTRAINT `role_perm_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`),
  ADD CONSTRAINT `role_perm_ibfk_2` FOREIGN KEY (`perm_id`) REFERENCES `permissions` (`perm_id`);

--
-- Constraints for table `user_role`
--
ALTER TABLE `user_role`
  ADD CONSTRAINT `user_role_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users_auth` (`uid`),
  ADD CONSTRAINT `user_role_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`);
SET FOREIGN_KEY_CHECKS=1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
