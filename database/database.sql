    CREATE DATABASE ng_ruca_db;

    USE ng_ruca_db;

    CREATE TABLE jugador (
        id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(50),
        rut VARCHAR(12),
        edad INT(3),
        imagen VARCHAR(200),
        create_row_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    
    DESCRIBE jugador;