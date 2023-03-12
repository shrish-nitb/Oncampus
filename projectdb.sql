-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2022 at 09:11 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projectdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `clubs`
--

CREATE TABLE `clubs` (
  `id` bigint(20) NOT NULL,
  `creator` bigint(20) NOT NULL,
  `ranking` varchar(10) NOT NULL,
  `members` varchar(200) NOT NULL,
  `name` varchar(10) NOT NULL,
  `category` varchar(10) NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` bigint(20) NOT NULL,
  `organizer` bigint(20) NOT NULL,
  `eventName` varchar(20) NOT NULL,
  `description` varchar(100) NOT NULL,
  `venue` varchar(20) NOT NULL,
  `dateTime` datetime NOT NULL,
  `rating` varchar(10) NOT NULL,
  `likedBy` varchar(100) NOT NULL,
  `sharedBy` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `inbox`
--

CREATE TABLE `inbox` (
  `id` bigint(20) NOT NULL,
  `sourceId` bigint(20) NOT NULL,
  `targetId` bigint(20) NOT NULL,
  `message` tinytext NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `id` bigint(20) NOT NULL,
  `url` varchar(20) NOT NULL,
  `owner` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` bigint(20) NOT NULL,
  `keywords` varchar(100) NOT NULL,
  `course` varchar(20) NOT NULL,
  `subject` varchar(20) NOT NULL,
  `semester` varchar(5) NOT NULL,
  `branch` varchar(20) NOT NULL,
  `pdfLink` varchar(20) NOT NULL,
  `uploader` bigint(20) NOT NULL,
  `DateTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` varchar(10) NOT NULL,
  `type` varchar(10) NOT NULL,
  `dataJSON` varchar(100) NOT NULL,
  `timestamp` varchar(20) NOT NULL,
  `isSeen` varchar(10) NOT NULL,
  `recipient` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` bigint(20) NOT NULL,
  `type` varchar(10) NOT NULL,
  `dataId` bigint(20) NOT NULL,
  `dateTime` datetime NOT NULL,
  `creator` bigint(20) NOT NULL,
  `likes` int(10) NOT NULL,
  `share` int(10) NOT NULL,
  `isDrafted` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) NOT NULL,
  `name` varchar(10) NOT NULL,
  `price` varchar(10) NOT NULL,
  `description` varchar(20) NOT NULL,
  `picture` varchar(20) NOT NULL,
  `creator` bigint(20) NOT NULL,
  `rating` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `firstname` varchar(10) NOT NULL,
  `lastname` varchar(10) NOT NULL,
  `profilePicture` varchar(20) NOT NULL,
  `scholar_number` varchar(10) NOT NULL,
  `hashed_password` varchar(20) NOT NULL,
  `key` varchar(20) NOT NULL,
  `loggedIn` varchar(5) NOT NULL,
  `sessionId` varchar(20) NOT NULL,
  `xsrf_token` varchar(20) NOT NULL,
  `lastActive` varchar(20) NOT NULL,
  `attending` bigint(20) NOT NULL,
  `clubs` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
