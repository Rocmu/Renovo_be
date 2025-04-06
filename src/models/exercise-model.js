import promisePool from '../utils/database.js';

//Retrieve all exercises from the database.
const listAllExercises = async () => {
  try {
    const sql = 'SELECT * FROM Exercise';
    const [rows] = await promisePool.query(sql);
    return rows;
  } catch (error) {
    console.error('listAllExercises', error);
    return { error: 500, message: 'Database error' };
  }
};

//Retrieves all user's exercises by user ID.
const listExercisesByUserId = async (id) => {
  try {
    const sql = 'SELECT * FROM Exercise WHERE user_id = ?';
    const params = [id];
    const [rows] = await promisePool.query(sql, params);
    return rows;
  } catch (error) {
    console.error('listExercisesByUserId', error);
    return { error: 500, message: 'Database error' };
  }
};

//Retrieve exercise by ID.
const selectExerciseById = async (id) => {
  try {
    const sql = 'SELECT * FROM Exercise WHERE exercise_id = ?';
    const params = [id];
    const [rows] = await promisePool.query(sql, params);

    if (rows.length === 0) {
      return { error: 404, message: 'Exercise not found' };
    }

    return rows[0];
  } catch (error) {
    console.error('selectExerciseById', error);
    return { error: 500, message: 'Database error' };
  }
};

//Create new exercise in the database.
const insertExercise = async (exercise) => {
  try {
    const sql = 'INSERT INTO Exercise (user_id, exercise_date, exercise_type, start_time, end_time, level, notes) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const params = [
      exercise.user_id,
      exercise.exercise_date,
      exercise.exercise_type,
      exercise.start_time,
      exercise.end_time,
      exercise.level,
      exercise.notes || null
    ];
    const [result] = await promisePool.query(sql, params);
    return { message: 'New exercise created', exercise_id: result.insertId };
  } catch (error) {
    console.error('insertExercise', error);
    return { error: 409, message: 'Exercise already exists or invalid data' };
  }
};

//Update existing exercise.
const updateExerciseById = async (exercise) => {
  try {
    const sql = 'UPDATE Exercise SET exercise_date=?, exercise_type=?, start_time=?, end_time=?, level=?, notes=? WHERE exercise_id=? AND user_id=?';
    const params = [
      exercise.exercise_date,
      exercise.exercise_type,
      exercise.start_time,
      exercise.end_time,
      exercise.level,
      exercise.notes || null,
      exercise.exercise_id,
      exercise.user_id
    ];
    const [result] = await promisePool.query(sql, params);

    if (result.affectedRows === 0) {
      return { error: 404, message: 'Exercise not found' };
    }

    return { message: 'Exercise updated', exercise_id: exercise.exercise_id };
  } catch (error) {
    console.error('updateExerciseById', error);
    return { error: 500, message: 'Database error' };
  }
};

//Delete exercise by ID.
const deleteExerciseById = async (id) => {
  try {
    const sql = 'DELETE FROM Exercise WHERE exercise_id = ?';
    const params = [id];
    const [result] = await promisePool.query(sql, params);

    if (result.affectedRows === 0) {
      return { error: 404, message: 'Exercise not found' };
    }

    return { message: 'Exercise deleted', exercise_id: id };
  } catch (error) {
    console.error('deleteExerciseById', error);
    return { error: 500, message: 'Database error' };
  }
};

export {
  listAllExercises,
  listExercisesByUserId,
  selectExerciseById,
  insertExercise,
  updateExerciseById,
  deleteExerciseById,
};
