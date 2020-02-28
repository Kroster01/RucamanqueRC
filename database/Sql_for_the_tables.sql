/* Create BD */

--
-- Base de datos: `ng_ruca_db`
--
CREATE DATABASE IF NOT EXISTS `ng_ruca_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `ng_ruca_db`;

/* Creación de tablas */

CREATE TABLE IF NOT EXISTS `jugador` (
  `JUG_ID`                 int(11)        NOT NULL      COMMENT 'Identificador de cada Jugador.' AUTO_INCREMENT,
  `JUG_NOMBRE`             varchar(50)    NOT NULL      COMMENT 'Nombre del Jugador.',
  `JUG_TELEFONO`           varchar(13)    DEFAULT NULL  COMMENT 'Teléfono del Jugador.',
  `JUG_EMAIL`              varchar(50)    DEFAULT NULL  COMMENT 'Email del Jugador.',
  `JUG_RUT`,               varchar(13)    NOT NULL      COMMENT 'Rut del Jugador.',
  `JUG_FECHA_NAC`          date           DEFAULT NULL  COMMENT 'Fecha de captura de la estatura y el peso.',
  `JUG_IMAGEN`             varchar(250)   NOT NULL      COMMENT 'Imagen Identificativa de cada Jugador.',
  `JUG_FECHA_INGRESO`      date           NOT NULL      COMMENT 'Fecha de nacimiento.',
  `JUG_SEGURO_ACC`         varchar(250)   NOT NULL      COMMENT 'Descripción del seguro de accidentes en caso de tener.',
  `JUG_ESTADO_EN_CLUB`     tinyint(1)     NOT NULL      COMMENT 'Estado del Jugador: 1) Activo; 2) Inactivo.',
  `JUG_MEDICAMENTOS`       varchar(250)   NOT NULL      COMMENT 'Información si el jugador requiere algún medicamento de manera esporádica o permanente.',
  `JUG_EVALUACION_NUTRI`   tinyint(1)     NOT NULL      COMMENT 'Información nutricional relevante.',
  `JUG_ALERGIAS`           varchar(250)   NOT NULL      COMMENT 'Alergias del jugador, par consideraciónes en caso de realziar viajes o salidas con el equipo.',
  `JUG_OBSERVACIONES`      varchar(250)   NOT NULL      COMMENT 'Observaciones extras que no sean consideradas en el registro.',
  `JUG_GRUPO_SANGUINEO`    varchar(3)     NOT NULL      COMMENT 'Grupo sanguíneo del Jugador.',
  `JUG_PUESTO_CANCHA`      varchar(50)    NOT NULL      COMMENT 'En qué lugares puede Jugar en cancha.',
  `JUG_CATEGORIA`          varchar(30)    NOT NULL      COMMENT 'Categoría de cada jugador.',
  `JUG_PREVISION`          varchar(30)    NOT NULL      COMMENT 'Previsión de cada jugador.',
  `JUG_ESTATURA`           int(3)         DEFAULT NULL  COMMENT 'Valor de la estatura (Centímetros).',
  `JUG_PESO`               float          DEFAULT NULL  COMMENT 'Valor del Peso.',
  `JUG_FECHA_ESTA_PESO`    date           DEFAULT NULL  COMMENT 'Fecha de captura de la estatura y el peso.',
  `JUG_USU_CREA`           int(4)         NOT NULL      COMMENT 'El Usuarios que Crea el registro.',
  `JUG_USU_CREA_FECHA`     date           NOT NULL      COMMENT 'Fecha que el Usuarios Crea el registro.',
  `JUG_USU_MOD`            int(4)         DEFAULT NULL  COMMENT 'El Usuarios que Modifica el registro.',
  `JUG_USU_MOD_FECHA`      date           DEFAULT NULL  COMMENT 'Fecha que el Usuarios Modifica el registro.',
  PRIMARY KEY (`JUG_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

--
-- Truncar tablas antes de insertar `jugador`
--

TRUNCATE TABLE `jugador`;
ALTER TABLE `jugador` AUTO_INCREMENT = 1;

/* Insert Opcionales */ 
/*
INSERT INTO `jugador` (
 `JUG_NOMBRE`, `JUG_TELEFONO`, `JUG_EMAIL`, `JUG_RUT`, `JUG_FECHA_NAC`, `JUG_IMAGEN`, `JUG_FECHA_INGRESO`, `JUG_SEGURO_ACC`, `JUG_ESTADO_EN_CLUB`, `JUG_MEDICAMENTOS`, `JUG_EVALUACION_NUTRI`, `JUG_ALERGIAS`,
 `JUG_OBSERVACIONES`, `JUG_GRUPO_SANGUINEO`, `JUG_PUESTO_CANCHA`, `JUG_CATEGORIA`, `JUG_PREVISION`, `JUG_ESTATURA`, `JUG_PEROS`, `JUG_FECHA_ESTA_PESO`,
 `JUG_USU_CREA`, `JUG_USU_CREA_FECHA`, `JUG_USU_MOD`, `JUG_USU_MOD_FECHA`)
 VALUES (
 	'Acevedo Manríquez María Mireya', '+569', 'aa1@aa.com', '9.458.456-8', '2020-03-01', '', '2020-02-01', 'seguro accidentes', 1, 'Medicamentos', 'evaluacion nutricional', 'alergias',
 	'OBS', 'O-', 'puesto en cancha', 'M8', 'FONASA', 175, 80.5,  '0000-00-00', 1, '0000-00-00', NULL, NULL);

INSERT INTO `jugador` (
 `JUG_NOMBRE`, `JUG_TELEFONO`, `JUG_EMAIL`, `JUG_RUT`, `JUG_FECHA_NAC`, `JUG_IMAGEN`, `JUG_FECHA_INGRESO`, `JUG_SEGURO_ACC`, `JUG_ESTADO_EN_CLUB`, `JUG_MEDICAMENTOS`, `JUG_EVALUACION_NUTRI`, `JUG_ALERGIAS`,
 `JUG_OBSERVACIONES`, `JUG_GRUPO_SANGUINEO`, `JUG_PUESTO_CANCHA`, `JUG_CATEGORIA`, `JUG_PREVISION`, `JUG_ESTATURA`, `JUG_PEROS`, `JUG_FECHA_ESTA_PESO`,
 `JUG_USU_CREA`, `JUG_USU_CREA_FECHA`, `JUG_USU_MOD`, `JUG_USU_MOD_FECHA`)
 VALUES (
 	'Acevedo Mejía Enrique','+569','aa2@aa.com','9.458.123-8', '2020-03-02','', '2020-02-02', 'seguro accidentes', 1, 'Medicamentos', 'evaluacion nutricional', 'alergias',
 	'OBS', 'O-', 'puesto en cancha', 'M8', 'FONASA', 175, 80.5, '0000-00-00', 1, '0000-00-00', NULL, NULL);

INSERT INTO `jugador` (
 `JUG_NOMBRE`, `JUG_TELEFONO`, `JUG_EMAIL`, `JUG_RUT`, `JUG_FECHA_NAC`, `JUG_IMAGEN`, `JUG_FECHA_INGRESO`, `JUG_SEGURO_ACC`, `JUG_ESTADO_EN_CLUB`, `JUG_MEDICAMENTOS`, `JUG_EVALUACION_NUTRI`, `JUG_ALERGIAS`,
 `JUG_OBSERVACIONES`, `JUG_GRUPO_SANGUINEO`, `JUG_PUESTO_CANCHA`, `JUG_CATEGORIA`, `JUG_PREVISION`, `JUG_ESTATURA`, `JUG_PEROS`, `JUG_FECHA_ESTA_PESO`,
 `JUG_USU_CREA`, `JUG_USU_CREA_FECHA`, `JUG_USU_MOD`, `JUG_USU_MOD_FECHA`)
 VALUES (
 	'Acevedo Ruiz Carolina','+569','aa3@aa.com','9.458.132-8', '2020-03-03','', '2020-02-03', 'seguro accidentes', 1, 'Medicamentos', 'evaluacion nutricional', 'alergias',
 	'OBS', 'O-', 'puesto en cancha', 'M8', 'FONASA', 175, 80.5, '0000-00-00', 1, '0000-00-00', NULL, NULL);

INSERT INTO `jugador` (
 `JUG_NOMBRE`, `JUG_TELEFONO`, `JUG_EMAIL`, `JUG_RUT`, `JUG_FECHA_NAC`, `JUG_IMAGEN`, `JUG_FECHA_INGRESO`, `JUG_SEGURO_ACC`, `JUG_ESTADO_EN_CLUB`, `JUG_MEDICAMENTOS`, `JUG_EVALUACION_NUTRI`, `JUG_ALERGIAS`,
 `JUG_OBSERVACIONES`, `JUG_GRUPO_SANGUINEO`, `JUG_PUESTO_CANCHA`, `JUG_CATEGORIA`, `JUG_PREVISION`, `JUG_ESTATURA`, `JUG_PEROS`, `JUG_FECHA_ESTA_PESO`,
 `JUG_USU_CREA`, `JUG_USU_CREA_FECHA`, `JUG_USU_MOD`, `JUG_USU_MOD_FECHA`)
 VALUES (
 	'Acosta Canto Tomás José','+569','aa4@aa.com','9.458.654-8', '2020-03-04','', '2020-02-04', 'seguro accidentes', 1, 'Medicamentos', 'evaluacion nutricional', 'alergias',
 	'OBS', 'O-', 'puesto en cancha', 'M8', 'FONASA', 175, 80.5, '0000-00-00', 1, '0000-00-00', NULL, NULL);

INSERT INTO `jugador` (
 `JUG_NOMBRE`, `JUG_TELEFONO`, `JUG_EMAIL`, `JUG_RUT`, `JUG_FECHA_NAC`, `JUG_IMAGEN`, `JUG_FECHA_INGRESO`, `JUG_SEGURO_ACC`, `JUG_ESTADO_EN_CLUB`, `JUG_MEDICAMENTOS`, `JUG_EVALUACION_NUTRI`, `JUG_ALERGIAS`,
 `JUG_OBSERVACIONES`, `JUG_GRUPO_SANGUINEO`, `JUG_PUESTO_CANCHA`, `JUG_CATEGORIA`, `JUG_PREVISION`, `JUG_ESTATURA`, `JUG_PEROS`, `JUG_FECHA_ESTA_PESO`,
 `JUG_USU_CREA`, `JUG_USU_CREA_FECHA`, `JUG_USU_MOD`, `JUG_USU_MOD_FECHA`)
 VALUES (
 	'Acosta Gámez Celina','+569','aa5@aa.com','9.458.586-8', '2020-03-05','', '2020-02-05', 'seguro accidentes', 1, 'Medicamentos', 'evaluacion nutricional', 'alergias',
 	'OBS', 'O-', 'puesto en cancha', 'M8', 'FONASA', 175, 80.5, '0000-00-00', 1, '0000-00-00', NULL, NULL);

INSERT INTO `jugador` (
 `JUG_NOMBRE`, `JUG_TELEFONO`, `JUG_EMAIL`, `JUG_RUT`, `JUG_FECHA_NAC`, `JUG_IMAGEN`, `JUG_FECHA_INGRESO`, `JUG_SEGURO_ACC`, `JUG_ESTADO_EN_CLUB`, `JUG_MEDICAMENTOS`, `JUG_EVALUACION_NUTRI`, `JUG_ALERGIAS`,
 `JUG_OBSERVACIONES`, `JUG_GRUPO_SANGUINEO`, `JUG_PUESTO_CANCHA`, `JUG_CATEGORIA`, `JUG_PREVISION`, `JUG_ESTATURA`, `JUG_PEROS`, `JUG_FECHA_ESTA_PESO`,
 `JUG_USU_CREA`, `JUG_USU_CREA_FECHA`, `JUG_USU_MOD`, `JUG_USU_MOD_FECHA`)
 VALUES (
 	'Aguilar Dorantes Irma','+569','aa6@aa.com','9.458.987-8', '2020-03-06','', '2020-02-06', 'seguro accidentes', 1, 'Medicamentos', 'evaluacion nutricional', 'alergias',
 	'OBS', 'O-', 'puesto en cancha', 'M8', 'FONASA', 175, 80.5, '0000-00-00', 1, '0000-00-00', NULL, NULL);

INSERT INTO `jugador` (
 `JUG_NOMBRE`, `JUG_TELEFONO`, `JUG_EMAIL`, `JUG_RUT`, `JUG_FECHA_NAC`, `JUG_IMAGEN`, `JUG_FECHA_INGRESO`, `JUG_SEGURO_ACC`, `JUG_ESTADO_EN_CLUB`, `JUG_MEDICAMENTOS`, `JUG_EVALUACION_NUTRI`, `JUG_ALERGIAS`,
 `JUG_OBSERVACIONES`, `JUG_GRUPO_SANGUINEO`, `JUG_PUESTO_CANCHA`, `JUG_CATEGORIA`, `JUG_PREVISION`, `JUG_ESTATURA`, `JUG_PEROS`, `JUG_FECHA_ESTA_PESO`,
 `JUG_USU_CREA`, `JUG_USU_CREA_FECHA`, `JUG_USU_MOD`, `JUG_USU_MOD_FECHA`)
 VALUES (
 	'Aguilar Lemus María Ofelia','+569','aa7@aa.com','9.458.789-8', '2020-03-07','', '2020-02-07', 'seguro accidentes', 1, 'Medicamentos', 'evaluacion nutricional', 'alergias',
 	'OBS', 'O-', 'puesto en cancha', 'M8', 'FONASA', 175, 80.5, '0000-00-00', 1, '0000-00-00', NULL, NULL);

 INSERT INTO `jugador` (
 `JUG_NOMBRE`, `JUG_TELEFONO`, `JUG_EMAIL`, `JUG_RUT`, `JUG_FECHA_NAC`, `JUG_IMAGEN`, `JUG_FECHA_INGRESO`, `JUG_SEGURO_ACC`, `JUG_ESTADO_EN_CLUB`, `JUG_MEDICAMENTOS`, `JUG_EVALUACION_NUTRI`, `JUG_ALERGIAS`,
 `JUG_OBSERVACIONES`, `JUG_GRUPO_SANGUINEO`, `JUG_PUESTO_CANCHA`, `JUG_CATEGORIA`, `JUG_PREVISION`, `JUG_ESTATURA`, `JUG_PEROS`, `JUG_FECHA_ESTA_PESO`,
 `JUG_USU_CREA`, `JUG_USU_CREA_FECHA`, `JUG_USU_MOD`, `JUG_USU_MOD_FECHA`)
 VALUES (
 	'Aguilar Loranca Marcela','+569','aa8@aa.com','9.458.849-8', '2020-03-08','', '2020-02-08', 'seguro accidentes', 1, 'Medicamentos', 'evaluacion nutricional', 'alergias',
 	'OBS', 'O-', 'puesto en cancha', 'M8', 'FONASA', 175, 80.5, '0000-00-00', 1, '0000-00-00', NULL, NULL);

INSERT INTO `jugador` (
 `JUG_NOMBRE`, `JUG_TELEFONO`, `JUG_EMAIL`, `JUG_RUT`, `JUG_FECHA_NAC`, `JUG_IMAGEN`, `JUG_FECHA_INGRESO`, `JUG_SEGURO_ACC`, `JUG_ESTADO_EN_CLUB`, `JUG_MEDICAMENTOS`, `JUG_EVALUACION_NUTRI`, `JUG_ALERGIAS`,
 `JUG_OBSERVACIONES`, `JUG_GRUPO_SANGUINEO`, `JUG_PUESTO_CANCHA`, `JUG_CATEGORIA`, `JUG_PREVISION`, `JUG_ESTATURA`, `JUG_PEROS`, `JUG_FECHA_ESTA_PESO`,
 `JUG_USU_CREA`, `JUG_USU_CREA_FECHA`, `JUG_USU_MOD`, `JUG_USU_MOD_FECHA`)
 VALUES (
 	'Aguilar Pérez Fredy Francisco','+569','aa9@aa.com','9.458.159-8', '2020-03-09','', '2020-02-09', 'seguro accidentes', 1, 'Medicamentos', 'evaluacion nutricional', 'alergias',
 	'OBS', 'O-', 'puesto en cancha', 'M8', 'FONASA', 175, 80.5, '0000-00-00', 1, '0000-00-00', NULL, NULL);

INSERT INTO `jugador` (
 `JUG_NOMBRE`, `JUG_TELEFONO`, `JUG_EMAIL`, `JUG_RUT`, `JUG_FECHA_NAC`, `JUG_IMAGEN`, `JUG_FECHA_INGRESO`, `JUG_SEGURO_ACC`, `JUG_ESTADO_EN_CLUB`, `JUG_MEDICAMENTOS`, `JUG_EVALUACION_NUTRI`, `JUG_ALERGIAS`,
 `JUG_OBSERVACIONES`, `JUG_GRUPO_SANGUINEO`, `JUG_PUESTO_CANCHA`, `JUG_CATEGORIA`, `JUG_PREVISION`, `JUG_ESTATURA`, `JUG_PEROS`, `JUG_FECHA_ESTA_PESO`,
 `JUG_USU_CREA`, `JUG_USU_CREA_FECHA`, `JUG_USU_MOD`, `JUG_USU_MOD_FECHA`)
 VALUES (
 	'Alarcón Licona Salomón','+569','aa10@aa.com','9.458.357-8', '2020-03-10','', '2020-02-10', 'seguro accidentes', 1, 'Medicamentos', 'evaluacion nutricional', 'alergias',
 	'OBS', 'O-', 'puesto en cancha', 'M8', 'FONASA', 175, 80.5, '0000-00-00', 1, '0000-00-00', NULL, NULL);
*/

/* Creación de relaciones e indices */
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
  `USU_ID` int(4) NOT NULL AUTO_INCREMENT COMMENT '	Identificador de cada Usuario.',
  `USU_NICKNAME` varchar(50) NOT NULL COMMENT 'Apodo de identificación de para el login.',
  `USU_PASSWORD` varchar(500) NOT NULL COMMENT 'password de login.',
  `USU_ESTADO` tinyint(1) NOT NULL COMMENT 'estado del usuario. Ej Active (true) o InActive(false).',
  `USU_FECHAEXPIRACION` date DEFAULT NULL COMMENT 'en caso de ser un usuario provicional , se debe ingresar fecha de expiración.'
  PRIMARY KEY (`USU_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Truncar tablas antes de insertar `usuario`
--

TRUNCATE TABLE `usuario`;
ALTER TABLE `usuario` AUTO_INCREMENT = 1;
--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`USU_NICKNAME`, `USU_PASSWORD`, `USU_ESTADO`, `USU_FECHAEXPIRACION`) 
VALUES('adminRC1', 'adminRC1', 1, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuper`
--