-- Example data. Check the correct formats before use!!!

-- Insert sample data into Users table
INSERT INTO Users (username, password, user_level) VALUES
('Tupu', 'password123', 'regular'),
('Hupu', 'wordpass', 'regular'),
('Lupu', 'ankkalinna', 'regular');

-- Insert sample data into Kubios table. !!! Not necessarily needed !!!
INSERT INTO Kubios (user_id) VALUES
(1), (2), (3);

-- Insert sample data into Disagreement table
INSERT INTO Disagreement (user_id, notes) VALUES
(1, 'I feel that my health is good, even though my measurements look bad'),
(2, 'I was very tired and exhausted, but my results look great'),
(3, 'I feel that the measurement results are wrong');

-- Insert sample data into Shift table
INSERT INTO Shift (user_id, start_date, start_time, end_time, end_date) VALUES
(1, '2025-02-25', '09:00', '17:00', NULL),
(2, '2025-02-26', '10:00', '18:00', NULL),
(3, '2025-02-27', '12:00', '20:00', NULL);

-- Insert sample data into Exercise table
INSERT INTO Exercise (user_id, exercise_date, exercise_type, start_time, end_time, level, notes) VALUES
(1, '2025-02-20', 'Running', '07:00', '07:30', 'High', 'Morning jog'),
(2, '2025-02-21', 'Yoga', '08:00', '08:45', 'Medium', 'Relaxing session'),
(3, '2025-02-22', 'Cycling', '09:00', '10:00', 'Low', 'Leisure ride');

-- Insert sample data into Sickness table
INSERT INTO Sickness (user_id, sickness_date, description, impact, notes) VALUES
(1, '2025-02-15', 'Flu symptoms', 'Medium', 'Stayed home for rest'),
(2, '2025-02-16', 'Headache', 'Low', 'Took painkillers, rested'),
(3, '2025-02-17', 'Food poisoning', 'High', 'Hospitalized for a day');

-- Insert sample data into Others table
INSERT INTO Others (user_id, others_date, description, intensity, notes) VALUES
(1, '2025-02-10', 'family celebrations parties', 'Medium', 'The whole day was spent in relatives and this was a bit exhausting'),
(2, '2025-02-11', 'wine tasting event', 'High', 'The wine tasting got a little out of hand'),
(3, '2025-02-12', 'Lunch trip', 'Low', 'I went on a picnic in the park with my friends');


-- Examples of using sql to update and delete. Just examples!!!
-- Check the correct formats if you use, as the database may change.

-- Update user password
UPDATE Users SET password = 'newpassword' WHERE username = 'Tupu';

-- Update shift end time
UPDATE Shift SET end_time = '18:30' WHERE shift_id = 1;

-- Delete a specific user's shift
DELETE FROM Shift WHERE shift_id = 2;

-- Delete an exercise entry
DELETE FROM Exercise WHERE Exercise_id = 1;

-- ALTER example, adding a new column to existing table
ALTER TABLE Users ADD COLUMN user_level VARCHAR(10) DEFAULT 'regular';
