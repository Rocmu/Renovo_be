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
    result_date DATE NULL,
    readiness INT,
    pns_index DECIMAL(5,2),
    sns_index DECIMAL(5,2),
    rmssd INT,
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
    start_date DATE NULL,
    start_time TIME NULL,
    end_time TIME NULL,
    end_date DATE NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Exercise (
    Exercise_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    exercise_date DATE NOT NULL,
    exercise_type VARCHAR(50) NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    level ENUM('Low', 'Medium', 'High') NOT NULL,
    notes TEXT,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Sickness (
    Sickness_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    sickness_date DATE NOT NULL,
    description VARCHAR(50) NOT NULL,
    impact ENUM('Low', 'Medium', 'High') NOT NULL,
    notes TEXT,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Others (
    Others_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    others_date DATE NOT NULL,
    description VARCHAR(50) NOT NULL,
    intensity ENUM('Low', 'Medium', 'High') NOT NULL,
    notes TEXT,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
