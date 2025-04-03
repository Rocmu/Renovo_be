import promisePool from '../utils/database.js';

/**
 * Retrieve all shifts from the database.
 * @returns {Promise<Array<Object>|{error: number, message: string}>} Array of shift objects or error object.
 */
const listAllShifts = async () => {
  try {
    const sql = 'SELECT * FROM Shift';
    const [rows] = await promisePool.query(sql);
    return rows;
  } catch (error) {
    console.error('listAllShifts', error);
    return { error: 500, message: 'Database error' };
  }
};

/**
 * Retrieves all users shifts by user ID.
 * @param {number} id - User ID.
 * @returns {Promise<Array<Object>|{error: number, message: string}>} Array of shifts or error object.
 */
const listShiftsByUserId = async (id) => {
  try {
    const sql = 'SELECT * FROM Shift WHERE user_id = ?';
    const params = [id];
    const [rows] = await promisePool.query(sql, params);
    return rows;
  } catch (error) {
    console.error('listShiftsByUserId', error);
    return { error: 500, message: 'Database error' };
  }
};

/**
 * Retrieve shift by ID.
 * @param {number} id - Shift ID.
 * @returns {Promise<Object|{error: number, message: string}>} Shift object or error object (404 if not found).
 */
const selectShiftById = async (id) => {
  try {
    const sql = 'SELECT * FROM Shift WHERE shift_id = ?';
    const params = [id];
    const [rows] = await promisePool.query(sql, params);

    if (rows.length === 0) {
      return { error: 404, message: 'Shift not found' };
    }

    return rows[0];
  } catch (error) {
    console.error('selectShiftById', error);
    return { error: 500, message: 'Database error' };
  }
};

/**
 * Create new shift in the database.
 * @param {Object} shift - Shift object containing required fields.
 * @param {number} shift.user_id - User ID.
 * @param {string|null} shift.start_date - Shift start date (YYYY-MM-DD).
 * @param {string|null} shift.start_time - Shift start time (HH:MM:SS).
 * @param {string|null} shift.end_time - Shift end time (HH:MM:SS).
 * @param {string|null} shift.end_date - Shift end date (YYYY-MM-DD).
 * @returns {Promise<{message: string, shift_id: number}|{error: number, message: string}>} Success message with ID or error object.
 */
const insertShift = async (shift) => {
  try {
    const sql = 'INSERT INTO Shift (user_id, start_date, start_time, end_time, end_date) VALUES (?, ?, ?, ?, ?)';
    const params = [
      shift.user_id,
      shift.start_date,
      shift.start_time,
      shift.end_time,
      shift.end_date,
    ];
    const [result] = await promisePool.query(sql, params);
    return { message: 'New shift created', shift_id: result.insertId };
  } catch (error) {
    console.error('insertShift', error);
    return { error: 409, message: 'Shift already exists or invalid data' };
  }
};

/**
 * Update existing shift.
 * @param {Object} shift - Shift object with updated fields.
 * @param {number} shift.shift_id - Shift ID (required).
 * @param {number} shift.user_id - User ID.
 * @param {string|null} [shift.start_date] - Shift start date.
 * @param {string|null} [shift.start_time] - Shift start time.
 * @param {string|null} [shift.end_time] - Shift end time.
 * @param {string|null} [shift.end_date] - Shift end date.
 * @returns {Promise<{message: string, shift_id: number}|{error: number, message: string}>} Success message or error object (404 if not found).
 */
const updateShiftById = async (shift) => {
  try {
    const sql = 'UPDATE Shift SET start_date=?, start_time=?, end_time=?, end_date=? WHERE shift_id=? AND user_id=?';
    const params = [
      shift.start_date,
      shift.start_time,
      shift.end_time,
      shift.end_date,
      shift.shift_id,
      shift.user_id
    ];
    const [result] = await promisePool.query(sql, params);

    if (result.affectedRows === 0) {
      return { error: 404, message: 'Shift not found' };
    }

    return { message: 'Shift updated', shift_id: shift.shift_id };
  } catch (error) {
    console.error('updateShiftById', error);
    return { error: 500, message: 'Database error' };
  }
};

/**
 * Delete shift by ID.
 * @param {number} id - Shift ID.
 * @returns {Promise<{message: string, shift_id: number}|{error: number, message: string}>} Success message or error object (404 if not found).
 */
const deleteShiftById = async (id) => {
  try {
    const sql = 'DELETE FROM Shift WHERE shift_id = ?';
    const params = [id];
    const [result] = await promisePool.query(sql, params);

    if (result.affectedRows === 0) {
      return { error: 404, message: 'Shift not found' };
    }

    return { message: 'Shift deleted', shift_id: id };
  } catch (error) {
    console.error('deleteShiftById', error);
    return { error: 500, message: 'Database error' };
  }
};

export {
  listAllShifts,
  listShiftsByUserId,
  selectShiftById,
  insertShift,
  updateShiftById,
  deleteShiftById,
};
