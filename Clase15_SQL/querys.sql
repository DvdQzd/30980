-- Mediante en uso del cliente MySQL Workbench realizar las siguientes tareas:
-- Crear una base de datos llamada 'mibase'
-- Crear una tabla dentro de esa base con el nombre 'usuarios' que contenga los siguientes campos:
-- - 'nombre' del tipo varchar no nulo
-- - 'apellido' del tipo varchar no nulo
-- - 'edad' del tipo entero sin signo
-- - 'email' del tipo varchar no nulo
-- - 'id' clave primaria autoincremental no nula
-- Insertar estos 3 usuarios en esa tabla:
--     - Juan Perez, edad 23, jp@gmail.com
--     - Pedro Mei, edad 21, pm@gmail.com
--     - Juana Suarez, edad 25, js@gmail.com
-- Listar los usuarios agregados 
-- Borrar el usuario con id = 2
-- Actualizar la edad del usuario con id = 1 a 24 años
-- Listar los registros comprobando que los datos estén actualizados según las acciones realizadas.

-- COMENTARIO EN SQL
-- CREATE DATABASE mibase;
-- CREATE TABLE USUARIOS (
--     NOMBRE VARCHAR(50) NOT NULL,
--     APELLIDO VARCHAR(50) NOT NULL,
--     EDAD INTEGER UNSIGNED,
--     EMAIL VARCHAR(100) NOT NULL,
--     ID INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT)

-- NUNCA TE OLVIDES DEL WHERE EN EL UPDATE/DELETE FROM

INSERT INTO usuarios (nombre, apellido, edad, email) VALUES ('JUAN', 'PEREZ', 23, 'JP@GMAIL.COM');
INSERT INTO usuarios (nombre, apellido, edad, email) VALUES ('Pedro', 'Mei', 21, 'pm@GMAIL.COM');
INSERT INTO usuarios (nombre, apellido, edad, email) VALUES ('Juana', 'Suarez', 25, 'JS@GMAIL.COM');

UPDATE USUARIOS
SET edad = 25
WHERE ID = 3

DELETE FROM USUARIOS
WHERE ID = 2

UPDATE USUARIOS
SET edad = 24
WHERE ID = 1

-- filtramos los campos con nombre vacio
SELECT * FROM USUARIOS WHERE nombre <> ""

-- obtenemos todos los nombres, filtrando los vacios
SELECT nombre FROM USUARIOS WHERE nombre <> ""

-- obtenemos los datos del id 3
SELECT * FROM USUARIOS WHERE id = 3