CREATE DATABASE IF NOT EXISTS login_cpf
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE login_cpf;

CREATE TABLE IF NOT EXISTS usuarios (
  id            INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome          VARCHAR(150) NOT NULL,
  cpf           CHAR(11)     NOT NULL,           -- somente dígitos
  nascimento    DATE         NOT NULL,
  criado_em     TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ultimo_acesso TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_usuarios_cpf (cpf)
) ENGINE=InnoDB;

-- Usuário dedicado com privilégios mínimos (ajuste a senha):
-- CREATE USER 'login_app'@'localhost' IDENTIFIED BY 'troque_esta_senha';
-- GRANT SELECT, INSERT, UPDATE ON login_cpf.usuarios TO 'login_app'@'localhost';
