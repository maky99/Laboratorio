-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-10-2023 a las 02:45:48
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lab-lis`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `id_paciente` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(128) NOT NULL,
  `dni` bigint(10) NOT NULL,
  `edad` int(11) NOT NULL,
  `fecha_de_nacimiento` date NOT NULL,
  `genero` varchar(6) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `mail` varchar(64) NOT NULL,
  `fecha_de_creacion` date NOT NULL,
  `fecha_de_actualizacion` date NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`id_paciente`, `nombre`, `apellido`, `dni`, `edad`, `fecha_de_nacimiento`, `genero`, `telefono`, `direccion`, `mail`, `fecha_de_creacion`, `fecha_de_actualizacion`, `estado`) VALUES
(1, 'bruno', 'cerutti ', 33964636, 35, '1988-08-15', 'Hombre', '123456', 'Manuel Lainez 484', 'bruno@mail', '2023-10-14', '2023-10-17', 1),
(2, 'Mariana', 'Cerutti', 12143, 23, '2000-03-13', 'Mujer', '123', 'j.paz 88', 'marianaguti@gmai.com', '2023-10-15', '2023-10-17', 1),
(13, 'domingo ', 'cerutti', 123, 91, '1931-01-12', 'Hombre', '222', '112', '122', '2023-10-15', '2023-10-17', 1),
(36, 'arturi', 'vidal', 1234, 38, '1986-07-14', 'Hombre', '456', 'chile 58', 'arthur@examn', '2023-10-16', '2023-10-16', 1),
(39, 'bruno ', 'cerutti ', 33964636, 35, '1988-08-15', 'Hombre', '123456', 'Manuel Lainez 484', 'bruno@mail', '2023-10-17', '2023-10-17', 1),
(40, 'bruno ', 'cerutti ', 33964636, 35, '1988-08-15', 'Hombre', '123456', 'Manuel Lainez 484', 'bruno@mail', '2023-10-17', '2023-10-17', 1),
(41, 'jose', 'luis', 444, 46, '1977-03-12', 'Hombre', '123', '123', '123', '2023-10-17', '2023-10-17', 1),
(42, 'jose', 'luis', 444, 46, '1977-03-12', 'Hombre', '123', '123', '123', '2023-10-17', '2023-10-17', 1),
(43, 'bruno', 'cerutti ', 33964636, 35, '1988-08-15', 'Hombre', '123456', 'Manuel Lainez 484', 'bruno@mail', '2023-10-17', '2023-10-17', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(128) NOT NULL,
  `dni` bigint(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `mail` varchar(64) NOT NULL,
  `cargo` varchar(20) NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellido`, `dni`, `password`, `mail`, `cargo`, `estado`) VALUES
(1, 'Josefina', 'Perez', 123, '123', 'jose@mail.com', 'Recepcionista', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`id_paciente`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `id_paciente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
