-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-04-2023 a las 16:07:55
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

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
-- Estructura de tabla para la tabla `main_devices`
--

CREATE TABLE `main_devices` (
  `id` int(11) NOT NULL,
  `owner_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `brand` varchar(30) DEFAULT NULL,
  `serial_number` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `status` int(11) DEFAULT 1,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `main_users`
--

INSERT INTO `main_users` (`id`, `type_id`, `lang`, `name`, `last_name`, `email`, `password`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'es', 'Andres Felipe', 'Delgado Gutierrez', 'andresfdel13@gmail.com', '$2y$10$VA9IAGr39GZ0E3hkzOiY7uWyPj3ITj7EynkkyT5aig8EsxcENwYHO', 1, '2022-11-05 02:30:35', '2022-11-05 02:30:35');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `main_user_types`
--

CREATE TABLE `main_user_types` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `main_user_types`
--

INSERT INTO `main_user_types` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Admin', '2022-11-05 02:30:02', '2022-11-05 02:30:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `system_temp_pass`
--

CREATE TABLE `system_temp_pass` (
  `id` int(11) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `code` int(11) DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `system_temp_pass`
--

INSERT INTO `system_temp_pass` (`id`, `email`, `code`, `due_date`, `createdAt`, `updatedAt`) VALUES
(1, 'andresfdel13@gmail.com', 359, NULL, '2022-11-16 01:17:47', '2022-11-16 01:17:47');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `main_devices`
--
ALTER TABLE `main_devices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `owner` (`owner_id`),
  ADD KEY `actualUser` (`user_id`);

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
-- Indices de la tabla `system_temp_pass`
--
ALTER TABLE `system_temp_pass`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `main_devices`
--
ALTER TABLE `main_devices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
-- AUTO_INCREMENT de la tabla `system_temp_pass`
--
ALTER TABLE `system_temp_pass`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `main_devices`
--
ALTER TABLE `main_devices`
  ADD CONSTRAINT `actualUser` FOREIGN KEY (`user_id`) REFERENCES `main_users` (`id`),
  ADD CONSTRAINT `owner` FOREIGN KEY (`owner_id`) REFERENCES `main_users` (`id`);

--
-- Filtros para la tabla `main_users`
--
ALTER TABLE `main_users`
  ADD CONSTRAINT `type` FOREIGN KEY (`type_id`) REFERENCES `main_user_types` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
