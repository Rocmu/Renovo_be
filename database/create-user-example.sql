-- May not be used in the final version, but for testing and just in case.

-- User creation example, replace 'user' & 'password'
CREATE USER 'user'@'localhost' IDENTIFIED BY 'salainensana';
GRANT ALL PRIVILEGES ON `Renovo`.* TO 'user'@'localhost';
FLUSH PRIVILEGES;
