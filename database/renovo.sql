--HUOM! kesken ja pahasti!!!

-- Drop the database if it exists and then create it
DROP DATABASE IF EXISTS Renovo;
CREATE DATABASE Renovo;

USE Renovo;

CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_level VARCHAR(10) DEFAULT 'regular'
);

CREATE TABLE Kubios (
    kubios_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Disagreement (
    disagreement_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    notes TEXT,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Shift (
    shift_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    shift_date DATE NOT NULL,
    start_shift
    end_shift
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Exercise (
    Exercise_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    intensity ENUM('Low', 'Medium', 'High') NOT NULL,
    notes TEXT,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Sickness (
    Sickness_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    intensity ENUM('Low', 'Medium', 'High') NOT NULL,
    notes TEXT,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Others (
    Others_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    intensity ENUM('Low', 'Medium', 'High') NOT NULL,
    notes TEXT,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
