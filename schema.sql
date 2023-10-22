CREATE DATABASE SimpleDatabaseNodeJs;
USE SimpleDatabaseNodeJs;

CREATE TABLE users(
    id integer PRIMARY KEY AUTO_INCREMENT,
    username varchar(100) NOT NULL,
    email varchar(100) NOT NULL,
    user_password varchar(255) NOT NULL
)

INSERT INTO users (username, email, user_password) VALUES ('QuynhTran', 'quynhtran182003@gmail.com', 'aaa');