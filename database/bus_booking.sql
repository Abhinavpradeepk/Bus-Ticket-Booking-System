CREATE DATABASE IF NOT EXISTS bus_booking;
USE bus_booking;

CREATE TABLE IF NOT EXISTS buses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    from_location VARCHAR(50),
    to_location VARCHAR(50),
    time VARCHAR(50),
    price INT
);

INSERT INTO buses (from_location, to_location, time, price) 
VALUES 
('palakkad', 'wayanad', 'early-morning', 500),
('palakkad', 'bangalore', 'morning', 800),
('coimbatore', 'thrissur', 'afternoon', 600),
('wayanad', 'bangalore', 'night', 1000),
('thrissur', 'palakkad', 'morning', 400);
