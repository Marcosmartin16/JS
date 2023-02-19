CREATE DATABASE usuarios;
GRANT ALL PRIVILEGES ON usuarios.* TO 'mysite'@'localhost' WITH GRANT OPTION

CREATE TABLE usuarios (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  nombre       varchar(255) NOT NULL ,
  apellido       varchar(255) NOT NULL ,
  dni       varchar(255) NOT NULL ,
  estudios       varchar(255) NOT NULL ,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;