-- Create the database
CREATE DATABASE IF NOT EXISTS mydb;

-- Connect to the database
SET DATABASE = mydb;

-- Create the User table
CREATE TABLE IF NOT EXISTS User (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email STRING UNIQUE NOT NULL,
    name STRING
);

-- Create the Post table
CREATE TABLE IF NOT EXISTS Post (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title STRING,
    content STRING,
    published BOOLEAN,
    userId INT REFERENCES User(id)
);
