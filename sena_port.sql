-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-11-2022 a las 02:50:09
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sena_port`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `main_users`
--

CREATE TABLE `main_users` (
  `id` int(11) NOT NULL,
  `type_id` int(11) DEFAULT NULL,
  `lang` varchar(10) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `main_users`
--

INSERT INTO `main_users` (`id`, `type_id`, `lang`, `name`, `last_name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'es', 'Andres Felipe', 'Delgado Gutierrez', 'andresfdel13@gmail.com', '$2y$10$VA9IAGr39GZ0E3hkzOiY7uWyPj3ITj7EynkkyT5aig8EsxcENwYHO', '2022-11-05 02:30:35', '2022-11-05 02:30:35');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `main_user_types`
--

CREATE TABLE `main_user_types` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `main_user_types`
--

INSERT INTO `main_user_types` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Admin', '2022-11-05 02:30:02', '2022-11-05 02:30:02');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `main_users`
--
ALTER TABLE `main_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type` (`type_id`);

--
-- Indices de la tabla `main_user_types`
--
ALTER TABLE `main_user_types`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `main_users`
--
ALTER TABLE `main_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `main_user_types`
--
ALTER TABLE `main_user_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `main_users`
--
ALTER TABLE `main_users`
  ADD CONSTRAINT `type` FOREIGN KEY (`type_id`) REFERENCES `main_user_types` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
