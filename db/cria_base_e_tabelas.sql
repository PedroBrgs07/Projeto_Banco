-- No phpMyAdmin, selecione a aba SQL e execute:
CREATE DATABASE dbfinanc;
CREATE USER 'u_financ'@'localhost' IDENTIFIED BY 'abc123';
GRANT ALL PRIVILEGES ON dbfinanc.* TO 'u_financ'@'localhost';
FLUSH PRIVILEGES;


-- dbfinanc
CREATE TABLE tipo_transacao (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    categoria VARCHAR(50) NOT NULL
);

CREATE TABLE transacao (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    tipo_id INT NOT NULL,
    data DATE NOT NULL,
    FOREIGN KEY (tipo_id) REFERENCES tipo_transacao(id)
);

